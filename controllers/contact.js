const contact = require("../contacts")

function getContacts() {
    return contact
}

function addContact(name, email, phone) {
    contact.push({
        id: contact[contact.length - 1].id + 1,
        name,
        email,
        phone
    })

    return {
        status: 201,
        message: "contact successfully added"
    }
}

function deleteContact(id) {
    const index = contact.findIndex(contact => contact.id === Number(id));

    if (index == -1) {
        return {
            status: 404,
            message: "contact not found"
        }
    }

    contact.splice(index, 1)

    return {
        status: 200,
        message: "contact successfully deleted"
    }
}

module.exports = {getContacts, addContact, deleteContact}