import 'express-async-errors';
import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from "./db/connect.js";
/* Middlewares */
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
//routers
import authRouter from "./routes/authRoutes.js";
import jobsRouter from "./routes/jobsRoutes.js";

const port = process.env.PORT || 5000;
const app = express();

dotenv.config({debug: true});
if (process.env.NODE_ENV !== 'production'){
	app.use(morgan('dev'));
}

app.use(express.json());

app.get('/api/v1', (req, res) => {
	res.json({msg: 'Welcome'})
});

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/jobs', jobsRouter);

/*Middlewares*/
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const start = async () => {
	try {
		await connectDB(process.env.MONGO_URL);
		app.listen(port, () => {
			console.log(`Server is listening on port ${port}`);
		});
	} catch (error) {
		console.log(error)
	}
}

start();