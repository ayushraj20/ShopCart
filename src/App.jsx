import './App.css';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header
        color="light"
        light={true}
        expand="md"
        container="lg"
        fixed="top"
      />
      <h4>ShopCart</h4>
    </>
  );
}

export default App;
