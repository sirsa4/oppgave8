import { NavLink } from "react-router-dom";
import StyledNav from "../styled/StyledNav";

const Navigation = () => {
    return (
        <>
        <StyledNav>
            <ul className="flex justify-evenly">
                <li><NavLink to='/movies'>Movies</NavLink></li>
                <li><NavLink to='/actors'>Actors</NavLink></li>
            </ul>
        </StyledNav>
        </>
      );
}
 
export default Navigation;