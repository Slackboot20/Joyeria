import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    //crear joya, ver joyas, report, profile
    containerTabs: {
        padding: 16,
    },
    titleTabs: {
        fontFamily: 'serif',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 24,
        padding: 50,
    //inicializer
    },
    backgroundStart:{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: 'peachpuff'
    },
    backgroundimageStart:{
        opacity: 0.5, 
    },
    containerStart: {
        justifyContent: 'center', // Centra el contenido verticalmente
        alignItems: 'center', // Centra el contenido horizontalmente
        flex: 1,
    },
    titleStart:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#127a1b',
    },
    //buttonsradians, report
    buttonCustomsStart:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    bubblebuttom: {
        position: 'absolute',
        bottom: 30,
        right: 30,
        width: 60,
        height: 60,
        backgroundColor: 'peru',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'peru',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
      },
      bubbleTextButtom: {
        fontSize: 30,
        color: '#fff',
        fontWeight: 'bold',
      },
      //profile
      logoutButton: {
        backgroundColor: 'saddlebrown',
    },
})
//crear joya
//joyas

export default style;