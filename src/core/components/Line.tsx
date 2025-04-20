import React from 'react';
import { View } from 'react-native';

interface LineProps {
  orientation?: 'horizontal' | 'vertical';
  thickness?: number;
}

export const Line: React.FC<LineProps> = ({
  orientation = 'horizontal',
  thickness = 1,
}) => {
  switch (orientation) {
    case 'vertical':
      return (
        <View className="h-full bg-gray-400" style={{ width: thickness }} />
      );

    case 'horizontal':
      return (
        <View className="w-full bg-gray-400" style={{ height: thickness }} />
      );
  }
};

