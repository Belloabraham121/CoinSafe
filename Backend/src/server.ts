import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { ConnectOptions } from 'mongoose'; 
import AiRouter from './Routes/AiRouter';
import BaseRouter from './Routes/BaseRouter'

const app = express();
const port = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());
app.use('/api', BaseRouter)

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to CoinSafe');
});

const mongodb = 'mongodb+srv://agbakwuruoluchi:coinsafe@cluster0.g6csr.mongodb.net/CoinSafe';
mongoose.connect(mongodb, {
  useUnifiedTopology: true, 
} as ConnectOptions).then(() => { 
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error.message);
});

app.use( AiRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

