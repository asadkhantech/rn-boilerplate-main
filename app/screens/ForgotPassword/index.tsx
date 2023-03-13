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

const ForgotPassword: React.FC = () => {
  const navigation = useNavigation();
  const theme = useTheme();
  const styles = useStyle();
  const goBack = () => navigation.goBack();
  const [Email, setEmail] = useState()

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <Image source={images.Login} style={styles.headerImage} />
        <Text style={styles.txt}>Forgot Password</Text>

        <CustomInput
          onChangeText={(text) => setEmail(text)}
          value={Email}
          placeholder="Enter your email or Phone number  "
          keyboardType="email-address"
          inputStyle={{ marginTop: hp(3) }} />
        <TouchableOpacity>
          <Text style={styles.line}> You 'll recive 4 digit code to verify  next</Text>
        </TouchableOpacity>

        <Custombutton
          label='continue'
          containerStyles={{ marginTop: hp(33), }}
          onPress={() => {
            navigation.navigate("Code")
          }}
        />
      </KeyboardAwareScrollView>
    </View>
  );
};

export default ForgotPassword;
