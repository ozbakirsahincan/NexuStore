import { Box, useColorModeValue, } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

import CreatePage from "./pages/CreatePage"
import HomePage from "./pages/HomePage"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}> {/*BOX sayfanın tamamını kaplayan bir kapsayıcı
    minH={"100vh"} Sayfanın minimum yüksekliğini tam ekrana sığdırır
    bg={useColorModeValue("gray.100", "gray.900")} Tema açıkken gray.100, koyuyken gray.900 arka planı kullanır
    */}
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage/>}/> {/* "/" yolunda HomePage bileşenini gösterilir */}
        <Route path='/create' element={<CreatePage/>}/> {/* "/create" yolunda CreatePage bileşenini gösterir */}
      </Routes>
    </Box>
  )
}

export default App