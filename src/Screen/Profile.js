/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  Dimensions,
  TextInput,
  Button,
  ToastAndroid,
} from 'react-native';
import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';

import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

import StyleWrapper from '../HOC/styleHOC';

import LoadingIcon from '../components/LoadingIcon';

const WIDTH = Dimensions.get('window').width;

function Profile({ loading, token, getSchwifty, navigation }) {
  if (loading) {
    return <LoadingIcon />;
  }

  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [profilPic, setProfilPic] = React.useState('default.png');

  const [hasCameraPermission, setPermission] = React.useState('denied');
  const [cameraVisible, setCameraVisible] = React.useState(false);
  const [cameraType, setCameraType] = React.useState(Camera.Constants.Type.front);

  useEffect(() => {
    async function getPermission() {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      if (status === 'granted') {
        setPermission('granted');
      }
      const { statusRoll } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (statusRoll === 'granted') {
        setPermission('granted');
      }
    }

    getPermission();

    getUserInfo();
  }, []);

  function getUserInfo() {
    fetch('http://193.70.90.162:3000/users/profile', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => {
        const statusCode = response.status;
        if (statusCode === 200) {
          const data = response.json();
          return Promise.all([statusCode, data]);
        }
        return Promise.all([statusCode]);
      })
      .then(([data]) => {
        setEmail(data.email);
        setUsername(data.username);
        setProfilPic(data.profPic);
      })
      .catch(() => {
        return { name: 'network error', description: '' };
      });
  }

  function toggleCamera() {
    if (cameraVisible === true) {
      setCameraVisible(false);
    } else {
      setCameraVisible(true);
    }
  }

  function handleCameraType() {
    if (cameraType === Camera.Constants.Type.front) {
      setCameraType(Camera.Constants.Type.back);
    } else {
      setCameraType(Camera.Constants.Type.front);
    }
  }

  function selectBody() {
    const [cameraRef, setCameraRef] = useState(null);

    takePicture = async () => {
      if (cameraRef) {
        const photo = await cameraRef.takePictureAsync({ base64: false });

        const fileType = photo.uri.substring(photo.uri.lastIndexOf('.') + 1);
        console.log(`TYPE: ${fileType}`);
        const { uri } = photo;

        const datasTosend = new FormData();
        datasTosend.append('profPic', {
          uri,
          name: 'NewPP.jpg',
          type: 'image/jpg',
        });

        fetch('http://193.70.90.162:3000/users/uploadProfPic', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
          body: datasTosend,
        })
          .then(response => {
            const statusCode = response.status;
            if (statusCode === 200) {
              const data = response.json();
              return Promise.all([statusCode, data]);
            }
            return Promise.all([statusCode]);
          })
          .then(([data]) => {
            if (data == null) {
              console.log('Echec updateProfPic');
            } else {
              ToastAndroid.showWithGravity(
                'Photo modifiée',
                ToastAndroid.SHORT,
                ToastAndroid.BOTTOM
              );
              getUserInfo();
              toggleCamera();
            }
          })
          .catch(() => {
            return { name: 'network error', description: '' };
          });
      }
    };

    if (cameraVisible === true) {
      if (hasCameraPermission === 'granted') {
        return (
          <View style={{ flex: 0.6, padding: 20 }}>
            <Camera
              style={{ flex: 1 }}
              type={cameraType}
              ref={ref => {
                setCameraRef(ref);
              }}
            >
              <View style={{ flex: 1, justifyContent: 'space-between', margin: 20 }}>
                <TouchableOpacity
                  onPress={() => handleCameraType()}
                  style={{
                    alignSelf: 'flex-end',
                    alignItems: 'center',
                    backgroundColor: 'transparent',
                  }}
                >
                  <MaterialCommunityIcons
                    name="camera-switch"
                    style={{ color: '#fff', fontSize: 40 }}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => takePicture()}
                  style={{
                    alignSelf: 'center',
                    alignItems: 'center',
                    backgroundColor: 'transparent',
                  }}
                >
                  <FontAwesome name="camera" style={{ color: '#fff', fontSize: 40 }} />
                </TouchableOpacity>
              </View>
            </Camera>
          </View>
        );
      }
      return (
        <View style={{ flex: 0.6, padding: 20 }}>
          <Text>Permission denied !</Text>
        </View>
      );
    }
    return (
      <View style={{ flex: 0.6, padding: 20 }}>
        <View style={{ flex: 0.3, paddingBottom: 20 }}>
          <View style={{ flex: 0.4 }}>
            <Text style={{ fontSize: 18 }}>Username</Text>
          </View>
          <View style={{ flex: 0.6 }}>
            <TextInput
              style={{
                height: 40,
                borderColor: 'gray',
                borderWidth: 1,
                paddingLeft: 10,
                backgroundColor: 'white',
              }}
              onChangeText={text => setUsername(text)}
              value={username}
            />
          </View>
        </View>
        <View style={{ flex: 0.3, paddingBottom: 20 }}>
          <View style={{ flex: 0.4 }}>
            <Text style={{ fontSize: 18 }}>Email</Text>
          </View>
          <View style={{ flex: 0.6 }}>
            <TextInput
              style={{
                height: 40,
                borderColor: 'gray',
                borderWidth: 1,
                paddingLeft: 10,
                backgroundColor: 'white',
              }}
              onChangeText={text => setEmail(text)}
              value={email}
            />
          </View>
        </View>
        <View style={{ flex: 0.4, justifyContent: 'flex-end', alignItems: 'center' }}>
          <Button onPress={() => UpdateUserData()} title="Enregistrer" color="orange" />
        </View>
      </View>
    );
  }

  function UpdateUserData() {
    fetch('http://193.70.90.162:3000/users/updateProfil', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        email,
        username,
      }),
    })
      .then(response => {
        const statusCode = response.status;
        if (statusCode === 200) {
          const data = response.json();
          return Promise.all([statusCode, data]);
        }
        return Promise.all([statusCode]);
      })
      .then(([data]) => {
        if (data == null) {
          console.log('Echec updateProfil');
        } else {
          ToastAndroid.showWithGravity(
            'Informations modifiées',
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM
          );
        }
      })
      .catch(() => {
        return { name: 'network error', description: '' };
      });
  }

  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', paddingTop: 12 }}>
      <View
        style={{
          flex: 0.4,
          backgroundColor: '#ffc848',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image
          source={{ uri: `http://193.70.90.162:3000/images/${profilPic}` }}
          style={{ width: WIDTH / 2, height: WIDTH / 2, borderRadius: WIDTH / 4 }}
        />
        <TouchableOpacity
          style={{ position: 'absolute', right: 0, top: 0, padding: 20 }}
          onPress={() => toggleCamera()}
        >
          <Image
            source={require('../../assets/photo-camera.png')}
            style={{ width: 40, height: 40 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ position: 'absolute', left: 0, top: 0, padding: 20 }}
          onPress={() => {
            getSchwifty();
            navigation.navigate('SplashScreen');
          }}
        >
          <Image source={require('../../assets/logout.png')} style={{ width: 40, height: 40 }} />
        </TouchableOpacity>
      </View>
      {selectBody()}
    </View>
  );
}

const mapStateToProps = state => ({
  token: state.user.token,
});

const mapDispatchToProps = dispatch => {
  return {
    getConnected: (email, pwd) => dispatch({ type: 'CONNECT', email, pwd }),
    getSchwifty: () => dispatch({ type: 'DISCONNECT' }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StyleWrapper(Profile));
