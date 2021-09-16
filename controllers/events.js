import mongoose from "mongoose";
import Events from "../models/events.js"

export const getEvents = async (req, res) => {
    try {
        const eventsList = await Events.find();
        res.status(200).json(eventsList);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createEvents = async (req, res) => {
    const event = req.body;
    const newEvent = new Events(event);
    try {
        await newEvent.save();
        res.status(201).json(newEvent);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const deleteEvent = async (req, res) =>{
    const { id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send("no event with given id");
    }
    try {
        await Events.findByIdAndRemove(id);
        res.status(200).json({ message: 'post deleted successfully'});
    }catch(error){
        res.status(400).json({ message: error.message });
    }
}