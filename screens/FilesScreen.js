import  React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';

const FilesScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
        <Text>files Screen</Text>
        
      </View>
    );
};

export default FilesScreen;

const styles = StyleSheet.create({
  container:{
      backgroundColor: '#FDF5F4',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
  }
});

