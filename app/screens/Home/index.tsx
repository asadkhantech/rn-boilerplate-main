
import React, { useCallback, useRef, useMemo } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native';
// import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import { useStyle } from './styles';
import Header from 'components/Header';
import { useTheme } from 'react-native-paper';
import { useSelector } from 'react-redux';
import images from 'utils/images';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import DetailProduct from 'components/DetailProduct';
import { VoucharCard } from 'components/VoucharCard';
import Productcard from 'components/Productcard';
import SubHeader from 'components/SubHeader';
import Categorycard from 'components/Categorycard';
import Brandcard from 'components/Brandcard';
const Home: React.FC = () => {
  const styles = useStyle();
  const sheetRef = useRef(null);
  const theme = useTheme()
  const isDarkTheme = useSelector((state) => state?.theme?.isDark)
  const data = [
    {

      name: 'All',
    },
    {
      name: 'Service',
    },
    {
      name: 'borjan',
    },
    {
      name: 'ndure',
    },
    {
      name: 'Enem',
    },
  ];
  const cat = [
    {
      name: 'All',
    },
    {
      name: 'Kids Wear',
    },
    {
      name: 'Men Wear',
    },
    {
      name: 'Women Wear',
    },
    {
      name: 'Adults Wear',
    },
  ];
  const saledata = [
    {
      name: '50% off',
      image: images.Sale
    },
    {

      image: images.Sale,
      name: '50% off'
    }


  ]


  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 100 }}>
      <View>
        <Header />
      </View>
      <Text style={styles.title}>{'Brands'}</Text>
      <Brandcard />
      <Text style={styles.txt}>Categories</Text>
      <Categorycard />


      <FlatList
        horizontal
        data={saledata}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <VoucharCard item={item} index={index} />
        )
        }
        style={{ maxHeight: wp(65), marginTop: hp(4) }}
      />
      <SubHeader />

      <DetailProduct />

      <SubHeader />
      <View style={{ flexDirection: "row", paddingHorizontal: hp(1), }}>
        <Productcard />
        <Productcard />
      </View>




    </ScrollView>

  );
};


export default Home;