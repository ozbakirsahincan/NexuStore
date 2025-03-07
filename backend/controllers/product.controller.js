import mongoose from "mongoose";
import Product from "../models/product.model.js";

export const getProducts = async (req, res) => {  //Tüm ürünleri veritabanından çekip JSON formatında istemciye döndürmemizi sağlar
  try {
    const products = await Product.find({}); //Veri tabanındaki tüm ürünleri getirir "await" ise işlemi aseknron olarak yapar verinin çekilmesini bekler
    res.status(200).json({ success: true, data: products }); //Başrılırı yanıt döner 200(OK) HTTP kodu ile ürünleri JSON formatında gönderir
  } catch (error) {
    console.log("Error in fetching products", error.message);
    res.status(500).json({ success: false, message: "Server Error" }); //Hata durumunda (Internal Server Error) kdou döndürür
  }
}

 export const createProduct = async (req, res) => { //Kullanıcıdan gelen ürün bilgileriyle yeni bir ürün oluşturur
  const product = req.body; //İstemciden gelen verileri alır Örn: naame, price ,image

  if (!product.name || !product.price || !product.image) {
    return res.status(400).json({ success: false, message: "Please provide all fields" }); //Eğer eksik alan varsa 400(Bad request) döndürür
  }

  const newProduct = new Product(product);  //Yeni ürün nesnesini oluşturur.Product modelinden örnek alır

  try {
    await newProduct.save(); //Veritabanına kaydedilir
    res.status(201).json({ success: true, data: newProduct });//Başarılı yanıt döndürür 201(Created) koduyla, oluşturulan ürün JSON formatında döner
  } catch (error) { 
    console.error("Error in Create product:", error.message);
    res.status(500).json({ success: false, message: "Server error" });//Hata durumunda 500(Internal server Error) döner
  }
}

export const updatedProduct = async (req, res) => { //Belirli bir ID'yi güncellemek için kullanılır
  console.log("Received Body:", req.body);  // Burada body'nin doğru gelip gelmediğini kontrol edebiliriz

  const { id } = req.params;//İstemciden gelen Id güncellenecek verileri alır
  const product = req.body;//İstemciden gelen Id güncellenecek verileri alır

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ success: false, message: "Invalid Product Id" });
  }//Id geçersizse (404) Not Found döndürür

  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true });//findByIdAndUpdate(id, product,{new: true}) > Veritabanında ilgili ID'yi bulur ve günceller {new:true} Güncellenmiş veriyi döndürmesini sağlar
    res.status(200).json({ success: true, data: updatedProduct });
  } catch (error) {
    console.error("Error in Update product:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
}

export const deleteProduct =  async (req, res) => {//Belirlenmiş ID'yi veritabanından silmek için kullanılır
  const { id } = req.params;//İstemciden gelen ID'yi alır

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ success: false, message: "Invalid Product Id" });
  }//Id geçersizse (404) Not Found döndürür
  
  try {
    await Product.findByIdAndDelete(id);// Veritabanından ilgili ID'ye sahip ürünü siler
    res.status(200).json({ success: true, message: "Product deleted" });
  } catch (error) {
    console.log("Error in deleting product", error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}