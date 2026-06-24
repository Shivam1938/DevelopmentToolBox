import mongoose from "mongoose";

const toolSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Tool name is required"],
        trim: true,
        maxlength: [100, "Tool name cannot exceed 100 characters"]
    },
    discription: {
        type: String,
        required: [true, "Tool discription is required"],
        trim: true,
        maxlength: [500, "Tool discription cannot exceed 500 characters"]
    },
    category: {
        type: String,
        required: [true, "Tool category is required"],
        enum: {
            values: ['IDE', 'API_TOOL', 'VERSION_CONTROL', 'DATABASE', 'DESIGN', 'PRODUCTIVITY', 'VIDEO_EDITING', 'VFX', 'OTHERS'],
            message: 'Invalid Category'
        }
    },
    url: {
        type: String,
        required: [true, "Tool URL is required"],
        validate: {
            validator: function (url) {
                return /^https?:\/\/.+/.test(url);
            },
            message: "Please Provide a Valid URL"
        }
    },
    isPopular: {
        type: Boolean,
        default: false
    },
    tags: [{
        type: String,
        trim: true
    }]
}, {
    timestamps: true,
    versionKey: false
})

toolSchema.index({category: 1, isPopular: -1})
toolSchema.index({name: 1})

toolSchema.statics.findPopular = function () {
    return this.find({isPopular: true}).sort({ createdAt: -1})
}

toolSchema.statics.findCategory = function () {
    return this.find({category}).sort({ name: 1})
}

const Tool = mongoose.model('Tool', toolSchema);

export default Tool;