import { RootState } from 'app/store/slice';
import React from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
export const useStyle = () => {
    const { colors } = useTheme();
    const isDark = useSelector((state: RootState) => state.theme.isDark);
    const styles = () =>
        StyleSheet.create({
            container: {
                backgroundColor: colors.accent,
                flexDirection: "row",
                justifyContent: "space-between"
            },
            pic: {
                marginLeft: wp(2),
                height: hp(5),
                width: wp(30),
            },
            icn: {
                justifyContent: "flex-start",
            },
            Search: {
                marginRight: hp(1)
            },



        })
    return React.useMemo(() => styles(), [isDark]);
}
