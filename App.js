import React,{useState} from 'react';
import { View, Text, SafeAreaView,StyleSheet,Image, ScrollView,Animated } from 'react-native';

export default function App() {
  const [scrollY, setScrollY] = useState(new Animated.Value(0));
 return (
   <SafeAreaView>
    {/* Header de navegação */}
  <Animated.View style={[styles.header,
  {
    height: scrollY.interpolate({
      inputRange:[10,110,185],
      outputRange:[50,20,0],
      extrapolate:'clamp'
    }),
    opacity:scrollY.interpolate({
      inputRange:[1,75,170],
      outputRange:[1,1,0],
      extrapolate:'clamp'
    })
  }]}>
  <Image
  source={require('./src/assets/cam.png')}
  style={{width:30, height:30}}
  resizeMode="contain"
  />
  <Image
  source={require('./src/assets/logo.png')}
  style={{width:120, height:40}}
  resizeMode="contain"
  />
  <Image
  source={require('./src/assets/send.png')}
  style={{width:30, height:30}}
  resizeMode="contain"
  />
  </Animated.View>
  <ScrollView 
  onScroll={Animated.event([{
    nativeEvent:{
      contentOffset:{y: scrollY}
    },
  }],
  
  {useNativeDriver:false})}
  >
    <View style={styles.box}></View>
    <View style={styles.box}></View>
    <View style={styles.box}></View>
    <View style={styles.box}></View>
    <View style={styles.box}></View>
    <View style={styles.box}></View>
    <View style={styles.box}></View>
  </ScrollView>
     
   </SafeAreaView>
  );
}


const styles = StyleSheet.create({
header:{
flexDirection:'row',
backgroundColor:'#101010',
alignItems:'center',
justifyContent:'space-between',
paddingLeft:10,
paddingRight:10,
borderBottomWidth:2,
borderColor:'#FFF'
},
box:{
  justifyContent:'center',
  alignItems:'center',
  height:300,
  backgroundColor:'#222',
  margin:7,
  borderRadius:5
}
});