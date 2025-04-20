import React from 'react';
import { View } from 'react-native';
import { ArrowRightIcon, Badge, CardContainer, DotIcon, Label } from '@core/component';
import { formatAmount, formatBankName, formatDate } from '@core/util';
import { COLORS } from 'core/config';

interface TransactionItemCardProps {
  status: 'PENDING' | 'SUCCESS'
  senderBank: string
  beneficiaryBank: string
  beneficiaryName: string
  amount: number
  date: string
}

export const TransactionItemCard: React.FC<TransactionItemCardProps> = ({
  status,
  senderBank,
  beneficiaryBank,
  beneficiaryName,
  amount,
  date,
}) => {
  const statusColor = () => {
    switch (status) {
      case 'PENDING':
        return COLORS.orange;
      case 'SUCCESS':
        return COLORS.green;
    }
  };

  const formatStatus = () => {
    switch (status) {
      case 'PENDING':
        return 'Pengecekan';
      case 'SUCCESS':
        return 'Berhasil';
    }
  };

  const badgeVariant = () => {
    switch (status) {
      case 'PENDING':
        return 'outline';
      case 'SUCCESS':
        return 'solid';
    }
  };

  return (
    <CardContainer className="flex flex-row my-1">
      <View className={`w-3 rounded-l-lg`} style={{ backgroundColor: statusColor() }} />
      <View className="flex flex-col gap-1 p-4">
        <View className="flex flex-row items-center">
          <Label className="font-bold">{formatBankName(senderBank)}</Label>
          <ArrowRightIcon color="black" />
          <Label className="font-bold">{formatBankName(beneficiaryBank)}</Label>
        </View>
        <Label>{beneficiaryName.toUpperCase()}</Label>
        <View className="flex flex-row items-center gap-0">
          <Label>{formatAmount(amount)}</Label>
          <DotIcon color="black" />
          <Label>{formatDate(new Date(date))}</Label>
        </View>
      </View>
      <Badge
        variant={badgeVariant()}
        color={statusColor()}
        className="self-center mr-2 ml-auto"
        text={formatStatus()}
      />
    </CardContainer>
  );
};
