const User = "../../client/node_modules/models/Users.js";
import { createError } from "../utils/error.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


// REGISTER
export const register = async (req, res, next) => {
    try {

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new Users({
            username: req.body.username,
            email: req.body.emal,
            password: hash,
        })

        await newUser.save()
        res.status(201).send('User has been created.')
    } catch (err) {
        next(err)
    }
};


//LOGIN 
export const login = async (req, res, next) => {

    try {

        const user = await User.findOne({ username: req.body.username })
        if (!user) return next(createError(404, "user not found!"));

        const ispasswordCorrect = await bcript.compare(req.body.password, user.password);
        if (!ispasswordCorrect) return next(createError(400, " wrong username or password"));

        const token = jwt.sign({ id: user.id, isAdmin: user.isAdmin }, process.env.JWT)

        const { password, isAdmin, ...otherdetails } = user._doc
        res.cookie('access_token',
            token, {
            httpOnly: true,
        }).status(200).json({ ...otherdetails })

    } catch (err) {
        next(err)
    }
};
