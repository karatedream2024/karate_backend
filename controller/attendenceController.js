import attendanceModel from "../model/attendenceModel.js";


const updateAttendances = async (req, res) => {
    console.log(req.body, "range working ")



    try {
        const updatePromises = req.body.map(async ({ studentId, date, status, userId }) => {
            const existingRecord = await attendanceModel.findOne({ studentId, "attendance.date": date });

            if (existingRecord) {
                console.log("existingRecord")
                // Update the status of the existing record
                return attendanceModel.findOneAndUpdate(
                    { studentId, "attendance.date": date },
                    { $set: { "attendance.$.status": status, "attendance.$.userId": status } },
                    { new: true }
                );
            } else {
                // Find the student record or create a new one if it doesn't exist
                const student = await attendanceModel.findOne({ studentId });
                if (!student) {
                    console.log(userId, "new student")
                    const newAttendance = new attendanceModel({
                        studentId,
                        attendance: [{ date, status, userId }],
                    });
                    await newAttendance.save();
                    return newAttendance;
                }

                // Add a new attendance entry for the date
                console.log("new entry in existing account")
                return attendanceModel.findOneAndUpdate(
                    { studentId },
                    { $push: { attendance: { date, status, userId } } },
                    { new: true, upsert: true }
                );
            }
        });

        const updatedStudents = await Promise.all(updatePromises);

        console.log(updatedStudents, 'updatedStudents');
        res.status(200).json({ status: "success", data: updatedStudents, message: "Attendances Updated Successfully" });
        console.log('Updated attendances:', updatedStudents);
    } catch (err) {
        console.error('Error updating attendances:', err);
        res.status(500).json({ status: "error", message: "Error updating attendances", error: err });
    }
};


const getattendences = async (req, res) => {
    try {
        const attendances = await attendanceModel.find()
            .populate({
                path: 'studentId',
                match: { dojo: "firstDojo" },
                select: [`name`, `grade`, 'dob']
            })
            .populate({
                path: 'attendance.userId', // Populates the userId in the attendance array
                select: 'name' // Only includes the 'name' field from the user document
            });

        console.log(attendances, 'attendances');

        // Filter out any documents where the studentId didn't match the dojo criteria
        const filteredAttendances = attendances.filter(attendance => attendance.studentId !== null);
        console.log(filteredAttendances, 'filteredAttendances');

        res.status(200).json({
            status: "success",
            data: filteredAttendances,
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


export { updateAttendances, getattendences }