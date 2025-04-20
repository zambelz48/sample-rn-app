import React from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  Container,
  Label,
  Field,
  MagnifyIcon,
  ChevronDownIcon,
} from '@core/component';
import type { ModuleNavigationRoute } from '../../ModuleRoute';
import { useTransactionData } from '../hooks/useTransactionData';
import { TransactionItemCard } from '../components/TransactionItemCard';
import { SortingOptionsModal } from '../components/SortingOptionsModal';
import { COLORS } from '@core/config';

type Props = NativeStackScreenProps<ModuleNavigationRoute, 'transaction.list'>

export const TransactionListScreen = ({ navigation }: Props) => {
  const [showSortModal, setShowSortModal] = React.useState(false);
  const {
    loading,
    error,
    transactions,
    refresh,
    filter,
    sort,
    selectTransaction,
  } = useTransactionData();
  const [selectedSort, setSelectedSort] = React.useState('');

  React.useEffect(() => {
    refresh();
  }, [refresh]);

  const sortingOptions = React.useMemo(() => [
    {
      label: 'URUTKAN',
      value: 'sort-empty',
      selected: selectedSort === '',
    },
    {
      label: 'Nama A-Z',
      value: 'sort-name-asc',
      selected: selectedSort === 'sort-name-asc',
    },
    {
      label: 'Nama Z-A',
      value: 'sort-name-desc',
      selected: selectedSort === 'sort-name-desc',
    },
    {
      label: 'Tanggal Terbaru',
      value: 'sort-date-desc',
      selected: selectedSort === 'sort-date-desc',
    },
    {
      label: 'Tanggal Terlama',
      value: 'sort-date-asc',
      selected: selectedSort === 'sort-date-asc',
    },
  ], [selectedSort]);

  return (
    <>
      <Container className="px-2">
        <View className="flex flex-row items-center justify-between bg-white w-full m-2 px-2 rounded-md">
          <View className="flex flex-row items-center gap-1">
            <MagnifyIcon />
            <Field
              className="py-5"
              placeholder="Cari name, bank, atau nominal"
              onChangeText={filter}
            />
          </View>
          <TouchableOpacity
            className="flex flex-row items-center gap-1"
            onPress={() => setShowSortModal(true)}
          >
            <Label className="font-bold" style={{ color: COLORS.orange }}>
              URUTKAN
            </Label>
            <ChevronDownIcon color={COLORS.orange} />
          </TouchableOpacity>
        </View>
        {loading && <Label>Loading...</Label>}
        {error && <Label>Error: {error.message}</Label>}
        {transactions.length > 0 && (
          <FlatList
            className="w-full"
            data={transactions}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => {
                selectTransaction(item);
                navigation.navigate('transaction.detail');
              }}>
                <TransactionItemCard
                  status={item.status}
                  beneficiaryName={item.beneficiary_name}
                  beneficiaryBank={item.beneficiary_bank}
                  senderBank={item.sender_bank}
                  amount={item.amount}
                  date={item.created_at}
                />
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
          />
        )}

      </Container>
      <SortingOptionsModal
        visible={showSortModal}
        options={sortingOptions}
        onClose={() => setShowSortModal(false)}
        onSelect={(value) => {
          setShowSortModal(false);
          setSelectedSort(value);

          switch (value) {
            case 'sort-name-asc':
              sort('name', 'asc');
              break;
            case 'sort-name-desc':
              sort('name', 'desc');
              break;
            case 'sort-date-asc':
              sort('date', 'asc');
              break;
            case 'sort-date-desc':
              sort('date', 'desc');
              break;
            default:
              break;
          }
        }}
      />
    </>
  );
};
