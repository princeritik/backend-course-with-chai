import mongoose, {Schema} from "mongoose";

const subscriptionSchema = new Schema({
    subscriber:{ // jo subscribe kr raha
        type: Schema.Types.ObjectId, 
        ref: "User"
    },
    channel: { // jise subscribe kr raha
        type: Schema.Types.ObjectId,
        ref: "User"
    }
},{timestamps:true}) 

export const Subscription = mongoose.model("Subscription",subscriptionSchema )