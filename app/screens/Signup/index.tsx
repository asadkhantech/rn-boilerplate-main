import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useStyle } from './styles';
import images from 'utils/images';
import { CustomInput } from 'components/CustomInput';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { useDispatch } from 'react-redux';
import { Custombutton } from 'components/Custombutton';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
const Signup: React.FC = () => {
  const navigation = useNavigation()
  const styles = useStyle();
  const [Name, setName] = useState()
  const [Phone, setPhone] = useState()
  const [Email, setEmail] = useState()
  const [Password, setPassword] = useState()
  const dispatch = useDispatch();
  const onLogin = () => dispatch(loginActions.onLogin('test'));
  const isDarkTheme = useSelector((state) => state?.theme?.isDark)

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView extraHeight={200}
        showsVerticalScrollIndicator={false}>
        <Image source={images.Login} style={styles.headerImage} />
        <Text style={styles.txt}>Let's Sign Up</Text>

        <CustomInput
          onChangeText={(text) => setName(text)}
          value={Name}
          placeholder="Name "
          keyboardType="email-address"
          inputStyle={{ marginTop: hp(3) }}
        />

        <CustomInput
          onChangeText={(text) => setPhone(text)}
          value={Phone}
          placeholder="Phone "
          keyboardType="name-phone-pad"
          inputStyle={{ marginTop: hp(2) }}
        />

        <CustomInput
          onChangeText={(text) => setEmail(text)}
          value={Email}
          placeholder="Email "
          keyboardType="email-address"
          inputStyle={{ marginTop: hp(2) }}
        />
        <CustomInput
          onChangeText={(text) => setPassword(text)}
          value={Password}
          placeholder="Password "
          secureTextEntry={true}
          keyboardType="name-phone-pad"
          inputStyle={{ marginTop: hp(2) }}

        />

        <Custombutton
          label='Sign Up'
          onPress={onLogin}
          containerStyles={{ marginTop: hp(4), }}
        />

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
          <TouchableOpacity onPress={() => navigation.navigate("Login")} style={{ flexDirection: 'row', alignSelf: "center", paddingTop: hp(2.3) }}>
            <Text style={styles.account}>Already have an account?</Text>
            <Text style={styles.up}>SignIn</Text>
          </TouchableOpacity>
        </View>



      </KeyboardAwareScrollView>


    </View>
  );
};

export default Signup;
