import React from "react";
import { View, TouchableOpacity, Text, Image, ViewBase, ScrollView, TextInput, FlatList } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { useTheme } from 'react-native-paper';
import { useSelector } from "react-redux";
import images from "utils/images";
import { useNavigation } from '@react-navigation/native';
import Searchheader from "components/Searchheader";
import { color } from "react-native-reanimated";
import Profileheader from "components/Profileheader";
import { useStyle } from "./style";
import Wishlistcard from "screens/Wishlistcard";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const Cart = () => {
    const isDarkTheme = useSelector((state) => state?.theme?.isDark)
    const theme = useTheme()
    const styles = useStyle();



    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView>
                <Profileheader
                    label="Cart"
                    button="Done"
                />
                <View style={{ padding: hp(2) }}>
                    <Text style={{ fontSize: hp(3), fontWeight: "bold", color: theme.colors.heading, marginHorizontal: wp(3) }}>Cart</Text>

                    <Wishlistcard
                        Delete={true} />

                    <Wishlistcard
                        Delete={true} />
                    <Wishlistcard
                        Delete={true} />

                </View>
                <View style={{ flexDirection: "row", paddingTop: hp(5), }}>
                    <View style={{ borderTopLeftRadius: wp(3), borderTopRightRadius: wp(1), borderBottomLeftRadius: wp(3), borderWidth: wp(0.5), width: wp(60), marginStart: wp(6), borderColor: isDarkTheme ? "#282828" : "#F3F3F3" }}>
                        <TextInput style={{ padding: wp(3), color: theme.colors.heading }} placeholder={"Promo code"} placeholderTextColor={isDarkTheme ? "#FFFFFF" : "#AAAAAA"} />
                    </View>

                    <TouchableOpacity>
                        <View style={{ borderBottomEndRadius: wp(3), borderTopEndRadius: wp(3), backgroundColor: theme.colors.heading, borderWidth: wp(1), width: wp(30), marginEnd: wp(2), borderColor: isDarkTheme ? "#F3F3F3" : "#282828" }}>
                            <Text style={{ padding: wp(3), color: theme.colors.Signin, alignSelf: "center" }}> Apply</Text>
                        </View>
                    </TouchableOpacity>

                </View>
            </KeyboardAwareScrollView>
        </View>


    )
}
export default Cart