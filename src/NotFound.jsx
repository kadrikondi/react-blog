import {Link} from 'react-router-dom'
const NotFound = () => {
    return ( 
        <div>
            <h3>page not found</h3>
            <p>
                <Link to='/'> Go home page</Link>
            </p>
        </div>
     );
}
 
export default NotFound;