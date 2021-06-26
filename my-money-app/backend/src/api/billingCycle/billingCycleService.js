const BillingCycle = require('./billingCycle')

BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({ new: true, runValidators: true })

BillingCycle.route('count',(req,res,next) => {
    BillingCycle.count((error, value) => {
        if(error){
            res.status(500).json({erros: [error]})
        }
    })
})


BillingCycle.route('get', (req, res, next) => {
    BillingCycle.find({}, (err, docs) => {
        if (!err) {
            res.json(docs)
        } else {
            res.status(500).json({ errors: [error] })
        }
    })
})


module.exports = BillingCycle


