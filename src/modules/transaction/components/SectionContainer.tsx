import React from 'react';
import { View } from 'react-native';

interface SectionContainerProps {
  children: React.ReactNode;
}

export const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
}) => {
  return (
    <View className="flex flex-row items-center justify-start w-full px-4 py-8 gap-1 bg-white">
      {children}
    </View>
  );
};
