import { Router } from "express";
import { addresses } from "../utils/constants.mjs";
import { resolveAddressById } from "../middleware/productMiddleware.mjs";

const router =Router();

router.get("/api/address",(req,res)=>{
    res.send(addresses);
})


router.get("/api/address/:id", resolveAddressById, (req, res) => {
  const { findAddressIndex } = req;
//   console.log(findAddressIndex);
  const findAddress = addresses[findAddressIndex];
  if (!findAddress) return res.sendStatus(404);
  res.status(200).send(findAddress);
});

export default router