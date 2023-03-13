import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native'
import images from 'utils/images';
import { CustomInput } from 'components/CustomInput';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { useDispatch } from 'react-redux';
import { Custombutton } from 'components/Custombutton';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { color } from 'react-native-reanimated';
import { useTheme } from 'react-native-paper';
import { useStyle } from "./style";

const SubHeader = () => {
    const styles = useStyle()
    const theme = useTheme()


    return (
        <View style={styles.container} >
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: hp(4) }}>
                <View>
                    <Text style={styles.new}> New Arrivals </Text>
                </View>
                <View>
                    <TouchableOpacity>
                        <Text style={styles.view}>View All</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
export default SubHeader