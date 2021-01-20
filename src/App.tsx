import React from 'react';
import { store } from './store/store';
import { Navigator } from './common/components/navigation/Navigator';
import { StoreProvider } from 'easy-peasy';

function App() {
  return (
    <StoreProvider store={store}>
      <Navigator />
    </StoreProvider>
  );
}

export default App;
