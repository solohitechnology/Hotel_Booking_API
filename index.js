import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoute from './routes/auth.js';
import usersRoute from './routes/users.js';
import hotelsRoute from './routes/hotels.js';
import roomsRoute from './routes/rooms.js';
const app = express();
const PORT = process.env.PORT || 8080;
dotenv.config();

// const connect = async () => {
//     try {
//         await mongoose.connect(process.env.MONGO_URL);
//         console.log('connected to mongoDB')
//     } catch (error) {
//         throw error
//     }
// };

// mongoose.connect.on('disconnect', () => {
//     console.log('mongoDB disconnected')
// })

// connect()

//midlewares
//app.use(cookieParser());
app.use(express.urlencoded({extended: true}))
app.use(express.json());

app.use('/api/auth', authRoute);
app.use('/api/users', usersRoute);
app.use('/api/hotels', hotelsRoute);
app.use('/api/rooms', roomsRoute);

app.listen(PORT, () => console.log('server riunning on port ' + PORT))


