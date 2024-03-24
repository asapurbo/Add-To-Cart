import { useSelector } from "react-redux";
import ProductCart from "../homeComponents/ProductCart";

const Product = () => {
  // useSelecor Function
  const data = useSelector((state) => state);
  const findData = data.addProduct.every((item) => item.quantity === 0);

  if (!findData) {
    return (
      <div className="productContainer" id="lws-productContainer">
        {/* product item */}
        {data.addProduct.map((item) => {
          if (item.quantity > 0) {
            return (
              <ProductCart
                key={item.id}
                productName={item.product}
                category={item.category}
                price={item.price}
                quantity={item.quantity}
                src={item.url}
                infoData={item}
              />
            );
          }
        })}
        {/* product item ends */}
      </div>
    );
  } else if (findData) {
    return <div className="text-9xl font-bold flex justify-center items-center">NOT FOUND</div>;
  }
};

export default Product;
