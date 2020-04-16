import React from 'react';
import { View, TouchableOpacity, Text, Image, Dimensions, StyleSheet, FlatList, TextInput, Button, Alert} from 'react-native';

import { connect } from 'react-redux';

import StyleWrapper from '../HOC/styleHOC';
import LoadingIcon from '../components/LoadingIcon';

function Login({loading, connected, getConnected }) {

  if (loading) {
    return <LoadingIcon />;
  } else {

  }

  const [email, onChangeEmail] = React.useState('Tho@mas');
  const [pwd, onChangePwd] = React.useState('bonjour');

  return (
    <View style={{ flex: 1, justifyContent: 'flex-start'}}>

      <View style={{flex: 0.4, alignItems:'center', justifyContent:'center'}}>
        <Text>LOGO</Text>
      </View>

      <View style={{flex: 0.6, padding: 20}}>


        <View style={{flex: 0.2, paddingBottom: 20}}>
            <Text style={{fontSize: 18}}>Email</Text>
            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, paddingLeft: 10, backgroundColor:'white'}}
              onChangeText={text => onChangeEmail(text)}
              value={email}
            />
        </View>
        <View style={{flex: 0.2, paddingBottom: 20}}>
            <Text style={{fontSize: 18}}>Mot de passe</Text>
            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, paddingLeft: 10, backgroundColor:'white'}}
              onChangeText={text => onChangePwd(text)}
              value={pwd}
            />
        </View>

        <View style={{flex: 0.6, alignItems:'center', justifyContent:'center'}}>
          <TouchableOpacity
            style={{backgroundColor: 'blanchedalmond', margin: 4, padding: 10, borderWidth: 1, borderRadius: 6, }}
            onPress={() => getConnected(email, pwd)}
          >
            <Text style={{color: 'brown', }}>Se connecter</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
}

const mapStateToProps = state => ({
  connected: state.user.connected
});

const mapDispatchToProps = dispatch => {
  return {
    getConnected: (email, pwd) => dispatch({ type: "CONNECT", email: email, pwd: pwd}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StyleWrapper(Login))
