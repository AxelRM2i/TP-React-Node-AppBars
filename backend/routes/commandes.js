import express from 'express';
import Commande from '../models/commande.js';
const router = express.Router();

router.get('/bar/:id/commande', async (req, res) => {//liste des commandes d'un bar
    try {
        const commande = await Commande.findAll();
        res.json(commande);
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})
router.get('/:id', async (req, res) => {//détail d'une commande d'un bar
    try {
        const commande = await Commande.findAll();
        res.json(commande);
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

router.post('/bar/:id/commande', async (req, res) => {
    try {
        const newCommande = await Commande.create(req.body);
        res.status(201).json(newCommande);
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const commande = await Commande.findByPk(id)
        if (commande) {
            await commande.update(req.body)
            res.json(commande)
        } else {
            res.status(404).json({ error: 'commande not found' })
        }
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const commande = await Commande.findByPk(id)
        if (commande) {
            await commande.destroy()
            res.status(204).end()
        } else {
            res.status(404).json({ error: 'commande not found' })
        }
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})


export default router;