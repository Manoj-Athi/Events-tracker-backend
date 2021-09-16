import express from "express";

import { signup, login } from "../controllers/users.js"
import { getEvents, createEvents, deleteEvent} from "../controllers/events.js"

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/getEvents', getEvents);
router.post('/createEvents', createEvents);
router.delete('/delete/:id', deleteEvent);


export default router