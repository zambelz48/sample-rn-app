import React from 'react';
import { View } from 'react-native';
import { BaseComponentProps } from './ComponentProps';
import { mergeClassNames } from '@core/util';

interface ContainerProps extends BaseComponentProps {
  children: React.ReactNode
}

export const Container: React.FC<ContainerProps> = ({
  className,
  children,
}) => {
  return (
    <View className={mergeClassNames(
      'flex-1 items-center justify-center bg-gray-200',
      className,
    )}>
      {children}
    </View>
  );
};
