import { StyleSheet, TextInput, TextInputProps, TouchableOpacity, TouchableOpacityProps, View, Text } from "react-native"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { useTheme } from "react-native-paper"



interface Props extends TouchableOpacityProps {
    containerStyles?: any;
    textStyle?: any;
    label: string
}
export const Custombutton = (props: Props) => {
    const { containerStyles, textStyle, label } = props;
    const theme = useTheme()
    // theme.colors.custom
    return (
        <TouchableOpacity
            {...props}
            style={[styles.button, { backgroundColor: theme.colors.heading }, containerStyles]}>
            <Text style={[styles.txt, { color: theme.colors.Signin }]}>{label}</Text>
        </TouchableOpacity>


    )
}

const styles = StyleSheet.create({
    button: {
        alignContent: "center",
        borderRadius: wp(1),
        width: "100%",
        // height: hp(7),
        paddingVertical: hp(2)
    },
    txt: {
        // color: 'white',
        alignSelf: "center",
        paddingTop: hp(0.1),
        fontSize: hp(2)
    }


})