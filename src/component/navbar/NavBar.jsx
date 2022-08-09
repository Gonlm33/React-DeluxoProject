import React from "react";
import CardWidget from "../CardWidget/CardWidget";
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to='/'>
                        <img src="../src/img/logo.png" alt="" />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto mb-5 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to='/'>Inico</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/'>Acerca de nosotros</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/categoria/fem'>Artistas Femeninos</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/categoria/masc'>Artistas Msculinos</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to='cart'>
                                <CardWidget/>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            


        </div>
    )
}

export default NavBar;