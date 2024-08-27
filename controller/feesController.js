import feesModel from "../model/feesModel.js";


const createfees = async (req, res) => {
    try {
        const { fees, studentId} = req.body;
    //    const studentId = "66b6f928379c3b9b9dce7efe"
    //     const fees = 400

        const amount = fees.amount;
        const date = fees.date;
        const payment_type = fees.payment_type;
        const userId = fees.userId


        const replacefee = await feesModel.findOne({
            _id: "66b0bd1a1b9042e8e4b90a3e",
            fees: { $elemMatch: { _id: "66b0bd1a1b9042e8e4b90a3f" } }
        });

        console.log(replacefee, 'range offer');

        if (replacefee) {
            const updatefee = await feesModel.findOneAndUpdate(
                { _id: "66b0bd1a1b9042e8e4b90a3e", "fees._id": "66b0bd1a1b9042e8e4b90a3f" },
                { $set: { "fees.$.amount": 300, "fees.$.userId": userId  } },
                { new: true }
            );
            return res.status(200).json({ status: "success", data: updatefee, message: "Fees Updated Successfully" });
        }

        const feesData = await feesModel.findOne({ studentId });

        if (!feesData) {
            const createfees = new feesModel({
                studentId,
                fees,
                date,
                payment_type,
                userId
            })
            const result = await createfees.save();
            res.status(200).json({ status: "success", data: createfees, message: "Attendances Updated Successfully" });
        }
        else {
            const updatefee = await feesModel.findOneAndUpdate({ studentId: studentId }, { $push: { fees: fees } }, { new: true })
            res.status(200).json({ status: "success", data: updatefee, message: "Attendances Updated Successfully" });
        }
    }
    catch (error) {
        res.status(500).json(error);
    }

}

const getfees = async (req, res) => {
    try {
        const attendances = await feesModel.find()
            .populate({
                path: 'studentId',
                match: { dojo: "firstDojo" },
                select: [`name`, `grade`, 'dob', 'fatherName']
            }).populate({
                path: 'fees.userId', // Populates the userId in the attendance array
                select: 'name' // Only includes the 'name' field from the user document
            });

        console.log(attendances, 'attendances');

        // Filter out any documents where the studentId didn't match the dojo criteria
        // const filteredAttendances = attendances.filter(attendance => attendance.studentId !== null);
        // console.log(filteredAttendances, 'workmode')

        res.status(200).json({
            status: "success",
            data: attendances,
            message: "Student attendance retrieved successfully"
        });
    } catch (error) {
        console.error("Error retrieving student attendance:", error); // Log the error for debugging
        res.status(500).json({
            status: "error",
            message: "Internal server error"
        });
    }
};

// const getfees = async (req, res) => {
//     try {
//         const { studentId } = req.body;
//         const feesData = await feesModel.findOne({ studentId });
//         res.status(200).json({ status: "success", data: feesData, message: "Attendances Updated Successfully" });
//     } catch (error) {

//         res.status(500).json("server Internal Error");
//     }

// }


export { createfees, getfees }