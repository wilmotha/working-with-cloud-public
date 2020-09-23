const router = require('express').Router();

const { getCustomer, getCustomerAccounts, postCustomer } = require('../database/customer');

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

router.get('/:id/accounts', async (req, res) => { 
    try {
        // add id checking - token?
        const accounts = await getCustomerAccounts(parseInt(req.params.id));
        res.send(200).send(accounts);
    } catch (err) {
        res.status(500).send({
            error: "Error fetching customer accounts. Please try again."
        });
    }
});

router.post('/', async (req, res) => {
    try {
        // add id checking - token?
        // check that body is formated correctly
        const id = await postCustomer(req.body);
        res.status(201).send({
            id: id
        });
    } catch (err) {
        res.status(500).send({
            error: "Error inserting account into db. Please try again."
        });
    }
}); 