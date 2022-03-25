import { Outlet } from "react-router-dom";
import StyledMain from "./styledMain";

const Layout = () => {
    return ( 
        <StyledMain>
            <Outlet />
        </StyledMain>
    )
}
 
export default Layout;