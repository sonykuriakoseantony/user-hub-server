const users = require('../models/userModel')

// add a user
exports.addUserController = async (req, res) => {
    console.log("Inside addUserController");
    const { name, email, mobile, age } = req.body;
    try {
        const existingUser = await users.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User with this email already exists" });
        }
        else {
            const newUser = await users.create({
                name, email, mobile, age
            });
            res.status(200).json(newUser);
        }

    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
}

// update a user
exports.updateUserController = async (req, res) => {
    console.log("Inside updateUserController");
    const { name, email, mobile, age } = req.body;
    const { id } = req.params;
    try {
        const existingUser = await users.findOne({ _id: id });
        if (!existingUser) {
            return res.status(400).json({ message: "User with this id does not exist" });
        }
        else {
            const userDetail = await users.findByIdAndUpdate({ _id: id }, {
                name, email, mobile, age
            }, { new: true });
            res.status(200).json(userDetail);
        }

    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
}

// update a user
exports.removeUserController = async (req, res) => {
    console.log("Inside removeUserController");
    const { id } = req.params;
    try {
       const userDetail = await users.findByIdAndDelete({ _id: id });
            res.status(200).json(userDetail);
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
}

// get all users
exports.getAllUsersController = async (req, res) => {
    console.log("Inside getAllUsersController");
    try {
        const allUsers = await users.find();
        res.status(200).json(allUsers);
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
}
