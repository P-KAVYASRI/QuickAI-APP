import express from "express";
import {auth} from "../middlewares/auth.js"
import { generateArticle, generateBlogTitle, generateImage, removeImageBackground, removeImageObject, resumeReview } from "../controllers/aiController.js";
import { upload } from "../configs/multer.js";

const aiRouter = express.Router();

 aiRouter.post('/generate-article',auth,generateArticle)



 export default aiRouter
