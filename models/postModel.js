import { model, models, Schema } from "mongoose";

const postSchema = new Schema(
    {
        title : String,
        description : String,
        image : String
    },{ toJSON : {virtuals : true}}
)

postSchema.virtual('short_description').get(function() {
    return this.description.substring(0,100)+'....'
})

const PostModal = models.Post || model('Post',postSchema);

export default PostModal