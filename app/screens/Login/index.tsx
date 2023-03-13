import { useNavigation } from '@react-navigation/native';
import { CustomInput } from 'components/CustomInput';
import { Custombutton } from 'components/Custombutton';
import React, { useState } from 'react';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { useTheme } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import images from 'utils/images';
import * as loginActions from './../../store/slice/userSlice';
import { useStyle } from './styles';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { useSelector } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const Login: React.FC = () => {
  // const id = useSelector((state: RootState) => state.user.id);
  const dispatch = useDispatch();
  const styles = useStyle();
  const theme = useTheme();
  const navigation = useNavigation<any>();
  const onLogin = () => dispatch(loginActions.onLogin('test'));
  const onForgot = () => navigation.navigate('ForgotPassword');
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const isDarkTheme = useSelector((state) => state?.theme?.isDark)
  console.log({ isDarkTheme });



  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flex: 1,
          backgroundColor: theme.colors.accent,
        }}
        extraHeight={200}>
        <Image source={images.Login} style={styles.headerImage} />
        <Text style={styles.txt}>Let's Sign In</Text>

        <CustomInput
          onChangeText={(text) => setEmail(text)}
          value={Email}
          placeholder="Email,Phone or Username "
          keyboardType="email-address"
          inputStyle={{ marginTop: hp(3) }}
        />
        <CustomInput
          onChangeText={(text) => setPassword(text)}
          value={Password}
          placeholder="Enter Password "
          secureTextEntry={true}
          keyboardType="name-phone-pad"
          inputStyle={{ marginTop: hp(3) }}

        />
        <View style={styles.subContainer}>
          <TouchableOpacity style={styles.forgot} onPress={onForgot}>
            <Text style={styles.labelStyle}>{'Forgot Password ?'}</Text>
          </TouchableOpacity>
        </View>

        <Custombutton
          label='Sign In'
          onPress={onLogin}
        />
        <View style={{ paddingTop: 25, flexDirection: "row", justifyContent: "center", alignItems: 'center', marginRight: wp(9) }}>
          <View style={styles.marg} />
          <Text style={styles.tx}>or</Text>
          <View style={styles.marg} />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-evenly", width: wp(80), alignItems: 'center', paddingTop: hp(2) }}>
          <TouchableOpacity>
            <Image source={images.Google} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={images.Facebook} />
          </TouchableOpacity>

          <TouchableOpacity>
            {isDarkTheme ? <Image source={images.Applew} /> : <Image source={images.Apple} />}

          </TouchableOpacity>
        </View>
        <View>

          <View>
            <TouchableOpacity onPress={() => navigation.navigate("Signup")} style={{ flexDirection: 'row', alignSelf: "center", paddingTop: hp(2.3) }}>
              <Text style={styles.account}>Don't have an account?</Text>
              <Text style={styles.up}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View >
  );
};

export default Login;
