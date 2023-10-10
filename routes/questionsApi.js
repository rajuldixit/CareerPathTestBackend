var express = require('express');
var router = express.Router();

const questions = [
    {
        id: 1,
        title: 'You are a team player ?'
    },
    {
        id: 2,
        title: 'You like to write algorithm ?'
    },
    {
        id: 3,
        title: 'You like to write test cases'
    },
    {
        id: 4,
        title: 'You practice functional programming ?'
    },
    {
        id: 5,
        title: 'You have patience while anyone critise your work ?'
    }
]

router.route('/').get((req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
    res.send({ok: 200, questions: questions})
})
module.exports = router;