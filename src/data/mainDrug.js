const shortid = require("shortid");

const mainDrug = [
  {
    id: shortid.generate(),
    name: "acetaminophen", 
    dose: 15, 
    unit: "mg",
    perKg: true,
    perDay: false,
    perDose: true,
    time: 6,
    caution: "2 lần uống cách nhau tối thiểu 4 giờ"
  },
  {
    id: shortid.generate(),
    name: "ibuprofen", 
    dose: 10,
    unit: "mg",
    perKg: true,
    perDay: false,
    perDose: true,
    time: 4,
    caution: "2 lần uống cách nhu tối thiểu 6 giờ"
  },
  {
    id: shortid.generate(),
    name: "amoxicillin", 
    dose: 90,
    unit: "mg",
    perKg: true,
    perDay: true,
    perDose: false,
    time: 3,
    caution: "Thuốc có thể gây tiêu chảy"
  },
  {
    id: shortid.generate(),
    name: "cefuroxime", 
    dose: 30,
    unit: "mg",
    perKg: true,
    perDay: true,
    perDose: false,
    time: 2,
    caution: "Thuốc đắng khó uống"
  },
  {
    id: shortid.generate(),
    name: "ampicillin", 
    dose: 200,
    unit: "mg",
    perKg: true,
    perDay: true,
    perDose: false,
    time: 4,
    caution: ""
  },
  {
    id: shortid.generate(),
    name: "0", 
    dose: 0,
    unit: "0",
    perKg: true,
    perDay: true,
    perDose: false,
    time: 4,
    caution: ""
  },
];

export default mainDrug;