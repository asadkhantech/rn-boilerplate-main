import { StyleSheet } from 'react-native';
import { RootState } from 'app/store/slice';
import { useTheme } from 'react-native-paper';
import React from 'react';
import { useSelector } from 'react-redux';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'


export const useStyle = () => {
    const { colors } = useTheme();
    const isDark = useSelector((state: RootState) => state.theme.isDark);

    const styles = () =>
        StyleSheet.create({
            container: {
                flex: 1,
                backgroundColor: isDark ? 'black' : 'white',
                padding: hp(2.5),

            },
            title: {
                fontWeight: 'bold',
                color: colors.primary,
                fontSize: wp(4),
                paddingBottom: hp(2)
            },
            txt: {
                fontSize: hp(2),
                fontWeight: "bold",
                color: colors.heading,
            },

            new: {
                fontSize: hp(2.5),
                bottom: hp(2.5),
                color: colors.heading,
                fontWeight: 'bold'


            }
        });
    return React.useMemo(() => styles(), [isDark]);
};
