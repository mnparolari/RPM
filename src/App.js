import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
//import Container from './components/Container/Container';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <ItemListContainer greeting="Bienvenido/a. Estás en RPM, la casa del vinílo." />
      </header>
    </div>
  );
}

export default App;

