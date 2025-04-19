import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { verifyInstallation } from 'nativewind';
import { NavigationRoute } from '@core';
import {
  TransactionListScreen,
  TransactionDetailScreen,
} from '@module/transaction';

import './global.css';

const Stack = createNativeStackNavigator<NavigationRoute>();

export default function App() {
  // TODO: Should call this on debug mode only
  verifyInstallation();

  return (
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
  );
}
