const express = require("express");
const app = express();
require('./config/db.connection.js');

const bodyParser = require("body-parser");
const router = require("./Routes/Route.js")
const cors = require("cors")

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ "extended": false }));
app.use('/', router);
// require("./Modals/model.js")

/*catch error and sending to error handler*/
// app.use(function(req,res,next){
//     next(createError(404));
// });

/*error handler*/
app.use(function (error, req, res, next) {
    let response = {
        success: false,
        message: "Internal server error",
        error: error
    };
    res.status(500).send(response);
});


// app.use(function(error, req, res, next){

//     let response = {
//         success: false,
//         message:"Internal server error",
//         message:error.message
//     };
//     res.json(response);
// });
app.listen(process.env.port || 3000, () => {
    console.log("Listening to PORT 3000");
});