import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';

const Navigation = (props) => {
    // console.log("Props of navigation: ", props);
    let { userStatus } = props;

    // Note: Function to logout user...!
    const logOut = () => {
        let dataInStr = JSON.stringify(null);
        localStorage.setItem("AuthenticatedUser", dataInStr);
        console.log('You have logged out successfully!');
        window.location.reload();
    };

    return (
        <>
            {
                (userStatus)
                    ?
                    (
                        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                            <a className="navbar-brand" href="#">
                                {
                                    (userStatus)
                                        ?
                                        (userStatus.email.slice(0, userStatus.email.lastIndexOf("@")).toUpperCase())
                                        :
                                        (null)
                                }
                            </a>

                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse  d-flex justify-content-around font-weight-bold" id="navbarNav">
                                <ul className="navbar-nav" style={{ width: '100%'  }}>
                                    <li className="nav-item">
                                        <Link to="/" className='nav-link'> Home  </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link to="item-list" className='nav-link '> Item List  </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link to="my-items" className='nav-link'> My Items </Link>
                                    </li>

                                    <li className="nav-item" style={{ marginLeft: 'auto' }}>
                                        <button
                                             className="btn btn-outline-dark  text-white"
                                            onClick={logOut}
                                        >
                                            Logout
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    )
                    :
                    (
                        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                            <a className="navbar-brand" href="#"> CRUD APP </a>

                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse d-flex justify-content-around font-weight-bold" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item ">
                                        <Link to="/" className='nav-link'> Log In  </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link to="sign-up-screen" className='nav-link'> Sign Up </Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    )
            }
        </>
    );
};

export default Navigation;