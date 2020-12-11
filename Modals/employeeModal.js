const mongoose = require('mongoose');
const Schema = mongoose.Schema

const employeeSchema = new Schema({
    firstname: {
        type: String,
        require: [true, 'First name is required']
    },
    lastname: {
        type: String,
        require: [true, 'last name is required']
    },
    email: {
        type: String,
        require: [true, 'email is required'],
        unique: true

    },
    
    designation: {
        type: String,
        require: [true, 'designation is required'],

    },
    
    mobile: {
        type: Number,
        require: [true, 'mobile number is required'],
        minlength: 10,
        maxlength: 10
    },

});
const employees = mongoose.model('employees', employeeSchema);

class employeeModel {
    // create(req, next) {
    //     try {
    //         return new Promise((resolve, reject) => {
    //             let newemployee = new employees(req);
    //             newemployee.save().then(result => {
    //                 resolve(result);
    //             }).catch(error => {
    //                 reject(error);
    //             });
    //         });
    //     } catch (error) {
    //         console.log(error);
    //     };
    // }

    create = (req, next) => {
        try {
            console.log(req);
            return new Promise((resolve, reject) => {
                let newEmployee = new employees(req);
                newEmployee.save().then(result => {
                    console.log(result);
                    resolve(result);
                }).catch(error => {
                    reject(error);
                });
            });

        } catch (error) {
            next(error);
        }
    }

    delete(req, next) {
        try {
            console.log(req)
            return new Promise((resolve, reject) => {
                // employees.findOneAndDelete(req).then(result =>{
                employees.findByIdAndDelete(req).then(result => {

                    resolve(result);
                }).catch(error => {
                    reject(error);
                });
            });
        } catch (error) {
            next(error)
        }
    }

    read(req, next) {
        try {
            return new Promise((resolve, reject) => {
                employees.find().then(result => {
                    console.log(result);
                    resolve(result);
                }).catch(error => {
                    reject(error);
                });
            });

        } catch (error) {
            next(error);
        }
    }

    
    update = (req,employeeId) => {
        try {
            const option = { new: true };
            return new Promise((resolve, reject) => {
                    employees.findByIdAndUpdate(employeeId,req.body,option).then(data =>{
                    resolve(data);
                    //console.log(data);

                }).catch((error) => {
                    reject(error);
                });
            });
        } catch (error) {
            return { message: "Error in Model", error: error };
        }
    }


}
module.exports = new employeeModel();
