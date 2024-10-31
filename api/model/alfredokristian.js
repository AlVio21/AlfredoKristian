const mongoose = require("mongoose");

const pariwisataSchema = new mongoose.Schema({
    nama : {type : String, required : true},
    akomodasi : {type : String, required : true},
    transportasi : {type : String, require : true}
});

module.exports = mongoose.model("Pariwisata", pariwisataSchema);