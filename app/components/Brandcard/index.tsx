import React, { useCallback, useRef, useMemo } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native';
// import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import { useStyle } from './styles';
import Header from 'components/Header';
import { useTheme } from 'react-native-paper';
import { useSelector } from 'react-redux';
import images from 'utils/images';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { exp } from 'react-native-reanimated';

const Brandcard = () => {
    const theme = useTheme()

    const data = [
        {

            name: 'All',
        },
        {
            image: images.Nike,
        },
        {
            image: images.JJ
        },
        {
            image: images.Ck
        },
        {
            image: images.Bonaza
        },
    ];

    return (
        <FlatList
            horizontal
            data={data}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
                <TouchableOpacity style={{
                    borderRadius: wp(50), borderWidth: wp(0.2), height: wp(18), width: wp(18), justifyContent: "center", borderColor: theme.colors.heading,
                    alignItems: "center", marginEnd: wp(2), backgroundColor: "white",
                }}>
                    {item?.name && <Text style={{ fontWeight: "bold", color: theme.colors.signin }}>{item.name}</Text>}
                    <Image source={item.image} />
                </TouchableOpacity>
            )}
            style={{ maxHeight: wp(19) }}
        />

    )
}

export default Brandcard