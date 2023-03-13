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
                alignItems: 'center',
                backgroundColor: colors.accent,

            },
            headerImage: {

                marginTop: hp(4)
            },
            txt: {
                fontSize: wp(7),
                fontWeight: 'bold',
                marginTop: hp(3),
                color: colors.heading,
                paddingRight: wp(8)
            },
            line: {
                color: colors.heading,
                //paddingRight: wp(7),
                fontSize: hp(1.5),
                lineHeight: hp(3),
            },
            otp: {
                borderColor: "black",
                margin: wp(3),
                borderWidth: wp(0.2),
                width: wp(11),
                bottom: hp(18),


            },
            cod: {
                fontSize: wp(4),
                //fontWeight: 'bold',
                marginTop: hp(7),
                color: colors.heading,
                textDecorationLine: 'underline',
                alignSelf: 'center'



            }



        })


    return React.useMemo(() => styles(), [isDark]);
}