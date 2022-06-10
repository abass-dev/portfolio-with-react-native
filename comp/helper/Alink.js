import {View, Text, TouchableOpacity, Linking, Button} from 'react-native'

export default function Alink(url){
      if (Linking.canOpenURL(url)) {
            return Linking.openURL(url)
        }
}