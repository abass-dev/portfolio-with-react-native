import {View, Text, StyleSheet} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'

const Item = (props) => {
  let title = props.title
  let icon = props.icon
  let description = props.desk
  let link = props.link
  
  if (!title || title === " ") {
    title = <Text>Untitled</Text>
  }
  
  if(!description || description === " ") {
    description = <Text>"No description for " + title</Text>
    }
    
  let learnMoreLink = () => {
    if (!link || link === " ") {
      return null;
    } else {
      return (
          <View>
            <Text>
              <a href={link}>Learn more about {title}</a>
            </Text>
          </View>
        )
    }
  }
 const action = () => {
    document.querySelector("."+props.target+"-chevron").classList.toggle("rotate-chevron")
    document.querySelector("."+props.target+"-desk").classList.toggle("toggle-it")
  }
  
  return (
    <View>
      <Text style={styles.whiteP}>
        <Ionicons name="school" color="#a57c5d" size={17}/> {title}
      </Text>
      <Text style={styles.whiteP}>
        {link}
      </Text>
    </View>
    )
}
export default Item

const styles = StyleSheet.create({
  whiteP :  {
    color :  "#000",
    borderBottomWidth: 1,
    borderColor:"#b4b4b4",
    
  }
})