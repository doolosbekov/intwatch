/* Application | React Core */
import React from 'react';

/* Application | React Router */
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

/* Application | Style Consolidation */
import {makeStyles}  from '@material-ui/core/styles';

/* Application | Core Componenets */
import Header      from './Header/Header'
import Sidebar     from './Sidebar/Sidebar';
import Searched    from './Content/Searched';
import Recommends  from './Content/Recomends';

/* Application | Style Declaration */
const useStyles = makeStyles ({
     App: {backgroundColor: '#f9f9f9'},
     App__Content: {display: 'flex',}
});

/* Application | Function Declaration */
export default function App() {
     const classes = useStyles();
     
     return(
         <div className = {classes.App}>
             <Router>
                 <Header />
                 <Switch>
                     <Route path = '/search/:searchTerms'>
                         <div className = {classes.App__Content}>
                             <Sidebar />
                             <Searched />
                         </div> 
                     </Route>
                     <Route path = '/'>
                         <div className = {classes.App__Content}>
                             <Sidebar />
                             <Recommends />
                         </div> 
                     </Route>
                 </Switch>
             </Router>
         </div>
     );
}