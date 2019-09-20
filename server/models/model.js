  
const mongoose = require('mongoose');


//////////////init DB//////////////
mongoose.connect('mongodb://localhost/Pet_DB', {useNewUrlParser: true});
const PetSchema = new mongoose.Schema({ /////////Pets///////////
    name: {type: String, required: [true, "An pet name is required"], minlength:[3, "Pet name must be at least 3 characters long."]},
    petType: {type: String, required: [true, "An pet type is required"], minlength:[3, "Pet type must be at least 3 characters long."]},
    description: {type: String, required: [true, "An description is required"], minlength:[3, "Description must be at least 3 characters long."]},
    skills: {type: Array},
    likes: {type: Number, default:0}
},{timestamps:true})
   // create an object to that contains methods for mongoose to interface with MongoDB
const Pet = mongoose.model('Pet', PetSchema);
//////////////init DB//////////////

///////EXPORT////////
module.exports = Pet;