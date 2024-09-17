import PostModal from "../../../models/postModel";
import ConnectMongo from "../../../utlis/connectMongoose";


export async function GET(){
    try {
        await ConnectMongo();
        const postData = await PostModal.find({});
        return Response.json(postData);
    } catch (error) {
        return Response.json({message : error.message})
    }
}