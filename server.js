require('dotenv').config()
// Require modules
const express = require('express')
const methodOverride = require('method-override')
const db = require('./models/db')
const app = express()

// Configure the app (app.set)
/*Start Config */
app.use(express.urlencoded({ extended: true })) // This code makes us have req.body
app.use((req, res, next) => {
  res.locals.data = {}
  next()
})
app.engine('jsx', require('jsx-view-engine').createEngine())
app.set('view engine', 'jsx') // register the jsx view engine
db.once('open', () => {
  console.log('connected to MongoDB Atlas')
})
/*Start Middleware */
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use('/fruits', require('./controllers/routeController'))
/* END Middleware */


// Mount Routes
/*Start Routes */


// INDEX --- READ --- GET
// app.get('/fruits', (req, res) => {
//   Fruit.find({}, (err, foundFruits) => {
//     if(err){
//       console.error(err)
//       res.status(400).send(err)
//     } else {
//       res.render('fruits/Index', {
//         fruits: foundFruits
//       })
//     }
//   })
// })
  //res.render('fruits/Index', { fruits })
  // res.render('template', { title: 'Fruits Index Page',
  // message: 'Fruits Index',
  // content: fruits.map((fruit) => `${fruit.name} is ${fruit.color} and it\'s ${fruit.readyToEat? 'is ready to eat': 'isn\'t ready to eat'}`) })


// NEW (Not applicable in an api)
// app.get('/fruits/new', (req, res) => {
//   res.render('fruits/New')
// })
// DELETE

// app.delete('/fruits/:id', (req, res) => {
//   Fruit.findByIdAndDelete(req.params.id, (err, deletedFruit) => {
//     if(err){
//     console.error(err)
//     res.status(400).send(err)
//     } else {
//       res.redirect('/fruits')
//     }
//   })
// })

// UPDATE

// app.put('/fruits/:id', (req, res) => {
//   req.body.readyToEat === 'on' || req.body.readyToEat === true ?req.body.readyToEat = true :req.body.readyToEat = false
//   Fruit.findByIdAndUpdate(req.params.id, req.body, {new: true},(err, updatedFruit) => {
//     if(err){
//       console.error(err)
//       res.status(400).send(err)
//     } else {
//       res.redirect(`/fruits/${updatedFruit._id}`)
//     }
//   })
// })

// CREATE
// app.post('/fruits', (req, res) =>{
  // req.body which contains all of our form Data we will get from the user
  // req.body.readyToEat === 'on' ? req.body.readyToEat = true : req.body.readyToEat = false
  // Fruit.create(req.body, (err, createdFruit) => {
  //   if(err){
  //     console.error(err)
  //     res.status(400).send(err)
  //   } else {
  //     res.redirect('/fruits')
      ///res.send(createdFruit)
//     }
//   })
// })

// EDIT (not applicable in an api)

// app.get('/fruits/:id/edit', (req,res) => {
//   Fruit.findById(req.params.id, (err, foundFruit) => {
//     if(err){
//       console.error(err)
//       res.status(400).send(err)
//     } else {
//       res.render('fruits/Edit', {
//         fruit: foundFruit
//       })
//     }
//   })
// })

// SHOW ---- READ ---- GET
//
// app.get('/fruits/:i', (req, res) => {
  // const i = req.params.i
  // res.send(fruits[i])
  //app.get('/fruits/:i', (req, res) => {
    //res.render('fruits/Show', {
     // fruit: fruits[req.params.i]
   // })
  //})

    // const fruit = fruits[req.params.i]
    // res.render('template', {
    //   title: fruit.name,
    //   message: `The ${fruit.color} ${fruit.name}`,
    //   content: `${fruit.name} is ${fruit.color} and ${fruit.readyToEat? 'its ready to eat': 'its not ready to eat'}`
    // })

// app.get(‘/:color’, (req, res) => {
//   res.send(req.params.color + ' ' + ‘is beautiful’)
// })

// app.get(‘/fruits/new’, (req, res) => {
//   res.send(‘new page’)
// })

/* END ROUTES */


// Tell the app to listen on a port
app.listen(3000, () => {
    console.log('Listening on Port 3000')
})
