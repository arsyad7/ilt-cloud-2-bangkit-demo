const contacts = require('../contacts');

function getContacts() {
    return contacts
}

function addContact(name, email, phone) {
    if (name === "") {
        return {
            status: 400,
            message: "name is not valid"
        };
    }

    const newId = Number(contacts[contacts.length - 1].id) + 1

    contacts.push({
        id: newId,
        name,
        email,
        phone
    })

    return {
        status: 201,
        message: "contact successfuly added"
    }
}

function deleteContact(id) {
    if (id < 1) {
        return {
            status: 400,
            message: "id is not valid"
        }
    }

    const contactId = contacts.findIndex(contact => contact.id === Number(id))

    if (contactId == -1) {
        return {
            status: 404,
            message: "contact not found"
        }
    }

    contacts.splice(contactId, 1)

    return {
        status: 201,
        message: "contact successfuly deleted"
    }
}

module.exports = { getContacts, addContact, deleteContact };