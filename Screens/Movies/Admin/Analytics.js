import React, { useState, useCallback } from "react";
import {View, Text, Flatlist, ActivityIndicator, StyleSheet, Dimensions, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage"
import { Header, Item, Input, Box, List } from "native-base"
import Icon from "react-native-vector-icons/FontAwesome"
import { useFocusEffect } from "@react-navigation/native"
import ListItem from "./ListItem"

import axios from "axios"
import baseURL from "../../../assets/common/baseUrl"


var { height, width } = Dimensions.get("window")

const Analytics = (props) => {

const [userList, setUserList] = useState();
const [userFilter, setUserFilter] = useState();
const [loading, setLoading] = useState(true);
const [token, setToken] = useState();

useFocusEffect(
    useCallback(
        () => {
            // Get Token
            AsyncStorage.getItem("jwt")
                .then((res) => {
                    setToken(res)
                })
                .catch((error) => console.log(error))

                axios
                    .get(`${baseURL}users`)
                    .then((res) => {
                        setUserList(res.data);
                        setUserFilter(res.data);
                         setLoading(false);
                    })

                    return () => {
                        setUserList();
                        setUserFilter();
                         setLoading(true);
                    }
        },
        [],
    )
)

    return (
        <View>
            <View>
                {/* <Header searchBar rounded> */}
                    <List.Item >
                        <Icon name="search" />
                        <Input 
                        placeholder="Search"
                        //onChange
                        />
                    </List.Item>
                    
                {/* </Header> */}
            </View>

             {loading ? ( 
                <View>
                  <ActivityIndicator size="large" color="red" />  
                    </View>
            ) : (
                <List.Item
                data={userFilter}
                renderItem={({ item, index }) => (
                    <ListItem
                    {...item}
                    navigation={props.navigation}
                    index={index}
                    />
                )}
                keyExtractor={(item) => item.id}
                />
            )}
        </View>
    );
};


export default Analytics;