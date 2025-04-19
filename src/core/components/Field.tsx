import React from 'react';
import { TextInput } from 'react-native';
import { BaseComponentProps } from './ComponentProps';
import { mergeClassNames } from '@core/util';

interface FieldProps extends BaseComponentProps, React.ComponentProps<typeof TextInput> {
  placeholder?: string
}

export const Field: React.FC<FieldProps> = ({
  className,
  placeholder,
  ...otherProps
}) => {
  return (
    <TextInput
      className={mergeClassNames(
        'border border-gray-300 rounded-md p-2',
        className
      )}
      placeholder={placeholder}
      {...otherProps}
    />
  );
};
