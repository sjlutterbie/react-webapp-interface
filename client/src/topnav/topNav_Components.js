import React from 'react';

function Header() {
    
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
                    <li className="nav-item">
                        <a className="nav-link" href="#">Website</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Research</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Knowledgebase</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a  className="nav-item nav-link dropdown-toggle"
                            href="#"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >Account
                        </a>
                        <div className="dropdown-menu dropdown-menu-right
                                        dropdown-menu-right text-center">
                            <a className="dropdown-item" href="#">Account Settings</a>
                            <a className="dropdown-item" href="#">Billing History</a>
                            <a className="dropdown-item" href="#">Contact Support</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Sign out</a>
                        </div>
                    </li>
                </ul>
            </div>
            
        </header>
    );
}


export default { Header };