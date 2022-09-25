const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('GET/places')
})

// GET /places
router.get('/:id', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: "\images\seattle-coffee.jpg"
      }, {
          name: 'Coding Cat Cafe',
          city: 'Phoenix',
          state: 'AZ',
          cuisines: 'Coffee, Bakery',
          pic: "\images\cats-coffee.jpg"
      }]   
      //unsure of placement
      let id = Number(req.params.id)
      if (isNaN(id)) {
        res.render('error404')
      }
      else {
        res.render('places/show')
      }

    res.render('places/show', { place: places[id] })
})
module.exports = router




  