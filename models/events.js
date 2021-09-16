import mongoose from "mongoose";

const eventsSchema = mongoose.Schema({
    title: String,
    day: String,
    reminder: Boolean,
    id: String
})

const Events = mongoose.model('Events', eventsSchema)

export default Events;