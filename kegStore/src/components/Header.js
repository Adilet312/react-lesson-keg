import React from "react";

class Header extends React.Component
{
    render()
    {
        return (
            <header className="top">
                <h2>List of kegs</h2>
                <h3 className="tagline"> <span>The Best Kegs</span></h3>
            </header>
        );
    }
}

export default Header;