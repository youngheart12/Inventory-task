import React,{useState} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { defaultActiveTab,inventory,sales,createOrder,orders } from './constant';
import Inventory from '../../Inventory/inventory';

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeTab,setActiveTab]=useState(defaultActiveTab);



  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
      <ListItem button 
       onClick={()=>setActiveTab(inventory)} sx={{backgroundColor: activeTab===inventory?"skyBlue":null}}>
            <ListItemIcon>
                <ShoppingBagOutlinedIcon/>
            </ListItemIcon>
            <ListItemText primary={inventory} />
          </ListItem>
          <ListItem button 
            onClick={()=>setActiveTab(sales)} sx={{backgroundColor: activeTab===sales?"skyBlue":null}} >
            <ListItemIcon>
                <GroupsOutlinedIcon/>
            </ListItemIcon>
            <ListItemText primary="Sales Executive" />
          </ListItem>
          <ListItem button 
            onClick={()=>setActiveTab(createOrder)} sx={{backgroundColor: activeTab===createOrder?"skyBlue":null}}>
            <ListItemIcon>
                <EditOutlinedIcon/>
            </ListItemIcon>
            <ListItemText primary="Create Order" />
          </ListItem>
          <ListItem button   onClick={()=>setActiveTab(orders)} sx={{backgroundColor: activeTab===orders?"skyBlue":null}} >
            <ListItemIcon>
            <ShoppingBagOutlinedIcon/>
            </ListItemIcon>
            <ListItemText primary="Orders" />
          </ListItem>
      </List>
     
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;


  const renderTabs=(key)=>{
      switch(key){
          case inventory:
              return <Inventory/>
              break;
        case sales:
            return <h1>sales</h1>
            break;
        case createOrder:
            return <h1> create order</h1>;
            break;
        case orders:
            return <h1>orders</h1>
             break;
      }
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar sx={{display:"flex",justifyContent:"space-between"}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6" noWrap component="div">
           Welcome
          </Typography>
          <Button variant="contained">Logout</Button>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
          {renderTabs(activeTab)}
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
