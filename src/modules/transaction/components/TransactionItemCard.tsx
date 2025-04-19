import { CardContainer, Label } from '@core/component';
import React from 'react';
import { View } from 'react-native';

interface TransactionItemCardProps {
  senderBank: string
  beneficiaryBank: string
  beneficiaryName: string
  amount: number
  date: string
}

export const TransactionItemCard: React.FC<TransactionItemCardProps> = ({
  senderBank,
  beneficiaryBank,
  beneficiaryName,
  amount,
  date,
}) => {
  return (
    <CardContainer>
      <Label>{senderBank + '->' + beneficiaryBank}</Label>
      <Label>{beneficiaryName}</Label>
      <View>
        <Label>{amount}</Label>
        <Label>{date}</Label>
      </View>
    </CardContainer>
  );
};
