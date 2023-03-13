import { RootState } from 'app/store/slice';
import React from 'react';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { useTheme } from 'react-native-paper';
export const useStyle = () => {
    const isDark = useSelector((state: RootState) => state.theme.isDark);
    const theme = useTheme();
    const styles = () =>
        StyleSheet.create({
            container: {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: isDark ? 'black' : 'white',
            },
            subContainer: {
                marginTop: hp(-3),
                flexDirection: 'row-reverse',

                // backgroundColor: colors.primary,
                borderRadius: 20,
                alignItems: 'center',
                //borderWidth: 2,
                padding: 20,
                borderColor: isDark ? 'teal' : 'black',
            },

            login: {
                padding: 8,
            },
            forgot: {
                marginTop: 5,
            },
            labelStyle: {
                padding: 10,
                fontSize: 15,
                color: isDark ? 'white' : 'black',
            },
            headerImage: {

                marginTop: hp(4)
            },
            txt: {

                fontSize: wp(7),
                fontWeight: 'bold',
                marginTop: hp(3),
                color: theme.colors.heading
            },
            marg: {
                width: wp(32),
                height: hp(0.1),
                backgroundColor: theme.colors.heading,
                alignItems: 'center'
            },
            tx: {
                fontSize: hp(2),
                color: theme.colors.heading,
                height: hp(3),
                alignItems: 'center',

            },
            account: {
                color: theme.colors.heading
            },
            up: {

                fontWeight: 'bold',
                color: theme.colors.heading
            }

        });
    return React.useMemo(() => styles(), [isDark]);
};

console.log(wp(8));
