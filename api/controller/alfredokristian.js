const Pariwisata = require("../model/alfredokristian");

const createPariwisata = (req, res) => {
    const pariwisata = new Pariwisata({
        nama : req.body.nama,
        akomodasi : req.body.akomodasi,
        transportasi : req.body.transportasi
    });

    console.log(pariwisata);
    pariwisata.save()
    .then((createdPariwisata)=>{
        res.status(201).json({
            message : "Data berhasil disimpan",
            pariwisataId : createdPariwisata._id
        });
    }).catch((err)=>{
        console.log(err);
        res.status(500).json();
            message : "Internal Servel ERROR"
            // error : err
    });
    
};

module.exports = {createPariwisata};