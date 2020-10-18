import React, { Component } from 'react';
import { View,TextInput, Text, Dimensions, Image, TouchableOpacity, KeyboardAvoidingView, Modal ,AsyncStorage} from 'react-native';

import Orientation from 'react-native-orientation';
export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Forgot:'',
    };
  }
    componentDidMount()
    {Orientation.lockToPortrait();}



  render() {

    return (
      <View style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height, backgroundColor: '#FFFFFF', justifyContent: 'center' }}>
      {/*Header*/}
      <View style={{ top:10,flexDirection:"row",padding:15}}>
            <TouchableOpacity style={{ alignSelf: 'center',height:12,width:10}}
                             onPress={()=>{ this.props.navigation.navigate('Signin')}}>
                <Image source={require('../images/login/3.png')} style={{ alignSelf: 'center',height:12,width:10}} />
            </TouchableOpacity>
        <View style={{top:25}}>
         <Image source={require('../images/login/5.png')} style={{ alignSelf: 'center',height:12,width:130}} />
          <Text style={{ color: 'black',fontWeight:"bold",padding: 10, fontSize: 17,top:-33}}>Forgot Password</Text>
        </View>  
      </View>
      
         <View style={{ flex: 1 }}>
         {/*Form Content*/}
          <View style={{marginHorizontal:'2.5%',width:'90%',alignSelf:"center",top:20}}>
              <Text style={{color:'black',fontSize:12}}>We'll email you instructions for resetting your password</Text>
                <TextInput style={{ opacity: 1 ,color:'black',top:2,fontSize: 8,width:'100%',borderColor:'gray',borderWidth:0.4,paddingVertical:0 }}
                  backgroundColor='#ffff'
                  placeholder="Email"
                  onChangeText={(e)=>{this.setState({Forgot:e})}}
                  />
              </View>

                <View style={{ marginTop: '5%', marginHorizontal: '5%',height:50 }}>
              <TouchableOpacity onPress={()=>{ this.props.navigation.navigate('Signin')}} style={{width:'90%',height:30,alignSelf:"center",top:30,backgroundColor: '#17d6ce',borderRadius:30}}>
                  <Text style={{alignSelf:"center",color:'white',top:5}}>Reset Password</Text>
              </TouchableOpacity>
            </View>
              
        
        </View>
        {/*Footer*/}
        <View style={{width:"30%",height:7 ,backgroundColor:"black",borderRadius:10,alignSelf:"center"}}></View>
      </View>

    );
  }
}