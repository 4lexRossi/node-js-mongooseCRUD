import Mongoose from 'mongoose'

const schema = new Mongoose.Schema({
    title: {        
            type: String,
            required: [true, 'Title is required'],
            unique: true
            },
    content: String,
    author: String,
    publishDate: Date    
}, {
    timestamps: { createdAt: true, updatedAt: true },
    toJSON: { 
        virtuals: true,
        transform(doc, ret) {
            ret.id = ret._id
            delete ret._id
          }
    },
    versionKey: false,
})

const PostModel = Mongoose.model('Posts', schema)

export default PostModel