/* 
    path:'/api/users'

*/

const { Router } = require('express');
const { getUsers, createUser } = require('../controllers/UserController');


const router = Router();

router.get('/', getUsers);


router.post('/', createUser);



module.exports = router;