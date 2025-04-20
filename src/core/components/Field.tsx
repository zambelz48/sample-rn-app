import React from 'react';
import { TextInput } from 'react-native';
import { mergeClassNames } from '@core/util';

interface FieldProps extends React.ComponentProps<typeof TextInput> {}

export const Field: React.FC<FieldProps> = ({
  className,
  ...otherProps
}) => {
  return (
    <TextInput
      className={mergeClassNames(
        'bg-white',
        className
      )}
      {...otherProps}
    />
  );
};
