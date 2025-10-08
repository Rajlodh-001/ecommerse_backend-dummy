import { Router } from "express";

import {
  filters,
  sortOptions,
  popularcategory,
  recommendation,
} from "../utils/constants.mjs";
const router = Router();

router.get("/api/option/filters", (req, res) => {
  return res.send(filters);
});

router.get("/api/option/sort-option", (req, res) => {
  return res.send(sortOptions);
});

router.get("/api/option/popular-category", (req, res) => {
  return res.send(popularcategory);
});

router.get("/api/option/recommendation", (req, res) => {
  return res.send(recommendation);
});

export default  router ;
