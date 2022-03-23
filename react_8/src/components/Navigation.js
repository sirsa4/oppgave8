import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <>
        <nav>
            <ul>
                <li><NavLink to='/movies'>Movies</NavLink></li>
                <li><NavLink to='/actors'>Actors</NavLink></li>
            </ul>
        </nav>
        </>
      );
}
 
export default Navigation;