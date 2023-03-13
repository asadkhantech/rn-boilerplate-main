import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useTheme } from "react-native-paper";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

export const VoucharCard = ({ item, index }) => {
    const styles = useStyle()
    const theme = useTheme()
    return (
        <View style={{
            paddingHorizontal: wp(3)
        }}>

            <Image style={{ height: hp(22), width: wp(70), borderRadius: wp(3), }} source={item.image} resizeMode={"contain"} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.tx}>On everything today</Text>
            <TouchableOpacity style={{ backgroundColor: theme.colors.heading, width: wp(20), height: hp(4), borderRadius: hp(5), bottom: hp(14), marginHorizontal: hp(3) }}>
                <Text style={styles.Get}> Get Now</Text>
            </TouchableOpacity>
        </View>
    )
}

const useStyle = () => {
    const { colors } = useTheme()
    const styles = StyleSheet.create({
        name: {
            fontSize: hp(3),
            bottom: hp(20),
            fontWeight: 'bold',
            marginHorizontal: hp(3.5),
            color: colors.heading

        },
        tx: {
            fontSize: hp(2),
            bottom: hp(20),
            marginHorizontal: hp(3.5),
            color: colors.heading

        },
        Get: {

            color: colors.Signin,
            alignSelf: "center",
            top: hp(0.5)
        },
    })
    return styles;
}
