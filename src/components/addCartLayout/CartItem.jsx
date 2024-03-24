import { useSelector } from "react-redux";
import CartList from "../addCartComponents/CartList";

const CartItem = () => {
  // useSelector Function
  const data = useSelector((state) => state.addToCart);
  return (
    <div>
      {data.map((item, index) => (
        <CartList
          key={index}
          productName={item.product}
          category={item.category}
          price={item.price}
          url={item.url}
          count={item.count}
          calculatePrice={item.price * item.count}
          dataInfo={item}
        />
      ))}
    </div>
  );
};

export default CartItem;
