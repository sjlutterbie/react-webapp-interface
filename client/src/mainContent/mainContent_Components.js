import React from "react";

class mainContent extends React.Component {

    render() {
        
        return (
            
            <div className="main-content col">
                {/* Main content */}
                    
                    {/*Main content top tabs */}
                    <h2 className="text-center">
                        Project title
                    </h2>
                    
                    {/* Dropdown menu for small displays */}
                    <a 
                        className="dropdown-toggle nav-link d-sm-none text-center"
                        data-toggle="collapse"
                        href="#smallProjectTabs"
                        role="button"
                        aria-expanded="false"
                        aria-controls="smallProjectTabs">
                        Project Tabs
                    </a>
                    <div
                        className="collapse text-center"
                        id="smallProjectTabs">
                        <a  className="dropdown-item"
                            href="#">
                            Project Dashboard
                        </a>
                        <a  className="dropdown-item"
                            href="#">
                            Individuals
                        </a>
                        <a  className="dropdown-item"
                            href="#">
                            Teams
                        </a>
                        <a  className="dropdown-item"
                            href="#">
                            Organization
                        </a>
                    </div>
                    
                    {/* Tabbed menu for sm+ size screens */}
                    <nav className="nav nav-tabs justify-content-center
                                    collapse d-none d-sm-flex">
                        <a  classNme="nav-item nav-link"
                            href="#">
                            Project Dashboard
                        </a>
                        <a  className="nav-item nav-link active"
                            href="#">
                            Individuals
                        </a>
                        <a  className="nav-item nav-link"
                            href="#">
                            Teams
                        </a>
                        <a  className="nav-item nav-link"
                            href="#"
                        >
                            Organization
                        </a>
                    </nav>
                    <h1>Project title</h1>
                    <p>Welcome to Project title</p>
                </div>

        );    
    }    
}

export default { mainContent };