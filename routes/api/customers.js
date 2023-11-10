const express = require("express");
const mongoose = require("../../mongoose/index.js");
const Customer = require("../../mongoose/schemas/customer.js");
const router = express.Router();

mongoose.connect();

// CRUD
router.get("/", async (req, res) => {
  //const customers = await Customer.find({});
  const customers = await Customer.findOne({ name: "scpark" }).exec();
  console.log(customers);
  res.send(customers);
});

router.post("/", async (req, res) => {
  const result = await Customer.create({
    name: "test",
    phone: "test",
  });
  console.log(result);
  res.send(result);
});

router.put("/update", async (req, res) => {
  const result = await Customer.updateOne(
    { name: req.body.name }, // name 으로 찾은 document 에 대하여
    { phone: req.body.phone } // phone 을 req.body.phone 으로 업데이트하기
  );
  console.log(result);
  res.send(result);
});

router.delete("/", async (req, res) => {
  const { delname } = req.params;
  const result = await Customer.deleteOne({ name: delname });
  console.log(result);
  res.send(result);
});

// 라우터를 외부에서 쓰기 때문에
module.exports = router;
