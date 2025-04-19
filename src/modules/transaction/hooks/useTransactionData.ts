import React from 'react';
import { useDebouncedFilter, useNetworkRequest } from '@core/hook';
import { useGlobalData } from '@core/provider';
import { Transaction, TransactionResponse } from '../models/Transaction';

const domain = 'https://recruitment-test.flip.id';
const endpoint = '/frontend-test';
const url = `${domain}${endpoint}`;

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
    setTransactions((prev) => prev.filter((item) => {
      const isValueIncluded = (value: string, keyword: string) => {
        return value.toLowerCase().includes(keyword.toLowerCase());
      };
      const isMatched = (value: string) => isValueIncluded(value, filterKeyword);
      return isMatched(item.beneficiary_name)
        || isMatched(item.sender_bank)
        || isMatched(item.beneficiary_bank)
        || isMatched(item.amount.toString());
    }));
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

  const sort = React.useCallback(
    (
      by: 'name' | 'date',
      order: 'asc' | 'desc'
    ) => {
      const sortedItems = transactions.sort((a, b) => {
        if (by === 'name' && order === 'asc') {
          return a.beneficiary_name.localeCompare(b.beneficiary_name);
        }

        if (by === 'name' && order === 'desc') {
          return b.beneficiary_name.localeCompare(a.beneficiary_name);
        }

        if (by === 'date' && order === 'asc') {
          return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
        }

        if (by === 'date' && order === 'desc') {
          return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
        }

        return 0;
      });

      setTransactions([ ...sortedItems]);
    }, [transactions]
  );

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
