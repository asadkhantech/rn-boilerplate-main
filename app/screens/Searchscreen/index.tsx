import React from "react";
import { View, TouchableOpacity, Text, Image, ViewBase, ScrollView } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { useTheme } from 'react-native-paper';
import { useSelector } from "react-redux";
import { useStyle } from './styles'
import images from "utils/images";
import { useNavigation } from '@react-navigation/native';
import Searchheader from "components/Searchheader";
import { color } from "react-native-reanimated";

const Searchscreen = () => {
    const navigation = useNavigation()
    const theme = useTheme()
    const isDarkTheme = useSelector((state) => state?.theme?.isDark)
    const styles = useStyle();
    const persons = [
        {
            id: "1",
            name: "All",
        },
        {
            id: "2",
            name: "Kids Wear",
        },
        {
            id: "3",
            name: "Men Wear",
        },
        {
            id: "4",
            name: "Women Wear",
        },
        {
            id: "5",
            name: " Adults Wear",
        },
        {
            id: "6",
            name: "Sports Wear",
        },
        {
            id: "7",
            name: "Tops",
        },
        {
            id: "8",
            name: "T-shirts",
        },
        {
            id: "9",
            name: "Pants",
        },
        {
            id: "10",
            name: "Shoes",
        },
    ];
    return (
        <View style={styles.container}>
            <ScrollView>
                <Searchheader />
                <View style={{ paddingTop: hp(3), paddingLeft: hp(4) }}>
                    <Text style={{ fontWeight: "bold", fontSize: hp(2.5), color: theme.colors.heading }}>Popular Searches</Text>
                </View>
                <View style={{ flexDirection: "row", flexWrap: "wrap" }}>

                    {persons.map((person) => {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate("Filter")}>
                                <View style={{ borderWidth: wp(0.2), borderColor: theme.colors.heading, borderRadius: wp(3), padding: wp(1.5), margin: wp(1.5), }}>
                                    <Text style={{ color: theme.colors.heading }}>{person.name}</Text>
                                </View>
                            </TouchableOpacity>
                        )

                    })}


                </View>
            </ScrollView>
        </View>


    )
}
export default Searchscreen