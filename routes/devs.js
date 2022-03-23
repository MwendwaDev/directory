const express = require('express')
const Dev = require('./models/dev')
const router = express.Router()



//all devs route
router.get('/', async(req, res) => {
let searchOptions = {}
if (req.query.name != null && req.query.name !== '') {
    searchOptions.name = new RegExp(req.query.name, 'i')
}

    try{
        const devs = await Dev.find(searchOptions)
            res.render('devs/index', {
                devs: devs,
                searchOptions: req.query
            })
        
    } catch {
        res.redirect('/')
    }
   
   
})
//new devs route 
router.get('/new', (req, res) => {
res.render('devs/new', { dev: new Dev() })
})

//create devs route
router.post('/', async(req, res) => {
    const dev = new Dev({
        name: req.body.name
    })
    try {
const newDev = await dev.save()
// res.redirect('devs/$newDev.id)}')
res.redirect('devs')
    } catch {
        res.render('devs/new', {
            dev: dev,
            errorMessage: 'Error creating Dev'
        })
    }


    // dev.save((err, newDev) => {
     //   if(err) {
     //       res.render('authors/new', {
        //        dev: dev, 
      //          errorMessage: 'Error creating dev'
      //      })
      //  } else {
      //      res.redirect('devs')
     //   }

    
   // })
    
})
module.exports = router