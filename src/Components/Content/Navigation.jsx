/* Application > Content > Navigation | React Core */
import React from 'react';

/* Application > Content > Navigation | Cascade Styles */
import './Styles.css';

/* Application > Content > Navigation | Function Declaration */
function Navigation({Selected, Icon, Title}) {
     
     return(
         <div className = {`navigation ${Selected && 'selected'}`}>
             <Icon className = 'navigation__icons'/>
             <h2   className = 'navigation__title' >
                 {Title}
             </h2>
         </div>
     );
}

export default Navigation;