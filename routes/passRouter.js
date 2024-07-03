require('dotenv').config()
const router = require('express').Router();
const stripe = require('stripe')(process.env.STRIPE_KEY)
const {ensureAuthenticated, ensureNoPass} = require('../utils/auth.js')
const User = require('../schemas/userSchema.js')

router.get('/', ensureAuthenticated,(req, res) => {
    res.render('pass')
});

router.get('/cancel',ensureAuthenticated,(req, res) => {
    res.render('cancel')
});

router.get('/success',ensureAuthenticated, (req, res) => {
    res.render('success')
});

router.post('/',ensureAuthenticated, async (req, res, next) => {
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [{
            price_data: {
                currency: "inr",
                product_data: {
                    name: 'city view pass',
                },
            unit_amount: 300000,
        },
        quantity: 1,
        }],
        mode: 'payment',
        success_url: 'http://localhost:3000/city',
        cancel_url: 'http://localhost:3000/pass/cancel',
      });
      res.redirect(303, session.url);
      await User.findOneAndUpdate({email: req.user.email}, {
          $set: {
              pass: true,
              passDuration: "year",
              passDate: Date.now()
          }
      })
})

module.exports = router;