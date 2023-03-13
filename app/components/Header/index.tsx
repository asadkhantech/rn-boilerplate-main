import React from "react";
import { Text, TouchableOpacity, View, Image, ImageBackground } from 'react-native';
import { useTheme } from 'react-native-paper';
import images from 'utils/images';
import { CustomInput } from 'components/CustomInput';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { Custombutton } from 'components/Custombutton';
import Code from 'screens/Code';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useSelector } from "react-redux";
import { Consumer } from "react-native-paper/lib/typescript/core/settings";
import { useStyle } from "./style";

const Header = () => {
    const isDarkTheme = useSelector((state) => state?.theme?.isDark)
    const styles = useStyle()
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity onPress={() => { navigation.dispatch(DrawerActions.openDrawer()) }}>
                    {isDarkTheme ? <Image style={styles.icn} source={images.Menuw} /> : <Image style={styles.icn} source={images.Menu} />}
                </TouchableOpacity>
                {isDarkTheme ? <Image style={styles.pic} source={images.Logow} resizeMode={"contain"} /> : <Image style={styles.pic} source={images.Logo} resizeMode={"contain"} />}
            </View>
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity>
                    {isDarkTheme ? <Image style={styles.Search} source={images.Searchw} /> : <Image style={styles.Search} source={images.Search} />}
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
                    {isDarkTheme ? <Image style={styles.lck} source={images.Lockw} /> : <Image style={styles.lck} source={images.Lock} />}
                </TouchableOpacity>

            </View>
        </View>


    )
}
export default Header 