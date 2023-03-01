import {Dimensions, TouchableOpacity, SafeAreaView, StyleSheet, ScrollView, Image, View, Text} from 'react-native'
import style from '../Style'
import {Alink, AlinkIcon, AlinkButton} from "./ui/Alink"
import Ionicons from '@expo/vector-icons/Ionicons'
import Style from '../Style'

export default function About() {
    return (
        <SafeAreaView  style={[style.defaultContainer, {paddingHorizontal:15}]}>
                <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                <View style={{height: Dimensions.get('window').height - 50 , justifyContent: 'space-evenly'}}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={[Style.primaryTitle, {color:"#9ceafd"}]}>Hello, </Text>
                    <Text style={[Style.primaryTitle]}>I'm AbassDev</Text>
                </View>
                
                <View style={{alignItems:'center'}}>
                    <Image style={style.profilePic} source={require('../assets/images/abass2022-06.jpg')} />
                    <View style={style.aboutText}>
                        <Text style={style.bigText}>About Me</Text>
                        <Text style={style.smText}>
                          I'm a Web, Mobile and Software developer passionate about the internet and programming for over 6 years. In my free time, I write articles on my 
                          <Text style={style.colorPrimary} onPress={() => Alink("https://blog.abassdev.com")}> blog</Text>
                          , share videos on YouTube and contribute to the Open-Source community. I'm the Creator of 
                          <Text style={style.colorPrimary} onPress={() => Alink("https://github.com/nigaphp/niga")}> NigaPHP Framework</Text>
                        </Text>
                    </View>
                </View>
                
                <View style={style.aboutButtonContainer}>
                    <AlinkButton linkText='RESUME' url="https://abass-dev.github.io/static/media/abass_cv_fr.3c13167d.pdf" iconName='download'/>
                    <View style={style.aboutSocialButtonContainer}>
                        <View style={{flexDirection: 'row'}}>
                          <AlinkIcon url="https://www.facebook.com/abassthedev" iconName='logo-facebook'/>
                          <AlinkIcon url="https://github.com/abass-dev" iconName='logo-github'/>
                          <AlinkIcon url="https://www.linkedin.com/in/abass-ben-cheik-b49a9a219" iconName='logo-linkedin'/>
                          <AlinkIcon url="https://twitter.com/abass_dev" iconName='logo-twitter'/>
                        </View>
                    </View>
                </View>
            <Text style={localeSyle.copyright}>Copyright © 2021 - {new Date().getFullYear()} by abassdev.com All rights reserved.</Text>
          </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const localeSyle = StyleSheet.create({
    copyright: {
        textAlign: 'center',
        color:"#cdcdcd",
        fontSize:13,
        marginTop:20
    }

})
