import React, {useState , useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import {Button} from './Button';


function Navbar() {
    const [click,setClick] =useState(false);
    const [button,setButton] = useState(true);

    const handleClick = () =>setClick(!click);
    const closeMoileMenu = () =>setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        }
        else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    } , [] );

    window.addEventListener('resize' , showButton);

    return (
        <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo' onClick={closeMoileMenu}>
                    CRIME-REG <i className='fab fa-typo3'/>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-items'>
                        <Link to='/' className='nav-links' onClick={closeMoileMenu}>
                            Home
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link to='/Services' className='nav-links' onClick={closeMoileMenu}>
                            FEEDS
                        </Link>

                    </li>

                    <li className='nav-items'>
                        <Link to='/Products' className='nav-links' onClick={closeMoileMenu}>
                            REGISTER-COMPLAIN
                        </Link>
                    </li>

    

                </ul>

                {button && <Button buttonStyle='btn--outline'> CHATBOT</Button>}
            </div>
        </nav>
            
        </>
    );
}

export default Navbar;
