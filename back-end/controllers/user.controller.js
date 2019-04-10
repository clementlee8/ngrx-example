const userModel = require('./../models/user.model');

module.exports = {
    getAll: (req, res) => {
        userModel.getListUser().then(data => {
            return res.send(data);
        });
    },

    addNew: (req, res) => {
        userModel.addNewUser(req.body).then((data) => {
            if(data.serverStatus == 2) {
                return res.send({ status: 200, message: "Successfully" });
            }

            return res.send({ status: 404, message: "Has an problem" });
        });
    },

    update: (req, res) => {
        userModel.updateUser(req.body.data, req.params.id).then(data => {
            if(!data) {
                return res.send({ message: "Can't update", status: 404 });
            }

            return res.send({ message: "Successfully", status: 200 });
        })
    },

    delete: (req, res) => {
        userModel.deleteUser(req.params.id).then(data => {
            res.send(data);
        })
    }
}