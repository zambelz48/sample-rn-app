import React from 'react';
import { useDebouncedFilter, useNetworkRequest } from '@core/hook';
import { useGlobalData } from '@core/provider';
import { Transaction, TransactionResponse } from '../models/Transaction';

const url = 'https://recruitment-test.flip.id/frontend-test';

export const useTransactionData = () => {
  const { transaction: { selected, setSelected } } = useGlobalData();

  const {
    loading,
    error,
    request,
    response,
  } = useNetworkRequest<TransactionResponse>();

  const [transactions, setTransactions] = React.useState<Transaction[]>([]);
  const { filterKeyword, setFilterKeyword } = useDebouncedFilter();

  React.useEffect(() => {
    const items = Object.values(response ?? {}) as Transaction[];
    setTransactions(items);
  }, [response]);

  React.useEffect(() => {
    // TODO: Perform filter here
  }, [filterKeyword]);

  const refresh = React.useCallback(() => {
    request(url);
  }, [request]);

  const selectTransaction = React.useCallback((item: Transaction) => {
    try {
      const selectedItem = Object.assign(
        {}, item as unknown
      ) as Record<string, unknown>;
      setSelected(selectedItem);
    } catch {
      setSelected(null);
    }
  }, [setSelected]);

  const filter = React.useCallback((keyword: string) => {
    if (keyword.trim().length >= 3) {
      setFilterKeyword(keyword);
    }
  }, [setFilterKeyword]);

  const sort = React.useCallback((by: string) => {
    // TODO: Perform sort here
  }, []);

  const transaction = React.useMemo(() => {
    try {
      const item = Object.assign({}, selected as unknown);
      return item as Transaction;
    } catch {
      return {} as Transaction;
    }
  }, [selected]);

  return {
    loading,
    error,
    transactions,
    transaction,
    refresh,
    filter,
    sort,
    selectTransaction,
  };
};
