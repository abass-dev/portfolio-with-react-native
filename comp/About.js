import {TouchableOpacity, SafeAreaView, StyleSheet, ScrollView, Image, View, Text} from 'react-native'
import style from '../Style'
import Alink from "./helper/Alink"
import Ionicons from '@expo/vector-icons/Ionicons'
import Style from '../Style'


export default function About() {
    
    return (
        <SafeAreaView  style={[style.defaultContainer, {paddingHorizontal:25}]}>
                <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={[Style.primaryTitle, {color:"#9ceafd"}]}>Hello, </Text>
                    <Text style={[Style.primaryTitle]}>I'm AbassDev</Text>
                </View>
                
                <View style={{alignItems:'center'}}>
                    <Image style={style.profilePic} source={require('../assets/images/abass2022-06.jpg')} />
                    <View style={style.aboutText}>
                        <Text style={style.bigText}>About Me</Text>
                        <Text style={style.smText}>
                          I'm a Web, Mobile and Software developer passionate about the internet and programming for over 6 years. In my free time, I write articles on  
                          <Text style={style.colorPrimary} onPress={() => Alink("https://todaydevs.com")}> todaydevs.com</Text>
                          , share videos on YouTube and contribute to the Open-Source community. I'm the Creator of 
                          <Text color={style.colorPrimary} onPress={() => Alink("https://github.com/abass-dev/nigatedev")}>Nigatedev framework</Text> and author of
                          <Text style={style.colorPrimary} onPress={() => Alink("https://todaydevs.com")}> todaydevs (New Website)</Text>
                        </Text>
                    </View>
                </View>
                
                <View style={style.aboutButtonContainer}>
                    <TouchableOpacity onPress={() => Alink("https://abass-dev.github.io/static/media/abass_cv_fr.3c13167d.pdf")}>
                        <Text style={style.resumeButton}>RESUME <Ionicons size={20} name="download"/></Text>
                    </TouchableOpacity>
                    <View style={style.aboutSocialButtonContainer}>
                        <View style={{flexDirection: 'row'}}>
                            <TouchableOpacity onPress={() => Alink("https://www.facebook.com/abasscheik.ben")}>
                                <Ionicons style={{paddingHorizontal:5}} size={20} name="logo-facebook" color="#777" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => Alink("https://github.com/abass-dev")}>
                                <Ionicons style={{paddingHorizontal:5}} size={20} name="logo-github" color="#777" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => Alink("https://www.linkedin.com/in/abass-ben-cheik-b49a9a219")}>
                                <Ionicons style={{paddingHorizontal:5}} size={20} name="logo-linkedin" color="#777" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => Alink("https://twitter.com/abasscheik1")}>
                                <Ionicons style={{paddingHorizontal:5}} size={20} name="logo-twitter" color="#777" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => Alink("https://youtube.com/channel/UC51YhGiRSH_IBPjYdPAmRew")}>
                                <Ionicons style={{paddingHorizontal:5}} size={20} name="logo-youtube" color="#777" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <Text style={localeSyle.copyright}>Copyright © 2021 - 2022 by abassdev.com All rights reserved.</Text>
            </ScrollView>
        </SafeAreaView>
    )
}

const localeSyle = StyleSheet.create({
    copyright: {
        color:"#cdcdcd",
        fontSize:13,
        marginTop:20
    }

})
