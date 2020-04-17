import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

import { connect } from 'react-redux';

import StyleWrapper from '../HOC/styleHOC';
import LoadingIcon from '../components/LoadingIcon';

function SignIn({ loading, created, getCreate }) {
  if (loading) {
    return <LoadingIcon />;
  }

  console.log(created);
  const [email, onChangeEmail] = React.useState('thomas');
  const [pwd, onChangePwd] = React.useState('bonjour');

  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', paddingTop: 12 }}>
      <View style={{ flex: 0.4, alignItems: 'center', justifyContent: 'center' }}>
        <Text>LOGO</Text>
      </View>
      <View style={{ flex: 0.6, padding: 20 }}>
        <View style={{ flex: 0.2, paddingBottom: 20 }}>
          <Text style={{ fontSize: 18 }}>Email</Text>
          <TextInput
            style={{
              height: 40,
              borderColor: 'gray',
              borderWidth: 1,
              paddingLeft: 10,
              backgroundColor: 'white',
            }}
            onChangeText={text => onChangeEmail(text)}
            value={email}
          />
        </View>
        <View style={{ flex: 0.2, paddingBottom: 20 }}>
          <Text style={{ fontSize: 18 }}>Mot de passe</Text>
          <TextInput
            style={{
              height: 40,
              borderColor: 'gray',
              borderWidth: 1,
              paddingLeft: 10,
              backgroundColor: 'white',
            }}
            onChangeText={text => onChangePwd(text)}
            value={pwd}
          />
        </View>
        <View style={{ flex: 0.6, alignItems: 'center', justifyContent: 'center' }}>
          <Button
            onPress={() => getCreate(email, pwd)}
            title="Créer"
            color="orange"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      </View>
    </View>
  );
}

const mapStateToProps = state => ({
  created: state.user.created,
});

const mapDispatchToProps = dispatch => {
  return {
    getCreate: (email, pwd) => dispatch({ type: 'CREATE', email, pwd }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StyleWrapper(SignIn));
