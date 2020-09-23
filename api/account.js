const router = require('express').Router();

const { getAccount, postAccount, deleteAccount } = require('../database/account');

router.get('/:accountNumber', async (req, res) => { 
    try {
        // add id checking - token?
        const account = await getAccount(parseInt(req.params.accountNumber));
        res.send(200).send(account);
    } catch (err) {
        res.status(500).send({
            error: "Error fetching account. Please try again."
        });
    }
});

router.post('/:customerId', async (req, res) => {
    try {
        // add id checking - token?
        // check that body is formated correctly
        const id = await postAccount(parseInt(req.params.customerId), req.body);
        res.send(201).send({
            id: id
        });
    } catch (err) {
        res.status(500).send({
            error: "Error inserting account into db. Please try again."
        });
    }
});

router.delete('/:accountNumber', async (req, res) => {
    try {
        // add id checking - token?
        // check that body is formated correctly
        const id = await deleteAccount(parseInt(req.params.accountNumber));
        res.send(204).send({
            id: id
        });
    } catch (err) {
        res.status(500).send({
            error: "Error inserting account into db. Please try again."
        });
    }
});