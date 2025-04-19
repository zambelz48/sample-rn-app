import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import { verifyInstallation } from 'nativewind';

import './global.css';

const App: React.FC = () => {
  // TODO: Should call this on debug mode only
  verifyInstallation();

  return (
    <SafeAreaView className="bg-white h-full">
      <StatusBar />
      <View className="flex flex-col items-center">
        <Text className="w-full bg-gray-200 text-center">Transaction History App</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
