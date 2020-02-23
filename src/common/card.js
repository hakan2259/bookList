import React from 'react';
import {View,Text,StyleSheet} from 'react-native';



const Card = (props) =>{
    return(
     <View style={styles.cardWrapper}>
         {props.children}
     </View>
    );
}

const styles = StyleSheet.create({
     cardWrapper:{
         height: 50,
         margin :10,
         borderWidth :1,
         borderColor: '#ddd',
         borderRadius :2,
         justifyContent : 'center',
         alignItems : 'center',
         
         
     }
});

export {Card};