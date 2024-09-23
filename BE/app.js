import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import categoryRouter from './routes/category.router.js';
import productRouter from './routes/product.router.js'
import imageRouter from './routes/upload.router.js'
const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));



app.use("/api", categoryRouter);
app.use("/api", productRouter);
app.use("/api", imageRouter)



export default app;
