import express from "express";
import studentControllers from "../controllers/studentControllers";
import usersControllers from "../controllers/usersControllers";
let router = express.Router();

let initAPIRoutes = (app) => {
  router.get('/getAll-student', studentControllers.getAllStudents);
  router.get('/get-student/:id', studentControllers.getStudentWithId);
  router.put('/put-student/:id', studentControllers.updateStudent);
  router.delete('/del-student/:id', studentControllers.deleteStudent);
  router.post('/create-student', studentControllers.createStudent);

  router.get('/getAll-users',usersControllers.getAllUsers);
  router.get('/get-users/:id', usersControllers.getUsersWithId);
  router.put('/put-users/:id', usersControllers.updateUsers);
  router.delete('/del-users//:id', usersControllers.deleteUsers);



  return app.use('/api/v1/', router);
}

module.exports = initAPIRoutes;