import express from "express"
import tasks from "./routes/tasks.js";
import connectDB from "./db/connect.js";
import dotenv  from "dotenv";
dotenv.config()
import notFound from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";

const app = express();
const port = process.env.port || 3000

// middleware

app.use(express.static('./public'));
app.use(express.json());

// routes

app.use('/api/v1/tasks', tasks);

app.use(notFound);
app.use(errorHandlerMiddleware);
connectDB().catch(console.dir);

app.listen(port, ()=>{
  console.log(`server is listening on port ${port}...`);
} )

