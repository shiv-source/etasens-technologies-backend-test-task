const mongoose = require("mongoose");
require("mongoose-type-email");
mongoose.SchemaTypes.Email.defaults.message = "Email address is invalid";

const emailSchema = mongoose.Schema(
  {
    companyid: { type: Number, required: true, unique: true },
    emailTemplateName: { type: String, required: true },
    templateContent: {
      reciverEmail : mongoose.SchemaTypes.Email,  
      subject: { type: String, required: true },
      body: { type: String, required: true },
    },
  },
  { timestamps: true }
);


module.exports = mongoose.model("Email" , emailSchema);






