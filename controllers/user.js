const User = '../models/Users';


export const createHotel = async (req, res, next) => {
    const newUser = new User(req.body);

    try {
        const savedHotel = await newUser.save();
        res.status(200).json(savedHotel);
    } catch (err) {
        next(err)
    }
}


export const updateUser = async (req, res, next) => {
    try {
        const findUser = await User.findByIdUpdate(req.params.Id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(findUser);
    } catch (err) {
        next(err)
    }
};

export const deleteUser = async (req, res, next) => {
  
    try {
        await User.findByIdDelete(
            req.params.Id
        );
        res.status(200).json('user has been deleted');
    } catch (err) {
        next(err);
    };
};


export const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(
            req.params.Id
        );
        res.status(200).json(user)
    } catch (err) {
        next(err);
    }
}


export const getUsers = async (req, res, next) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (err) {
        next(err)
    }
}