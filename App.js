import React,{Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';

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
  bp=curr=>{
    if(!this.state.inp)Alert.alert('Enter some value');
    else this.setState({res:(parseFloat(this.state.inp)*cpr[curr]).toFixed(2)})
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
        <View style={styles.cbc}>
          <TouchableOpacity style={styles.cb} onPress={()=>this.bp('DOLLAR')}>
            <Text style={styles.cbt}>Dollar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cb} onPress={()=>this.bp('EURO')}>
            <Text style={styles.cbt}>Euro</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cb} onPress={()=>this.bp('POUND')}>
            <Text style={styles.cbt}>Pound</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cb} onPress={()=>this.bp('AUSDOLLAR')}>
            <Text style={styles.cbt}>Aus</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cb} onPress={()=>this.bp('CANDOLLAR')}>
            <Text style={styles.cbt}>Can</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cb} onPress={()=>this.bp('YEN')}>
            <Text style={styles.cbt}>Yen</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cb} onPress={()=>this.bp('DINAR')}>
            <Text style={styles.cbt}>Dinar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cb} onPress={()=>this.bp('BITCOIN')}>
            <Text style={styles.cbt}>Bitty</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cb} onPress={()=>this.bp('RUBEL')}>
            <Text style={styles.cbt}>Rubel</Text>
          </TouchableOpacity>
        </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#535C68',
    marginTop:35
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
  },
  ic:{
    height:70,
    marginTop:20,
    justifyContent:'center',
    alignItems:'center',
    borderWidth:2,
    borderColor:'#c1c1c1',
    backgroundColor:'#0A79DE'
  },
  ip:{
    color:'white',
    fontSize:30
  },
  cbc:{
    flexDirection:'row',
    flexWrap:'wrap',
    marginTop:20,
    borderColor:'#c1c1c1',
    borderWidth:2
  },
  cb:{
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#0A79DF',
    height:100,
    borderColor:'#c1c1c1',
    borderWidth:2,
    width:'33.33%'
  },
  cbt:{
    color:'white',
    fontSize:20,
    fontWeight:'bold'
  }
});
