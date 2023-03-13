import React from "react";
import { View, TouchableOpacity, Text, Image, TouchableOpacityProps } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { useTheme } from 'react-native-paper';
import { useSelector } from "react-redux";
import { useStyle } from './styles'
import images from "utils/images";
import { useNavigation } from '@react-navigation/native';

interface Props extends TouchableOpacityProps {
    button?: any;
    textStyle?: any;
    label: string
}
const Profileheader = (props: Props) => {
    const { button, textStyle, label, onPress } = props;
    const isDarkTheme = useSelector((state) => state?.theme?.isDark)
    const theme = useTheme()
    const styles = useStyle();
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <View style={{ flexDirection: "row", }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        {isDarkTheme ? <Image style={{ alignSelf: "flex-start" }} source={images.Arroww} /> : <Image source={images.Arrow} />}
                    </TouchableOpacity>
                    <Text style={styles.profile}>{label}</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={onPress}>
                        <Text style={styles.done}>{button} </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )

}
export default Profileheader