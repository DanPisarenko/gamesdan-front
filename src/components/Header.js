import './style_comps.css'
import {Link, Route, Routes} from "react-router-dom"

export default function Header() {
    
    return(
        
            <header>
                <div className="logo">
                    <h2>👾Dan Games Store🎮</h2>
                </div>
                <div className="nav">
                    <Link to="/">О нас</Link> 
                    <Link to="/ctl">Каталог</Link> 
                </div>
            </header>
        
    )
}