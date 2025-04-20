import React from 'react';
import { Text, View } from 'react-native';
import { mergeClassNames } from '@core/util';

interface BadgeProps extends React.ComponentProps<typeof View> {
  variant: 'solid' | 'outline';
  color: string;
  text: string;
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = 'solid',
  color,
  text,
  ...otherProps
}) => {
  return (
    <View
      className={
        mergeClassNames('flex items-center justify-center rounded-lg h-8 px-2', className)
      }
      {...otherProps}
      style={{
        borderWidth: variant === 'outline' ? 2 : undefined,
        borderColor: variant === 'outline' ? color : undefined,
        backgroundColor: variant === 'solid' ? color : undefined,
      }}
    >
      <Text className={`${variant === 'solid' ? 'text-white' : 'text-black'} font-bold`}>
        {text}
      </Text>
    </View>
  );
};
