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


const DetailProduct = () => {
    const styles = useStyle()
    const isDarkTheme = useSelector((state) => state?.theme?.isDark)
    const theme = useTheme()

    const pic = [
        {
            image: images.Internalone
        },
        {
            image: images.Internaltwo
        },
        {
            image: images.Internalthird
        },
        {
            image: images.Internalforth
        },
    ]

    const renderSmallImages = () => {
        return (
            <Image source={images.Internalone} resizeMode="contain" />
        )
    }

    return (
        <View style={styles.container} >
            <View style={styles.imageContainer}>
                <Image style={styles.picone} source={images.Picone} />

                <TouchableOpacity>
                    <Text style={{ backgroundColor: "red", width: wp(19), lineHeight: hp(3.5), textAlign: "center", height: hp(4), borderRadius: hp(1), marginHorizontal: hp(28), marginTop: hp(2), }}>20% OFF</Text>
                </TouchableOpacity>

                <View style={{ flexDirection: "row", marginHorizontal: hp(1), justifyContent: "space-evenly", marginTop: hp(43) }}>
                    {renderSmallImages()}
                    {renderSmallImages()}
                    {renderSmallImages()}
                </View>

            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", paddingTop: hp(2.5) }}>
                <View>
                    <TouchableOpacity style={{
                        borderRadius: wp(45), borderWidth: wp(0.2), height: wp(6), width: wp(6), justifyContent: "center", alignItems: "center", backgroundColor: "white"
                    }}>
                        <Image style={{ height: hp(2) }} source={images.J} resizeMode={"contain"} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: "row", alignSelf: "flex-end", paddingHorizontal: hp(3) }}>
                    <TouchableOpacity style={{ paddingHorizontal: wp(1) }}>
                        {isDarkTheme ? <Image source={images.Likew} resizeMode={"contain"} /> : <Image source={images.Like} resizeMode={"contain"} />}
                    </TouchableOpacity >
                    <TouchableOpacity style={{ paddingHorizontal: wp(1) }}>
                        {isDarkTheme ? <Image source={images.Sendw} resizeMode={"contain"} /> : <Image style={{ height: hp(3) }} source={images.Send} resizeMode={"contain"} />}
                    </TouchableOpacity>
                    <TouchableOpacity style={{ paddingHorizontal: wp(3) }}>
                        {isDarkTheme ? <Image source={images.Heartw} resizeMode={"contain"} /> : <Image source={images.Heart} resizeMode={"contain"} />}
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", paddingTop: hp(2.5) }}>
                <View>
                    <Text style={{ fontWeight: "bold", color: theme.colors.heading, fontSize: hp(2) }}> The Marc Jacobs</Text>
                </View>

                <View style={{ marginHorizontal: hp(3) }}>
                    <Text style={{ fontWeight: "bold", color: theme.colors.heading, fontSize: hp(2) }}> RS 1950.00</Text>
                </View>

            </View>

            <View style={{ flexDirection: "row", justifyContent: "space-between", paddingTop: hp(2) }}>
                <View>
                    <Text style={{ color: theme.colors.heading, fontSize: hp(1.5), color: theme.colors.heading, }}> 2 Piece Fabric</Text>
                </View>

                <View style={{ marginHorizontal: hp(3) }}>
                    <Text style={{ fontWeight: "bold", color: "red", fontSize: hp(1.5), textDecorationLine: "line-through" }}> RS 2950.00</Text>
                </View>

            </View>
            <View style={{ paddingTop: hp(2) }}>
                <Text style={{ fontWeight: 'bold', color: theme.colors.heading, fontSize: hp(1.5), marginBottom: hp(3) }}> Color: Maroon</Text>
            </View>
        </View >
    )

}
export default DetailProduct
