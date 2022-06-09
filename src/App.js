import logo from './logo.svg';

import './styles.css';
import Header from "./Header";
import AppContainer from "./AppContainer";
import Footer from "./Footer";


function App() {
  return (
      <div className="WeatherApp container">
        <Header />
        <AppContainer />
        <Footer />
      </div>
  );
}

export default App;
