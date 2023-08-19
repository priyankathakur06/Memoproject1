import express from 'express';
import { getPost , createPost } from '../controllers/posts.js';
const routes = express.Router();

routes.get('/',getPost);
routes.post('/',createPost)


export default routes;