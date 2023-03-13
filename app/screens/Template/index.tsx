import React from 'react';
import { View, Text } from 'react-native';
import { useStyle } from './styles';

const Template: React.FC = () => {
  const styles = useStyle();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{'Hello! Im Template screen'}</Text>
    </View>
  );
};

export default Template;
