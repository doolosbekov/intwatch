/* Application > Content > Video Cards | React Core */
import React from 'react'

/* Application > Content > Video Cards | Material Ui */
import Avatar from '@material-ui/core/Avatar';

/* Application > Content > Video Cards | Cascade Styles */
import './Styles.css';

/* Application > Content > Video Cards | Function Declaration */
function Cards({Image, Title, Channel, View, Timestamp, Chanelcard}) {
     
     return(
         <div className = 'video__cards'>
             <img  
                 src = {Image} 
                 alt = {Channel}
                 className = 'video__images' 
             />
             <div className = 'video__info'>
                 <Avatar 
                     alt = {Channel} 
                     src = {Chanelcard} 
                     className = 'video__avatar' 
                 />
                 <div className = 'vide__text'>
                     <h4>{Title}</h4>
                     <p>{Channel}</p>
                     <p>{View} • {Timestamp}</p>
                 </div>
             </div>
         </div>
     );
}

export default Cards;