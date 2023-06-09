const jsonContatos = require('./contatos.js')

const getPerfilId = (id) => {

    let jsonPerfil = {}
    let status = false

    jsonContatos.contatos["whats-users"].forEach(contatosDados => {
        if (contatosDados.id == id) {
            jsonPerfil = contatosDados.contacts
            status = true
        }
    })

    if (status == true) {
        return jsonPerfil
    } else {
        return status
    }

}

const getPerfilTelefone = (telefone) => {

    let jsonPerfil = {}
    let status = false

    jsonContatos.contatos["whats-users"].forEach(contatosDados => {
        if (contatosDados.number == telefone) {
            jsonPerfil = contatosDados.contacts
            status = true
        }
    })

    if (status == true) {
        return jsonPerfil
    } else {
        return status
    }

}

const getImagePerfil = (telefone) => {

    let jsonPerfil = {}
    let status = false

    jsonContatos.contatos["whats-users"].forEach(perfilDados => {
        if (perfilDados.number == telefone) {
            jsonPerfil = perfilDados['profile-image']
            status = true   
        }
    })

    if (status == true) {
        return jsonPerfil
    } else {
        return status
    }

}

module.exports = {
    getPerfilId,
    getPerfilTelefone,
    getImagePerfil
}