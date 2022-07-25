import {CartIcon, BadgeCheck} from '../../icons';
import { useSelector } from 'react-redux';
import {Outlet, Link} from 'react-router-dom';

const NavBar = () => {

    const {amount} = useSelector((state) => state.cart);

    return (
        <>
        <nav>
            <div className="nav-center">
                <Link to={'/'}><h1>NavBar</h1></Link>
                <BadgeCheck />
                <div className='nav-container'>
                    <Link to={'/checkout'}><CartIcon /></Link>
                    <div className='amount-container'>
                        <p className='total-amount'>{amount}</p>
                    </div>
                    
                </div>
            
            </div>
        </nav>
        <Outlet />
        </>
    )
}

export default NavBar;