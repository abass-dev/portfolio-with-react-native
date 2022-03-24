import {View, Text, TouchableOpacity, Button} from 'react-native'
import style from '../Style'
import linkingPage from './About'

export default function Contact() {
        return (
            <View style={style.defaultContainer}>
              <Text style={style.colorPrimary}>What's the next?</Text>
              <Text style={style.bigText}>Let's connect</Text>
              <Text style={{color:"#fff"}}>If you are interested in working on a project or have any questions, please leave an email and I will get back to you as soon as possible.</Text>
              <View style={style.sayHiBtnContainer}>
                <TouchableOpacity onPress={() => linkingPage("https://g.com")}>
                  <Text  style={style.sayHiBtn}>Say hi 👋</Text>
                </TouchableOpacity>
              </View>
            </View>
        )
}