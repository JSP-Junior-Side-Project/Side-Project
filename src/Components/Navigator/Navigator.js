import React from 'react'
import 'Components/Navigator/Navigator.css'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import DropDown from 'Components/Navigator/DropDown';
import { useStateValue } from 'Services/StateProvider/StateProvider';

function Navigator() {
    const [{user}, dispatch] = useStateValue();

    return (
        <div>
            <AppBar position="static">
                <Toolbar className="nav">
                    <Link to="/" className="nav__logo" >
                        <span>SIDE-PROJECT</span>
                    </Link>
                    <div className="nav__searchContainer">
                        <SearchIcon className="nav__searchIcon" />
                        <input className="nav__searchInput" type="text" placeholder="keyword..."/>
                    </div>
                    <div className="nav__grow" />
                    <div className="nav__optionContainer">
                    <Link to="/" className="nav__option desktop">
                            <span className="nav__home">Home</span>
                        </Link>
                        { user ? (
                                <div className="nav__dropDown desktop">
                                    <DropDown />
                                </div>
                            ):(
                                <Link to="/login" className="nav__option desktop">
                                    <span>Login</span>
                                </Link>
                            )
                        }
                        <div className="mobile">
                            <IconButton
                                className="mobile"
                                color="black"
                            >
                                <MenuIcon />
                            </IconButton>                            
                        </div>
                    
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navigator
