const mongoose = require('mongoose');
const Schema = mongoose.Schema

const userSchema = new Schema({
    firstname: {
        type: String,
        require: true
    },
    lastname: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true

    },
    password: {
        type: String,
        require: true,
        unique: true
    },
    // id: {
    //     type: String,
    //     unique: true
    // }
    // companyName: {
    //     type: String,
    //     require:true
    // },
    // salary: {
    //     type: Number,
    //     require:true
    // },
    // mobile: {
    //     type: Number,
    //     require:true
    // },

});
const users = mongoose.model('users', userSchema);

class usersModel {
    create(req, next) {
        try {
            return new Promise((resolve, reject) => {
                let userDetails = new users(req);
                userDetails.save().then(result => {
                    resolve(result);
                }).catch(error => {
                    reject(error);
                });
            });
        } catch (error) {
            console.log(error);
        };
    }
    
    read(req, next) {
        try {
            return new Promise((resolve, reject) => {
                users.find().then(result => {
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

    userLogin(req, next) {

        try {
            return new Promise((resolve, reject) => {
                users.findOne(req.email).then(data => {
                    if(req.password == data.password){
                        resolve({ message: 'Login successful', data:data})
                    }
                    else{
                    reject({ message: 'wrong password', error: err })

                    }
                }).catch(err => {
                    reject({ message: 'email not exist', error: err })
                })
            });
        } catch (error) {
            next(error);
        }

    }
}
module.exports = new usersModel();





