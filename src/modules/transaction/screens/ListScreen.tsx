import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Container, CardContainer, Label, Field } from '@core/component';
import type { ModuleNavigationRoute } from '../../ModuleRoute';
import { useTransactionData } from '../hooks/useTransactionData';

type Props = NativeStackScreenProps<ModuleNavigationRoute, 'transaction.list'>

export const TransactionListScreen = ({ navigation }: Props) => {
  const {
    loading,
    error,
    transactions,
    refresh,
    filter,
    sort,
    selectTransaction,
  } = useTransactionData();

  React.useEffect(() => {
    refresh();
  }, [refresh]);

  return (
    <Container>
      <Field placeholder="Search" onChangeText={filter}/>
      {loading && <Label>Loading...</Label>}
      {error && <Label>Error: {error.message}</Label>}
      {transactions.length > 0 && (
        <FlatList
          data={transactions}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => {
              selectTransaction(item);
              navigation.navigate('transaction.detail');
            }}>
              <CardContainer>
                <Label>{item.beneficiary_name}</Label>
              </CardContainer>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
      )}

    </Container>
  );
};
