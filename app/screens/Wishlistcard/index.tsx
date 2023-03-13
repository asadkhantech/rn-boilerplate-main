import React, { useState } from "react";
import { View, TouchableOpacity, Text, Image, TouchableOpacityProps } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { useTheme } from 'react-native-paper';
import { useSelector } from "react-redux";
import { useStyle } from './styles';
import images from "utils/images";
import { useNavigation } from '@react-navigation/native';
import Wishheader from "components/Wishlistheader";
import Productcard from "components/Productcard";

interface Props extends TouchableOpacityProps {
    textStyle?: any;
    image?: any;
    heart?: boolean;
    orignalprice?: boolean
    Delete?: boolean

}

const Wishlistcard = (props: Props) => {
    const { Delete = false, textStyle, image, onPress, heart = false, orignalprice = false } = props;
    const isDarkTheme = useSelector((state) => state?.theme?.isDark)
    const theme = useTheme()
    const [Count, setCount] = useState(1)


    return (
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: hp(3) }}>
            <View style={{ flexDirection: "row", paddingHorizontal: wp(2) }}>
                <View>
                    <Image style={{ height: hp(12), width: wp(28), borderRadius: hp(1) }} source={images.Cardphoto} resizeMode={"contain"} />
                </View>
                <View style={{ marginTop: hp(1), marginHorizontal: wp(4) }}>
                    <Text style={{ color: theme.colors.heading, fontSize: hp(2), fontWeight: "bold" }}>The Marco Jaco</Text>
                    <Text style={{ color: theme.colors.heading, fontSize: hp(1.5) }}>2 Piece Fabric</Text>
                    <View style={{ flexDirection: "row", }}>
                        <Text style={{ color: theme.colors.heading, fontSize: hp(2), paddingTop: hp(2), fontWeight: "bold" }}>Rs 1950.00</Text>
                        {orignalprice && <Text style={{ marginHorizontal: wp(3), color: "red", fontSize: hp(2), paddingTop: hp(2), fontWeight: "bold", textDecorationLine: "line-through" }}>Rs 2950.00</Text>}
                    </View>
                </View>

            </View>

            {heart && <TouchableOpacity>
                <Image style={{ height: hp(5), width: wp(5), marginRight: wp(3) }} source={images.Redheart} resizeMode={"contain"} />
            </TouchableOpacity>}

            {Delete &&
                <View style={{ justifyContent: "space-between", alignItems: "center" }}>

                    <TouchableOpacity style={{ marginLeft: wp(3) }}>
                        <Image style={{ height: hp(2), width: hp(2), }} source={isDarkTheme ? images.Deletew : images.Delete} resizeMode={"contain"} />
                    </TouchableOpacity>

                    <View style={{ flexDirection: "row", backgroundColor: "#EEEEEE", borderWidth: wp(0.8), borderRadius: wp(9), borderColor: "#EEEEEE", }}>
                        <TouchableOpacity onPress={() => { setCount(Count + 1) }} style={{ justifyContent: "center", alignItems: "center", width: wp(6), height: wp(8) }}>
                            <Text style={{}}>+</Text>
                        </TouchableOpacity>
                        <Text style={{ width: wp(7), textAlignVertical: "center", textAlign: "center" }}>{Count}</Text>

                        <TouchableOpacity onPress={() => { setCount(Count - 1) }} style={{ justifyContent: "center", alignItems: "center", width: wp(6), height: wp(8) }}>
                            <Text style={{}}>-</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            }



        </View>
    )
}
export default Wishlistcard