 import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
         <nav className="navbar">
  <h1>The blogger</h1>
    <nav className="links">
  <Link to="/"> Home</Link>
  <Link to="/create"  rel="noopener noreferrer" style={{color:'white',backgroundColor:"#f1356d" , borderRadius:"8px"}}> Create blog</Link>
    </nav>

         </nav>
      );
}
 
export default Navbar;