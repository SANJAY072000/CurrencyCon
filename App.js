import React,{Component} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const cpr={
  DOLLAR:0.014,
  EURO:0.012,
  POUND:0.011,
  RUBEL:0.93,
  AUSDOLLAR:0.2,
  CANDOLLAR:0.019,
  YEN:1.54,
  DINAR:0.0043,
  BITCOIN:0.0000041,
};

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      inp:'',
      res:'0.00'
    };
  }
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.screenv}>
        <View style={styles.resc}>
          <Text style={styles.resv}>
            {this.state.res}
          </Text>
        </View>
        <View style={styles.ic}>
          <TextInput style={styles.ip} selectionColor='#fff' keyboardType='numeric'
            placeholder='Enter Value ...' onChangeText={inp=>this.setState({inp})}/>
        </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop:30
  },
  screenv:{
    flex:1
  },
  resc:{
    height:70,
    marginTop:10,
    justifyContent:'center',
    borderColor:'#c1c1c1',
    backgroundColor:'#0A79DE',
    alignItems:'center',
    borderWidth:2
  },
  resv:{
    fontSize:30,
    fontWeight:'bold',
    color:'white'
  }
});
