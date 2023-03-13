import { StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
import React from 'react';
import { RootState } from 'app/store/slice';
import { useSelector } from 'react-redux';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

export const useStyle = () => {
    const theme = useTheme();
    const isDark = useSelector((state: RootState) => state.theme.isDark);

    const styles = () =>
        StyleSheet.create({
            container: {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: isDark ? 'black' : 'white',
            },
            headerImage: {
                //width: wp(81),
                // height: hp(28),
                marginTop: hp(4)
            },
            txt: {
                fontSize: wp(7),
                fontWeight: 'bold',
                marginTop: hp(3),
                color: theme.colors.heading
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
