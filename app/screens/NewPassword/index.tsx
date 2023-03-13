import React, { useState } from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { useTheme } from 'react-native-paper';
import { useStyle } from './styles';
import images from 'utils/images';
import { CustomInput } from 'components/CustomInput';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { Custombutton } from 'components/Custombutton';
import Code from 'screens/Code';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const NewPassword: React.FC = () => {
    const styles = useStyle();
    const [Password, setPassword] = useState()
    const [Confirm, setConfirm] = useState()



    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
                <Image source={images.Login} style={styles.headerImage} />
                <Text style={styles.txt}>Create Password</Text>
                <CustomInput
                    onChangeText={(text) => setPassword(text)}
                    value={Password}
                    placeholder='New Password'
                    secureTextEntry={true}
                    keyboardType="name-phone-pad"
                    inputStyle={{ marginTop: hp(3) }}
                />
                <CustomInput
                    onChangeText={(text) => setConfirm(text)}
                    value={Confirm}
                    placeholder='Confirm Password'
                    secureTextEntry={true}
                    keyboardType="name-phone-pad"
                    inputStyle={{ marginTop: hp(3) }}
                />

                <Custombutton
                    label='Save'
                    containerStyles={{ marginTop: hp(30), }}
                />
            </KeyboardAwareScrollView>

        </View>
    )
}

export default NewPassword