var express = require('express');
var router = express.Router();

let users = []

router.route('/').get((req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
    const checkUsername = obj => obj.name === req.query.user;
    if(!users.some(checkUsername)) {
        let newUser = {
            name: req.query.user,
            isTestCompleted: false,
            latestSubmission: {
                date: ''
            },
            answers: []
        }
        users.push(newUser);
        res.send({ok: 200, data: {name: newUser.name, isTestCompleted: false}})
    } else {
        const idx = users.findIndex(obj => obj.name === req.query.user )
        res.send({ok: 200, data: users[idx]});
    }
    
}).post((req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
    // res.send('API is working properly post');
    const answers = req.body.answers;
    const user = req.query.user;
    const checkUsername = obj => obj.name === req.query.user;
    if(!users.some(checkUsername)) {
        let newUser = {
            name: user,
            isTestCompleted: true,
            latestSubmission: {
                date: new Date()
            },
            answers: answers
        }
        users.push(newUser);
        res.send({ok: 200, data: newUser});
    } else {
        const idx = users.findIndex(obj => obj.name === user )
        users[idx].answers = answers;
        users[idx].isTestCompleted = true;
        users[idx].latestSubmission.date = new Date();
        res.send({ok: 200, data: users[idx]});
    }    
    
   
})

module.exports = router;
