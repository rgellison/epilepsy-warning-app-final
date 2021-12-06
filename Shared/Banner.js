 import React, { useState, useEffect } from 'react'
 import { Image, StyleSheet, Dimensions, View, ScrollView } from 'react-native';
 import Swiper from 'react-native-swiper/src'

 var { width } = Dimensions.get('window');

 const Banner = () => {
     const [bannerData, setBannerData] = useState([])

     useEffect(() => {
         setBannerData([
             "https://i.ytimg.com/vi/y7BTrSTkhxc/maxresdefault.jpg", "https://brianair.files.wordpress.com/2013/05/superheroes-banner-495w.jpg", "https://www.ivacy.com/blog/wp-content/uploads/2016/02/Movies-releasing-this-year-Banner.jpg", "https://cdn.dribbble.com/users/1977381/screenshots/6674143/dribbble__avenger_copy_4x.jpg?compress=1&resize=400x300"]
             )

         return () => {
             setBannerData([])
         }
     }, [])

     return(
         <ScrollView>
 <View style={styles.container}>
             <View style={styles.swiper}>
                 <Swiper
                style={{ height: width / 2}}
                 showButtons={false}
                 autoplay={true}
                 autoplayTimeout={2}
                 >
                    {bannerData.map((item) => {
                        return (
                            <Image 
                            key={item}
                            style={styles.imageBanner}
                            resizeMode="contain"
                            source={{uri: item}}
                            />
                        );
                    })}
                 </Swiper>
                 <View style={{ height: 20 }}></View>
             </View>
         </View>

         </ScrollView>
        
     )
 }

 const styles = StyleSheet.create({
     container: {
         flex: 1,
         backgroundColor: '#021831'
     },
     swiper: {
         width: width,
         alignItems: 'center',
         marginTop: 10
     },
     imageBanner: {
         height: width / 2,
         width: width - 40,
         borderRadius: 10,
         marginHorizontal:20
     }
 })

 export default Banner;