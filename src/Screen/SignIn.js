import React from 'react';
import { View, TouchableOpacity, Text, Image, Dimensions, StyleSheet, FlatList, TextInput, Button, Alert} from 'react-native';

import StyleWrapper from '../HOC/styleHOC';
import LoadingIcon from '../components/LoadingIcon';
import { TranslateSignIn } from '../components/translation';

function SignIn({loading}) {
  if (loading) {
    return <LoadingIcon />;
  } else {

  }

  const [email, onChangeEmail] = React.useState('thomas');
  const [pwd, onChangePwd] = React.useState('bonjour');

  function FetchCreateAccount() {
      fetch('http://193.70.90.162:3000/auth/signup', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: pwd,
        }),
      }).then(response => {
           const statusCode = response.status;
           if (statusCode == 200) {
             const data = response.json();
             return Promise.all([statusCode, data]);
           } else {
             return Promise.all([statusCode]);
           }
         })
         .then(([res, data]) => {
           console.log(res, data);
           if (data == null) {
             Alert.alert("Echec lors de la création du compte")
           } else {
             Alert.alert(JSON.stringify(data))
           }
         })
         .catch(error => {
           console.error(error);
           return { name: "network error", description: "" };
         });
       }

  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', paddingTop: 12}}>
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
          <Button
            onPress={() => FetchCreateAccount()}
            title="Créer"
            color='orange'
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      </View>
    </View>
  );
}

export default (StyleWrapper(SignIn))
