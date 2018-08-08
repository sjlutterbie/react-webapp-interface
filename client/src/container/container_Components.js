import React from 'react';

import Sidebar from '../sidebar/sidebar_Components';
import mainContent from '../mainContent/mainContent_Components'


class Container extends React.Component {
    
    render() {
        
        return (
            <div className="container-fluid">
                <div className="row flex-x1-nowrap">

                    <Sidebar.Sidebar />
                    <mainContent.mainContent />

                </div>
            </div>
        );
   
    }
}

export default { Container };