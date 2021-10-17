import WeatherApp from './pages/WeatherApp';
import './App.scss'
import { ApolloProvider } from '@apollo/client';
import client from './apolloClient';
import { WeatherProvider } from './contexts/WeatherContext';

function App() {
  return (
    <ApolloProvider client={client}>
      <WeatherProvider>
        <div className="app-container">
          <WeatherApp />
        </div>
      </WeatherProvider>
    </ApolloProvider>
  );
}

export default App;
