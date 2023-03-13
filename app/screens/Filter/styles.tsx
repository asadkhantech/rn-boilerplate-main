import { RootState } from 'app/store/slice';
import React from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

export const useStyle = () => {
    const { colors } = useTheme();
    const isDark = useSelector((state: RootState) => state.theme.isDark)

    const styles = () =>
        StyleSheet.create({
            container: {
                flex: 1,
                //alignItems: 'center',
                backgroundColor: colors.accent,

            },
            txt: {
                fontSize: hp(2.5),
                fontWeight: "bold",
                color: colors.heading
            },
            price: {
                marginHorizontal: wp(3.5),
                paddingTop: hp(1),
                color: colors.heading
            },
            rangebox: {
                borderWidth: wp(0.1),
                borderColor: colors.heading,
                borderRadius: wp(1),
                margin: wp(4),
                width: wp(20)
            }
        })

    return React.useMemo(() => styles(), [isDark]);
}