import { RootState } from 'app/store/slice';
import React from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
export const useStyle = () => {
    const { colors } = useTheme();
    const isDark = useSelector((state: RootState) => state.theme.isDark)
    const styles = () => StyleSheet.create({
        container: {
            flex: 1,
            //alignItems: 'center',
            backgroundColor: colors.accent,
            //paddingBottom: hp(2)
            // bottom: hp(4)
            paddingHorizontal: hp(1)

        },
        imageContainer: {
            minHeight: hp(55)
        },
        picone: {
            //bottom: hp(4),
            // marginHorizontal: hp(1),
            position: "absolute",
            height: hp(55),
            width: wp(85),
            borderRadius: wp(2),

        }
    })

    return React.useMemo(() => styles(), [isDark]);
}
