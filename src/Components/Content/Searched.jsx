/* Application > Content > Search Results | React Core */
import React from 'react'

/* Application > Content > Search Results | Core Components */
import Channels from './Channels';

/* Application > Content > Search Results | Material Ui */
import Divider          from '@material-ui/core/Divider';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';

/* Application > Content > Search Results | Cascade Styles */
import './Styles.css';

/* Application > Content > Search Results | Function Declaration */
function Searched() {
     return(
         <div className = 'search'>
             <div className = 'search__filter'>
                 <TuneOutlinedIcon />
                 <h4>Filter</h4>
             </div>
             <Divider 
                 style = {{
                     marginTop:    10,
                     marginBottom: 10,
                     backgroundColor:  'lightgrey'
                 }}
             />
             <Channels Verify 
                 Image       = 'https://fcwallpaper.com/wp-content/uploads/2019/10/Inter-Milan-HD-Wallpapers.jpg'
                 Counts      = {1200}
                 Channel     = 'Inter Milan Football Club'
                 Subscribes  = '120M'
                 Description = 'Nerazzurri Intwatch Videos'
             />
             <Divider 
                 style = {{
                     marginTop:    10,
                     marginBottom: 10,
                     backgroundColor:  'lightgrey'
                 }}
             />
         </div>
     );
}

export default Searched