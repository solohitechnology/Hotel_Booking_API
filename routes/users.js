import  express  from "express";
import {
    deleteUser,
    getUsers,
    getUser, updateUser
} from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verification.js";


const router = express.Router();

//UPDATE
router.put('/:id', verifyUser, updateUser);
//DELETE
router.delete('/:id', verifyUser, deleteUser);
//GET
router.get('/:Id', verifyUser, getUser);
//GET ALL
router.get('/', verifyAdmin, getUsers)


export default router;