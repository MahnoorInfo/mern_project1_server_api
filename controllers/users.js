import Users from '../models/users.js';
import {nanoid} from 'nanoid'; 
import emailValidator from 'email-validator';
import bcrypt from 'bcryptjs';

/**
 * 
 * create new account 
 * => POST - /api/signup
 */
const signup = async (req, res) => {

   const { email, password } = req.body;

   const isValidEmail = emailValidator.validate(email);
   const isEmailExist = await Users.findOne({ email });

   const salt =  await bcrypt.genSalt(12);  // create 12 digit salt for password
   const hashedPassword =  await bcrypt.hash(password, salt); // mix salt with password and hash created

   try {
      if (!email || !password) {
           return  res.json({ success: false, error: 'Both fields are required' });
      }

      if (!isValidEmail) {
          return res.json({ success: false, error: 'Email is not valid' });
      }

      if (isEmailExist) {
         return res.json({ success: false, error: `${email} already taken` });
      }

      const newUser = await new Users({ email, password: hashedPassword, username: nanoid(8) }).save();

      res.status(200).json({ success: true, data: newUser, message: 'Account created successfully' });

   } catch (error) {
      res.status(500).json({ error: error.message})
   }

};

export { signup }