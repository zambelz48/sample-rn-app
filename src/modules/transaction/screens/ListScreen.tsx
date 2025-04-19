import { Button, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NavigationRoute } from '@core';

type Props = NativeStackScreenProps<NavigationRoute, 'transaction.list'>

export const TransactionListScreen = ({ navigation }: Props) => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>Transaction List Screen</Text>
      <Button
        title="To Transaction Detail"
        onPress={() => navigation.navigate(
          'transaction.detail',
          {
            id: '1',
          })}
      />
    </View>
  );
};
