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
                flex: 1,
                backgroundColor: colors.accent,
                justifyContent: "space-between",
            },
            buttonContainer: {
                paddingHorizontal: wp(3),
                bottom: hp(3)
            },
            Logo: {
                alignSelf: 'center',
                marginTop: hp(15)
            },
            First: {
                left: hp(7),
                position: 'absolute',
                height: hp(49),
                width: wp(34)
            },
            Third: {
                alignSelf: 'center',
                position: 'absolute',
                marginTop: hp(21),
                width: wp(52),
                height: hp(33),
                left: wp(21)


            },
            Second: {
                //marginLeft: wp(48),
                position: 'absolute',
                height: hp(38),
                width: wp(34),
                alignSelf: "flex-end",
                right: hp(7),





            }
        })
    console.log("==>", hp(33.5))


    return React.useMemo(() => styles(), [isDark]);
}