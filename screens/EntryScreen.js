import react,{Component} from 'react'
import {StyleSheet,Text,TouchableOpacity,View,TextInput} from "react-native"




export default class EntryScreen extends Component{
    constructor(props){
      super(props)
      this.state ={
        activitiesList:[],
        activity:""

      }
    }
    render(){
        return(
         <View style={styles.viewStyles} >
          <TextInput val ={this.state.activity}  style={styles.inputStyle} onChangeText={(text)=>{
            this.setState({activity:text})
          }}></TextInput>

            <TouchableOpacity style={styles.spinStyle} onPress={()=>{
              // var activities=[] 
                this.state.activitiesList.push(this.state.activity)
                this.setState({activity:""})
               // this.setState({activitiesList: activities})
                }}>
                    
                <Text style={styles.textStyle}>Enter</Text>
            </TouchableOpacity>
            <Text>{this.state.activity1}</Text>
             <TouchableOpacity style={styles.continueStyle} onPress={()=>{this.props.navigation.navigate("WheelScreen",{
                activities:this.state.activitiesList
             })}}>
                <Text style={styles.textStyle}>Continue</Text>
             </TouchableOpacity>
        </View>
        )  
    }
}


const styles = StyleSheet.create({

    spinStyle: {
       height: 50,
       width:150,
       backgroundColor:"red",
       alignItems:"center",
       justifyContent:"center",
       alignContent:"center",
       borderRadius:10,
       marginBottem: 80,

    },
    viewStyles:{
        flex:1 ,
        justifyContent:"center",
        alignItems:"center"
    },
    textStyle:{
        fontSize: 25,
        fontWeight:"bold",

    },
    inputStyle:{
        width:300,
        height:75,
        borderRadius:10,
        borderWidth:4,
        marginBottom: 80,
        fontSize: 25,
    },

    continueStyle:{
        height: 50,
        width:150,
        backgroundColor:"red",
        alignItems:"center",
        justifyContent:"center",
        alignContent:"center",
        borderRadius:10,
        marginTop: 220,
 
    }
})