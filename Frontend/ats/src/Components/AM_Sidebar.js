import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Home, Assignment, Edit } from '@mui/icons-material';  

const drawerWidthCollapsed = 60; 
const drawerWidthExpanded = 240; 

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = React.useState(false); 

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Sidebar Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          width: isExpanded ? drawerWidthExpanded : drawerWidthCollapsed, 
          [`& .MuiDrawer-paper`]: { 
            width: isExpanded ? drawerWidthExpanded : drawerWidthCollapsed, 
            boxSizing: 'border-box',
            position: 'fixed',  // Use fixed position to keep the sidebar in place when scrolling
            top: '60px',             // Align with the top of the viewport
            height: '100vh',    // Ensure the sidebar covers the full height of the viewport
            transition: 'width 0.3s', 
            overflow: 'hidden', 
            zIndex: 100, 
            backgroundColor: '#212121',
          },
          '&:hover .MuiDrawer-paper': {
            width: drawerWidthExpanded, 
          },
        }}
        onMouseEnter={() => setIsExpanded(true)}  
        onMouseLeave={() => setIsExpanded(false)} 
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
          <Box sx={{ overflow: 'auto' }}>
            <List>
              {["Create Client", "Add Requirement", "Edit/View Requirements"].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    {/* Show icons only by default */}
                    {index === 0 && <Home sx={{ marginRight: 2, color: 'white' }} />}
                    {index === 1 && <Assignment sx={{ marginRight: 2, color: 'white' }} />}
                    {index === 2 && <Edit sx={{ marginRight: 2, color: 'white' }} />}
                    {/* Show text when expanded */}
                    <ListItemText
                      primary={text}
                      sx={{
                        display: isExpanded ? 'block' : 'none', 
                        color: 'white', 
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider />
          </Box>
        </Box>
      </Drawer>

      {/* Main Content Area */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: 'background.default',
          p: 3,
          marginTop: '64px', 
        }}
      >
        
      </Box>
    </Box>
  );
}
