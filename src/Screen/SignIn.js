import React from 'react';
import { View, Text, TextInput, Button, Modal, StyleSheet } from 'react-native';

import { connect } from 'react-redux';

import StyleWrapper from '../HOC/styleHOC';
import LoadingIcon from '../components/LoadingIcon';
import { TouchableOpacity } from 'react-native-gesture-handler';

function SignIn({ loading, created, getCreate, navigation }) {
  if (loading) {
    return <LoadingIcon />;
  }

  React.useEffect(() => {
    setOpen(created);
  }, [created]);

  console.log(created);
  const [email, onChangeEmail] = React.useState('thomas');
  const [pwd, onChangePwd] = React.useState('bonjour');
  const [open, setOpen] = React.useState(created);

  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', paddingTop: 12 }}>
      {
        created ? navigation.navigate('Login', { user: email, pass: pwd }) : true
      }
      <View style={{ flex: 0.4, alignItems: 'center', justifyContent: 'center' }}>
        <Text>MojitoApp</Text>
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
            style={{padding: 10, backgroundColor: 'blanchedalmond', borderRadius: 6}}
          >
            <Text style={{color: 'brown'}}>Créer</Text>
          </TouchableOpacity>
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={open === false ? true : false}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Une erreur est survenue</Text>

              <TouchableOpacity
                style={{ padding: 10, backgroundColor: "blanchedalmond" }}
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


const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "brown",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});