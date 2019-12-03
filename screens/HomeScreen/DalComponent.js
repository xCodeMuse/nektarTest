import React from 'react';
import { StyleSheet, Text, View,Image,FlatList,TouchableOpacity,Dimensions } from 'react-native';
const screenWidth = Math.round(Dimensions.get('window').width);

const DalComponent = (props) => {
  const DATA = [
    {
      id: '1',
      title: 'Courts',
      progress:'45%',
      uri:require('../../assets/boy-1.png'),
      data:[
        {
          id:1,
          title:'Allison from courts has not responded in 3days. Follow up?',
          uri:require('../../assets/boy-1.png')
        }
      ]
    },
    {
      id: '2',
      title: 'Singapore Airlines',
      progress:'85%',
      uri:require('../../assets/girl-1.png'),
      data:[
        {
        id:2,
        title:'Have you sent the signed NDA to Singapore Airlines?',
        uri:require('../../assets/man-1.png')
        },
       {
        title:'Prepare for your meeting tomorrow with Carl from Singapore Airlines',
        uri:require('../../assets/girl-1.png')
       }]
    },
    {
      id: '3',
      title: 'Nestle',
      progress:'65%',
      uri:require('../../assets/man-4.png'),
      data:[
        {
          id:3,
          title:'Finish debrief for yesterday meeting with Sam from Nestle',
          uri:require('../../assets/man-4.png')
        }
      ]
    },
  ];
  const Item = ({ id, title,progress,uri,data}) =>{
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => props.navi('DLDescScreen',{title,uri,data})}
      >
        <View style={{width:'35%',height:'100%',justifyContent:'center',alignItems:'center'}}>
                   <Image source={uri} style={{height:40,width:40,resizeMode:'contain'}}/>
                   </View> 
       <View style={{width:'55%',height:'100%',justifyContent:'center',alignItems:'flex-start'}}>
       <Text style={{textAlign:'left',fontSize:16,fontWeight:'400',letterSpacing:1}}>{title}</Text>
       </View> 
        <View style={{width:'5%',height:'90%',
         borderColor:'rgb(137,173,255)',
         borderWidth:1,
         borderRadius:10,justifyContent:'flex-end'}}>
        <View style={{width:'100%',height:`${progress}`,backgroundColor:'rgb(137,173,255)'}}/></View>
      </TouchableOpacity>
    );
  }
  return (
    <View style={styles.container}>
       <View style={styles.titleContainer}>
       <Text style={styles.containerTitle}>Deals And Leads</Text>
       <View style={styles.badageView}>
       <Text style={{textAlign:'center'}}>3</Text>
       </View>
       </View>

       <View style={{flex:0.9}}>
        <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Item
            id={item.id}
            title={item.title}
            progress={item.progress}
            uri={item.uri}
            data={item.data}
          />
        )}
        numColumns={2}
        keyExtractor={(item, index) => item.id.toString()}
      />
       </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(198,217,247)'
  },

  titleContainer:{
    flex:0.1,
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
  },
  item: {
    backgroundColor: '#ffffff',
    padding: 0,
    marginVertical: 4,
    marginHorizontal: 4,
    flexDirection:'row',
    alignItems:'center',
    width:Math.round(48/100*screenWidth),
    height:75,
    borderRadius:5
  },
});

export default DalComponent;