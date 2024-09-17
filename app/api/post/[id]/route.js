import ConnectMongo from "../../../../utlis/connectMongoose";
import PostModal from "../../../../models/postModel";


export async function GET(req,{params}){
    try {
        await ConnectMongo();
        const postData = await PostModal.findOne({_id : params.id});
        return Response.json(postData);
    } catch (error) {
        return Response.json({message : error.message})
    }
}