import User from '../model/userModel.js';
import jwt from 'jsonwebtoken';



const postUser = async (req, res) => {

    try {
        const userRegister = new User(req.body)
        await userRegister.save()
        res.status(200).send({ status: "success", data: userRegister, message: "User Registered Successfully" })
    }
    catch (error) {
        res.status(400).send({ message: "server Internal Error" })
    }

}


const getuser = async(req, res) =>{
  const out =  jwt.sign({
        data: 'foobar'
      }, 'secret', { expiresIn: '1m' })

      jwt.verify(out, 'secret', function(err, decoded) {
        if (err) {
            console.log(err, 'thanks')
        }
      });

      console.log(out, 'rangerthings')

    try {
        const userRegister = await User.find()
        res.status(200).send({ status: "success", data: userRegister, message: "User Registered Successfully" })
    }

    catch (error) {
        res.status(400).send({ message: "server Internal Error" })
    }

}


export { postUser, getuser }