/* Application > Content > Channel Information | React Core */
import React from 'react'

/* Application > Content > Channel Information | Material Ui */
import Avatar from '@material-ui/core/Avatar';
import VerifyIcon from '@material-ui/icons/CheckCircleOutlineOutlined';

/* Application > Content > Channel Information | Cascade Styles */
import './Styles.css';

/* Application > Content > Channel Information | Function Declaration */
function Channels({Image, Counts, Verify, Channel, Subscribes, Description}) {
     
     return(
         <div className = 'channels'>
             <Avatar
                 alt = {Channel}
                 src = {Image}
                 style = {{
                     width:  120,
                     height: 120,
                     margin: '10px 60px'
                 }} 
             />
             <div className = 'channels__text'>
                 <h4>{Channel} { Verify && <VerifyIcon />} </h4>
                 <p>{Subscribes} Subscribers • {Counts} Videos</p>
                 <p>{Description}</p>
             </div>
         </div>
     );
}

export default Channels;