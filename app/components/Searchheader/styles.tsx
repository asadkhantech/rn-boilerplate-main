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
                backgroundColor: colors.accent,
                paddingTop: hp(3),


            },
            txt: {
                marginLeft: hp(-5),
                paddingTop: hp(1),
                color: colors.heading,
                fontSize: hp(2)
            }
        })

    return React.useMemo(() => styles(), [isDark]);
}