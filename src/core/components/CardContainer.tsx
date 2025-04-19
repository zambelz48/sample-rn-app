import React from 'react';
import { View } from 'react-native';
import { BaseComponentProps } from './ComponentProps';
import { mergeClassNames } from '@core/util';

interface CardContainerProps extends BaseComponentProps {
  children: React.ReactNode
}

export const CardContainer: React.FC<CardContainerProps> = ({
  className,
  children,
}) => {
  return (
    <View className={
      mergeClassNames('bg-white rounded-2xl', className)
    }>
      {children}
    </View>
  );
};
