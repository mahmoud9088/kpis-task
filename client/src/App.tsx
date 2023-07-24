import React, { useState } from 'react'
import './App.css'
import Header from './components/layout/Header'
import { useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import Sidebar from './components/layout/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

const App: React.FC = (): JSX.Element => {
  const theme = useTheme()
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'))
  const [openDrawer, setOpenDrawer] = useState<boolean>(false)

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer)
  }

  return (
    <div className="App">
      <Header
        isMediumScreen={isMediumScreen}
        openDrawer={openDrawer}
        toggleDrawer={toggleDrawer}
      />

      <Sidebar
        isMediumScreen={isMediumScreen}
        openDrawer={openDrawer}
        setOpenDrawer={setOpenDrawer}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
