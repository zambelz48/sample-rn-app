import React from 'react';
import { View } from 'react-native';
import { mergeClassNames } from '@core/util';

interface ContainerProps extends React.ComponentProps<typeof View> {}

export const Container: React.FC<ContainerProps> = ({
  className,
  children,
  ...otherProps
}) => {
  return (
    <View className={mergeClassNames(
      'flex-1 items-center bg-gray-200',
      className,
    )} {...otherProps}>
      {children}
    </View>
  );
};
