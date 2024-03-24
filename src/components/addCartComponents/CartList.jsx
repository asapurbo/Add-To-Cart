import { FaPlus, FaMinus } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCartDecrement,
  addToCartIncrement,
  completelydeleted,
} from "../../redux/addToCart/Actions";
import {
  quantityDecrement,
  quantityIncrement,
  statusafterdeletion,
} from "../../redux/addNewProduct/Actions";
import { decrement, increment } from "../../redux/counter/Acions";

// eslint-disable-next-line react/prop-types
const CartList = ({ productName, category, price, count, calculatePrice, url, dataInfo, }) => {
  // Id Destructuring
  // eslint-disable-next-line react/prop-types
  const { id } = dataInfo;
  // useSelector
  const data = useSelector((state) => state);
  // useDispatch
  const dispatch = useDispatch();
  // Increment Function
  const itemIncrement = () => {
    const findData = data.addToCart.some((item) => item.id === id);
    if (findData) {
      data.addToCart.forEach((item) => {
        if (item.quantity > item.count && item.id === id) {
          dispatch(addToCartIncrement(id));
          dispatch(quantityDecrement(dataInfo));
          dispatch(increment(1))
        }
      });
    }
  };
  // Decrement Function
  const itemDecrement = () => {
    dispatch(addToCartDecrement(id));
    dispatch(quantityIncrement(dataInfo));
    dispatch(decrement(1))
  };
  // Completely Deleted
  const completelyDeleted = () => {
    dispatch(completelydeleted(id))
    data.addToCart.map((item) => {
      if(item.id === id) {
        dispatch(decrement(item.count))
        dispatch(statusafterdeletion(id, item.count))
      }
    })
  }

  return (
    <div className="cartCard mt-3">
      <div className="flex items-center col-span-6 space-x-6">
        {/* <!-- cart image --> */}
        <img className="lws-cartImage" src={url} alt="product" />
        {/* <!-- cart item info --> */}
        <div className="space-y-2">
          <h4 className="lws-cartName">{productName}</h4>
          <p className="lws-cartCategory">{category}</p>
          <p>
            BDT <span className="lws-cartPrice">{price}</span>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
        {/* <!-- amount buttons --> */}
        <div className="flex items-center space-x-4">
          <button
            onClick={itemIncrement}
            className="lws-incrementQuantity w-6 h-6 hover:bg-black duration-300 rounded-full flex items-center justify-center hover:text-white"
          >
            <FaPlus className="text-lg" />
          </button>
          <span className="lws-cartQuantity">{count}</span>
          <button
            onClick={itemDecrement}
            className="lws-decrementQuantity w-6 h-6 hover:bg-black hover:text-white duration-300 rounded-full flex items-center justify-center"
          >
            <FaMinus className="text-lg" />
          </button>
        </div>
        {/* <!-- price --> */}
        <p className="text-lg font-bold">
          BDT <span className="lws-calculatedPrice">{calculatePrice}</span>
        </p>
      </div>
      {/* <!-- delete button --> */}
      <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
        <button onClick={completelyDeleted} className="lws-removeFromCart">
          <FaTrash className="text-lg text-red-400" />
        </button>
      </div>
    </div>
  );
};

export default CartList;
