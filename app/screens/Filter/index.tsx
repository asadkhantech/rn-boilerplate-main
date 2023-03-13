import React from "react";
import { View, TouchableOpacity, Text, Image, ViewBase, ScrollView, TextInput, FlatList } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { useTheme } from 'react-native-paper';
import { useSelector } from "react-redux";
import { useStyle } from './styles'
import images from "utils/images";
import { useNavigation } from '@react-navigation/native';
import Searchheader from "components/Searchheader";
import { color } from "react-native-reanimated";
import Profileheader from "components/Profileheader";
import Categorycard from "components/Categorycard";


const Filter = () => {
    const navigation = useNavigation()
    const theme = useTheme()
    const isDarkTheme = useSelector((state) => state?.theme?.isDark)
    const styles = useStyle();
    const Color = [
        {
            value: 'red',
            id: 1
        }, {
            value: 'red',
            id: 1
        }, {
            value: 'red',
            id: 1
        }, {
            value: 'black',
            id: 1
        },

    ]
    const Size = [
        {
            value: 'S',
            id: 1
        }, {
            value: 'M',
            id: 2
        }, {
            value: 'L',
            id: 3
        }, {
            value: 'XL',
            id: 4
        },
        {
            value: 'XXL',
            id: 5
        },
    ]

    const brands = [
        {
            image: images.Nike
        },
        {
            image: images.JJ
        },
        {
            image: images.Ck
        },
        {
            image: images.Bonaza
        }
    ]

    const categories = [
        {
            name: 'All',
        },
        {
            name: 'Kids Wear',
        },
        {
            name: 'Men Wear',
        },
        {
            name: 'Women Wear',
        },
        {
            name: 'Adults Wear',
        },
    ]



    return (
        <View style={styles.container}>
            <Profileheader
                label="Filter"
                button="Apply"
            />
            <View>
                <View style={{ paddingTop: hp(3), paddingHorizontal: hp(1.5) }}>
                    <Text style={styles.txt}> Price Range </Text>
                </View>

                <View style={{ flexDirection: "row", justifyContent: "space-between", }}>

                    <TouchableOpacity>
                        <Text style={styles.price}> Rs 500</Text>
                        <View style={styles.rangebox}>
                            <TextInput style={{ color: theme.colors.heading, }} placeholder="Min price" placeholderTextColor={theme.colors.heading} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style={styles.price}> Rs 500000</Text>
                        <View style={styles.rangebox}>
                            <TextInput style={{ color: theme.colors.heading, }} placeholder="Max price" placeholderTextColor={theme.colors.heading} />
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{ paddingTop: hp(3), marginHorizontal: wp(3) }}>
                    <Text style={styles.txt}> Colours</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                    {/* <View style={{ width: wp(5), height: wp(5), borderRadius: wp(50), borderWidth: wp(0.2), borderColor: theme.colors.heading, marginHorizontal: wp(4), marginTop: hp(2) }}>
                        {isDarkTheme ? <Image style={{ height: hp(2), alignSelf: "center" }} source={images.Tickw} /> : <Image style={{ height: hp(2), alignSelf: "center" }} source={images.Tick} resizeMode={"contain"} />}
                    </View> */}
                    <FlatList style={{ marginHorizontal: wp(3.5) }}
                        horizontal
                        data={Color}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => (
                            <View style={{ backgroundColor: item.value, width: wp(5), height: wp(5), borderRadius: wp(50), borderWidth: wp(0.2), borderColor: theme.colors.heading, marginTop: hp(2), marginRight: wp(3) }}>

                            </View>
                        )
                        }
                    />

                </View>
                <View style={{ paddingTop: hp(2), marginHorizontal: wp(3) }}>
                    <Text style={styles.txt}> Sizes</Text>
                </View>
                <FlatList style={{ marginHorizontal: wp(3.5) }}
                    horizontal
                    data={Size}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity>
                            <View style={{ justifyContent: "center", alignItems: "center", width: wp(9), height: wp(9), borderRadius: wp(50), borderWidth: wp(0.2), borderColor: theme.colors.heading, marginTop: hp(2), marginRight: wp(3) }}>
                                <Text style={{ color: theme.colors.heading }}>{item.value}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                    }
                />
                <View style={{ paddingTop: hp(2.5), marginHorizontal: wp(3) }}>
                    <Text style={styles.txt}> Brands</Text>
                </View>
                <FlatList style={{ marginHorizontal: wp(3.5) }}
                    horizontal
                    data={brands}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity>
                            <View style={{ backgroundColor: "white", justifyContent: "center", alignItems: "center", width: wp(12), height: wp(12), borderRadius: wp(50), borderWidth: wp(0.2), borderColor: theme.colors.heading, marginTop: hp(2), marginRight: wp(3) }}>
                                <Image source={item.image} />
                            </View>
                        </TouchableOpacity>
                    )
                    }
                />
            </View>
            <View style={{ paddingTop: hp(2.5), marginHorizontal: wp(3) }}>
                <Text style={styles.txt}>Categories</Text>
            </View>

            <View style={{ flexDirection: "row", flexWrap: "wrap", marginLeft: wp(3), paddingTop: hp(3) }}>
                {categories.map((cat) => {
                    return (
                        <TouchableOpacity>
                            <View style={{ borderWidth: wp(0.2), borderColor: theme.colors.heading, borderRadius: wp(3), padding: wp(1.5), margin: wp(1.5) }}>
                                <Text style={{ color: theme.colors.heading }}>{cat.name}</Text>
                            </View>
                        </TouchableOpacity>
                    )

                })}
            </View>

        </View >



    )
}
export default Filter