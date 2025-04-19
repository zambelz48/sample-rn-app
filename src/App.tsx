import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { verifyInstallation } from 'nativewind';
import { GlobalDataProvider } from '@core/provider';
import {
  TransactionListScreen,
  TransactionDetailScreen,
} from '@module/transaction';
import { ModuleNavigationRoute } from 'modules/ModuleRoute';

import './global.css';

const Stack = createNativeStackNavigator<ModuleNavigationRoute>();

export default function App() {
  // NOTE: To make sure nativewind is set up correctly
  verifyInstallation();

  return (
    <GlobalDataProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="transaction.list">
          <Stack.Screen
            name="transaction.list"
            component={TransactionListScreen}
            options={{ title: 'Transaction List' }}
          />
          <Stack.Screen
            name="transaction.detail"
            component={TransactionDetailScreen}
            options={{ title: 'Transaction Detail' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalDataProvider>
  );
}
