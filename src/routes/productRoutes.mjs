import { Router } from "express";
import { products } from "../utils/products.mjs";
import { resolveProductById } from "../middleware/productMiddleware.mjs";
import { filters,sortOptions,popularcategory,recommendation } from "../utils/constants.mjs";
import { query } from "express-validator";
const router = Router();

// router.get("/api/products", (req, res) => {
//   res.status(200).send(products);
// });

router.get("/api/products/:id", resolveProductById, (req, res) => {
  const { findProductIndex } = req;
  // console.log(findProductIndex);
  const findProduct = products[findProductIndex];
  if (!findProduct) return res.sendStatus(404);
  res.status(200).send(findProduct);
});

// localhost:5000/api/users?filter=displayName&value=ra
// router.get(
//   "/api/products",
//   query("filter").isString().notEmpty(),
//   (req, res) => {
//     const {
//       query: { filter, value },
//     } = req;

//     isNaN(value) ? console.log("str") : console.log("num");
//     // return res.send(mockUsers.filter((user) => user[filter].includes(value)));
//     if (filter && value)
//       return res.send(
//         products.filter((product) =>
//           product[filter].toLowerCase().includes(value.toLowerCase())
//         )
//       );
//     return res.send(products);
//   }
// );

router.get("/api/products", (req, res) => {
  const { filter, value, min, max, limit, page } = req.query;
  let results = [...products];


  if (filter && min !== undefined && max !== undefined) {
    const minValue = Number(min);
    const maxValue = Number(max);

    if (isNaN(minValue) || isNaN(maxValue)) {
      return res.status(400).json({ error: "min and max must be numbers" });
    }

    results = results.filter((product) => {
      const fieldValue = Number(product[filter]);
      return fieldValue >= minValue && fieldValue <= maxValue;
    });
  }

  else if (filter && value !== undefined) {
    const isNumericValue = !isNaN(value);

    results = results.filter((product) => {
      const fieldValue = product[filter];
      if (fieldValue === undefined) return false;

      if (isNumericValue) {
        return Number(fieldValue) == Number(value);
      } else if (typeof fieldValue === "string") {
        return fieldValue.toLowerCase().includes(value.toLowerCase());
      }
      return false;
    });
  }


  const pageNum = Number(page) || 1;
  const limitNum = Number(limit) || 10;
  const startIndex = (pageNum - 1) * limitNum;
  const endIndex = startIndex + limitNum;

  const total = results.length;
  const paginatedResults = results.slice(startIndex, endIndex);


  return res.send({
    page: pageNum,
    limit: limitNum,
    total,
    totalPages: Math.ceil(total / limitNum),
    data: paginatedResults,
  });
});



router.put("/api/products/:id", resolveProductById, (req, res) => {
  const { findProductIndex, body } = req;

  const findProduct = products[findProductIndex];
  if (!findProduct) return res.sendStatus(404);

  console.log(body);
  products[findProductIndex] = { id: products[findProductIndex].id, ...body };
  return res.status(201).send(body);
  // console.log(findProduct);
  // if()
});

router.post("/api/products", (req, res) => {
  const { body } = req;
  const data = body;
  if (!data) return res.sendStatus(403).send("error");
  console.log(data);
  const newProduct = { id: products[products.length - 1].id + 1, ...data };
  products.push(newProduct);
  res.sendStatus(201);
});

router.patch("/api/products/:id", resolveProductById, (req, res) => {
  const { body, findProductIndex } = req;
  const findProduct = products[findProductIndex];

  if (!findProduct) return res.sendStatus(404);
  products[findProductIndex] = { ...products[findProductIndex], ...body };
  return res.sendStatus(200);
});






export default router;
