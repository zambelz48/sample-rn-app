import React from 'react';
import { View } from 'react-native';
import { mergeClassNames } from '@core/util';

interface CardContainerProps extends React.ComponentProps<typeof View> {}

export const CardContainer: React.FC<CardContainerProps> = ({
  className,
  children,
  ...otherProps
}) => {
  return (
    <View className={
      mergeClassNames('bg-white rounded-lg', className)
    } {...otherProps}>
      {children}
    </View>
  );
};
