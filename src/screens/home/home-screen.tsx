import React from 'react';
import {Text, SafeAreaView, View} from 'react-native';
import tw from 'tailwind-rn';
import {useNavigation} from '@react-navigation/native';

export const HomeScreen = () => {
  const navigation = useNavigation();
  const onWavePickPress = () => {
    navigation.navigate('WavePick');
  };

  return (
    <SafeAreaView style={tw('bg-gray-200 min-h-full')}>
      <View style={tw('p-2 px-4')}>
        <Text style={tw('text-2xl')}>未设置呢称</Text>
        <Text>Phone: 15336551131</Text>
      </View>

      <View style={tw('rounded-lg bg-white pb-4 m-2')}>
        <View style={tw('p-4 pb-2')}>
          <Text style={tw('text-gray-500')}>发货/出库</Text>
        </View>
        <View
          style={tw('flex flex-row rounded-lg justify-around items-center')}>
          <View style={tw('flex items-center')}>
            <View
              style={tw('h-12 w-12 my-2 rounded-full bg-indigo-200')}></View>
            <Text>订单拣货</Text>
          </View>
          <View style={tw('flex items-center')}>
            <View style={tw('h-12 w-12 my-2 rounded bg-red-200')}></View>
            <Text onPress={onWavePickPress}>波次拣货</Text>
          </View>
          <View style={tw('flex items-center')}>
            <View style={tw('h-12 w-12 my-2 rounded-lg bg-blue-200')}></View>
            <Text>波次播种</Text>
          </View>
          <View style={tw('flex items-center')}>
            <View style={tw('h-12 w-12 my-2 rounded-full bg-pink-200')}></View>
            <Text>验货</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
