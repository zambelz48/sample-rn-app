import { Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { ModuleNavigationRoute } from '../../ModuleRoute';
import { useTransactionData } from '../hooks/useTransactionData';

type Props = NativeStackScreenProps<ModuleNavigationRoute, 'transaction.detail'>;

export const TransactionDetailScreen = ({}: Props) => {
  const { transaction } = useTransactionData();

  return (
    <View className="flex-1 items-center justify-center">
      <Text>{JSON.stringify(transaction, null, 2)}</Text>
    </View>
  );
};
