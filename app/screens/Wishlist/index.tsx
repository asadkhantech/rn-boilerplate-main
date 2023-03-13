import React from "react";
import { View, TouchableOpacity, Text, Image } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { useTheme } from 'react-native-paper';
import { useSelector } from "react-redux";
import { useStyle } from './styles';
import images from "utils/images";
import { useNavigation } from '@react-navigation/native';
import Wishheader from "components/Wishlistheader";
import Productcard from "components/Productcard";
import Wishlistcard from "screens/Wishlistcard";


const Wishlist = () => {
    const isDarkTheme = useSelector((state) => state?.theme?.isDark)
    const theme = useTheme()
    const styles = useStyle();


    return (
        <View style={styles.container}>
            <Wishheader />
            <Wishlistcard
                heart={true}
                orignalprice={true}
            />


        </View>
    )
}
export default Wishlist