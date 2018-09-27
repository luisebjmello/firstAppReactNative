import * as React from 'react';
import { Button, View, StyleSheet, Text } from 'react-native';
import { Constants } from 'expo';
import { createStackNavigator } from 'react-navigation'; 

class HomeScreen extends React.Component {
  render() {
   
    return (
      <View style={styles.container}>
        <Text style={styles.descricao}>AV1, seja Bem-Vinda! Clique no botão abaixo</Text>
        <Button
          title="Clique Aqui"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }  
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d482d9',
    fontSize: 40,
  },
  pcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e84573',
    fontSize: 40,
  },
  descricao:{
    padding:15,},
  });

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={styles.pcontainer}>
        <Text style={styles.descricao}>Nome: Luise Brito Jansen de Mello</Text>
<Text style={styles.descricao}>Matricula: 0050014552</Text>
<Text style={styles.descricao}>
https://github.com/luisebjmello/firstAppReactNative.git
</Text>
        <Button
          title="Voltar"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    avigationOptions: () => ({
      title: `Inovação Projeto Integrado 1`
    }),
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  }
);


export default class App extends React.Component {
   static navigationOptions ={
        title:'Inovação Projeto Integrado 1'}
  render() {
    return <RootStack />;
  }
}
