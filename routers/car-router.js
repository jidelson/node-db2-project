const express = require('express');

const db = require('../dbConfig.js');

const router = express.Router();

router.get('/', (req, res) => {
    db.select("*")
        .from("cars")
        .then(cars => {
            res.status(200).json({ data: cars })
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({error: error.message})
    })
    });

router.get('/:id', (req, res) => {
    const carId = req.params.id;

    db("cars")
    .where({ id: carId })
    .then((car) => {
        if(car[0] === undefined){
            res.status(404).json({ message: "That specified ID does not exist."})
        } else {
            res.status(200).json({ data: car})
        }
    })
    .catch((error) => {
        res.status(500).json({error: "The car information could not be retrieved"})
    })
})

router.post('/', (req, res) => {
    const car = req.body;
    db("cars")
    .insert(car)
    .returning("id")
    .then((ids) => {
        res.status(201).json({ inserted: ids })
    })
    .catch((error) => {
        console.log(error);
        res.status(500).json({ error: error.message })
    });
});

router.put('/:id', (req, res) => {
    const changes = req.body;
    const carId = req.params.id;
    
    db("cars")
    .where({ id: carId })
    .update(changes)
    .then((count) => {
        if(count) {
            res.status(200).json({ message: 'updated successfully' })
        } else {
            res.status(404).json({ message: 'not found' })
        }
    })
    .catch((error) => {
        console.log(error);
        res.status(500).json({ error: error.message })
    })
});


router.delete('/:id', (req, res) => {
    const carId = req.params.id;

    db("cars")
    .where({ id: carId})
    .del()
    .then((count) => {
        if(count) {
            res.status(200).json({message: "removed succesfully"});
        } else {
            res.status(404).json({message:"not found"})
        }
    })
    .catch((error) => {
        console.log(error);
        res.status(500).json({ error: error.message});
    });
});



    module.exports = router;
    