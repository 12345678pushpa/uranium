/*const UserModel= require("../models/userModel")

const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

module.exports.createUser= createUser
module.exports.getUsersData= getUsersData*/



const UserModel= require("../models/userModel")

const bookdata= async function (req, res) {    
    let data= req.body
    let savedbookData= await UserModel.create(data)
    res.send({msg: savedbookData})
}

const getbookdata= async function (req, res) {     
    let allbook= await UserModel.find()
    res.send({msg: allbook})
}

module.exports.bookdata= bookdata
module.exports.getbookdata= getbookdata