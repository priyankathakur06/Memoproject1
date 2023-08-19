// import mongoose from "mongoose";



// const posts=mongoose.Schema({
//     firstName:{
//         type:[String],
//         default:[]
//     },surname:{
//         type:[String],
//         default:[]
//     },
//     email:{
//         type:[String],
//         default:[]
//     },
//     message:{
//         type:[String],
//         default:[]
//     },
//     files:{
//         type:[String],
//         default:[]
//     }
// });

// // const postSchema=mongoose.Schema({
// //     {console.log("dfsghjkjhgf324567890",posts)},
// //     // users:posts,
    
// // });

// const PostMessage=mongoose.model("PostMessage",posts);

// export default PostMessage;
import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    files: {
        type: String,
        default: "" // Default value for files
    }
});

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;

