/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
import React from 'react';
import {
  View,
  Text,
  TextInput,
  Modal,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
} from 'react-native';

import { connect } from 'react-redux';

import { TouchableOpacity } from 'react-native-gesture-handler';
import StyleWrapper from '../HOC/styleHOC';
import LoadingIcon from '../components/LoadingIcon';

function SignIn({ loading, created, getCreate, navigation }) {
  if (loading) {
    return <LoadingIcon />;
  }

  React.useEffect(() => {
    setOpen(created);
  }, [created]);

  const [email, onChangeEmail] = React.useState('');
  const [pwd, onChangePwd] = React.useState('');
  const [open, setOpen] = React.useState(created);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1, justifyContent: 'flex-start', paddingTop: 12 }}
    >
      {created ? navigation.navigate('Login', { user: email, pass: pwd }) : true}
      <View style={{ flex: 0.4, alignItems: 'center', justifyContent: 'center' }}>
        <Image source={require('../../assets/Cocktail.png')} style={{ width: 240, height: 240 }} />
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
          <TouchableOpacity
            onPress={() => getCreate(email, pwd)}
            style={{
              padding: 10,
              backgroundColor: 'blanchedalmond',
              borderRadius: 6,
              borderWidth: 1,
            }}
          >
            <Text style={{ color: 'brown' }}>Créer</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'blanchedalmond',
              margin: 4,
              padding: 10,
              borderWidth: 1,
              borderRadius: 6,
            }}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={{ color: 'brown' }}>Se connecter</Text>
          </TouchableOpacity>
        </View>
        <Modal animationType="slide" transparent visible={open === false}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Une erreur est survenue</Text>

              <TouchableOpacity
                style={{ padding: 10, borderWidth: 1, backgroundColor: 'blanchedalmond' }}
                onPress={() => {
                  setOpen(null);
                }}
              >
                <Text style={styles.textStyle}>Réessayer</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </KeyboardAvoidingView>
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

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'brown',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
