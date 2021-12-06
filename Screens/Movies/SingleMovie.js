import React, { useState, useEffect } from 'react'
import { Image, View, StyleSheet, Text, ScrollView, Button} from 'react-native';
import { Left, Right, Container, H1, Box } from 'native-base';

const SingleMovie = (props) => {

    const [item, setItem] = useState(props.route.params.item);
    const [availability, setAvailability]  = useState('');

    return (
        <Box style={styles.container}>
        <ScrollView style={{ marginBottom: 80, padding: 5 }}>
            <View style={styles.imageContainer}>
                <Image 
                    source={{
                        uri: item.image ? item.image 
                        : 'https://cdn-icons-png.flaticon.com/512/2748/2748558.png'
                    }}
                    resizeMode="contain"
                    style={styles.image}

                />

            </View>
            <View style={styles.contentContainer}>
                    <Text style={styles.contentHeader}>{item.name}</Text>
                    <Text style={styles.contentDetails}>{item.details}</Text>
                    <Text style={styles.contentCategory}>{item.category.name}</Text>
                    <Text style={styles.contentDate}>{item.dateMovie}</Text>
                    <Text style={styles.timeFlash}>Flash Time: {item.timeFlash}</Text>
            </View>
           
        </ScrollView>
        <View style={styles.bottomContainer}>
                   
        </View>
        </Box>
    )
}

const styles = StyleSheet.create({

    container: {
        position: 'relative',
    height: '100%',   
    backgroundColor: '#021831'
 },
 imageContainer: {
     padding: 10,
     margin: 10,
     
 },
 image: {
     width: '100%',
     height: 250
 },
 contentContainer: {
     marginTop: 20,
     justifyContent: 'center',
     alignItems: 'center',
     
 },
 contentHeader: {
     fontWeight: 'bold',
     marginBottom: 20,
     color: 'white',
     fontSize: 40
 },
 contentDetails: {
     fontSize: 20,
     padding: 20,
     fontWeight: 'bold',
     color: 'white',    
     borderColor: '#30bca4',
        borderWidth: 5,
        width: 300,
        margin: 15,
        textAlign: 'center'
     
 },
 contentCategory: {
    fontSize: 20,
    padding: 20,
    fontWeight: 'bold',
    color: 'white',
    borderColor: '#30bca4',
        borderWidth: 5,
        width: 300,
        margin: 15,
        textAlign: 'center'
    
},
 bottomContainer: {
     flexDirection: 'row',
     position: 'absolute',
     bottom: 0,
     left: 0,
     backgroundColor: 'white'

 },
 timeFlash: {
     fontSize: 24,
     margin: 20,
     color: '#30bca4',
     fontWeight: "bold"
 },
 contentDate: {
    fontSize: 20,
    padding: 20,
    fontWeight: 'bold',
    color: 'white',
    borderColor: '#30bca4',
        borderWidth: 5,
        width: 300,
        margin: 15,
        textAlign: 'center',
    
    
},
})

export default SingleMovie;