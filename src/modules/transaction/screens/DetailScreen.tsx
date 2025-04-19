import { Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NavigationRoute } from '@core';

type Props = NativeStackScreenProps<NavigationRoute, 'transaction.detail'>;

export const TransactionDetailScreen = ({ route }: Props) => {
  const id = route.params.id;

  return (
    <View className="flex-1 items-center justify-center">
      <Text>Transaction Detail Screen {id}</Text>
    </View>
  );
};
