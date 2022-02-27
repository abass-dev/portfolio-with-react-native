import React, { Component } from 'react'
import { Text, SafeAreaView, ScrollView } from 'react-native'
import Dynacard from 'dynacard'
import style from '../Style'

class Project extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <SafeAreaView style={style.defaultContainer}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <Dynacard
                            image={require("../assets/images/php_code.jpg")}
                            title="NIGATEDEV FRAMEWORK"
                            headLinks={[
                                {link: 'https://github.com/nigatedev/nigatedev', name: 'Github'},
                                {link: 'https://packagist.org/packages/nigatedev/nigatedev', name: 'Packagist'},
                                {link: 'https://github.com/nigatedev/nigatedev/issues', name: 'Issues'}
                            ]}
                            lansUsed="PHP, JavaScript, Sass, Shell, Twig"
                            description="Nigatedev is a time-saving PHP framework coded by Abass Ben Cheik and contributors."
                            btnGo={{title: 'Code Source', link: 'https://github.com/nigatedev'}}
                        />
                        <Dynacard
                            image={require("../assets/images/php_code.jpg")}
                            title="TODAYDEVS (WebSite)"
                            lansUsed="WordPress"
                            description="With TodayDevs, stay informed about new technology! We share everything about new technologies concerning web, mobile and software while trying to stay up to date with new technologies."
                            btnGo={{title: 'The WebSite', link: 'https://todaydevs.com'}}
                        />
                        <Dynacard
                            image={require("../assets/images/php_code.jpg")}
                            title="FORM BUILDER"
                            lansUsed="PHP, Bootstrap"
                            description="Form builder is an open-source project written in PHP and styled with bootstrap css by Abass Ben Cheik to be easily used to build html forms.."
                            btnGo={{title: 'Code Source', link: 'https://github.com/abass-dev/BenOSP-FormBuilder'}}
                        />
                        <Dynacard
                            image={require("../assets/images/php_code.jpg")}
                            title="MY PORTFOLIO"
                            lansUsed="ReactJs"
                            description="My portfolio (ReactJs)"
                            btnGo={{title: 'The WebSite', link: 'https://abassdev.todaydevs.com'}}
                        />
                        <Dynacard
                            image={require("../assets/images/php_code.jpg")}
                            title="Dynacard React Native library"
                            lansUsed="JavaScript"
                            description="Dynacard is an open-source ReactNative library that can help you easily create beautiful cards for your ReactNative application."
                            btnGo={{title: 'Code Source', link: 'https://github.com/abass-dev/dynacard'}}
                        />
                        <Dynacard
                            image={require("../assets/images/php_code.jpg")}
                            title="Android Application (ReactNative)"
                            lansUsed="React Native"
                            description="Convert my portfolio to Android App using ReactNative"
                            btnGo={{title: 'Code Source', link: 'https://github.com/abass-dev/portfolio-with-react-native'}}
                        />
    	            </ScrollView>
	        </SafeAreaView>
        )
    }
}

export default Project