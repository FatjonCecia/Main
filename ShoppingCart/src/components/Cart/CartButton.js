import classes from './CartButton.module.css';
import { uiActions } from '../../Store/ui-slice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
const CartButton = (props) => {
  const dispatch=useDispatch();
  const cartQuantity=useSelector(state=>state.cart.totalQuantity);
  const toggleCartHandler=()=>{
    dispatch(uiActions.toggle());
  }
  return (
    <button className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
