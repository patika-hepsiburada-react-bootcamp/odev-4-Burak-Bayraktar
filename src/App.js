import WeatherApp from './pages/WeatherApp';
import './App.scss'
import { ApolloProvider } from '@apollo/client';
import client from './apolloClient';

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="app-container">
        <WeatherApp />
      </div>
    </ApolloProvider>
  );
}

export default App;
