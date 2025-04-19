import React from 'react';

interface GlobalDataContext {
  transaction: {
    selected: Record<string, unknown> | null
    setSelected: React.Dispatch<React.SetStateAction<Record<string, unknown> | null>>
  }
}

const GlobalDataContext = React.createContext<GlobalDataContext>({
  transaction: {
    selected: null,
    setSelected: () => {},
  },
});

interface GlobalDataProviderProps {
  children: React.ReactNode
}

export const GlobalDataProvider: React.FC<GlobalDataProviderProps> = ({
  children,
}) => {
  const [
    selectedTransaction,
    setSelectedTransaction,
  ] = React.useState<Record<string, unknown> | null>(null);

  return (
    <GlobalDataContext.Provider value={{
      transaction: {
        selected: selectedTransaction,
        setSelected: setSelectedTransaction,
      },
    }}>
      {children}
    </GlobalDataContext.Provider>
  );
};

export const useGlobalData = () => React.useContext(GlobalDataContext);
