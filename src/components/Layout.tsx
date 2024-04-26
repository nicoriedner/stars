import { Outlet, Link } from "react-router-dom";
import MenuItem from "./MenuItem";
import MenuPanel from "./MenuPanel";

const Layout = () => {
    return (
        <>
            <nav>
                <MenuPanel title="Overview" collapsed={false}>
                        <MenuItem title="Welcome" jump="/"/>
                        <MenuItem title="Impressum" jump="/impressum"/>
                </MenuPanel>
                <MenuPanel title="OverviewB" collapsed={false}>
                    <MenuItem title="Welcome" jump="/"/>
                    <MenuItem title="Impressum" jump="/impressum"/>
                    <MenuItem title="Cards" jump="/cards"/>
               
                </MenuPanel>
                <MenuPanel title="OverviewC" collapsed={true}>
                    <MenuItem title="Welcome" jump="/"/>
                    <MenuItem title="Impressum" jump="/impressum"/>
                </MenuPanel>
            </nav>

            <Outlet />
        </>
    )
};

export default Layout;
