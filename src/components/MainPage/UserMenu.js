import React from 'react';
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import {
    AccountBoxOutlined,
    AccountCircleOutlined,
    ExitToAppOutlined,
    MenuOutlined,
    SettingsOutlined
} from "@material-ui/icons";
import {useSelector} from "react-redux";
import {firebase} from "../../Firebase";
import classes from './UserMenu.module.css'

const UserMenu = ({user, history, setOpen, close}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const uid = useSelector(state => state.login.uid)
    const href = window.location.href
    const handleClick = e => {
        setAnchorEl(e.currentTarget);
    }
    const handleClose = (type) => {
        switch (type) {
            case 'profile':
                history.push(`/profile/${uid}`)
                break
            case 'settings':
                history.push(`/settings`)
                break
            case 'logout':
                firebase.auth().signOut()
                break
        }
        setAnchorEl(null);
    };
    const style = {

    }
    return (
        <>
            {user
                ?
                <div className={classes.menu}>
                    <span>{user}</span>
                    <div>
                        <AccountCircleOutlined style={{cursor: 'pointer'}} fontSize={"large"}  onClick={handleClick}/>
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            id="simple-menu"
                            keepMounted
                        >
                            <MenuItem onClick={() => handleClose('profile')}>
                                <div className={classes.icon}>
                                    <AccountBoxOutlined /> <span>Профиль</span>
                                </div>
                            </MenuItem>
                            <MenuItem onClick={() => handleClose('settings')}>
                               <div className={classes.icon}>
                                   <SettingsOutlined /> <span>Настройки</span>
                               </div>
                            </MenuItem>
                            <MenuItem onClick={() => handleClose('logout')}>
                                <div className={classes.icon}>
                                    <ExitToAppOutlined />
                                    <span>Выйти</span>
                                </div>
                            </MenuItem>
                        </Menu>
                    </div>
                </div>
                :
                <div className={classes.signIn} onClick={() => setOpen(true)}>Войти</div>}
        </>
    );
};

export default UserMenu;
