import {SafeAreaView, ScrollView, Linking, Image, View, Text} from 'react-native'
import style from '../Style'
import Ionicons from '@expo/vector-icons/Ionicons'

export default function About() {
    
    function linkingPage (url) {
        if (Linking.canOpenURL(url)) {
            return Linking.openURL(url)
        }
    }
    return (
        <SafeAreaView style={style.defaultContainer}>
            <ScrollView>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{color: '#9ceafd',fontSize: 22,fontFamily: 'monospace'}}>Hello, </Text>
                    <Text style={{color: 'white',fontSize: 22,fontFamily: 'monospace'}}>I'm AbassDev</Text>
                </View>
                
                <View style={{alignItems:'center'}}>
                    <Image style={style.profilePic} source={require('../assets/images/abass.jpg')} />
                    <View style={style.aboutText}>
                        <Text style={style.bigText}>About Me</Text>
                        <Text style={style.smText}>I am a Web, Mobile and Software developer passionate about the internet and programming for over 6 years. In my free time, I write articles on
                        <Text onPress={() => linkingPage("https://todaydevs.com")} style={style.colorPrimary}> todaydevs</Text> and contribute to the <Text onPress={() => linkingPage("https://github.com/abass-dev")} style={style.colorPrimary}> Open-source</Text> community.</Text>
                    </View>
                </View>
                
                <View style={style.aboutButtonContainer}>
                    <Text style={style.resumeButton}>RESUME</Text>
                    <View style={style.aboutSocialButtonContainer}>
                    <Ionicons name="code" />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
