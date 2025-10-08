import { Router } from "express";
import { cart } from "../utils/constants.mjs";
import { resolveCartItemById } from "../middleware/productMiddleware.mjs";

const router =Router();


router.get("/api/cart",(req,res)=>{
    res.send(cart);
})

router.get("/api/cart/:id", resolveCartItemById, (req, res) => {
  const { findCartItemIndex } = req;
//   console.log(findCartItemIndex);
  const findCartItem = cart[findCartItemIndex];
  if (!findCartItem) return res.sendStatus(404);
  res.status(200).send(findCartItem);
});


export default router;
