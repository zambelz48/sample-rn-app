import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Clipboard from '@react-native-clipboard/clipboard';
import Toast from 'react-native-toast-message';
import { ArrowRightIcon, Container, ContentCopyIcon, Label, Line } from '@core/component';
import { COLORS } from '@core/config';
import { formatBankName, formatDate } from '@core/util';
import type { ModuleNavigationRoute } from '../../ModuleRoute';
import { useTransactionData } from '../hooks/useTransactionData';
import { SectionContainer } from '../components/SectionContainer';

type Props = NativeStackScreenProps<ModuleNavigationRoute, 'transaction.detail'>;

const TransactionInfo: React.FC<{ label: string; value?: string }> = ({
  label,
  value,
}) => {
  return (
    <View className="flex flex-col mb-8">
      <Label className="font-semibold">{label.toUpperCase()}</Label>
      <Label>{value}</Label>
    </View>
  );
};

const LineSeparator: React.FC<{ thickness?: number }> = ({
  thickness = 0.2,
}) => (<Line orientation="horizontal" thickness={thickness} />);

export const TransactionDetailScreen = ({}: Props) => {
  const { transaction } = useTransactionData();
  const [showDetail, setShowDetail] = React.useState(true);

  const copyToClipboard = () => {
    Clipboard.setString(transaction?.id || '');
    Toast.show({
      type: 'success',
      text1: 'ID Transaksi berhasil disalin',
    });
  };

  const toggleDetail = () => {
    setShowDetail(!showDetail);
  };

  return (
    <Container className="py-4">
      <SectionContainer>
        <Label className="font-semibold">ID TRANSAKSI:</Label>
        <Label className="font-semibold">#{transaction?.id}</Label>
        <TouchableOpacity onPress={copyToClipboard}>
          <ContentCopyIcon color={COLORS.orange} />
        </TouchableOpacity>
      </SectionContainer>
      <LineSeparator />
      <SectionContainer>
        <View className="flex flex-row items-center justify-between w-full">
          <Label className="font-semibold">DETAIL TRANSAKSI</Label>
          <TouchableOpacity onPress={toggleDetail}>
            <Label className="font-normal" style={{ color: COLORS.orange }}>
              {showDetail ? 'Tutup' : 'Buka'}
            </Label>
          </TouchableOpacity>
        </View>
      </SectionContainer>
      <LineSeparator thickness={1} />
      <View className={`bg-white w-full ${ showDetail ? '' : 'hidden' }`}>
        <SectionContainer>
          <Label className="font-bold text-2xl">
            {formatBankName(transaction?.sender_bank)}
          </Label>
          <ArrowRightIcon color="black" />
          <Label className="font-bold text-2xl">
            {formatBankName(transaction?.beneficiary_bank)}
          </Label>
        </SectionContainer>
        <View className="flex flex-row w-full px-4">
          <View className="w-1/2">
            <TransactionInfo
              label={transaction?.beneficiary_name}
              value={transaction?.account_number}
            />
            <TransactionInfo
              label="BERITA TRANSFER"
              value={transaction?.remark}
            />
            <TransactionInfo
              label="WAKTU DIBUAT"
              value={formatDate(new Date(transaction?.created_at ?? ''))}
            />
          </View>
          <View className="w-1/2">
            <TransactionInfo
              label="NOMINAL"
              value={(transaction?.amount ?? 0).toString()}
            />
            <TransactionInfo
              label="KODE UNIK"
              value={(transaction?.unique_code ?? 0).toString()}
            />
          </View>
        </View>
      </View>
    </Container>
  );
};
