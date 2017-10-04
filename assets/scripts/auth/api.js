'use strict'
const app = require('../app.js')

const signUp = function (data) {
  return $.ajax({
    url: app.host + 'sign-up/',
    method: 'POST',
    data
    // data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: app.host + 'sign-in/',
    method: 'POST',
    data
    // data: data
  })
}

const changePassword = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: app.host + 'change-password/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data
  })
}

const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: app.host + 'sign-out/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut
}
