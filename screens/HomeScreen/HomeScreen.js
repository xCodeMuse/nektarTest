import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import HydComponent from './HydComponent'
import TtdComponent from './TtdComponent'
import DalComponent from './DalComponent'

const HomeScreen = (props) => {
    const {navigate} = props.navigation
  return (
    <View style={styles.container}>
    
      <View style={styles.HydContainer}>
        <HydComponent/>
      </View>
      <View style={styles.TtdContainer}>
         <TtdComponent/>
      </View>
      <View style={styles.DalContainer}>
         <DalComponent navi={navigate}/>
      </View>
      
      <Image source={require('../../assets/bee.png')} style={styles.logoStyle}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(198,217,247)'
  },
  logoStyle:{
    height:50,
    width:50,
    position:'absolute',
    top:35,
    right:18
  },
  HydContainer:{
      flex:0.3
  },
  TtdContainer:{
      flex:0.4
  },
  DalContainer:{
      flex:0.3
  }
});

export default HomeScreen;