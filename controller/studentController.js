import student from '../model/studentModel.js';



const postStudent = async (req, res) => {



    try {
        const userRegister = new student(req.body)
        await userRegister.save()
        res.status(200).send({ status: "success", data: userRegister, message: "User Registered Successfully" })
    }
    catch (error) {
        res.status(400).send({ message: "server Internal Error" })
    }

}


export { postStudent }