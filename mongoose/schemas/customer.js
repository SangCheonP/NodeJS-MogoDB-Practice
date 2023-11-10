const mongoose = require("mongoose");

// Schema 라는 애를 mongoose로부터 받아옴
const { Schema } = mongoose;

// 데이터 구조
const customerSchema = new Schema({
  name: {
    type: String,
    // NN
    required: true,
  },
  phone: {
    type: String,
    required: true,
    // 유일(중복 체크)
    unique: true,
  },
});

// model 생성
const Customer = mongoose.model("Customer", customerSchema);

// 외부에서 접근이 가능하도록 열어줌
module.exports = Customer;
