import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity,FlatList,Dimensions} from 'react-native';
const screenWidth = Math.round(Dimensions.get('window').width);
const DealLeadsDescScreen = (props) => {
  const {navigation} = props
  const title = JSON.parse(JSON.stringify(navigation.getParam('title')))
  const uri = JSON.parse(JSON.stringify(navigation.getParam('uri')))
  const DATA = JSON.parse(JSON.stringify(navigation.getParam('data')))


  const Item = ({ id, title,uri}) =>{
    return (
      <TouchableOpacity
      style={styles.item}
      >
        <View style={{width:Math.round(20/100*screenWidth),justifyContent:'center',alignItems:'center'}}>
                   <Image source={uri} style={{height:50,width:50,resizeMode:'contain'}}/>
                   </View> 
       <View style={{width:Math.round(80/100*screenWidth),height:'100%',justifyContent:'center',alignItems:'flex-start'}}>
       <Text style={{textAlign:'left',fontSize:16,fontWeight:'400',letterSpacing:1}}>{title}</Text>
       </View>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.topInnerContainer}>
         <View style={{width:Math.round(20/100*screenWidth),justifyContent:'center',paddingLeft:20}}>
         <TouchableOpacity style={{height:42,width:32}} onPress={() => props.navigation.navigate('Home')}>
         <Image source={require('../../assets/left-arrow.png')} style={{height:42,width:32,resizeMode:'contain'}}/>
         </TouchableOpacity>
         </View>

         <View style={{width:Math.round(80/100*screenWidth),flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
           <Image source={uri} style={{height:50,width:50,resizeMode:'contain'}}/>
           <Text style={{fontSize:18,fontWeight:'500',letterSpacing:1,paddingLeft:8}}>{title}</Text>
         </View>
        
        </View>
      </View>


      <View style={styles.bodyContainer}>

      <View style={styles.titleContainer}>
       <Text style={styles.containerTitle}>Things to do</Text>
       <View style={styles.badageView}>
       <Text style={{textAlign:'center'}}>{DATA.length}</Text>
       </View>
     </View>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Item
            id={item.id}
            title={item.title}
            uri={item.uri}
          />
        )}
        keyExtractor={(index) => index.toString()}
      />
        

      </View>
      <Image source={require('../../assets/bee.png')} style={styles.logoStyle}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'rgb(198,217,247)'
  },
  logoStyle:{
    height:50,
    width:50,
    position:'absolute',
    top:35,
    right:18
  },
  topContainer:{
    flex:0.15,
    backgroundColor:'white',
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.6,
    shadowRadius: 2,
    elevation: 1,
    justifyContent:'flex-end'
  },
  bodyContainer:{
    flex:0.85  
  },
  topInnerContainer:{
    flex:0.6,
    justifyContent:'center',
    flexDirection:'row'
  },
  item: {
    backgroundColor: '#ffffff',
    padding: 0,
    marginVertical: 4,
    marginHorizontal: 4,
    flexDirection:'row',
    alignItems:'center',
    width:Math.round(98/100*screenWidth),
    height:75,
    borderRadius:5
  },
  titleContainer:{
    flex:0.07,
    flexDirection:'row',
    alignItems:'center'
  },
  containerTitle:{
      fontSize:20,
      fontWeight:'300',
      letterSpacing:1,
      paddingLeft:35,
      paddingRight:5
  },
  badageView:{
    borderRadius:90,
    height:20,
    width:20,
    backgroundColor:'white',
    justifyContent:'center'
  }
});

export default DealLeadsDescScreen;