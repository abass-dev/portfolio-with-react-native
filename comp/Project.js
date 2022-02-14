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
	            <Text style={{fontSize:30, color: '#fff', marginVertical: 15}}>RECENT PROJECTS</Text>
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
                        btnGo={{title: 'The code source', link: 'https://github.com/nigatedev'}}
                    />
                    <Dynacard
                        image={require("../assets/images/php_code.jpg")}
                        title="TODAYDEVS (WebSite)"
                        lansUsed="WordPress"
                        description="With TodayDevs, stay informed about new technology! We share everything about new technologies concerning web, mobile and software while trying to stay up to date with new technologies."
                        btnGo={{title: 'The WebSite', link: 'https://todaydevs.com'}}
                    />
	            </ScrollView>
	        </SafeAreaView>
        )
    }
}

export default Project