import React from 'react';
import { Text, View } from 'react-native';
import { BaseComponentProps } from './ComponentProps';
import { mergeClassNames } from '@core/util';

interface BadgeProps extends BaseComponentProps {
  text: string;
  color: string;
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  text,
  color,
}) => {
  return (
    <View className={
      mergeClassNames('w-2 h-2 rounded-full', className)
    } style={{ backgroundColor: color }}>
      <Text className="text-white text-xs">{text}</Text>
    </View>
  );
};
