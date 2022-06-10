import {View, StyleSheet, Text, TouchableOpacity, Button} from 'react-native'
import style from '../Style'
import Alink from './helper/Alink'

export default function Contact() {
        return (
            <View style={style.defaultContainer}>
              <Text style={style.colorPrimary}>What's the next?</Text>
              <Text style={style.bigText}>Let's connect</Text>
              <Text style={{color:"#fff"}}>If you are interested in working on a project or have any questions, please leave an email and I will get back to you as soon as possible.</Text>
              <View style={style.sayHiBtnContainer}>
                <TouchableOpacity onPress={() => Alink("mailto:abassthedev@gmail.com")}>
                  <Text style={styleLocal.sBtn}>📨 abassthedev@gmail.com</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Alink("tel:+233 59 157 5606")}>
                  <Text style={styleLocal.sBtn}>📞 Tel: +233 59 157 5606</Text>
                </TouchableOpacity>
              </View>
            </View>
        )
}

const styleLocal = StyleSheet.create({
  sBtn: {
    marginTop:10,
    padding:4,
    color:'white',
    borderWidth:2,
    borderColor:'#bbc'
  }
})