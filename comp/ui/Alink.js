import {Text, Linking, TouchableOpacity, StyleSheet} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'

const canOpenAlink = (url) => {
  if (Linking.canOpenURL(url)) {
       return Linking.openURL(url)
    }
}

export const AlinkIcon = ({url, color, size, iconName}) => {
  return (
    <TouchableOpacity onPress={() => canOpenAlink(url)}>
      <Ionicons style={{paddingHorizontal:5}} size={size? size : 20} name={iconName} color={color? color : 'gray'} />
    </TouchableOpacity>
    )
}
export const AlinkButton = ({linkText, url, color, size, iconName}) => {
  return (
    <TouchableOpacity onPress={() => canOpenAlink(url)}>
        <Text style={styles.button}>{linkText} <Ionicons size={size? size : 20} name={iconName}/></Text>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
      padding: 9,
      backgroundColor:'#004926',
      color: 'white',
      fontSize: 18,
  } 
})