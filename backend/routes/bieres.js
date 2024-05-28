import express from 'express';
import Biere from '../models/biere.js';
const router = express.Router();

router.get('/', async (req, res) => {//liste des bieres d'un bar
    try {
        const biere = await Biere.findAll();
        res.json(biere);
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})
router.get('/:id', async (req, res) => {
    try {
        const biere = await Biere.findByPk(req.params.id);
        if (biere) {
            res.json(biere);
        } else {
            res.status(404).json({ error: 'biere not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
})

router.post('/', async (req, res) => {
    try {
        const barId = req.params.id;
        const {name,description, degree, price} = req.body;
        const newBiere = await Biere.create({name,description,degree,price,bar_id: barId});
        res.status(201).json(newBiere);
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const biere = await Biere.findByPk(id)
        if (biere) {
            await biere.update(req.body)
            res.json(biere)
        } else {
            res.status(404).json({ error: 'biere not found' })
        }
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const biere = await Biere.findByPk(id)
        if (biere) {
            await biere.destroy()
            res.status(204).end()
        } else {
            res.status(404).json({ error: 'biere not found' })
        }
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})


export default router;