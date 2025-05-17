// src/app.ts
import express from 'express';
import userRoutes from './routes/userRoute'; // Ajustá el nombre si es distinto

const app = express();

app.use(express.json());
app.use('/usuarios', userRoutes); // ruta base opcional

export default app;
