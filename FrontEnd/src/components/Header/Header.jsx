import './Header.css';
import RehagroNameLogo from '../../assets/RehagroNameLogo.svg';
import { List } from 'phosphor-react';

export function Header () {
    return (
        <header className='headerContainer'>
            <img src={RehagroNameLogo} alt="Logotipo do Rehagro" />
            <div className='headerIcons'>
                <List size={32} />
            </div>
        </header>
    );
}