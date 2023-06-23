import './style_comps.css'
import eth_bit from "../assets/8bit.png"
import Catolog from './Catolog'
export default function Main() {
    
    return(
        
   <div className="main">
    <div className="tttt">
        <h2>Добро подаловать в магазин компьютерных игр Dan Game Shop</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem corrupti quod adipisci voluptatibus dicta voluptate modi dolorem fuga, dolor eaque quo impedit vitae magnam perspiciatis illo animi totam molestias porro!
            </p>
            <img src={eth_bit} style={{ width: "400px"
                                        }}></img>
    </div>
    <h2>Каталог с играми</h2>
    <Catolog/>
   </div>
        
    )
}