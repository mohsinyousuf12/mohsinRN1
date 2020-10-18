import React, { Component } from 'react';
import { View,TextInput, Text, Dimensions, Image, TouchableOpacity, KeyboardAvoidingView, Modal ,AsyncStorage} from 'react-native';

import Orientation from 'react-native-orientation';

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName:'',
    };
  }
    componentDidMount()
    {Orientation.lockToPortrait();}



  render() {

    return (
      <View style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height, backgroundColor: '#FFFFFF', justifyContent: 'center' }}>
        <View style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height/2, backgroundColor: '#FFFFFF', justifyContent: 'center'}}>
        {/*header*/}
        <View style={{ top:10,flexDirection:"row",padding:8}}>
        <Image source={require('../images/signup/6.png')} style={{ alignSelf: 'center',height:40,width:40}} />
          <View >
            <Text style={{ color: 'black',fontWeight:"bold",padding: 10, fontSize: 17}}>Plenty of Fish</Text>
          </View> 
        </View>
       
         <View style={{ flex: 1 }}>
        {/*Title*/}
            <View style={{top:10,marginLeft:20,height:56}}>
              <Image source={require('../images/login/5.png')} style={{padding: 10, height:25,width:130}} />
              <Text style={{ color: 'black',fontWeight:"bold",padding: 10, fontSize:42,top:-60}}>Ready</Text>
            </View> 
            <View style={{marginLeft:20,height:56}}>
              <Image source={require('../images/login/5.png')} style={{padding: 10, height:25,width:140}} />
              <Text style={{ color: 'black',fontWeight:"bold",padding: 10, fontSize:42,top:-60}}>to dive</Text>
            </View> 
            <View style={{marginLeft:20,height:10}}>
              <Image source={require('../images/login/5.png')} style={{padding: 10, height:25,width:65}} />
              <Text style={{ color: 'black',fontWeight:"bold",padding: 10, fontSize:42,top:-60}}>in?</Text>
            </View> 
        {/*Form Content*/}   
        <View style={{marginHorizontal:'2.5%',width:'95%',alignSelf:"center",top:20}}>
        <Text style={{color:'black',fontSize:11,padding:5}}>First Name</Text>
          <TextInput style={{ opacity: 1 ,color:'black',fontSize: 8,width:'95%',alignSelf:"center",borderColor:'gray',borderWidth:0.4,paddingVertical:0 }}
            backgroundColor='#ffff'
            placeholder="What can we call you?"
            onChangeText={(e)=>{this.setState({firstName:e})}}
            />
        </View>

                <View style={{ marginTop: '5%', marginHorizontal: '5%',height:50 }}>
              <TouchableOpacity onPress={()=>{ this.props.navigation.navigate('Account')}} style={{width:'90%',height:30,alignSelf:"center",top:30,backgroundColor: '#17d6ce',borderRadius:30}}>
                  <Text style={{width:50,alignSelf:"center",color:'white',top:5}}>Sign Up</Text>
              </TouchableOpacity>
        {/*Login Button*/}
              <TouchableOpacity onPress={()=>{ this.props.navigation.navigate('Signin')}} style={{width:'100%',height:200,alignSelf:"center",top:50}}>
              <Text style={{alignSelf:"center",color:'#17d6ce',fontSize:11}}>Already a member? Log In</Text>
              </TouchableOpacity>
            </View>
        </View>
        {/*Footer*/}
        <View style={{width:"30%",height:7 ,backgroundColor:"black",borderRadius:10,alignSelf:"center",top:'50%'}}></View>
        </View>
      </View>

    );
  }
}