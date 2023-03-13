import React, { useCallback, useRef, useMemo } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native';
// import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import { useStyle } from './styles';
import Header from 'components/Header';
import { useTheme } from 'react-native-paper';
import { useSelector } from 'react-redux';
import images from 'utils/images';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'


const Categorycard = () => {
    const theme = useTheme()
    const cat = [
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
        <FlatList
            horizontal
            data={cat}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
                <TouchableOpacity style={{
                    borderRadius: wp(2), borderWidth: wp(0.2), justifyContent: "center",
                    alignItems: "center", marginEnd: wp(2), marginTop: hp(3), borderColor: theme.colors.heading, paddingHorizontal: wp(3),
                    backgroundColor: index == 0 ? theme.colors.heading : theme.colors.Signin, paddingVertical: hp(0.8)
                }}>

                    <Text style={{
                        fontWeight: "bold", color: index == 0 ? theme.colors.Signin : theme.colors.heading,

                    }}>{item.name}</Text>
                </TouchableOpacity>
            )}

            style={{ maxHeight: wp(16) }}
        />
    )

}
export default Categorycard