import React from 'react';

function createMenuLink(label, link, target="_self", active=true) {

    return(
      <li className="nav-item">
        <a  className="nav-link"
            href={link}
            target={target}
        >
            {label}
        </a>
      </li>
    );
}

function createDropDownMenu(label, items={"SampleLink": "#"}) {
    
    let dropDownItems = [];
    
    for (var item in items) {
        dropDownItems.push(
            <a  className="dropdown-item"
                href={items[item]}
            >
                {item}
            </a>
        );
    }
    
    return (
        <li className="nav-item dropdown">
            <a  className="nav-item nav-link dropdown-toggle"
                href="#"
                data-toggle="dropdown"
            >
                {label}
            </a>
            <div className="dropdown-menu dropdown-menu-right
                            text-center">
                {dropDownItems}
            </div>
        </li>
    );
}

export default { createMenuLink, createDropDownMenu };