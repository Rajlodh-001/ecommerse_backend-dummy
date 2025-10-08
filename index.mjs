import express, { json } from "express";
import productRoutes from "./src/routes/productRoutes.mjs"
import optionRoutes from "./src/routes/optionRoutes.mjs";
import cartRoutes from "./src/routes/cartRoutes.mjs";
import addressRoutes from "./src/routes/addressRoutes.mjs";
const app=express();

const PORT =3000;

app.use(json())
app.use(productRoutes);
app.use(optionRoutes);
app.use(cartRoutes);
app.use(addressRoutes);
app.get("/",(req,res)=>{
    res.send("Test API call for E-commerse Dummy ")
})


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


