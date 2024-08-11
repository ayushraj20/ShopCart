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
      <div style={{ marginTop: '5rem' }}>
        <MainRoutes />
      </div>
      <Footer />
    </>
  );
}

export default App;
