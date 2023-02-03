import { client } from "../config/databaseConfig";

let getAllStudents = async (req, res) => {
  try {
    const result = await client.query(`Select * from Student`)
    res.status(200).json({
      message: 'ok',
      data: result.rows
    })
  } catch (err) {
    res.status(500).json({
      err: err.message
    })
  }
};

let getStudentWithId = async (req, res) => {
  try {
    const result = await client.query(`Select * from Student where id=${req.params.id}`)
    res.status(200).json({
      message: 'ok',
      data: result.rows
    })
  } catch (err) {
    res.status(500).json({
      err: err.message
    })
  }
};


let updateStudent = async (req, res) => {
  let { code, email, name, phone_number, gender, address } = req.body;
  try {
    const result = await client.query(`Update Student SET name = '${name}', code = '${code}',email = '${email}', phone_number = '${phone_number}', gender = '${gender}', address = '${address}'   where id=${req.params.id}`)
    res.status(200).json({
      message: 'ok',
      data: result.rows,
    })
  } catch (err) {
    res.status(500).json({
      err: err.message
    })
  }
};

let deleteStudent = async (req, res) => {
  try {
    const result = await client.query(`Delete from Student where id=${req.params.id}`);
    res.status(200).json({
      message: 'ok',
    })
  } catch (err) {
    res.status(500).json({
      err: err.message
    })                        
  }
};

let createStudent = async (req, res) => {
  let { code, email, name, phone_number, gender, address } = req.body;
  let password = '123456';
  try {
    await client.query(`INSERT INTO users (username, password) VALUES ('${name}','${password}')`);
    const create = await client.query(`INSERT INTO student (code, email, name, phone_number, gender, address) VALUES ('${code}','${email}','${name}','${phone_number}','${gender}','${address}')`);
    res.status(200).json({
      message: 'create new user success',
      data: create.rows,
    })
  } catch (err) {
    res.status(500).json({
      err: err.message
    })
  }
};

module.exports = {
  getAllStudents,
  getStudentWithId,
  updateStudent,
  deleteStudent,
  createStudent
}