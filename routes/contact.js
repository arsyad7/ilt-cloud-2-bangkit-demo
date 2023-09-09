const {getContacts, addContact, deleteContact} = require("../controllers/contact")

module.exports = [
    {
        method: "GET",
        path: "/contacts",
        handler: () => {
            return getContacts()
        }
    },
    {
        method: "POST",
        path: "/contacts",
        handler : (req, res) => {
            const {name, email, phone} = req.payload;

            return addContact(name, email, phone)
        }
    },
    {
        method: "DELETE",
        path:"/contacts/{id}",
        handler: (req, res) => {
            const {id} = req.params;

            return deleteContact(id)
        }
    }
]