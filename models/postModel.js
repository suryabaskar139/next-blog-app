import { model, models, Schema } from "mongoose";

const postSchema = new Schema(
    {
        title : String,
        description : String,
        image : String,
        created_at : String
    },{ toJSON : {virtuals : true}}
)

postSchema.virtual('short_description').get(function() {
    return this.description.substring(0,100)+'....'
})


postSchema.virtual('created_at_formatted').get(function() {
    return formatDate(this.created_at)
})

function formatDate(dateVal) {
    const dateFormat = new Date(dateVal)
    return dateFormat.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric"
    });
}

const PostModal = models.Post || model('Post',postSchema);

export default PostModal