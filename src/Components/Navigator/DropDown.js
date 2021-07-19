import React, { useState } from 'react'
import 'Components/Navigator/DropDown.css'
import { IconButton, Menu, MenuItem } from '@material-ui/core'
import { Link, useHistory } from 'react-router-dom'
import { useStateValue } from 'Services/StateProvider/StateProvider'
import { authService } from 'Services/myBase'
import { AccountCircle } from '@material-ui/icons'
 
function DropDown() {
    const history = useHistory();
    const [{user, profile}, dispatch] = useStateValue();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleSignOut = () => {
        if (user) {
            authService()
            .signOut()
            .then(() => {
                history.push("/")
            })
        }
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }
    
    const handleClose = () => {
        setAnchorEl(null);
    }

    return (
        <div className="dropDown">
            {/* <div className="dropDown__container" onClick={handleClick}>
                <img className="dropDown__img" src={defaultProfile} alt="" />
                <ArrowDropDownIcon className="dropDown__arrow"/>
                <AccountCircle />
            </div> */}
            <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleClick}
            >
                <AccountCircle className="dropDown__profile"/>
            </IconButton>
            <Menu
                className="dropDown__menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose} component={Link} to="/post/new">포스트</MenuItem>
                <MenuItem onClick={handleClose} component={Link} to="/profile">프로필</MenuItem>
                <MenuItem onClick={handleClose} component={Link} to="/personal-info">개인정보</MenuItem>
                <MenuItem onClick={handleSignOut}>로그아웃</MenuItem>
            </Menu>
        </div>
    )
}

export default DropDown
