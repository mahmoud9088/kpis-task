import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  ListItemIcon,
  IconButton,
  Box,
} from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'

import { styled } from '@mui/material/styles'

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'

const drawerWidth = 240

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  padding: '10px 0',
  ...theme.mixins.toolbar,
}))

interface ISidebarProps {
  isMediumScreen: boolean
  openDrawer: boolean
  setOpenDrawer: any
}

const Sidebar: React.FC<ISidebarProps> = ({
  isMediumScreen,
  openDrawer,
  setOpenDrawer,
}): JSX.Element => {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <>
      <Drawer
        PaperProps={{
          sx: {
            backgroundColor: '#fff',
            color: '#fff',
            overflow: 'auto',
            transitionDuration: 'width ease-in-out 2s',
            minHeight: '100vh',
          },
        }}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant={isMediumScreen ? 'temporary' : 'permanent'}
        anchor={'left'}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}>
        <DrawerHeader>
          <Box
            sx={{
              width: '100%',
              textAlign: 'right',
              display: isMediumScreen ? 'block' : 'none',
              height: 'fit-content',
            }}>
            <IconButton onClick={() => setOpenDrawer(false)}>
              <ChevronLeftIcon sx={{ color: '#030355' }} />
            </IconButton>
          </Box>
          <Box>Logo</Box>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => navigate('/')}
              sx={{ color: location.pathname === '/' ? '#000099' : '#C3C3C7' }}>
              <ListItemIcon>
                <HomeOutlinedIcon
                  sx={{
                    color: location.pathname === '/' ? '#000099' : '#C3C3C7',
                  }}
                />
              </ListItemIcon>
              <ListItemText primary={'home'} sx={{ textAlign: 'right' }} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  )
}

export default Sidebar
