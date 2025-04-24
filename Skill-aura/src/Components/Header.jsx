import { useState } from 'react' 
import logo from '/public/logo.png'
import './Header.css'

export default function Header() {
    const [menuClosed, setMenuState] = useState(false);
    return (
        <header>
            <div className="parent">
                    <div className={`overlay ${menuClosed ? 'overlay-on' : 'overlay-off'}`}></div>
                    <img src={ logo } alt="" style={{width: "50px", paddingTop: "10px"}} className="small-logo"/>
                    <div>
                        <i className="fa-solid fa-circle-right open-icon icon" onClick={() => setMenuState(!menuClosed)}></i>
                    </div>
                <nav>
                {/* Operação ternária para checar o estado do menu */}
                    <ul className={`menu ${menuClosed ? 'is-open' : ''}`}>
                        <i class="fa-solid fa-circle-chevron-left close-icon icon" onClick={() => setMenuState(!menuClosed)}></i>
                        <li><a href="">Início</a></li>
                        <li><a href="">Menu</a></li>
                        <li><a href="">Sobre nós</a></li>
                        <li><a href="">Nos encontre</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}