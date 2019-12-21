const router = require('express').Router()

const Listing = require('./listings-model');

const nopass = require('../auth/authenticate-middleware');

// Return All listings 
router.get('/', nopass , (req, res) => {
    Listing.find()
.then(listing => {
    res.json(listing);
})
.catch(err => {
 console.log(err);
 res.status(500).json({ message: "Error Fetching listings!"});

})

});

// Return listings by user_id
router.get('/:user_id', nopass , (req, res, next) => {

    const { user_id } = req.params;

    Listing.findByUserId(user_id)
    .where({user_id})
.then(listing => {
    res.json(listing);
})
.catch(err => {
 console.log(err);
 res.status(500).json({ message: "Error Fetching listings!"});

})

});

// Insert a listing
router.post('/insertlisting', nopass, (req, res) => {
    
    const listingData = req.body;
  
    Listing.add(listingData)
    .then(listing => {
      res.status(201).json(listing);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new listing!' });
    });
  });


// Delete a listing
router.delete('/deletelisting/:id', nopass, (req, res) => {
    const { id } = req.params;
  
    Listing.remove(id)
    .then(deleted => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res.status(404).json({ message: 'Could not find listing with given id' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to delete listing' });
    });
  });

  // update a listing 
  router.put('/updatelisting/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;
  
    Listing.findById(id)
    .then(listing => {
      if (listing) {
        Listing.update(changes, id)
        .then(updatedListing => {
          res.json(updatedListing);
        });
      } else {
        res.status(404).json({ message: 'Could not find Listing with given id!' });
      }
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to update Listing!' });
    });
  });


module.exports = router; 