/* Application > Header | Style Consolidation */
import {makeStyles}  from '@material-ui/core/styles';

/* Application > Header | Style Declaration */
export const HeaderStyles = makeStyles ({
     header: {
         top: 0,
         zIndex:  100,
         display: 'flex',
         position:   'sticky',
         alignItems: 'center',
         paddingTop:    '0.6rem',
         paddingBottom: '0.6rem',
         paddingRight:  '1.6rem',
         paddingLeft:   '1.6rem',
         justifyContent:   'space-between',
         backgroundColor:  '#f9f9f9'
     },
     header__logo: {
         objectFit:  'contain',
         marginLeft: '1.2rem',
         transform:  'rotate(180deg)',
     },
     header__search: {
         flex: 1,
         border:  'none',
         outline: 'none',
         fontSize: '1.02rem',
         marginLeft: 8,
         backgroundColor:'transparent',
     },
     /* Header Elements Layout */
     header__layout_left:    {
         display: 'flex',
         alignItems: 'center',
         "& h2": {
             marginLeft: 8,
             fontFamily: "'Orbitron', sans-serif",
         }
     },
     header__layout_center:  {
         width:   '40rem',
         height:  '1.8rem',    
         border:  '1px solid lightgrey',
         display: 'flex',
         alignItems: 'center',
         borderRadius: 2,
     },
     header__layout_right:   {
         display: 'flex',
         alignItems: 'center',         
     },
});