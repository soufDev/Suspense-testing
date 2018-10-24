import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Header = React.memo(function Header(props) {
    return (
        <Menu size={"huge"}>
            <Menu.Item link><Link to={"/"}>Home</Link></Menu.Item>
            <Menu.Item link><Link to={"/user"}>User</Link></Menu.Item>
        </Menu>
    )
});

export default Header;