import React, { useState, useEffect, useCallback } from 'react'
import { View, StyleSheet, ActivityIndicator, FlatList, SafeAreaView, ScrollView, Dimensions, TextInput } from 'react-native'
import { Container, Header, Icon, Item, Input, Text, AppBar, List } from 'native-base';
import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import { SearchBar } from 'react-native-elements';

// this is the url and the axios library to use http request
import baseURL from '../../assets/common/baseUrl';
import axios from 'axios';

import MovieList from './MovieList';
import SearchedMovie from './SearchedMovies';
import Banner from '../../Shared/Banner'
import CategoryFilter from './CategoryFilter';

//import { propsFlattener } from 'native-base/lib/typescript/hooks/useThemeProps/propsFlattener';

var { height } = Dimensions.get('window')

//const data = require('../../assets/data/movies.json');
//const moviesCategories = require('../../assets/data/categories.json');


const MovieContainer = (props) => {

    const [movies, setMovies] = useState([]);
    const [moviesFiltered, setMoviesFiltered] = useState([]);
    const [focus, setFocus] = useState([]);
    const [categories, setCategories] = useState([]);
    const [moviesCtg, setMoviesCtg] = useState([]);
    const [active, setActive] = useState();
    const [initialState, setInitialState] = useState([]);
    const [loading, setLoading] = useState(true);


    useFocusEffect((
        useCallback(
            () => {
                setFocus(false);


                setActive(-1);


                // Products
                axios.get(`${baseURL}movies`).then(res => {

                    setMovies(res.data);
                    setMoviesFiltered(res.data);
                    setMoviesCtg(res.data);
                    setInitialState(res.data);
                    setLoading(false);
                });

                // Categories
                axios
                    .get(`${baseURL}categories`)
                    .then((res) => {
                        setCategories(res.data)
                    })
                    .catch((error) => {
                        console.log('Api call error')
                    })


                return () => {
                    setMovies([]);
                    setMoviesFiltered([]);
                    setFocus();
                    setCategories([]);
                    setActive();
                    setInitialState();

                };

            },
            [],
        )
    ))



    // search method for movies
    const searchMovie = (text) => {
        setMoviesFiltered(
            movies.filter((i) => i.name.toLowerCase().includes(text.toLowerCase()))
        )
    }

    const openList = () => {
        setFocus(true);
    }

    const onBlur = () => {
        setFocus(false);
    }

    // Categories  
    const changeCtg = (ctg) => {
        {
            ctg === "all"
                ? [setMoviesCtg(initialState), setActive(true)]
                : [
                    setMoviesCtg(
                        movies.filter((i) => i.category && i.category._id === ctg),
                        setActive(true)
                    ),
                ];
        }
    }



    return (
        <>
        {loading == false ? (
            <SafeAreaView>

            <View style={styles.search}>
                {/* { <Icon as={Ionicons} name="ios-search" /> } */}
                <Input
                    placeholder="search"
                    borderColor="transparent"
                    onFocus={openList}
                    onChangeText={(text) => searchMovie(text)}

                />
                {focus == true ? (
                    <Icon as={Ionicons} name="ios-close" onPress={onBlur} />
                ) : null}
            </View>

            {focus == true ? (
                <SearchedMovie
                    navigation={props.navigation}
                    moviesFiltered={moviesFiltered}
                />
            ) : (
                //Keep track of this line of code

                <ScrollView>
                    <View >
                        {/* </View><View style={styles.container}> */}
                        <View>

                            <Banner />

                            <CategoryFilter
                                categories={categories}
                                categoryFilter={changeCtg}
                                moviesCtg={moviesCtg}
                                active={active}
                                setActive={setActive}
                            />


                        </View>

                        {moviesCtg.length > 0 ? (
                            <View style={styles.listContainer}>
                                {moviesCtg.map((item) => {
                                    return (
                                        <MovieList
                                            navigation={props.navigation}
                                            key={item._id}
                                            item={item}
                                        />
                                    )
                                })}
                            </View>
                        ) : (
                            <View style={[styles.center, { height: height / 2 }]}>
                                <Text>No movies </Text>

                            </View>
                        )}

                    </View>
                </ScrollView>

            )}

        </SafeAreaView>
        ) : (
         // loading
         <SafeAreaView style={[styles.center, {backgroundColor: "#f2f2f2"}]}>
           <ActivityIndicator size = "large" color ="red"/>
         </SafeAreaView>
        )}
      </>
    );
};


const styles = StyleSheet.create({
    container: {
        flexWrap: 'wrap',
        backgroundColor: 'gainsboro',

    },
    listContainer: {
        width: '100%',
        //height : height,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        backgroundColor: 'gainsboro'
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    search: {
        height: 55,
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 20,
        padding: 10,
        borderWidth: 3,
        borderColor: '#30bca4'
    }
})


export default MovieContainer;