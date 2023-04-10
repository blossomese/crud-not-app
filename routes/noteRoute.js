const noteController = require('../controllers/noteController')

const router = require('express').Router()

router.post('/create', noteController.addNote)

router.get('/', noteController.getNote)

router.put('/Update', noteController.updateNote)

router.delete('/delete', noteController.deleteNote)