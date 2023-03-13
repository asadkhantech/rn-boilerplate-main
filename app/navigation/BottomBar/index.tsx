import React from "react";
import { View, TouchableOpacity, Text, Image } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { useTheme } from 'react-native-paper';
import { useSelector } from "react-redux";
import { useStyle } from './styles'
import images from "utils/images";
import { useNavigation } from '@react-navigation/native';

export const BottomBar = (props) => {
    const isDarkTheme = useSelector((state) => state?.theme?.isDark)
    const theme = useTheme()
    const styles = useStyle();
    const navigation = props?.navigation;

    return (

        <View style={styles.container}>
            <TouchableOpacity style={{ alignItems: "center" }} onPress={() => {
                console.log("hhhhh");
                navigation.navigate("Home")
            }}>
                {isDarkTheme ? <Image source={images.Homew} /> : <Image source={images.Home} />}
                {/* <Image source={!isDarkTheme ? images.Home : images.Homew} /> */}
                <Text style={styles.home}>Home</Text>

            </TouchableOpacity>
            <TouchableOpacity style={{ alignItems: "center" }} onPress={() => {
                console.log("wish")
                navigation.navigate("Wishlist")
            }}>
                {isDarkTheme ? <Image source={images.Hartw} /> : <Image source={images.Hart} />}
                <Text style={styles.wish}>Wishlist</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ alignItems: "center" }} onPress={() => navigation.navigate("Search")}>
                {isDarkTheme ? <Image source={images.Searchw} /> : <Image source={images.Search} />}
                <Text style={styles.search}>Search</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ alignItems: "center" }} onPress={() => navigation.navigate("Profile")}>
                {isDarkTheme ? <Image source={images.Homew} /> : <Image source={images.Home} />}
                <Text style={styles.profile}>Profile</Text>
            </TouchableOpacity>
        </View>
    )
}

