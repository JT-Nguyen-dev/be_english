import { client } from "../config/databaseConfig";

let getAllUsers = async (req, res) => {
  try {
    const result = await client.query(`Select * from Users`)
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

let getUsersWithId = async (req, res) => {
  try {
    const result = await client.query(`Select * from Users where id=${req.params.id}`)
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


let updateUsers = async (req, res) => {
  let { username, password} = req.body;
  try {
    const result = await client.query(`Update Users SET username = '${username}', password = '${password}' where id=${req.params.id}`)
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

module.exports = {
  getAllUsers,
  getUsersWithId,
  updateUsers
}