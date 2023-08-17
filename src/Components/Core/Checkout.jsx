import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import LockIcon from '@mui/icons-material/Lock';
import Image from './visa.png'
import Pay from './pay.png'
import { TextField } from '@mui/material';
import { useSelector } from 'react-redux';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height:500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Checkout(props) {
  const [open, setOpen] = React.useState(false);
  const cartData = useSelector((state) => state.Product.value.addCart);
  console.log(cartData,"cartData")
  const handleOpen = () => {
  if (cartData.length ===0) {
        alert("Add some products in the cart");
      } else {
        setOpen(true);
      }
    }
  const handleClose = () => setOpen(false);

  

  return (
    <div>
      <Button style={{
                  width: "350px",
                  height: "50px",
                  background: "black",
                  color: "white",
                  margin:"30px 30px 30px 50px"
                }} onClick={handleOpen}>CHECKOUT</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            {/* <img src={Pay} alt="" /> */}
            <Box  sx={{ display: 'flex',
          justifyContent: 'space-between',}}>
             <h5 >Payment</h5>
             
              <img style={{height:"60px",width:"100px",}}  src={Image} alt="" />
            </Box>
            <Box> 
            <TextField sx={{width:"200px"}}
          id="standard-helperText"
          label="Card number "
          placeholder='xxxx xxxx xxxx xxxx'
          defaultValue=""
          variant="standard"
        />

        <TextField sx={{ml:4,width:"83px"}}
          id="standard-helperText"
          label="Expiry "
          placeholder='MM/YYYY'
          defaultValue=""
          variant="standard"
        />
         <TextField  sx={{ml:4,width:"80px"}}
          id="standard-helperText"
          label="CVV "
          placeholder='...'
          defaultValue=""
          variant="standard"
        />
        <div style={{display:"flex",justifyContent: 'space-between',marginTop:"30px"}}>
          <div>Subtotal</div>
           {props.Subtotal}
          </div>
          <div style={{display:"flex",justifyContent: 'space-between',marginTop:"10px"}}>
          <div>Tax</div>
          0
          </div>
          <div style={{display:"flex",justifyContent: 'space-between',marginTop:"10px"}}>
          <div>Shipping</div>
          Free
          </div>
          <div style={{display:"flex",justifyContent: 'space-between',marginTop:"20px"}}>
          <div><h5>Total</h5></div>
         <h5>{props.Subtotal}</h5> 
          </div>
          
          <Button sx={{background:"#2196f3",width:"430px",color:"white",borderRadius:"20px",mt:4}} variant="contained" onClick={()=>handleClose()} ><h5>PLACE ORDER</h5></Button>
          

          
            </Box>
           
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
