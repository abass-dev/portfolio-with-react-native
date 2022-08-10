import {View, StyleSheet, Text, TouchableOpacity, Button} from 'react-native'
import Style from '../Style'
import Alink from './helper/Alink'

export default function Contact() {
        return (
            <View style={styleLocal.contactContainer}>
              <Text style={[Style.colorPrimary, {fontSize:30, paddingBottom:20}]}>What's the next?</Text>
              <Text style={Style.bigText}>Let's connect</Text>
              <Text style={{color:"#fff", fontSize: 16, fontFamily: 'monospace'}}>If you are interested in working on a project or have any questions, please leave an email and I will get back to you as soon as possible.</Text>
              <View style={Style.sayHiBtnContainer}>
                <TouchableOpacity onPress={() => Alink("mailto:abassthedev@gmail.com")}>
                  <Text style={[styleLocal.sBtn, Style.colorPrimary]}>📨 abassthedev@gmail.com</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Alink("tel:+233 59 157 5606")}>
                  <Text style={[styleLocal.sBtn, Style.colorPrimary]}>📞 Tel: +233 59 157 5606</Text>
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
    borderWidth:1,
    borderColor:'#bbc',
    borderRadius:6,
    marginTop:15
  },
  contactContainer: {
    flex:1,
    backgroundColor: 'black',
    alignContent: 'center',
    justifyContent: 'center',
    padding:20,
    alignItems:'center'
  }
})