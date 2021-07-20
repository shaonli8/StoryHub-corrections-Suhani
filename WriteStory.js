import React from 'react';
import { Text, View ,TouchableOpacity , TextInput , StyleSheet , Image, ToastAndroid, KeyboardAvoidingView  } from 'react-native';
// import { styleSheets } from 'min-document';

import db from './config'

export default class ReadStoryscreen extends React.Component {
  constructor (props){
    super(props)
    this.state={
     author:'',
     storyText:'',
     title:''
    }
  }

  submitStory=async()=>{
    db.collection('stories').add({
      author:this.state.author,
      storyText:this.state.storyText,
      title:this.state.title
    });
    this.setState({
      author:'',
      storyText:'',
      title:''
    });
    ToastAndroid.show('STORY SUBMITTED', ToastAndroid.SHORT)
  }

  render(){
    return(
      <KeyboardAvoidingView style = {{alignItems:'center',marginTop:30}}>
      <View styles={styles.container}>
        <View>
          <Text style={{ textAlign:'center', fontSize:30, backgroundColor:'yellow'}}>
              StoryHub{''}
          </Text>
        </View>
        <View style={styles.inputView}>
          <TextInput 
            style={styles.inputBox} 
            placeholder="Title Of Story"
          />
        </View>
        <View style={styles.inputView}>
          <TextInput 
            style={styles.inputBox} 
            placeholder="Author Of Story"
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.storyBox}
            placeholder="Write Your Story Here"
          />
        </View>
        
        <TouchableOpacity
          style={styles.submitButton}
          onPress={()=>{this.submitStory()}}
        >
            <Text style={styles.submitButtonText}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
      </KeyboardAvoidingView>
    )
  }
}
    

const styles=StyleSheet.create({
  keyboardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'yellow'
  },
  inputView:{
    flexDirection:'row',
    margin:20
  },
  inputBox:{
    width:350,
    height:40,
    borderWidth:1.5,
    borderRightWidth:1.5,
    fontSize:15,
    backgroundColor:'white',
  },
  storyBox:{
    width:350,
    height:300,
    borderWidth:1.5,
    borderRightWidth:1.5,
    fontSize:15,
    backgroundColor:'white'
  },
  submitButton:{
    backgroundColor:'#FBC02D',
    width:200,
    height:50,
    alignSelf:'center',
    marginTop:50
  },
  submitButtonText:{
    padding:10,
    textAlign:'center',
    fontSize:20,
    fontWeight:'bold',
    color:'white'
  },
})