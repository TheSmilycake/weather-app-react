

import './styles.css';
import 'bootstrap/dist/css/bootstrap.css'
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
