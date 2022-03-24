import {StyleSheet} from 'react-native';

export default StyleSheet.create({
	defaultContainer: {
	    flex:1,
	    paddingHorizontal: 3,
	    paddingVertical: 3,
	    backgroundColor: "#000f12"
	},
	smText: {
	    fontFamily: 'serif',
	    color: "white",
	    fontSize: 15
	},
	bigText: {
	    fontFamily: 'serif',
	    color: "white",
	    fontSize: 30,
	    paddingVertical: 5
	},
	colorPrimary: {
	    color: "#9ceafd"
	},
	profilePic:{
        resizeMode: "cover",
        height: 160,
        width: 160,
        borderRadius: 100,
        marginTop: 10
    },
    aboutTextContainer: {
        alignItems: 'center'
    },
    aboutText: {
        marginTop: 10
    },
    aboutButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        color: 'white',
        paddingVertical: 30
    },
    resumeButton: {
        padding: 9,
        backgroundColor:'#004926',
        color: 'white',
        fontSize: 18,
    },
    todoContainer: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000f12'
    },
    todo: {
        color: '#fff',
        fontSize: 35
    },
    sayHiBtnContainer: {
      flex:1,
      alignItems: 'center',
      marginVertical: 20,
    },
    sayHiBtn: {
      width: 150,
      fontSize: 20,
      color: 'white',
      alignItems:'center',
      textAlign:'center',
      borderRadius: 2,
      borderWidth: 1,
      padding: 8,
      borderColor: "#9ceafd"
    }
});
