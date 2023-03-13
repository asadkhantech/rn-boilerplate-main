import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import * as loginActions from './../../store/slice/userSlice';
import React from 'react';
import {View} from 'react-native';
import {Avatar, Text, Title, useTheme} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch} from 'react-redux';
import ThemeController from '../../components/ThemeController';
import {useStyle} from './styles';
// import i18n from "../../components/Languages/i18n";
const Drawer: React.FC = props => {
  const [checked, setChecked] = React.useState('first');
  // const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const onLogout = () => dispatch(loginActions.logOut());
  const theme = useTheme();
  const styles = useStyle();
  const navigation = useNavigation();
  //   useEffect(() => {
  //     if (i18n.language === 'en') setChecked('first');
  //     else if (i18n.language === 'es') setChecked('second');
  //     else if (i18n.language === 'de') setChecked('third');
  //   }, []);
  return (
    <View style={styles.drawerContent}>
      <DrawerContentScrollView {...props}>
        <View style={styles.userInfoSection}>
          <Avatar.Image
            source={{
              uri: 'https://pbs.twimg.com/profile_images/952545910990495744/b59hSXUd_400x400.jpg',
            }}
            size={50}
          />
          <Title style={styles.title}>Dawid Urbaniak</Title>
          <View style={styles.row} />
        </View>

        <DrawerItem
          icon={({size}: {size: number}) => (
            <MaterialCommunityIcons
              name="home-outline"
              color={theme.colors.primary}
              size={size}
            />
          )}
          onPress={() => {
            navigation.navigate('Home' as never);
          }}
          label={'Home'}
          activeTintColor="#2196f3"
          activeBackgroundColor="rgba(0, 0, 0, .04)"
          inactiveTintColor="rgba(0, 0, 0, .87)"
          inactiveBackgroundColor="transparent"
          labelStyle={{color: theme.colors.primary}}
        />

        <View style={styles.preference}>
          <Text style={styles.text}>{'Theme'} </Text>
          <ThemeController />
        </View>

        {/* <List.Accordion
          theme={theme}
          title={<Text style={styles.text}>{'Languages'} </Text>}>
          <TouchableOpacity
            onPress={() => {
              setChecked('first');
              i18n.changeLanguage('en').then(() => {
                I18nManager.forceRTL(false);
                if (I18nManager.isRTL) RNRestart.Restart();
              });
            }} //Here I change the language to "en" English
            style={styles.listbutton}>
            <RadioButton
              value="first"
              status={checked === 'first' ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked('first');
                i18n.changeLanguage('en').then(() => {
                  I18nManager.forceRTL(false);
                  if (I18nManager.isRTL) RNRestart.Restart();
                });
              }}
              color="gray"
            />
            <Text style={styles.chekboxtext}>English</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setChecked('second');
              i18n.changeLanguage('es').then(() => {
                if (I18nManager.isRTL === false) {
                  I18nManager.forceRTL(true);
                  RNRestart.Restart();
                }
              });
            }} //Here I change the language to "es" Spanish
            style={styles.listbutton}>
            <RadioButton
              value="second"
              status={checked === 'second' ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked('second');
                i18n.changeLanguage('es').then(() => {
                  if (I18nManager.isRTL === false) {
                    I18nManager.forceRTL(true);
                    RNRestart.Restart();
                  }
                });
              }}
              color="gray"
            />
            <Text style={styles.chekboxtext}>Spanish</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setChecked('third');
              i18n.changeLanguage('de').then(() => {
                I18nManager.forceRTL(false);
                if (I18nManager.isRTL) RNRestart.Restart();
              });
            }} //Here I change the language to "de" German
            style={styles.listbutton}>
            <RadioButton
              value="third"
              status={checked === 'third' ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked('third');
                i18n.changeLanguage('de').then(() => {
                  I18nManager.forceRTL(false);
                  if (I18nManager.isRTL) RNRestart.Restart();
                });
              }}
              color="gray"
            />
            <Text style={styles.chekboxtext}>German</Text>
          </TouchableOpacity>
        </List.Accordion> */}
        <DrawerItem
          icon={({size}: {size: number}) => (
            <MaterialCommunityIcons
              name="logout"
              color={theme.colors.primary}
              size={size}
            />
          )}
          onPress={() => {
            onLogout();
          }}
          label={'Logout'}
          activeTintColor="#2196f3"
          activeBackgroundColor="rgba(0, 0, 0, .04)"
          inactiveTintColor="rgba(0, 0, 0, .87)"
          inactiveBackgroundColor="transparent"
          labelStyle={{color: theme.colors.primary}}
        />
      </DrawerContentScrollView>
    </View>
  );
};

export default Drawer;
