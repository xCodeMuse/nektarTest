import React from 'react';
import { StyleSheet, Text, View,Image,Dimensions} from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
const screenWidth = Math.round(Dimensions.get('window').width);

const TtdComponent = () => {
  const Data = [
    [
      'Allison from courts has not responded in 3days. Follow up?',
      require('../../assets/boy-1.png')
    ],
    [
     'Have you sent the signed NDA to Singapore Airlines?',
     require('../../assets/man-1.png')
    ],
    [
     'Prepare for your meeting tomorrow with Carl from Singapore Airlines',
     require('../../assets/girl-1.png')
     ],
    [
     'Finish debrief for yesterday meeting with Sam from Nestle',
     require('../../assets/man-4.png')
     ]
 ]

  return (
    <View style={styles.container}>
    
     <View style={styles.titleContainer}>
       <Text style={styles.containerTitle}>Things to do</Text>
       <View style={styles.badageView}>
       <Text style={{textAlign:'center'}}>4</Text>
       </View>
     </View>
    
     <View style={{flex:0.9,alignItems:'center'}}>
  
            <SwipeListView
            data={Data}
            renderItem={ (data,index) => (
                <View style={styles.rowTopView} keyExtractor={data => {console.warn(data)}}>
                   <View style={{width:Math.round(15/100*screenWidth),justifyContent:'center'}}>
                   <Image source={data.item[1]} style={{height:50,width:50,resizeMode:'contain'}}/>
                   </View> 
                   <View style={{width:Math.round(85/100*screenWidth),justifyContent:'center'}}>
                      <Text>{data.item[0]}</Text>
                      
                      </View>
                </View>
            )}
            renderHiddenItem={ (data,index) => (
              <View style={styles.rowBack} keyExtractor={item => item[0]}>
                  <View style={[styles.listViewOptionBtn,{backgroundColor:'red'}]}>
                  <Text style={[styles.listViewOptionText,{textAlign:'left',color:'white'}]}>Dismiss</Text>
                  </View>
                  <View style={[styles.listViewOptionBtn,{alignItems:'flex-end',backgroundColor:'blue',padding:5}]}>
                  <Text style={[styles.listViewOptionText,{textAlign:'left',color:'white',marginRight:5}]}>Addd</Text>
                  </View>
                  
              </View>
            
          )}
          keyExtractor={(index) => index.toString()}
          leftOpenValue={75}
          rightOpenValue={-75}
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
  rowBack: {
    flex: 1,
    flexDirection: 'row',
    marginBottom:10,
    width:Math.round(98/100*screenWidth)
  }, 
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
  },
  backRightBtnLeft: {
    backgroundColor: 'blue',
    right: 75,
  },
  backRightBtnRight: {
    backgroundColor: 'red',
    right: 0,
  },
  rowTopView:{
    width:Math.round(99/100*screenWidth),
    height:68,
    backgroundColor:'white',
    marginBottom:10,
    borderRadius:5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 1,
    flex:1,
    flexDirection:'row'
  },
  listViewOptionText:{
    fontSize:16,
    fontWeight:'600',
    letterSpacing:1
  },
  listViewOptionBtn:{
    width:Math.round(50/100*screenWidth),
    justifyContent:'center',
    padding:4,
    borderRadius:10
  }
});

export default TtdComponent;