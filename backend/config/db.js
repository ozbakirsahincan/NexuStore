import mongoose from "mongoose";

export const connectDB = async () => {
  try{
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      //useUnifiedTopology: true, //Mongoose'un en güncel bağlantı sürümünü kullanmayı sağlar
      //useNewUrlParser: true, //URL bağlantı dizelerini modern şekilde ayrıştırmasını sağlar
      //useCreateIndex:true, //MongoDB koleksiyonlarında dizinler oluşturulken createIndex() fonkisoyunu kullanılmasını sağlar
      //Mongoose 6 ve sonrasında bu özellikller otomatik olarak etkinleştirildiği için artık yazılmasına gerek yokmuş.
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  }catch(error){
    console.error(`Error: ${error.message}`);
   process.exit(1); // procces kod 1 bir yanlış çıktı , 0 başarılı
  }
}