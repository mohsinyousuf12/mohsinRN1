import React,{Fragment} from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';

export default class Splash extends React.Component{
    componentDidMount(){
        setTimeout(()=>{
            this.props.navigation.navigate('Signin')

                        },2000)

    }
render(){
    return(
        
            <View >
                <Image style={styles.logo} source={require('../images/logoSplash.jpg')}></Image>
            </View>
    );

}}

const  styles = StyleSheet.create({
    wrapper: {
        justifyContent: "center",
        alignItems:"center",
        flexGrow:1,
        backgroundColor: '#FFFFFF',
                },
    logo: {
        height:'100%',
        width:'100%',
        resizeMode:"stretch"

    }            

});

