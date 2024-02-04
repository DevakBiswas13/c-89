import react,{Component} from 'react'
import {StyleSheet,Text,TouchableOpacity,View,TextInput} from "react-native"



export default class EntryScreen extends Component{
    constructor(props){
     super(props)
    }
    componentDidMount(){
        console.log(this.props.route.params.activities.length)
    }
    
    spin=()=>{
      var max=this.props.route.params.activities.length
      var min=0
      var random = Math.floor(Math.random()*(max-min+1))+min
        alert(random+" "+this.props.route.params.activities[random-1])
    }
    render(){
        
        return(
         <View style={styles.viewStyles}>


         <View>{
            this.props.route.params.activities.map((item,index)=>{
                return(
                    <Text>{index+1}. {item}</Text>
                )
            })
            }</View>


            <TouchableOpacity style={styles.spinStyle} onPress={()=>{this.spin()}}>
                <Text style={styles.textStyle}>Spin</Text>
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
    }
})