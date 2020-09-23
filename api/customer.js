const router = require('express').Router();

const { getAccount } = require('../database/customer');

router.get('/:id', async (req, res) => { 
    try {
        // add id checking - token?
        const customer = await getCustomer(parseInt(req.params.id));
        res.send(200).send(customer);
    } catch (err) {
        res.status(500).send({
            error: "Error fetching customer. Please try again."
        });
    }
});

router.post('/', async (req, res) => {
    try {
        // add id checking - token?
        // check that body is formated correctly
        const id = await postAccount(req.body);
    } catch (err) {
        res.status(500).send({
            error: "Error inserting account into db. Please try again."
        });
    }
}); 