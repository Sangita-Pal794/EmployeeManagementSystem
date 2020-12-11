const { response, request } = require('express');
const service = require('../Services/employeeService.js')
// const response = {}
class employeeController {
  addemployeeController = (req, res, next) => {
    try {
      service.addEmployee(req.body).then(result => {
        response.success = true;
        response.message = result.message;
        response.data = result.data;
        return res.status(200).send(response);
      }).catch(err => {
        response.success = false;
        response.message = err.message;
        response.error = err.error;
        return res.status(400).send(response);
      });
    } catch (e) {
      next(e);
    }
  }

  updateemployeeController = (req, res,next) => {
    try {
      //console.log(req)
      service.updateEmployee(req).then(result => {
        response.success = true;
        response.message = result.message;
        response.data = result.data;
        return res.status(200).send(response);
      }).catch(err => {
        response.success = false;
        response.message = err.message;
        response.error = err.error;
        return res.status(400).send(response);
      });
    } catch (e) {
      next(e);
    }
  }

  deleteemployeeController = (req, res, next) => {
    try {
      service.deleteEmployee(req.params._id).then(result => {
        response.success = true;
        response.message = result.message;
        response.data = result.data;
        return res.status(200).send(response);
      }).catch(err => {
        response.success = false;
        response.message = err.message;
        response.error = err.error;
        return res.status(400).send(response);
      });
    } catch (e) {
      next(e);
    }
  }

  allemployeeController = (req, res) => {
    try {
      let request = {}
      service.allEmployeeService().then(result => {
        request.success = true;
        request.message = result.message;
        request.data = result.data;
        return res.status(200).send(request);
      }).catch(err => {
        request.success = false;
        request.message = err.message;
        request.error = err.error;
        return res.status(400).send(request);
      });
    } catch (e) {
      next(e);

    }
  }
}
module.exports = new employeeController();
