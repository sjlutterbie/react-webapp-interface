import React from 'react';
import mB from '../shared/menuBuilder';

class Header extends React.Component {

    render() {
        
        var dropDownItems = {
        "Account settings": "#",
        "Billing history": "#",
        "Contact support": "#",
        "Sign out": "#"
    };
        
        return (
            <header
                className="top-nav navbar navbar-expand 
                           flex-column flex-lg-row navbar-dark"
            >
                <a className="navbar-brand" href="/">
                    <img
                        className="header-img"
                        src="https://www.friendshipcircle.org/wp-content/uploads/2016/09/fake-logo.png"
                    >
                    </img>
                </a>
                <div className="navbar-nav-scroll d-flex ml-lg-auto">
                    <ul className="navbar-nav flex-column flex-sm-row text-center">
                            {mB.createMenuLink("Website", "#")}
                            {mB.createMenuLink("Research", "#")}
                            {mB.createMenuLink("Knowledgebase", "#")}
                            {mB.createDropDownMenu("Account", dropDownItems)}
                    </ul>
                </div>
                
            </header>
        );
    }
}


export default { Header };