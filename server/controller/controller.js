var Userdb = require('../model/model')


exports.create = (req, res) => {

    if (!req.body) {
        res.status(400).send({ message: "Content con not be empty" });
        return;
    }

    console.log(req.body)
        // const user = new Userdb({
        //     name: req.body.name,
        //     email: req.body.email,
        //     gender: req.body.gender,
        //     status: req.body.status

    // })

    // user
    //     .save(user)
    //     .then(data => {
    //         res.send(data)
    //     })
    //     .catch(err => {
    //         res.status(500).send({
    //             message: err.message || "Something Went Wrong"
    //         })
    //     })

}
exports.find = (req, res) => {
    if (req.query.id) {
        const id = req.query.id;
        Userdb.findById(id)
            .then(data => {
                if (!data) {
                    res.status(404).send({ message: "Not Found User With ID" + id })
                } else {
                    res.send(data)
                }

            })
            .catch(err => {
                res.status(500).send({ message: "Error retrieving" })
            })


    } else {
        Userdb.find()
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({ message: err.message || "Something Went Wrong" })
            })

    }



}
exports.update = (req, res) => {
    if (!re.body) {
        return res
            .status(400)
            .send({ message: "Data to update cannot be empty" })
    }

    const id = req.params.id
    Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: "Cannot Update user with ${id}. May be user not found"
                })

            } else {

                res.send(data)
            }

        })
        .catch(err => {
            res.status(500).send({ message: "Something Went Wrong" })

        })

}
exports.delete = (req, res) => {

}