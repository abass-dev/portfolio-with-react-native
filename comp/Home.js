import {View, Text} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import style from '../Style'
import About from './About'
import Work from './Work'
import Skill from './Skill'
import Project from './Project'
import Contact from './Contact'


const Tab = createBottomTabNavigator();


export default function Home() {
    return (
        <View style={{flex:1}}>
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={({route}) => ({
                        tabBarIcon: ({focused, color, size}) => {
                            let iconName;
                            if (route.name == "About") {
                                iconName = focused ? "information-outline" : "information"
                            } else if (route.name == "Work") {
                                iconName = focused ? "code-working-outline" : "code-working"
                            } else if (route.name == "Skill") {
                                iconName = focused ? "school" : "school-outline"
                            } else if (route.name == "Project") {
                                iconName = focused ? "ios-briefcase-sharp" : "ios-briefcase-outline"
                            } else if (route.name == "Contact") {
                                iconName = focused ? "call" : "call-outline"
                            }
                            return <Ionicons name={iconName} color={color} size={size} />
                        },
                        tabBarActiveTintColor: '#ff4600',
                        tabBarInactiveTintColor: "#000f12",
                    })}
                >
                    <Tab.Screen name="About" component={About} options={{title: "About"}}/>
                    <Tab.Screen name="Work" component={Work} options={{title: "Work"}}/>
                    <Tab.Screen name="Skill" component={Skill} options={{title: "Skill & Tools"}}/>
                    <Tab.Screen name="Project" component={Project} options={{title: "Project"}}/>
                    <Tab.Screen name="Contact" component={Contact} options={{title: "Contact"}}/>
                </Tab.Navigator>
            </NavigationContainer>
        </View>
    )
}