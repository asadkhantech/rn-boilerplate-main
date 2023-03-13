import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useStyle } from "./style";
import images from 'utils/images';
import { CustomInput } from 'components/CustomInput';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { useDispatch } from 'react-redux';
import { Custombutton } from 'components/Custombutton';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { color } from 'react-native-reanimated';
import { useTheme } from 'react-native-paper';

const Productcard = () => {
    const styles = useStyle()
    const isDarkTheme = useSelector((state) => state?.theme?.isDark)
    const theme = useTheme()

    console.log("000000", hp(27))



    return (
        <View style={styles.container}>


            <View>
                <Image style={{ borderRadius: hp(2), height: hp(33), width: wp(41) }} source={images.Card} />
                <Text style={{ fontWeight: "bold", color: theme.colors.heading, fontSize: hp(2), paddingTop: hp(2) }}> The Marc Jacobs</Text>
                <Text style={{ color: theme.colors.heading, fontSize: hp(1.5), color: theme.colors.heading, }}> 2 Piece Fabric</Text>
                <Text style={{ fontWeight: "bold", color: theme.colors.heading, fontSize: hp(2) }}> RS 1950.00</Text>

            </View>

        </View>




    )

}
export default Productcard