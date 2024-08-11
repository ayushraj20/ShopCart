import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MainRoutes from './routes/MainRoutes';

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
      <MainRoutes />
      <Footer />
    </>
  );
}

export default App;
