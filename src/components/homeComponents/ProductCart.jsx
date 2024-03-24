import { useDispatch, useSelector } from "react-redux";
import {increment} from '../../redux/counter/Acions';

import {
  decrementquantity,
} from "../../redux/addNewProduct/Actions";
import { addCart } from "../../redux/addToCart/Actions";

// eslint-disable-next-line react/prop-types
const ProductCart = ({ productName, price, category, quantity, src, infoData }) => {
  // useSelector Function
  const data = useSelector((state) => state);
  // Dispatch Function
  const dispatch = useDispatch();
  // Handle Function
  const handleClick = (cartData) => {
    const result = data.addProduct.some((item) => cartData.id === item.id);
    if (result) {
       data.addProduct.map((item) => {
           if (item.id === cartData.id) {
            dispatch(increment(1))
            dispatch(addCart(cartData))
            dispatch(decrementquantity({
              ...item,
              quantity: item.quantity - 1
            }));
          }
        })
    }
  };

  return (
    <div className="lws-productCard">
      <img className="lws-productImage" src={src} alt="product" />
      <div className="p-4 space-y-2">
        <h4 className="lws-productName">{productName}</h4>
        <p className="lws-productCategory">{category}</p>
        <div className="flex items-center justify-between pb-2">
          <p className="productPrice">
            BDT <span className="lws-price">{price}</span>
          </p>
          <p className="productQuantity">
            QTY <span className="lws-quantity">{quantity}</span>
          </p>
        </div>
        <button
          onClick={() => handleClick(infoData)}
          className="lws-btnAddToCart"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCart;
