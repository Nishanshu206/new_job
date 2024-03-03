import mongoose from "mongoose";

export const dbConnection=()=>{

    mongoose.connect(process.env.MONGO_URI,{
        dbName: "MERN_JOB_SEEKING_WEBAPP"

    }).then(()=>{
        console.log("Connected to db sucessfully")
    }).catch((err)=>{
            console.log(`Some error occoured ${err}`);
    })
}