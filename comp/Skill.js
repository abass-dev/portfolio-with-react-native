import {View, Text, StyleSheet} from 'react-native'
import style from '../Style'
import CardItem from "./helper/CardItem"

export default function Skill() {
    
        return (
            <View style={style.defaultContainer}>
              <View style={styles.skillItem}>
                <CardItem 
                title="Test"
                link="google.com"/>
              </View>
            </View>
        )
}

const styles = StyleSheet.create({
  skillItem : {
    backgroundColor : "#eee",
    padding : 10,
    marginLeft : 20,
    marginRight : 20,
    borderRadius : 3
  }
})