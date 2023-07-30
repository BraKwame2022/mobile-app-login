import React, { Component } from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native'

class LoginScreen extends Component {
    constructor(props){
        super(props)
        this.state ={
            name:"",
            password:"",
        }
    }
    render() {
        return (
            <View style={style.container}>
                <View style={style.LoginTextContainer}>
                    <Text style={style.LoginText}>Log In</Text>
                </View>

                <View>
                        <TextInput style={style.input}
                        placeholderTextColor="#aaaaaa"
                        autoCapitalize='none'
                        autoCorrect={false}
                        value={this.state.name}
                        onChangeText={(name)=>{
                            this.setState({name})
                        }}      
                        placeholder='Username'/>


                        <TextInput style={style.input}
                        placeholderTextColor="#aaaaaa"
                        secureTextEntry={true}
                        autoCapitalize='none'
                        autoCorrect={false}
                        value={this.state.password}
                        onChangeText={(password)=>{
                            this.setState({password})

                        }}
                        placeholder='Password'/>


                        <Text style={style.forgetpassword}>Forgot password</Text>
                </View>

                <View>
                        <TouchableOpacity style={style.buttonContainer}>
                            <Text style={style.buttonText}>
                                Log in
                            </Text>
                        </TouchableOpacity>
                </View>

                <View style={style.noAccountContainer}>
                    <Text style={style.noAccountText}>Don't have an account?</Text>
                    <Text style={style.signUpText}>Sign up</Text>
                </View>

            </View>
        );
    }
}

const style = StyleSheet.create({
    container:{
        marginHorizontal:50,
    },
    LoginText:{
        fontSize:50,
        color:"#6c14c9",
        
    },
    LoginTextContainer:{
        marginBottom:30
    },

    input:{
        borderBottomWidth:3,
        borderBottomColor:"#6c14c9",
        fontSize:20,
        height:50,
        marginTop:40
    },

    forgetpassword:{
        alignSelf:"flex-end",
        marginVertical:15,
        color:"#0b4eb3"
    },
     buttonContainer:{
        height:50,
        backgroundColor:"#6c14c9",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10,
        marginVertical:50
     },

     buttonText:{
        color:"white",
        fontSize:25
     },
     noAccountContainer:{
        flexDirection:"row",
        justifyContent:"center",
     },

     noAccountText:{
        marginRight:15,
        fontSize:16
     },

     signUpText:{
        fontSize:16,
        color:"#6c14c9"
     },
})



export default LoginScreen;
