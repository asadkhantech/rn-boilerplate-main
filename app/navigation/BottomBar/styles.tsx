import { RootState } from 'app/store/slice';
import React from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import images from 'utils/images';

export const useStyle = () => {
    const { colors } = useTheme();
    const isDark = useSelector((state: RootState) => state.theme.isDark);

    const styles = () =>
        StyleSheet.create({
            container: {
                //flex: 1,
                //alignItems: 'center',
                backgroundColor: colors.accent,
                flexDirection: "row", justifyContent: "space-between",
                paddingLeft: hp(3),
                paddingRight: hp(3)



            },
            home: {
                color: colors.heading,
            },
            wish: {
                color: colors.heading
            },
            search: {
                color: colors.heading
            },
            profile: {
                color: colors.heading
            }
        })
    return React.useMemo(() => styles(), [isDark]);
}