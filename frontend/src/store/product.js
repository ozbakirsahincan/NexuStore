import { create } from "zustand"; //Zustand ile state yönetimi için fonksiyon

export const useProductStore = create((set) => ({ //State'i güncellemek için kullanılan Zustand fonksiyonu
	products: [], //Ürünleri saklayan dizi 
	setProducts: (products) => set({ products }), //React bileşenlerinden çağırılacak özel hook
	//setProducts : Dışarıdan aldığı ürünleri state'e kaydeder
	createProduct: async (newProduct) => { //Yeni ürün eklenirken hiçbir değer boş olmamalı yoksa hata döndürür
		if (!newProduct.name || !newProduct.image || !newProduct.price) {
			return { success: false, message: "Please fill in all fields." };
		}
		const res = await fetch("/api/products", { //buraya POST isteği atıyor
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newProduct), //JSON formatında yeni ürün bilgilerini gönderiyor
		});
		const data = await res.json();
		set((state) => ({ products: [...state.products, data.data] }));//Yeni ürün için state ekliyor
		return { success: true, message: "Product created successfully" };//Başarılı olursa mesaj döndürüyor
	},
	fetchProducts: async () => { //API'ye GET atarak ürünleri alıyor
		const res = await fetch("/api/products");
		const data = await res.json();
		set({ products: data.data }); //State'i güncelliyor
	},
	deleteProduct: async (pid) => { //API'ye DELETE isteği göndererek ürünü siliyor
		const res = await fetch(`/api/products/${pid}`, {
			method: "DELETE",
		});
		const data = await res.json();
		if (!data.success) return { success: false, message: data.message }; //Eğer API'den hata mesajı dönerse işlemi durduruyor

		set((state) => ({ products: state.products.filter((product) => product._id !== pid) })); //State içinden silinen ürünü çıkarıyor && React arayüzü sayfa yenilenmeden güncelleniyor
		return { success: true, message: data.message };
	},
	updateProduct: async (pid, updatedProduct) => { //API'ye PUT isteği göndererek ürünü güncelliyor
		const res = await fetch(`/api/products/${pid}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(updatedProduct), //Güncellenmiş verileri JSON olarak gönderiyor
		});
		const data = await res.json();
		if (!data.success) return { success: false, message: data.message }; //API hata döndürürse işlemi durduruyor.

		set((state) => ({
			products: state.products.map((product) => (product._id === pid ? data.data : product)), //State içinde eski ürünü yeni veriyle değiştiriyor
		}));

		return { success: true, message: data.message }; //Güncelleme başarılıysa mesaj döndürülüyor.

	},
}));
