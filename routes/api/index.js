const router = require("express").Router();
const categoryRoutes = require("./category-routes");
const productRoutes = require("./product-routes");
const tagRoutes = require("./tag-routes");

// Define api routes
// /api
router.use("/categories", categoryRoutes);
router.use("/products", productRoutes);
router.use("/tags", tagRoutes);

module.exports = router;
