import { StyleSheet } from 'react-native';
import { RootState } from 'app/store/slice';
import { useTheme } from 'react-native-paper';
import React from 'react';
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


        })
    return React.useMemo(() => styles(), [isDark]);
}