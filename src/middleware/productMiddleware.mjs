import { addresses, cart } from "../utils/constants.mjs";
import { products } from "../utils/products.mjs";
export const resolveProductById =(req,res,next)=>{
     const {
    params: { id },
  } = req;

  const parseId=parseInt(id);
  if(isNaN(parseId)) return res.sendStatus(400);
  const findProductIndex = products.findIndex((product)=>product.id===parseId);
  // console.log(findProductIndex);
  if(findProductIndex === -1 )return res.sendStatus(404);
  req.findProductIndex = findProductIndex;
  // console.log(parseId);
  // console.log(findProductIndex);
  next();
}


export const resolveCartItemById =(req,res,next)=>{
     const {
    params: { id },
  } = req;

  const parseId=parseInt(id);
  if(isNaN(parseId)) return res.sendStatus(400);
  const findCartItemIndex = cart.findIndex((item)=>item.id===parseId);
  // console.log(findProductIndex);
  if(findCartItemIndex === -1 )return res.sendStatus(404);
  req.findCartItemIndex = findCartItemIndex;
  next();
}




export const resolveAddressById =(req,res,next)=>{
     const {
    params: { id },
  } = req;

  const parseId=parseInt(id);
  if(isNaN(parseId)) return res.sendStatus(400);
  const findAddressIndex = addresses.findIndex((item)=>item.id===parseId);
  // console.log(findProductIndex);
  if(findAddressIndex === -1 )return res.sendStatus(404);
  req.findAddressIndex = findAddressIndex;
  next();
}