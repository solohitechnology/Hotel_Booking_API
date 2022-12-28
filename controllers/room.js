const Hotel = "../models/Hotel";
const Room = "../models/Room";


export const createRoom = async (req, res, next) => {

    const hotelId = req.params.hotelid;
    const newRoom = new Room(req.body)

    try {
        const savedRoom = await newRoom.save()
        try {
            await Hotel.findByIdAndUpdate(hotelId, {
                $push: { rooms: savedRoom.id }
            })
        } catch (err) {
            next(err)
        }

    } catch (err) {
        next(err)
    }

};


export const updateRoom = async (req, res, next) => {
    try {
        const updateRoom = await Room.findByIdUpdate(req.params.Id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updateRoom);
    } catch (err) {
        next(err)
    }
};

//DeleteRoom

export const deleteRoom = async (req, res, next) => {
    const hotelId = req.params.hotelid;

    try {
        await Room.findByIdDelete(
            req.params.Id
        );
        try {
            await Hotel.findByIdAndDelete(hotelId, {
                $pull: { rooms: req.params.id },
            })
        } catch (err) {
            next(err)
        }
        res.status(200).json('Room has been deleted');
    } catch (err) {
        next(err);
    };
};


export const getRoom = async (req, res, next) => {
    try {
        const room = await Room.findById(
            req.params.Id
        );
        res.status(200).json(room)
    } catch (err) {
        next(err);
    }
}


export const getRooms = async (req, res, next) => {
    try {
        const rooms = await Room.find()
        res.status(200).json(rooms)
    } catch (err) {
        next(err)
    }
}