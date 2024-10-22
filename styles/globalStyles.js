import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
    card: {
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        height: 50,  // Smaller card height
        width: 250,  // Smaller card width
        backgroundColor: 'peachpuff',
        marginRight: 15,  // Adds space between cards in horizontal scroll
        overflow: 'hidden',
        borderRadius: 30,
        shadowOffset: { width: 0, height: 2 },
        shadowColor: '#000',
        shadowRadius: 5,
        shadowOpacity: 0.1,
        marginBottom: 60,
        elevation: 5,  // Adds shadow on Android
        padding: 12,
    },
    
});



export default globalStyles;
