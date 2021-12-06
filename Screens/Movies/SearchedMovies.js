 import React from 'react';
 import { View, StyleSheet, Dimensions , ScrollView} from 'react-native';
 import { Content, Left, Body, List, Thumbnail, Text, Box, Image } from 'native-base';

 var { width } = Dimensions.get("window")

 const SearchedMovies = (props) => {
    
    const { moviesFiltered } = props;
     return(
      <ScrollView>
        <Box style={{ width: width }}>
            {moviesFiltered.length > 0 ? (
                moviesFiltered.map((item) => (
                    <List.Item
                     onPress={() => {
                         props.navigation.navigate("Movie Detail", {item: item})
                     }}
                    key={item._id}
                    avatar
                    >
                  
                  
                          <List.Item >
                          <Image size={12} source={{uri: item.image ? item.image : 'https://cdn-icons-png.flaticon.com/512/2748/2748558.png'}}  />
                           <Text bold >{item.name}</Text>   
                           {/* <Text note>{item.description}</Text> */}
                           </List.Item>
                    </List.Item>
                ))
            ) : (
                <View style={styles.center}>
                    <Text style={{ alignSelf: 'center' }}>
                        No movies matched the selected criteria
                    </Text>
                </View>
            )}
        </Box>
        </ScrollView>
    );
 };

 const styles = StyleSheet.create ({
     center: {
         justifyContent: 'center',
         alignItems: 'center'
     },
     image1: {
         padding: 10,
     }
 })

 export default SearchedMovies;