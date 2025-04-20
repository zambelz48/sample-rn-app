import React from 'react';
import { Text } from 'react-native';
import { mergeClassNames } from '@core/util';

interface LabelProps extends React.ComponentProps<typeof Text> {
  weight?: 'bold' | 'normal'
}

export const Label: React.FC<LabelProps> = ({
  className,
  children,
  ...otherProps
}) => {
  return (
    <Text className={mergeClassNames(
      '',
      className,
    )} {...otherProps}>
      {children}
    </Text>
  );
};
