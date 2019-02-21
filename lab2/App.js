import React from 'react';
import { StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  Button } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
    this.state = {value: '', nameInput:false, isValid:true};

  }
  onChange = (event) => {
    this.setState({value: event});

      console.log(this.state.value);
    }

  onPress() {
    console.log("Pressed");
    var hello = 'Hello, ' + this.state.value + '!';
    this.setState({name:hello});
    //alert('Hello, ' + this.state.value);
    if (!/[a-zA-Z]+/.test (this.state.value)) {
      this.setState ({nameInput:true});
    }
    else {
        this.setState({isValid:false});
      }

  }
  render() {
    return (
      <View style={styles.container} flexDirection="column" alignItems='stretch'>
          {(!this.state.nameInput) ?
            <View>
            <TextInput style={styles.textInput} onChangeText={this.onChange} placeholder="Enter your name"></TextInput>
            {(this.state.isValid)?null:
              <Text style={{color: 'red',fontWeight: 'bold'}}>
                Must be a Valid Name
              </Text>
            }
              <TouchableOpacity style={styles.buttonStyle} onPress={this.onPress}>
                <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
              </View>
            :
            <Text style={{color: 'blue',fontWeight: 'bold'}}>
              Good Morning {this.state.value}
            </Text>
          }
      </View>
    );
  }
}
const styles = StyleSheet.create({
  buttonText:
  {
    color:"white",
    fontSize:40
  },
  buttonStyle:
  {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'blue',
    height:75,
    margin:30,
  },
  textInput:
  {
    margin:30,
    height:75,
    fontSize:20
  },
  defaultText:
  {
    fontSize:20
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
