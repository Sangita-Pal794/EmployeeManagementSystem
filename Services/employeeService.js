const employeeModel = require('../Modals/employeeModal');

class employeeService {

    addEmployee = (req, next) => {
        try {
            return employeeModel.create(req).then((result) => {
                return ({ message: "add employee successfully", data: result });
            }).catch(error => {
                return ({ message: "fail to add", error: error });
            })

        } catch (e) {
            next(e);
        }
    }


// updateEmployee = (req,next) => {
//     try {
//         let id = {_id: req.params.id}
//         return employeeModel.update(req,id).then((result) => {
//             return ({ message: "update employee successfully", data: result });
//         }).catch(error => {
//             return ({ message: "fail to update", error: error });
//         })

//     } catch (e) {
//         next(e);
//     }
// }


updateEmployee = (req, next) => {
    try {
        let id = { _id: req.params._id }
        return employeeModel.update(req, id).then((result) => {
            return ({ message: "Update successful", data: result });
        }).catch(error => {
            return ({ message: "No record found", eroor: error });
        })
    } catch (e) {
        next(e);
    }
}

deleteEmployee = (req, next) => {
    try {
        return employeeModel.delete(req).then((result) => {
            return ({ message: "delete employee record successfully", data: result });
        }).catch(error => {
            return ({ message: "fail to delete", error: error });
        })

    } catch (e) {
        next(e);
    }
}

allEmployeeService = (req, next) => {
    try {
        return employeeModel.read().then((result) => {
            return ({ message: "Get all employee records", data: result })
        }).catch(error => {
            return ({ message: "fail to get", error: error })
        });

    } catch (e) {
        next(e);
    }
}
}


module.exports = new employeeService();
