import './style_comps.css'
import {Link, Route, Routes} from "react-router-dom"

export default function Footer() {
    
    return(
        
            <footer>
                <div className="logo">
                    <h2>2023 Daniel Pisarenko</h2>
                </div>
                <div className="nav">
                    <Link to="/gamesdan-front/ctl">GitHub</Link> 
                    <Link to="/gamesdan-front/adm"> Dan</Link> 
                </div>
            </footer>
        
    )
}