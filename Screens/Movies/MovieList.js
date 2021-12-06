 import React from 'react';
 import { TouchableOpacity, View, Dimensions } from 'react-native';

import MovieDisplay from './MovieDisplay'

 var { width } = Dimensions.get("window");

 const MovieList = (props) => {
     const{ item } = props;

     return(
         <TouchableOpacity 
         style={{ width: '50%' }}
         onPress={() => 
            props.navigation.navigate("Movie Detail", { item: item})
         }
         >
             <View style={{ width: width / 2, 
                backgroundColor: 'gainsboro'}}
                >
                    <MovieDisplay {...item} />
             </View>
             </TouchableOpacity>






     )
 }


 export default MovieList;