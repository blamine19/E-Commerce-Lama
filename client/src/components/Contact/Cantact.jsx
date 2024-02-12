import React, { useState } from 'react'
import "./Cantact.scss"
import { Link } from 'react-router-dom'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

const Cantact = () => {


  const [contactEmail, setContactEmail] = useState('')

  return (

    <div className='cantact'>

      <div className="subCantact" >
        &nbsp;
      </div>
      <div className="subCantact" style={{ color: 'white', fontSize: '13px' }}>
        <span>BE IN TOUCH WITH US</span>
      </div>
      <div className="subCantact" style={{ flex: 3 }} >

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <TextField className="TextField" id="outlined-basic" label="enter your email" variant="outlined" value={contactEmail} size="small" 
          />&nbsp;&nbsp;


          <Button variant="contained" endIcon={<SendIcon />} size="small">
            JOIN US
          </Button>
        </div>

      </div>

     
  <div className="subCantact">
    <Link to={'facebook.com'}><FacebookIcon /></Link>
    <Link to={'facebook.com'}><InstagramIcon /></Link>
    <Link to={'facebook.com'}><TwitterIcon /></Link>
    <Link to={'facebook.com'}><EmailIcon /></Link>
  </div>
      

    </div >


  )
}

export default Cantact