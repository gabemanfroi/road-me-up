import { Drawer } from '@mui/material';
import { sidebarWidth } from '@shared/helpers/constants';

const Sidebar = () => (
  <Drawer
    variant="permanent"
    open
    sx={{
      '& .MuiDrawer-paper': {
        boxSizing: 'border-box',
        width: sidebarWidth,
        backgroundColor: 'primary.main',
      },
    }}
  />
);

export default Sidebar;
