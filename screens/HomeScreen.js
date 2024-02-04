import react,{Component} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default class HomeScreen extends Component{
  render(){
  return (
    <View style={styles.container}>
      <View style={styles.buttonStyle}>
      <Text style={styles.buttonText}>Welcome to The Wheel</Text>
      </View>
      <TouchableOpacity style={styles.buttonStyle} onPress={()=>{this.props.navigation.navigate("EntryScreen")}}>

        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    width: 200,
    height:50,
    alignContent: "center",
    justifyContent:"center",
    backgroundColor:"yellow",
    borderRadius: 10, 
    alignItems: "center",
    marginBottom: 80,
  },
  buttonText: {
    fontSize:18,
    fontWeight: "bold"
  }
});