const table = 'users';
module.exports = {
    getListUser: (offset = 0, limit = 10) => {
        return new Promise((resolve, reject) => {
            const query = `SELECT * FROM ${ table } LIMIT ${ limit } OFFSET ${ offset }`;
            db.query(query, (err, result) => {
                if(err) {
                    return reject(err);
                }
                
                return resolve(result);
            });
        })
    },

    addNewUser: (data) => {
        return new Promise((resolve, reject) => {
            const query = `INSERT INTO ${ table }(name, email, phone) VALUES (?,?,?)`;
            db.query(query, [data.name, data.email, data.phone], (err, result) => {
                if(err) {
                    return reject(err);
                }

                return resolve(result);
            });
        });
    },

    updateUser: (data, id) => {
        return new Promise((resolve, reject) => {
            const query = `UPDATE users SET name = ?, email = ?, phone = ? WHERE id = ?`;

            db.query(query, [data.name, data.email, data.phone, id], (err, result) => {
                if(err) {
                    return reject(err);
                }
                return resolve(true);
            })
        })
    },

    deleteUser: (id) => {
        return new Promise((resolve, reject) => {
            const query = `DELETE FROM users WHERE id = ?`;

            db.query(query, [id], (err, result) => {
                if(err) {
                    return reject(err);
                }
                
                return resolve(true);
            })
        })
    }
}