import React, { useState } from "react";
import { View, TouchableOpacity, Text, Image, TextInput } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { useTheme } from 'react-native-paper';
import { useSelector } from "react-redux";
import { useStyle } from './styles'
import images from "utils/images";
import { useNavigation } from '@react-navigation/native';
import { color } from "react-native-reanimated";

const Searchheader = () => {
    const navigation = useNavigation()
    const theme = useTheme()
    const isDarkTheme = useSelector((state) => state?.theme?.isDark)
    const styles = useStyle();
    const [Input, setInput] = useState('')


    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row" }}>
                <View style={{ display: 'flex', flexDirection: 'row', borderRadius: hp(2), height: hp(6), backgroundColor: "#F5F5F5", marginLeft: hp(3), marginRight: hp(7), }}>
                    <Image style={{ height: hp(6), marginLeft: hp(2) }} source={images.Searchsign} resizeMode={"contain"} />
                    <TextInput placeholder="Search Anything" placeholderTextColor={"#9CA3AF"} onChangeText={(text) => { setInput(text) }} value={Input} style={{ color: theme.colors.heading, width: "80%" }}></TextInput>
                </View>
                <TouchableOpacity>
                    {Input.length > 0 ? <Text style={styles.txt}>Search</Text> : <Text style={styles.txt}>Cancel</Text>}
                </TouchableOpacity>

            </View>


        </View>


    )
}
export default Searchheader