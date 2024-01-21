import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette, faMusic, faQuestion, faComment, faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from "react-router-dom";
import './App.css';

const MenuBar = ({ setMenuClicked, currentPage }) => {
    let currentPath = useLocation().pathname;

    console.log(currentPath)

    const handleMenuItemClick = () => {
        setMenuClicked(currentPath);
    };

    return (
        <>
            <nav className="navbar">
                <ul>
                    <li className={currentPath === '/Music' ? 'selected' : ''}>
                        <Link to="/Music" onClick={handleMenuItemClick}>
                            <div className="nav-item">
                                <FontAwesomeIcon icon={faMusic} size="2x" />
                            </div>
                            <span>Music</span>
                        </Link>
                    </li>

                    <li className={currentPath === '/State' ? 'selected' : ''}>
                        <Link to="/State" onClick={handleMenuItemClick}>
                            <div className="nav-item">
                                <FontAwesomeIcon icon={faComment} size="2x" />
                            </div>
                            <span>State</span>
                        </Link>
                    </li>
                    <li className={currentPath === '/Style' ? 'selected' : ''}>
                        <Link to="/Style" onClick={handleMenuItemClick}>
                            <div className="nav-item">
                                <FontAwesomeIcon icon={faPalette} size="2x" />
                            </div>
                            <span>Style</span>
                        </Link>
                    </li>

                    <li className={currentPath === '/Mystery' ? 'selected' : ''}>
                        <Link to="/Mystery" onClick={handleMenuItemClick}>
                            <div className="nav-item">
                                <div className="icon-container">
                                    <FontAwesomeIcon icon={faMusic} size="2x" />
                                    <FontAwesomeIcon className="question-mark" icon={faQuestion} size="2x" />
                                </div>
                            </div>
                            <span>Mystery</span>
                        </Link>
                    </li>
                    <li className={currentPath === '/Privacy' ? 'selected' : ''}>
                        <Link to="/Privacy" onClick={handleMenuItemClick}>
                            <div className="nav-item">
                                {<FontAwesomeIcon icon={faMinusCircle} color="white" size="2x" />}
                            </div>
                            <span>DND</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
};

export default MenuBar;
