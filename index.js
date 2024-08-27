import express from 'express';
import * as dotenv from 'dotenv';
import connectToDb from './dbConnection/connect_db.js';
import { userRouter } from './routes/userRouter.js';
import { productRouter } from './routes/productRouter.js';
import { reviewRouter } from './routes/ReviewRouter.js';
import path from 'path';
import { fileURLToPath } from 'url';
import { cartRouter } from './routes/cartRouter.js';
import { attendenceRouter } from './routes/attendenceRouter.js';
import { feeRouter } from './routes/feeRouter.js';
import { studentdetailRouter } from './routes/studentdetailRouter.js';


const app = express();
app.use(express.json());

dotenv.config();
const PORT = process.env.PORT || 5000;

console.log(process.env.MONGO_URI);

connectToDb();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get("/getimage", (req, res) => {
  const imagePath = path.join(__dirname, "./photo/img/image1.jpg");
  res.sendFile(imagePath);
});





app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.use('/api/review', reviewRouter)
app.use('/api/cart', cartRouter)
app.use('/api/atten', attendenceRouter)
app.use('/api/fee', feeRouter)
app.use('/api/student', studentdetailRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
