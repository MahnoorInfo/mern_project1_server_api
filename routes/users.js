import express from 'express';
import * as users from '../controllers/users.js';


const userRoutes = express.Router();

userRoutes.route('/signup').post(users.signup);


export default userRoutes;
