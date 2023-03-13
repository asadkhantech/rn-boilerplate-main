import React, { useState } from 'react';
import { Text, TouchableOpacity, View, Image, } from 'react-native';
import { useTheme } from 'react-native-paper';
import { useStyle } from './styles';
import images from 'utils/images';
import { CustomInput } from 'components/CustomInput';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { Custombutton } from 'components/Custombutton';
import OtpInputs from 'react-native-otp-inputs';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


const Code: React.FC = () => {
    const { colors } = useTheme();
    const styles = useStyle();
    const navigation = useNavigation();

    return (

        <View style={styles.container}>
            <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>

                <Image source={images.Login} style={styles.headerImage} />
                <Text style={styles.txt}>Enter 4 Digit Code</Text>
                <Text style={styles.line}>Enter the 4 digit code that you recived on  {'\n'} your Email and Phone number </Text>

                <OtpInputs
                    handleChange={(code) => console.log(code)}
                    numberOfInputs={4}
                    autofillFromClipboard={true}
                    inputStyles={[styles.otp, { color: colors.heading, borderColor: colors.heading, textAlign: 'center', borderRadius: hp(1), width: wp(12) }]}
                    style={{ flexDirection: 'row', top: hp(20), alignSelf: 'center' }}

                />
                <TouchableOpacity>
                    <Text style={styles.cod}>Resend the code</Text>
                </TouchableOpacity>

                <Custombutton
                    label='Verify'
                    containerStyles={{ marginTop: hp(24), }}
                    onPress={() => {
                        navigation.navigate("NewPassword")
                    }}
                />
            </KeyboardAwareScrollView>

        </View>

    )
}
export default Code;