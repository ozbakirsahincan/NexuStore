import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  useColorModeValue,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useProductStore } from "../store/product";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "", //Yeni ürün eklemek için bir state tanımlanıyor
    price: "", // 3 state'i newProduct içinde saklıyoruz
    image: "", //Başlangıç değerleri boş bırakılıyor
  });

  const toast = useToast(); // Chakra UI useToast fonksiyonu ile bildirimi popup olarak gösterimemizi sağlayacak

  const { createProduct } = useProductStore(); //Zustand state management //createProduct fonksinoyu , ürünü eklemek için çağırılacak

  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct); //createProduct fonksiyoun çağıralarak yeni ürünü veritabanına ekliyoruz
    if (!success) { //Başarılı değilse Kırmızı Error bildirimi gösteriyoruz
      toast({
        title: "Error",
        description: message,
        status: "error",
        isClosable: true,
      });
    } else { //Başarılıysa succes bildirimi gösteriyoruz
      toast({
        title: "Success",
        description: message,
        status: "success",
        isClosable: true,
      });
    }
    setNewProduct({name:"", price:"", image:""}); //İşlem sonrası input alanları temizleniyor
  };

  return (
    <Container maxW={"container.sm"}> {/*Sayfa merkezde ve küçük container kullanıldı */}
      <VStack spacing={8}>
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
          Create New Product
        </Heading>

        <Box  //FORM KUTUSU
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          p={6}
          rounded={"lg"} //köşeleri yumuşattık
          shadow={"md"} //gölgelendirme ekldik
        >
          <VStack spacing={4}>
            <Input //INPUT ALANI
              placeholder="Product Name"
              name="name"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value }) // KULLANICI VERİ GİRDİKÇE STATE GÜNCELLENİYOR
              }
            />
            <Input
              placeholder="Price"
              name="price"
              type="number"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
            />
            <Input
              placeholder="Image URL"
              name="image"
              value={newProduct.image}
              onChange={(e) =>
                setNewProduct({ ...newProduct, image: e.target.value })
              }
            />
            <Button colorScheme="blue" onClick={handleAddProduct} w="full"> {/*ÜRÜN EKLEME BUTONU */} 
              Add Product 
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default CreatePage;
