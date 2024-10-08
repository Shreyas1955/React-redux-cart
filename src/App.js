import './App.css';
import Header from './components/Header';
import { Route,Routes } from 'react-router-dom';
//import Cardsdata from './components/CardsData';
import CardsDetails from './components/CardsDetails'
import Cards from './components/Cards'


function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Cards />} />

      <Route path='/Cart' element ={<CardsDetails/>} />
    </Routes>
    
    </>
  );
}

export default App;
