import React from 'react'
import {Icon} from 'antd';
import { getTwoToneColor } from 'antd/lib/icon/twoTonePrimaryColor';
import './Footer.css';
import facebooklogo from './icons/facebookicon.png';
import instalogo from './icons/instaicon.png';
import twitterlogo from './icons/twittericon.png';
import youtubelogo from './icons/youtubeicon.png';

function Footer() {
    return (
        <div class='footer'>
         <p class='title'> About US </p>
           <br/>
           <p class='para'>We started this website to help the middle class people <br/> to connect their home food food businnes online
          <br/>
           Follow us on our scocial media sites<br/></p>
   	  	
           <a href="#"><img class='f'src={facebooklogo} alt=""/></a>
           <a href="#"><img  class='i'src={instalogo} alt=""/></a>
           <a href="#"><img class='t'src={twitterlogo} alt=""/></a>
           <a href="#"><img class='y'src={youtubelogo} alt=""/></a>
           
        </div>
    )
}

export default Footer
