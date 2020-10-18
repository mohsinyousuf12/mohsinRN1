import React, { Component } from 'react';
import { View,TextInput, Text, Dimensions, Image, TouchableOpacity, } from 'react-native';
var { width } = Dimensions.get('window').width;
var { height } = Dimensions.get('window').height;
import Orientation from 'react-native-orientation';
export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Email:'',
      Password:'',
    };
  }
    componentDidMount()
    {Orientation.lockToPortrait();}



  render() {

    return (
      <View style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height, backgroundColor: '#FFFFFF', justifyContent: 'center' }}>
      {/*header*/}
        <View style={{ top:10,flexDirection:"row",padding:15}}>
              <Image source={require('../images/login/3.png')} style={{ alignSelf: 'center',height:12,width:10}} />
            <View style={{top:25}}>
              <Image source={require('../images/login/5.png')} style={{ alignSelf: 'center',height:12,width:55}} />
                <Text style={{ color: 'black',fontWeight:"bold",padding: 10, fontSize: 17,top:-33}}>Log In</Text>
            </View>  
        </View>
      {/*Form Content*/}
         <View style={{ flex: 1 }}>
           <View style={{marginHorizontal:'2.5%',width:'80%',alignSelf:"center",top:20}}>
                <TextInput style={{ opacity: 1 ,color:'black',fontSize: 8,width:'100%',borderColor:'gray',borderWidth:0.4,paddingVertical:0 }}
                  backgroundColor='#ffff'
                  placeholder="Username or Email"
                  onChangeText={(e)=>{this.setState({Email:e})}}
                  />
                <TextInput style={{ opacity: 1 ,color:'black',top:2,fontSize: 8,width:'100%',borderColor:'gray',borderWidth:0.4,paddingVertical:0 }}
                  backgroundColor='#ffff'
                  placeholder="Password"
                  secureTextEntry={true}
                  onChangeText={(e)=>{this.setState({Password:e})}}
                  />
              </View>

                <View style={{ marginTop: '5%', marginHorizontal: '5%',height:50 }}>
                <TouchableOpacity onPress={()=>{ this.props.navigation.navigate('Signup')}} style={{width:'90%',height:30,alignSelf:"center",top:30,backgroundColor: '#17d6ce',borderRadius:30}}>
                    <Text style={{width:50,alignSelf:"center",color:'white',top:5}}>Log In</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{ this.props.navigation.navigate('Forgot')}} style={{width:'100%',alignSelf:"center",top:30}}>
                    <Text style={{alignSelf:"center",color:'#17d6ce',top:5,fontSize:9}}>I forgot my password</Text>
                </TouchableOpacity>
            </View>
              
        {/*Signup Button*/}
        </View>
              <TouchableOpacity onPress={()=>{ this.props.navigation.navigate('Signup')}} style={{width:'100%',alignSelf:"center"}}>
                  <Text style={{alignSelf:"center",color:'#17d6ce',fontSize:11}}>Ready to find that special someone?</Text>
                  <Text style={{alignSelf:"center",color:'#17d6ce',fontSize:11}}>Sign Up Now!</Text>
              </TouchableOpacity>
        {/*footer*/}
        <View style={{width:"30%",height:7 ,backgroundColor:"black",borderRadius:10,alignSelf:"center"}}></View>
      </View>

    );
  }
}