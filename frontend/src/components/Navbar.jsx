import React from 'react'
import { Container, Flex, HStack, Text, Button, useColorMode } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import {PlusSquareIcon} from "@chakra-ui/icons"
import {IoMoon} from "react-icons/io5"
import { LuSunDim } from "react-icons/lu"

const Navbar = () => {
    const {colorMode, toggleColorMode} = useColorMode() // colorMode geçerli temayı (light) veya (dark) döndürür toggleColorMode = tema değiştirme fonksiyonudur


  return (
    <Container maxW={"1140px"} px={4} > {/*maxW={"1140px"} içeriği 1140px genişlik ile sınırlandırır {px=4} Yatay iç boşluk ekler */}
    <Flex
    h={16} // Navbar yüksekliğini 16 birime ayarlar
    alignItems={"center"} // İçerikleri dikeyde ortalar
    justifyContent={"space-between"} // sol ve sağa yayılan bir düzen oluşturuyor
    flexDir={{ 
      base:"column", //Küçük ekranlarda dikey, 
      sm:"row" //büyük ekranlarda yatay hizalama yapar
    }}
    >
      <Text
      fontSize={{base:"22", sm:"28"}} //Küçük ekranlarda 22px, büyük ekranlarda 28px font boyutu sağlar 
      fontWeight={"bold"} // Yazıyı kalın yapar
      textTransform={"uppercase"} //Büyük harflerle yazı
      textAlign={"center"} // metini yatay olarak ortalar
      bgGradient={"linear(to-r, cyan.400, blue.500)"} //Yazıya mavi tonlarında gradient efekti ekler
      bgClip={"text"} // Akra planı yazıya uygular
      >
        <Link to={"/"}>Product Store 🛒</Link> {/*Ana sayfaya yönlendirir */}
      </Text>

    <HStack spacing={2} alignItems={"center"}> {/*Butonları yatay olarak hizalar */}
    <Link to={"/create"}> {/*create sayfasına yönlendirir */}
    <Button> 
    <PlusSquareIcon fontSize={20}/>
    </Button>
    </Link>
    <Button onClick={toggleColorMode}> {/*Butona basınca koyu/açık modu değiştirir */}
      {colorMode === "light" ? <IoMoon /> : <LuSunDim size="20" />}
    </Button>

    </HStack>
    </Flex>
    </Container>
  )
}

export default Navbar