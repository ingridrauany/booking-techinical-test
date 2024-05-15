import { QueryClientProvider } from '@tanstack/react-query';
import { Fragment } from 'react';
import GlobalStyles from './GlobalStyles';
import { Container } from './components';
import { queryClient } from './services/queryClient';

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <Container />
      </QueryClientProvider>
    </Fragment>
  );
}

export default App;
