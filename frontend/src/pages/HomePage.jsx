import { Container, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
	const { fetchProducts, products } = useProductStore(); //fetchProducts API'den ürünleri çeken fonksiyon, "products" Store'daki mevcut ürün listesi

	useEffect(() => { //Sayfa ilk renderlandığında fetchProducts çağıralarak ürünleri çeker
		fetchProducts();
	}, [fetchProducts]); //Sayesinde bu işlem bileşen her rendar edildiğinde değil sadece fetchProducts değiştiğinde tekrar çalışır
	console.log("products", products);

	return (
		<Container maxW='container.xl' py={12} //İçeriği genişliğiyle sınırlar "py-12" dkey boşluk ekler
		>
			<VStack spacing={8} //Dikey hizalama sağlar flex-direction-column gibi çalışır "spacing-8" Alt bileşenlerin arasına 8 birim boşluk ekler
			>
				<Text 
					fontSize={"30"}
					fontWeight={"bold"}
					bgGradient={"linear(to-r, cyan.400, blue.500)"}
					bgClip={"text"}
					textAlign={"center"}
				>
					Current Products 🚀
				</Text>

				<SimpleGrid //Ürünleri responsive bir grid düzeninde gösterir
					columns={{
						base: 1, //Küçük ekranlarda 1 sütuın
						md: 2, //Orta ekranlarda 2 sütun
						lg: 3, //Büyük ekranlarda 3 sütun
					}}
					spacing={10} //Ürünler arasında 10birim boşluk koyar
					w={"full"}
				>
					{products.map((product) => (		// Her bir ürünü ProductCard bileşeniyle gösterir
						<ProductCard key={product._id} product={product} /> //React'in her ürünü benzersiz tanıyabilmesi için key eklenir
					))}
				</SimpleGrid>

				{products.length === 0 && ( //Ürün bulunamazsa mesaj gösterme
					<Text fontSize='xl' textAlign={"center"} fontWeight='bold' color='gray.500'>
						No products found 😢{" "} {/*Eğer products boşsa bu mesajı gösterir */}
						<Link to={"/create"}>
							<Text as='span' color='blue.500' _hover={{ textDecoration: "underline" }}>
								Create a product {/* Link ile Create Product'a yönlendirir */}
							</Text>
						</Link>
					</Text>
				)}
			</VStack>
		</Container>
	);
};
export default HomePage;
