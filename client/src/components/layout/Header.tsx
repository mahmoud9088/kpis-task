import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
} from '@mui/material'
import React from 'react'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import MenuIcon from '@mui/icons-material/Menu'

interface IHeaderProps {
  isMediumScreen: boolean
  openDrawer: boolean
  toggleDrawer: any
}

const Header: React.FC<IHeaderProps> = ({
  isMediumScreen,
  openDrawer,
  toggleDrawer,
}): JSX.Element => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <>
      <AppBar>
        <Toolbar
          sx={{
            bgcolor: '#fff',
            justifyContent: { xs: 'space-between', md: 'flex-end' },
          }}>
          <Stack
            sx={{ flexDirection: 'row', gap: '10px', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <Button
                size="small"
                variant="text"
                id="demo-positioned-button"
                aria-controls={open ? 'demo-positioned-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
                sx={{
                  color: '#000',
                  textTransform: 'capitalize',
                  display: 'flex',
                  gap: '5px',
                  bgcolor: '#E3E3F4',
                  borderRadius: '25px',
                  p: '5px',
                }}>
                <Avatar sx={{ width: '40px', height: '40px' }} />
              </Button>
              <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}>
                <MenuItem
                  onClick={() => {
                    handleClose()
                  }}>
                  Profile
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleClose()
                  }}>
                  Logout
                </MenuItem>
              </Menu>
            </Box>

            <Badge variant="dot" color="secondary">
              <NotificationsNoneIcon sx={{ color: '#000' }} />
            </Badge>
          </Stack>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => toggleDrawer(!openDrawer)}
            edge="start"
            sx={{
              display: !isMediumScreen ? 'none' : 'block',
            }}>
            <MenuIcon sx={{ color: '#000' }} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header
