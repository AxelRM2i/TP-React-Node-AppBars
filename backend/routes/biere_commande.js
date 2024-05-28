import express from 'express';
import Biere_commande from '../models/biere_commande.js';
const router = express.Router();

router.post('/commande/:id/biere/:id', async (req, res) => {
    try {
        const newBiere_commande = await Biere_commande.create(req.body);
        res.status(201).json(newBiere_commande);
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

router.delete('/commande/:id/biere/:id', async (req, res) => {
    try {
        const id = req.params.id
        const biere_commande = await Biere_commande.findByPk(id)
        if (biere_commande) {
            await biere_commande.destroy()
            res.status(204).end()
        } else {
            res.status(404).json({ error: 'biere_commande not found' })
        }
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})


export default router;