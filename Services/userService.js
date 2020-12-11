const userModel = require('../Modals/userModel');

class userService {

    userRegistrationService = (req, next) => {
        try {
            return userModel.create(req).then((result) => {
                return ({ message: "user register successfully", data: result });
            }).catch(error => {
                return ({ message: "fail to register", error: error });
            })

        } catch (e) {
            next(e);
        }
    }

    // allUserService = (req, next) => {
    //     try {
    //         //let userDetails={"email": req.email};
    //         return userModel.read().then((result) => {
    //             return ({ message: "user record found", data: result });
    //         }).catch(error => {
    //             return ({ message: "fail to find record", error: error });
    //         })

    //     } catch (e) {
    //         next(e);
    //         //   cosole.log(e);

    //     }
    // }
    allUserService = (req, next) => {
        try {
            return userModel.read().then((result) => {
                return ({ message: "user register successfully", data: result })
            }).catch(error => {
                return ({ message: "fail to register", error: error })
            });

        } catch (e) {
            next(e);
        }
    }

    // userLoginService = (req, next) => {

    //     try{
    //         let loginData ={
    //          email: {"email": req.email},
    //          password: req.password,
    //         };

    //         return userModel.userLogin(loginData).then((result) => {
    //             return ({ message: "user exists", data: result });
    //         }).catch(error => {
    //             return ({ message: "user not exist.register!!", error: error });
    //         })
    //     //     return result;
    //     // }).catch(error => {
    //     //         return error 
    //     //     })


    //     } catch (e) {
    //         next(e);
    //         //   cosole.log(e);

    //     }
    // }

    userLoginService = (req, next) => {
        try {
            let loginData = {
                email: { "email": req.email },
                password: req.password
            };
            return userModel.userLogin(loginData).then((result) => {
                return result;
            }).catch(error => {
                return error;
            })
        } catch (e) {
            next(e);
        }
    }
}
module.exports = new userService();
