import PostMessage from "../models/postMessage.js";

export const getPost=async(req,res)=>{
    // console.log("dfghjk");
    try {
     const messages=await PostMessage.find();
     res.status(200).json(messages);
    }
    catch (err){
    res.status(404).json({message:err.message});
    }};

export const createPost=async(req,res)=>{
    const post =req.body;
    // console.log("111111111111",post)
    try{
        const newPost=new PostMessage(post);
        // console.log("2222222222222",newPost)
    await newPost.save();
    res.status(201).json(newPost);
    }
    catch(err){
   res.status(409).json({message:err.message});
    }
    };