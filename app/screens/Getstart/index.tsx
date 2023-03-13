import React from "react";
import { Text, TouchableOpacity, View, Image, ImageBackground } from 'react-native';
import { useTheme } from 'react-native-paper';
import { useStyle } from './styles';
import images from 'utils/images';
import { CustomInput } from 'components/CustomInput';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { Custombutton } from 'components/Custombutton';
import Code from 'screens/Code';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useSelector } from "react-redux";


const Getstart: React.FC = () => {
    const navigation = useNavigation()
    const styles = useStyle();
    const isDarkTheme = useSelector((state) => state?.theme?.isDark)
    console.log("check", hp(3))



    return (
        <View style={styles.container}>
            <ImageBackground style={{ height: hp(75) }} source={images.Background} >

                {isDarkTheme ? <Image style={styles.Logo} source={images.Logow} /> : <Image style={styles.Logo} source={images.Logo} />}
                <View style={{ marginTop: hp(4) }}>
                    <Image style={styles.First} source={images.First} resizeMode={'contain'} />
                    <Image style={styles.Third} source={images.Third} resizeMode={'contain'} />
                    <Image style={styles.Second} source={images.Second} resizeMode={'contain'} />
                </View>
            </ImageBackground>

            <View style={styles.buttonContainer}>
                <Custombutton
                    label="Get Started"
                    onPress={() => {
                        navigation.navigate("Login")
                    }}
                />

            </View>

        </View >
    )

}
export default Getstart;
