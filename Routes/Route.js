const express = require("express");
const router = express.Router();
const employeeController = require("../Controller/employeeController.js");


/**apis for user */

const userController = require("../Controller/userController.js");
router.post("/user/Registration", userController.userRegistrationController);
router.get("/user/all", userController.alluserController);
router.post("/user/Login", userController.loginUserController);

/**apis for employee */

router.post("/employee/addEmployee", employeeController.addemployeeController);
router.put("/employee/updateEmployee/:_id", employeeController.updateemployeeController);
router.delete("/employee/deleteEmployee/:_id", employeeController.deleteemployeeController);
router.get("/employee/getAllEmployee", employeeController.allemployeeController);

module.exports = router;