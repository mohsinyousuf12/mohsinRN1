import React, { Component } from 'react';
import { View,TextInput, Text, Dimensions, Image, TouchableOpacity, ImageBackground} from 'react-native';

import Orientation from 'react-native-orientation';
export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
        username:'',
        FirstName:'',
        Email:'',
        confirmEmail:'',
        Password:'',
        confirmPassword:'',
    };
  }
    componentDidMount()
    {Orientation.lockToPortrait();}

  render() {

    return (
      <View style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height, backgroundColor: '#FFFFFF', justifyContent: 'center' }}>
      {/*Header*/}
        <View style={{ top:10,flexDirection:"row",padding:15}}>
                    <TouchableOpacity style={{ alignSelf: 'center',height:12,width:10}} onPress={()=>{ this.props.navigation.navigate('Signin')}}>
                        <Image source={require('../images/login/3.png')} style={{ alignSelf: 'center',height:12,width:10}} />
                    </TouchableOpacity>
                    <View style={{top:25}}>
                        <Image source={require('../images/login/5.png')} style={{ alignSelf: 'center',height:12,width:110}} />
                        <Text style={{ color: 'black',fontWeight:"bold",padding: 10, fontSize: 17,top:-33}}>Your Account</Text>
                    </View>  
        </View>
      {/*Form Content*/}
         <View style={{ flex: 1 }}>
            <ImageBackground style={{width:'100%',height:100}} source={require("../images/account/dailogue.png")}>
                <Text style={{color:'black',fontSize:12 ,padding:30}}>Let's Build a profile to show off all the amazing things that make you you</Text>
            </ImageBackground>
                <View style={{width:'90%',alignSelf:"center",top:20}}>
                    <Text style={{color:'black',fontSize:12}}>Username</Text>
                    <TextInput style={{ opacity: 1 ,color:'black',top:2,fontSize: 8,width:'100%',borderColor:'gray',borderWidth:0.5,paddingVertical:0 }}
                    backgroundColor='#ffff'
                    placeholder="Username"
                    onChangeText={(e)=>{this.setState({username:e})}}
                    />
                </View>
                <View style={{width:'90%',alignSelf:"center",top:40}}>
                    <Text style={{color:'black',fontSize:12}}>First Name</Text>
                    <TextInput style={{ opacity: 1 ,color:'black',top:2,fontSize: 8,width:'100%',borderColor:'gray',borderWidth:0.5,paddingVertical:0 }}
                    backgroundColor='#ffff'
                    placeholder="What can we call you?"
                    onChangeText={(e)=>{this.setState({firstName:e})}}
                    />
                </View>
                <View style={{width:'90%',alignSelf:"center",top:60}}>
                    <Text style={{color:'black',fontSize:12}}>Email</Text>
                    <TextInput style={{ opacity: 1 ,color:'black',top:2,fontSize: 8,width:'100%',borderColor:'gray',borderWidth:0.5,paddingVertical:0 }}
                    backgroundColor='#ffff'
                    placeholder="Email"
                    onChangeText={(e)=>{this.setState({Email:e})}}
                    />
                    <TextInput style={{ opacity: 1 ,color:'black',top:2,fontSize: 8,width:'100%',borderColor:'gray',borderWidth:0.5,paddingVertical:0 }}
                    backgroundColor='#ffff'
                    placeholder="Confirm Email"
                    onChangeText={(e)=>{this.setState({confirmEmail:e})}}
                    />
                </View>
                <View style={{width:'90%',alignSelf:"center",top:80}}>
                    <Text style={{color:'black',fontSize:12}}>Password</Text>
                    <TextInput style={{ opacity: 1 ,color:'black',top:2,fontSize: 8,width:'100%',borderColor:'gray',borderWidth:0.5,paddingVertical:0 }}
                    backgroundColor='#ffff'
                    placeholder="Password"
                    secureTextEntry={true}
                    onChangeText={(e)=>{this.setState({Password:e})}}
                    />
                    <TextInput style={{ opacity: 1 ,color:'black',top:2,fontSize: 8,width:'100%',borderColor:'gray',borderWidth:0.5,paddingVertical:0 }}
                    backgroundColor='#ffff'
                    placeholder="Confirm Password"
                    secureTextEntry={true}
                    onChangeText={(e)=>{this.setState({ConfirmPassword:e})}}
                    />
                </View>
                <View style={{ marginTop: '5%', marginHorizontal: '5%',height:50,top:50 }}>
                    <TouchableOpacity onPress={()=>{ this.props.navigation.navigate('Signup')}} style={{width:'90%',height:30,alignSelf:"center",top:30,backgroundColor: '#17d6ce',borderRadius:30}}>
                        <Text style={{width:50,alignSelf:"center",color:'white',top:5}}>Next</Text>
                    </TouchableOpacity>
                </View>
        </View>
        {/*Footer*/}
        <View style={{width:"30%",height:7 ,backgroundColor:"black",borderRadius:10,alignSelf:"center"}}></View>
      </View>

    );
  }
}