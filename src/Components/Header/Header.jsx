/* Application > Header | React Core */
import React, {useState} from 'react';

/* Application | React Router */
import {Link} from "react-router-dom";

/* Application > Header | Material Ui Components */
import Avatar        from '@material-ui/core/Avatar';
import IconButton    from '@material-ui/core/IconButton';
import MenuIcon      from '@material-ui/icons/Menu';
import SearchIcon    from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon      from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';

/* Application > Header | Styles */
import {HeaderStyles} from './Istyles'
import Logo from './Logo.svg'

/* Application > Header | Function Declaration */
export default function Header() {
     const classes = HeaderStyles();
     const [search, setSearch] = useState('')
     return(
         <div className = {classes.header}>
             <div className = {classes.header__layout_left}>
                 <MenuIcon />
                 <Link 
                     to = '/'
                     style = {{
                         color:          'inherit', 
                         display:        'flex', 
                         alignItems:     'center',
                         paddingTop:     6,
                         paddingBottom:  6,
                         textDecoration: 'none'
                     }}
                 >
                 <img 
                     src = {Logo} 
                     alt = 'Intwatch Tube Logo' 
                     height = '48'
                     className = {classes.header__logo} 
                 />
                 <h2>Intwatch</h2>
                 </Link>
             </div>
             <div className = {classes.header__layout_center}>
                 <input
                     className   = {classes.header__search}
                     placeholder = 'Type your requiest'
                     onChange    = {(event) => setSearch(event.target.value)}
                     type  = 'text'
                     value = {search}
                 />
                 <Link to = {`/search/${search}`}>
                 <IconButton
                     disableRipple
                     size  = 'small'
                     style = {{
                         margin:  0,
                         padding: 0,
                         height:  '100%',
                         borderLeft:   '1px solid lightgrey',
                         borderRadius: 0,
                     }}
                 >
                 <SearchIcon style = {{width:  '4rem',}} />
                 </IconButton>
                 </Link>
             </div>
             <div className = {classes.header__layout_right}>
                 <VideoCallIcon      style = {{marginRight: 20}} />
                 <AppsIcon           style = {{marginRight: 20}} />
                 <NotificationsIcon  style = {{marginRight: 20}} />
                 <Avatar alt = 'Inwatch Tube' />
             </div>
         </div>
     );
}