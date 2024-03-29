import React, { Component } from 'react';



class NavBar extends Component {

    render() { 
        console.log('Navbar - Rendered');
        return ( 
        <nav className = "navbar navbar-light bg-light">
            <div className = "container-fluid">
                <a className = "navbar-brand" href="#">
                    Navbar{" "}
                    <span className = "badge bg-pill bg-secondary">
                        { this.props.totalCounters }
                    </span>
                </a>
                </div>
                </nav>
        );
    }
}
 
export default NavBar;