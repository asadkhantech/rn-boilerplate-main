import { StyleSheet, TextInput, TextInputProps, View } from "react-native"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { useTheme } from "react-native-paper"
import { color } from "react-native-reanimated";

interface Props extends TextInputProps {
  containerStyles?: any;
  inputStyle?: any;
}

export const CustomInput = (props: Props) => {
  const { containerStyles, inputStyle } = props;
  const theme = useTheme()
  return (
    <View style={containerStyles}>
      <TextInput
        {...props}
        style={[styles.input, { color: theme.colors.heading, borderColor: theme.colors.heading }, inputStyle,]}
        placeholderTextColor={theme.colors.heading}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    borderWidth: wp(0.1),
    borderRadius: wp(2),
    width: wp(80),
    padding: wp(3),
  }
})
