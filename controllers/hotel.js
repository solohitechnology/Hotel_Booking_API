const Hotel = '../models/Hotel.js';


export const createHotel = async (req, res, next) => {
    const newHotel = new Hotel(req.body);

    try {
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
    } catch (err) {
        next(err)
    }
}


export const updateHotel = async (req, res, next) => {
    try {
        const findHotel = await Hotel.findByIdUpdate(req.params.Id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(findHotel);
    } catch (err) {
        next(err)
    }
};

export const deleteHotel = async (req, res, next) => {

    try {
        await Hotel.findByIdDelete(
            req.params.Id
        );
        res.status(200).json('hotel has been deleted');
    } catch (err) {
        next(err);
    };
};


export const getHotel = async (req, res, next) => {
    try {
        const hotel = await Hotel.findById(
            req.params.Id
        );
        res.status(200).json(hotel)
    } catch (err) {
        next(err);
    }
}


export const getHotels = async (req, res, next) => {
    try {
        const hotels = await Hotel.find()
        res.status(200).json(hotels)
    } catch (err) {
        next(err)
    }
}


// const updateHotell = async (req, res, next) => {
//     const findHotell = await Hotel.findByIdAndUpdate(req.params.id,
//         { $set: req.body },
//         { new: true }
//     );
// }
