import React from 'react';

class Sidebar extends React.Component {
    
    render() {
        
        return(
            <div className="col-12 col-md-auto io-sidebar">
                <nav className="nav flex-column text-center
                                text-md-left justify-center justify-md-left"
                >
                    
                    {/*Commission a Report*/}
                    <a  className="btn btn-primary btn-sm com-proj-button"
                        href="#"
                        role="Button"
                    >
                        Commission Project
                    </a>
                    
                    {/* Navigation menu */}
                    <a className="nav-item nav-link" href="/">User Dashboard</a>
                    
                    {/* Active Projects */}
                    <li className="nav-item">
                        <a  className="dropdown-toggle nav-link"
                            data-toggle="collapse"
                            href="#activeProjects"
                            role="button"
                            aria-expanded="false"
                            aria-controls="activeProjects"
                        >
                            Active Projects
                        </a>
                        <div className="collapse show" id="activeProjects">
                            <a  className="dropdown-item"
                                href="/project?title=Alpha%20Inc."
                            >
                                Alpha Inc.
                            </a>
                            <a
                                className="dropdown-item"
                                href="/project?title=Beta%20Corp."
                            >
                                Beta Corp.
                            </a>
                            <a  className="dropdown-item"
                                href="/project?title=Gamma%20Group"
                            >
                                Gamma Group
                            </a>
                        </div>
                    </li>
                    
                    {/* Archived Projects */}
                    <li className="nav-item">
                        <a  className="dropdown-toggle nav-link"
                            data-toggle="collapse"
                            href="#archivedProjects"
                            role="button"
                            aria-expanded="false"
                            aria-controls="archivedProjects"
                        >
                            Archived Projects
                        </a>
                        <div className="collapse" id="archivedProjects">
                            <a  className="dropdown-item"
                                href="#"
                            >
                                Microsoft
                            </a>
                            <a  className="dropdown-item"
                                href="#"
                            >
                                Apple
                            </a>
                            <a  className="dropdown-item"
                                href="#"
                            >
                                Google
                            </a>
                        </div>
                    </li>
                </nav>
            </div>
        );
        
    }
}

export default { Sidebar };