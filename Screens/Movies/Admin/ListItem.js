import React, { useState } from "react";
import {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableHighlight,
    TouchableOpacity,
    Dimensions,
    Button
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome"

var { width } = Dimensions.get("window");

const ListItem = (props) => {

    return(
        <View>
            <TouchableOpacity
            // onPress

            >
                <Image 
                source={{
                    uri: props.image
                    ? props.image
                    : 'https://cdn-icons-png.flaticon.com/512/2748/2748558.png'
                }}
                resizeMode="contain"
                />
                <Text>{props.user}</Text>
                <Text numberOfLines={1} ellipsizeMode="tail" >{props.name}</Text>

            </TouchableOpacity>
        </View>
    )
}

export default ListItem;