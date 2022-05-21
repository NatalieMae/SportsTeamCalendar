require('dotenv').config()
const router = require('express').Router()
const app = router ()


//WELCOME PAGE
router.get('*', (reg, res) => {
    console.log('Ahoy!')
    res.send('Index')
})

//SIGNUP
router.get('/auth/sign-up', (reg, res) => {
    res.send('Index')
})

// router.post('/auth/sign-up', (reg, res) => {
//     res.send('Index')
// })

//SIGN-IN
router.get('/auth/sign-in', (reg, res) => {
    res.send('Index')
})

// router.post('/auth/sign-in', (reg, res) => {
//     res.send('Index')
// })

//CALENDAR PAGE
router.get('/index', (reg, res) => {
    res.send('Index')
})

//SNACK SELECTION
router.get('/snacks', (reg, res) => {
    res.send('Index')
})

// //EDIT
// router.get('/snacks', (reg, res) => {
//     res.send('Index')
// })

//DELETE
router.delete('/snacks', (reg, res) => {
    res.send('Index')
})

module.export = router
