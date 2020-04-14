import React from 'react';
import { View, TouchableOpacity, Text, Image, Dimensions, StyleSheet, FlatList, Alert, TextInput, Button} from 'react-native';

import StyleWrapper from '../HOC/styleHOC';

import LoadingIcon from '../components/LoadingIcon';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

function Profile({loading}) {
  if (loading) {
    return <LoadingIcon />;
  } else {

  }

  const [nom, onChangeNom] = React.useState('New Nom');
  const [prenom, onChangePrenom] = React.useState('New Prenom');
  const [email, onChangeEmail] = React.useState('New Email');

  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', paddingTop: 12}}>
      <View style={{ flex: 0.4, backgroundColor: '#ffc848', alignItems: 'center', justifyContent:'center'}}>
        <Image
          source={{ uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png'}}
          style={{width: WIDTH/2, height: WIDTH/2, borderRadius: WIDTH/4}}
        />
        <TouchableOpacity style={{position: 'absolute', right: 0, top: 0, padding: 20, }} onPress={() => Alert.alert("Hello")}>
          <Image
              source={require('./../../assets/pen.png')}
              style={{width: 40, height: 40}}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{position: 'absolute', left: 0, top: 0, padding: 20, }} onPress={() => Alert.alert("Hello")}>
          <Image
              source={require('./../../assets/logout.png')}
              style={{width: 40, height: 40}}
          />
        </TouchableOpacity>
      </View>
      <View style={{flex: 0.5, padding: 20}}>

          <View style={{flex: 0.3, paddingBottom: 20}}>
            <View style={{flex: 0.4}}>
              <Text style={{fontSize: 18}}>Prénom</Text>
            </View>
            <View style={{flex: 0.6}}>
              <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, paddingLeft: 10, backgroundColor:'white'}}
                onChangeText={text => onChangeNom(text)}
                value={nom}
              />
            </View>
          </View>

          <View style={{flex: 0.3, paddingBottom: 20}}>
            <View style={{flex: 0.4}}>
              <Text style={{fontSize: 18}}>Nom</Text>
            </View>
            <View style={{flex: 0.6}}>
              <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, paddingLeft: 10, backgroundColor:'white' }}
                onChangeText={text => onChangePrenom(text)}
                value={prenom}
              />
            </View>
          </View>

          <View style={{flex: 0.3, paddingBottom: 20}}>
            <View style={{flex: 0.4}}>
              <Text style={{fontSize: 18}}>Email</Text>
            </View>
            <View style={{flex: 0.6}}>
              <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, paddingLeft: 10, backgroundColor:'white' }}
                onChangeText={text => onChangeEmail(text)}
                value={email}
              />
          </View>

        </View>
      </View>
      <View style={{flex: 0.1, justifyContent:'center', alignItems:'center'}}>
        <Button
          onPress={() => Alert.alert("ok")}
          title="Enregistrer"
          color='orange'
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    </View>
  );
}

export default (StyleWrapper(Profile))
