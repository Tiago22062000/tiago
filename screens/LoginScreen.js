import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export default class LoginScreen extends React.Component {
    state = {
        name:""
    }

    continue = () => {
        this.props.navigation.navigate("Chat", {name:this.state.name});
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.circle}/>
                <View style={styles.view1}>
                    <Image source={require('../assets/ALPHA.png')} style={styles.imagem}/>
                </View>
                <View style={styles.view2}>
                    <Text style={styles.texto}>Username</Text>
                    <TextInput 
                        style={styles.imagem} 
                        placeholder="Utilizador" 
                        onChangeText={name => {this.setState({name});
                        }}
                        value={this.state.name}
                    />
                    <View style={{alignItems:'flex-end', marginTop:64}}>
                        <TouchableOpacity style={styles.continue} onPress={this.continue}>
                            <Ionicons name='md-arrow-round-forward' size={24} color="#FFF" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  circle:{
      width: 500,
      height:500,
      borderRadius:500/2,
      backgroundColor: "#FFF",
      position: "absolute",
      left: -120,
      top:-20
  },
  view1:{
    marginTop:64
  },
  imagem:{
      width:100,
      height:100,
      alignSelf:'center'  
  },
  texto:{
      fontWeight:"800",
      fontSize:50,
      color: 'black',
      marginTop: 32
  },
  continue:{
      width:70,
      height:70,
      borderRadius:70 / 2,
      backgroundColor: '#9075E3',
      alignItems:'center',
      justifyContent:'center'
  }
});
