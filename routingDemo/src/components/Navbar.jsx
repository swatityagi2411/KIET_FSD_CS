import {Link} from 'react-router-dom';

const Navbar=()=>{
    return(
        <nav>
            <Link to="/Home">Home</Link>
            <Link to="/About">About</Link>

            <Link to="/details/1">student 1</Link>
            <Link to="/details/2">student 2</Link>
        </nav>
    )

}
export default Navbar;