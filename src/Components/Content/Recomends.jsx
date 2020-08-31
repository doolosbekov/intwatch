/* Application > Content > Recommends | React Core */
import React from 'react';
import Cards from './Cards';

/* Application > Content > Recommends | Styles */
import './Styles.css';

/* Application > Content > Recommends | Function Declaration */
function Recommends() {
    
     return(
         <div className = 'recommends'>
             <h2>Intwatch Recomends</h2>
             <div className ='recommends__videos'>          
             <Cards 
                 View        = '2.2M Views'
                 Image       = 'https://miro.medium.com/max/967/1*3SOBODA6VNWNrO1NnwnQhA.png'
                 Title       = 'Watch New Intwatch Videos' 
                 Channel     = 'Intwatch Channel' 
                 Timestamp   = '2 Days Ago'
                 Chanelcard  = 'https://miro.medium.com/max/967/1*3SOBODA6VNWNrO1NnwnQhA.png'
             />
             <Cards 
                 View        = '2.2M Views'
                 Image       = 'https://miro.medium.com/max/967/1*3SOBODA6VNWNrO1NnwnQhA.png'
                 Title       = 'Watch New Intwatch Videos' 
                 Channel     = 'Intwatch Channel' 
                 Timestamp   = '2 Days Ago'
                 Chanelcard  = 'https://miro.medium.com/max/967/1*3SOBODA6VNWNrO1NnwnQhA.png'
             />
             <Cards 
                 View        = '2.2M Views'
                 Image       = 'https://miro.medium.com/max/967/1*3SOBODA6VNWNrO1NnwnQhA.png'
                 Title       = 'Watch New Intwatch Videos' 
                 Channel     = 'Intwatch Channel' 
                 Timestamp   = '2 Days Ago'
                 Chanelcard  = 'https://miro.medium.com/max/967/1*3SOBODA6VNWNrO1NnwnQhA.png'
             />
             <Cards 
                 View        = '2.2M Views'
                 Image       = 'https://miro.medium.com/max/967/1*3SOBODA6VNWNrO1NnwnQhA.png'
                 Title       = 'Watch New Intwatch Videos' 
                 Channel     = 'Intwatch Channel' 
                 Timestamp   = '2 Days Ago'
                 Chanelcard  = 'https://miro.medium.com/max/967/1*3SOBODA6VNWNrO1NnwnQhA.png'
             />
             <Cards 
                 View        = '2.2M Views'
                 Image       = 'https://miro.medium.com/max/967/1*3SOBODA6VNWNrO1NnwnQhA.png'
                 Title       = 'Watch New Intwatch Videos' 
                 Channel     = 'Intwatch Channel' 
                 Timestamp   = '2 Days Ago'
                 Chanelcard  = 'https://miro.medium.com/max/967/1*3SOBODA6VNWNrO1NnwnQhA.png'
             />                                                               
             </div>
         </div>
     );
}

export default Recommends;