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
        <Route path="/" element={<Main/>}/>
        <Route path="/ctl" element={<Catolog/>}/>
        <Route path="/prod/:id" element={<PageOfProd/>}/>
        <Route path="/adm/auth" element={<Auth/>}/>
        <Route path="/adm/" element={<AdmPage/>}/>
        <Route path="/adm/prod-ed" element={<AddDelProd/>}/>
        <Route path="/buy/:id" element={<Buylist/>}/>
        <Route path="/buycomp/:id" element={<Complete/>}/>
        

      </Routes>
    </main>
    <Footer/>
    </div>
  );
}

export default App;
