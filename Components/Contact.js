import React from 'react'
import { View,Text, Image , StyleSheet} from 'react-native'
import profile from '../assets/profile.jpg'
import { Feather, MaterialIcons,MaterialCommunityIcons} from '@expo/vector-icons';

export default function Contact({name,phone}) {
  return (
            <View style={styles.container}>
                <Image source={profile} style={styles.Image}/>

                <View style={styles.InfoContainer}>
                    <Text style={styles.name} numberOfLines={1}>{name}</Text>
                    <Text>{phone}</Text>
                </View>


                <View style={styles.icons}>
                <Feather name='phone' size={30} color={"#3879f2"}/>
                </View>

                <View style={styles.icons}>
                <MaterialIcons name="message" size={30} color={"#3879f2"}/>
                </View>

                <View style={styles.icons}>
                <MaterialCommunityIcons name="dots-vertical" size={30} color={"#63666b"}/>
                </View>



            </View>    
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        marginHorizontal:20,
        alignItems:"center",
        marginVertical:10
    },

    Image:{
        width:50,
        height:50,
        borderRadius:50
    },

    InfoContainer:{
        justifyContent:"center",
        marginHorizontal:15,
        flex:4
    },

    name:{
        fontWeight:"bold",
        fontSize:17,
    },

    icons:{
        flex:1
    }


})


