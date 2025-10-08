import { Router } from "express";
import { products } from "../utils/products.mjs";

import { resolveProductById } from "../middleware/productMiddleware.mjs";
import { query } from "express-validator";
const router = Router();

router.get("/api/auth/login",(req,res)=>{
    
})


