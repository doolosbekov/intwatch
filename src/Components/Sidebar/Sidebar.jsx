/* Application > Sidebar | React Core */
import React from 'react';

/* Application > Sidebar | Core Components */
import Navigation from './../Content/Navigation';

/* Application > Sidebar | Material Ui Components */
import Divider                 from '@material-ui/core/Divider';
import HomeIcon                from '@material-ui/icons/Home';
import WhatshotIcon            from '@material-ui/icons/Whatshot';
import SubscriptionsIcon       from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon        from '@material-ui/icons/VideoLibrary';
import HistoryIcon             from '@material-ui/icons/History';
import OndemandVideoIcon       from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon          from '@material-ui/icons/WatchLater';
import ThumbUpAltOutlinedIcon  from '@material-ui/icons/ThumbUpAltOutlined';
import ExpandMoreOutlinedIcon  from '@material-ui/icons/ExpandMoreOutlined';

/* Application > Sidebar | Styles */
import {SidebarStyles} from './Istyles';

/* Application > Sidebar | Function Declaration */
function Sidebar() {
     const classes = SidebarStyles();
     return(
         <div className = {classes.sidebar}>
             <Navigation Selected Icon = {HomeIcon}      Title = 'Home' />
             <Navigation Icon = {WhatshotIcon}           Title = 'Trending' />
             <Navigation Icon = {SubscriptionsIcon}      Title = 'Subscription' />
             <Divider    style = {{marginTop: 10, marginBottom: 10}} />
             <Navigation Icon = {VideoLibraryIcon}       Title = 'Library' />
             <Navigation Icon = {HistoryIcon}            Title = 'History' />
             <Navigation Icon = {OndemandVideoIcon}      Title = 'Your Videos' />
             <Navigation Icon = {WatchLaterIcon}         Title = 'Watch Later' />
             <Navigation Icon = {ThumbUpAltOutlinedIcon} Title = 'Liked Videos' />
             <Navigation Icon = {ExpandMoreOutlinedIcon} Title = 'Show More' />
             <Divider    style = {{marginTop: 10, marginBottom: 10}} />
         </div>
     );
}

export default Sidebar