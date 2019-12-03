import React from 'react';
import { StyleSheet, Text, View,Image ,Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const HydComponent = () => {

    const Data = [
       {
         title: 'Your commissions this quarter total $32,400. You could make $14,200 more from your pipeline',
         progress: '50',
       },
       {
        title: 'Your commissions this quarter total $43,400. You could make $12,200 more from your pipeline',
        progress: '60'
       },
       {
        title: 'Your commissions this quarter total $23,400. You could make $10,200 more from your pipeline',
        progress: '40'
       }
    ]
    
    const renderItem = ({item}) =>{
      return ( <View style={styles.renderItemView}>
                <Text style={{fontSize:16,fontWeight:'400'}}>{ item.title }</Text>
                <View style={styles.ProgressView}><View style={{width:Math.round(JSON.parse(item.progress)/100*screenWidth),backgroundColor:'rgb(137,173,255)',height:'100%'}}/></View>
            </View>)
    }

  return (
    <View style={styles.container}>
       <View style={{width:screenWidth,height:'40%',justifyContent:'flex-end'}}><Text style={styles.containerTitle}>How you're doing</Text>
       </View>
       <View style={{width:screenWidth,height:'60%',paddingTop:10}}>
       <Carousel
              data={Data}
              renderItem={renderItem}
              sliderWidth={screenWidth}
              itemWidth={Math.round(80/100*screenWidth)}
            />
            </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'flex-end',
    alignItems:'center'
  },
  containerTitle:{
      fontSize:20,
      fontWeight:'300',
      letterSpacing:1,
      paddingLeft:35
  },
  renderItemView:{
    width:'100%',
    height:'90%',
    backgroundColor:'white',
    justifyContent:'space-around',
    alignItems:'center',
    padding:10,
    borderRadius:5
  },
  ProgressView:{
      width:Math.round(70/100*screenWidth),
      height:'6.5%',
      borderColor:'rgb(137,173,255)',
      borderWidth:1,
      borderRadius:10
  }
});

export default HydComponent;