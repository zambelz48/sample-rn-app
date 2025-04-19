import React from 'react';
import { Text } from 'react-native';
import { BaseComponentProps } from './ComponentProps';
import { mergeClassNames } from '@core/util';

interface LabelProps extends BaseComponentProps {
  weight?: 'bold' | 'normal'
  children?: React.ReactNode
}

export const Label: React.FC<LabelProps> = ({
  className,
  weight = 'normal',
  children,
  ...otherProps
}) => {
  return (
    <Text className={mergeClassNames(
      `font-${weight}`,
      className,
    )} {...otherProps}>
      {children}
    </Text>
  );
};
