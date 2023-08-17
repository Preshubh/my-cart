import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setuserLogin } from '../Redux/Slice/Slice';

export default function Profile(props) {
  const dispatch=useDispatch()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate()
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    
    setAnchorEl(null);
  };
  const LogOut =()=>{
    localStorage.removeItem("login")
dispatch(setuserLogin("false"))
  navigate('/')
    
  }

  return (
    <div>
      <Button
        style={{background:"skyblue",color:"blue"}}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className="rounded-circle"
      >
        P
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem >{props.ProfileName}</MenuItem>
        
        <MenuItem style={{background:"red"}} onClick={()=>LogOut()}>Logout</MenuItem>
      </Menu>
    </div>
  );
}