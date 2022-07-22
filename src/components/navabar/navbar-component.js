import {CartIcon, BadgeCheck} from '../../icons';
import { useSelector } from 'react-redux';

const NavBar = () => {

    const {amount} = useSelector((state) => state.cart);

    return (
        <nav>
            <div className="nav-center">
                <h1>NavBar</h1>
                <BadgeCheck />
                <div className='nav-container'>
                    <CartIcon />
                    <div className='amount-container'>
                        <p className='total-amount'>{amount}</p>
                    </div>
                    
                </div>
            
            </div>
        </nav>
    )
}

export default NavBar;