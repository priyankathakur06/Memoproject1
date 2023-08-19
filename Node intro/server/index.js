import express from 'express';
import mongoose from 'mongoose';
import postRoutes from './routes/path.js';
import cors from 'cors';

const app = express();


app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use('/path',postRoutes);

const USERNAME = 'pinkuRana';
const PASSWORD = 'c3JaXVv4Kd6zzYDd';
const DB_NAME = 'my-db';

// URL-encode the password (No need to import encodeURIComponent)
// const ENCODED_PASSWORD = encodeURIComponent(PASSWORD);

const CONNECTION_URL = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.dys3jdf.mongodb.net/${DB_NAME}`;

mongoose.connect(CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => app.listen(5000, () => { console.log("Server is running on port 5000"); }))
  .catch((err) => { console.log(err.message); });