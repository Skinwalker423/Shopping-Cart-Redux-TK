import {CartIcon, BadgeCheck} from '../../icons';
import { useSelector, useDispatch } from 'react-redux';
import {Outlet, Link} from 'react-router-dom';
import { showCheckoutModal } from '../../features/modal/checkoutModalSlice';


const NavBar = () => {

    const {amount} = useSelector((state) => state.cart);
    const dispatch = useDispatch();


    return (
        <>
        <nav>
            <div className="nav-center">
                <Link className="nav-title" to={'/'}><h1>NavBar</h1></Link>
                <BadgeCheck />
                <div className='nav-container'>
                    <div onClick={() => {
                        console.log('cart clicked');
                        dispatch(showCheckoutModal());
                    }}><CartIcon /></div>
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