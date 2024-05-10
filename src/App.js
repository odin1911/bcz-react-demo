import './App.css';
import Home from './pages/home';
import AppProvider from './providers';

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Home />
      </div>
    </AppProvider>
  );
}

export default App;
