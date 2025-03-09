import { Link } from "react-router";


const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/tab1">Page 1</Link>
      <Link to="/tab2">Page 2</Link>
    </nav>
  );
};

export default Navbar;
