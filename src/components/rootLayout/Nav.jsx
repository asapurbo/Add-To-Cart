import { IoBagHandleSharp } from "react-icons/io5";
import logo from '../../assets/logo.png'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Nav = () => {
  // useSelector Function
  const count = useSelector((state) => state.counter.value);
  
  return (
    <nav className="bg-[#171C2A] py-4">
      <div className="navBar ">
        <Link to="/">
          <img src={logo} alt="LWS" className="w-10" />
        </Link>

        <div className="flex gap-4">
          <Link to="/" className="navHome" id="lws-home">
            Home
          </Link>
          <Link to="/addCart" className="navCart" id="lws-cart">
            <div className="flex justify-between gap-2">
              <IoBagHandleSharp className="text-xl" />
              <span id="lws-totalCart">{count}</span>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
