import Profileheader from 'components/Profileheader';
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { useStyle } from './styles';
import images from "utils/images";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { CustomInput } from 'components/CustomInput';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const Profile: React.FC = () => {
  const styles = useStyle();
  const [name, setname] = useState('')
  const [phone, setphone] = useState('')
  const [mail, setmail] = useState('')
  const [password, setpassword] = useState('')
  const [profileImage, setProfileImage] = useState('')

  const cameraimage = async () => {
    const result = await launchCamera({
      mediaType: 'photo',
      quality: 1,
      cameraType: "back"
    })
    console.log(result?.assets[0]);
    setProfileImage(result?.assets[0]?.uri)
  }
  const galleryimage = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      quality: 1,
    })

    console.log(result?.assets[0]);
    setProfileImage(result?.assets[0]?.uri)
  }

  const selectimage = async () => {

    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'gallery',
        onPress: () => { galleryimage() },
        style: 'cancel',
      },
      { text: 'camera', onPress: () => { cameraimage() } }
    ])
  }
  return (
    <View style={styles.container}>
      <Profileheader
        label='Profile'
        button='Done' />
      <KeyboardAwareScrollView extraHeight={100}
        showsVerticalScrollIndicator={false}>
        <View style={{ width: wp(30), height: wp(30), alignSelf: "center", alignItems: "flex-end", justifyContent: "flex-end" }}>
          <Image style={{ width: wp(30), height: wp(30), position: "absolute", borderRadius: wp(15), borderColor: "white" }} source={profileImage == '' ? images.Profile : { uri: profileImage }} resizeMode={"contain"} />

          <TouchableOpacity style={{
            backgroundColor: "black", width: wp(7), height: wp(7), alignItems: "center", justifyContent: "center",
            borderRadius: wp(4), borderWidth: 2, borderColor: "white",
            marginBottom: wp(3)
          }} onPress={selectimage}>
            <Image source={images.Camera} />
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: "center", paddingTop: hp(8) }}>

          <CustomInput
            onChangeText={(text) => setname(text)}
            value={name}
            placeholder="Name "
            keyboardType="default"
            inputStyle={{ marginTop: hp(3) }} />

          <CustomInput
            onChangeText={(text) => setphone(text)}
            value={phone}
            placeholder="Phone "
            keyboardType="default"
            inputStyle={{ marginTop: hp(3) }} />

          <CustomInput
            onChangeText={(text) => setmail(text)}
            value={mail}
            placeholder="Email "
            keyboardType="email-address"
            inputStyle={{ marginTop: hp(3) }} />


          <CustomInput
            onChangeText={(text) => setpassword(text)}
            value={password}
            placeholder="Password"
            keyboardType="visible-password"
            inputStyle={{ marginTop: hp(3) }} />



        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Profile;
