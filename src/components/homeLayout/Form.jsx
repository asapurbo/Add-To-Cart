import { useState } from "react";
import { useDispatch } from "react-redux";
import { addproduct } from "../../redux/addNewProduct/Actions";

const Form = () => {
  // useState Hook
  const [input, setInput] = useState({product: "iPhone", category: "15 pro max", url: "https://shorturl.at/bJN15" , price: 151000, quantity: 20});
  // Dispatch Function
  const dispatch = useDispatch();
  // Submit Function
  const handleSubmit = (e) => {
    e.preventDefault();
    const changeData = { ...input };
    changeData.price = parseFloat(changeData.price);
    changeData.quantity = parseFloat(changeData.quantity);
    dispatch(addproduct(changeData));
    setInput({product: '', category: "", url: "" , price: '', quantity: ''})
  };
  // Handle Change Function
  const handleChange = (e, keysName) => {
    const { value } = e.target;
    setInput((prevInput) => ({ ...prevInput, [keysName]: value }));
  };
  console.log(input);
  return (
    <div className="formContainer">
      <h4 className="formTitle">Add New Product</h4>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 text-[#534F4F]"
        id="lws-addProductForm"
      >
        {/* <!-- product name --> */}
        <div className="space-y-2">
          <label htmlFor="lws-inputName">Product Name</label>
          <input
            className="addProductInput"
            id="lws-inputName"
            type="text"
            onChange={(e) => handleChange(e, "product")}
            value={input.product}
            required
          />
        </div>
        {/* <!-- product category --> */}
        <div className="space-y-2">
          <label htmlFor="lws-inputCategory">Category</label>
          <input
            className="addProductInput"
            id="lws-inputCategory"
            type="text"
            onChange={(e) => handleChange(e, "category")}
            value={input.category}
            required
          />
        </div>
        {/* <!-- product image url --> */}
        <div className="space-y-2">
          <label htmlFor="lws-inputImage">Image Url</label>
          <input
            className="addProductInput"
            id="lws-inputImage"
            type="text"
            onChange={(e) => handleChange(e, "url")}
            value={input.url}
            required
          />
        </div>
        {/* <!-- price & quantity container --> */}
        <div className="grid grid-cols-2 gap-8 pb-4">
          {/* <!-- price --> */}
          <div className="space-y-2">
            <label htmlFor="ws-inputPrice">Price</label>
            <input
              className="addProductInput"
              type="number"
              id="lws-inputPrice"
              value={input.price}
              required
              onChange={(e) => handleChange(e, "price")}
            />
          </div>
          {/* <!-- quantity --> */}
          <div className="space-y-2">
            <label htmlFor="lws-inputQuantity">Quantity</label>
            <input
              className="addProductInput"
              type="number"
              id="lws-inputQuantity"
              value={input.quantity}
              onChange={(e) => handleChange(e, "quantity")}
              required
            />
          </div>
        </div>
        {/* <!-- submit button --> */}
        <button type="submit" id="lws-inputSubmit" className="submit">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default Form;
