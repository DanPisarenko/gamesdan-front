import './App.css';
import {Link, Route, Routes} from "react-router-dom"
import Header from "./components/Header"
import Main from './components/Main';
import Catolog from './components/Catolog';
import PageOfProd from './components/PageOfProd';
import Auth from './components/admin/Auth';
import AdmPage from './components/admin/AdmPage';
import AddDelProd from './components/admin/AddDelProd';
import Buylist from './components/Buylist';
import Complete from './components/Complete';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <main>
      <Routes>
        <Route path="/gamesdan-front/" element={<Main/>}/>
        <Route path="/gamesdan-front/ctl" element={<Catolog/>}/>
        <Route path="/gamesdan-front/prod/:id" element={<PageOfProd/>}/>
        <Route path="/gamesdan-front/adm/auth" element={<Auth/>}/>
        <Route path="/gamesdan-front/adm/" element={<AdmPage/>}/>
        <Route path="/gamesdan-front/adm/prod-ed" element={<AddDelProd/>}/>
        <Route path="/gamesdan-front/buy/:id" element={<Buylist/>}/>
        <Route path="/gamesdan-front/buycomp/:id" element={<Complete/>}/>
        

      </Routes>
    </main>
    <Footer/>
    </div>
  );
}

export default App;
