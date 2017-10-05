'user strict'

const app = require('../app.js')

const getVehicles = function (data) {
  return $.ajax({
    url: app.host + 'vehicles/',
    method: 'GET'
  })
}

const getUserVehicles = function (data) {
  return $.ajax({
    url: app.host + 'vehicles/' + app.user.id,
    method: 'GET'
  })
}

const createVehicle = function (data) {
  return $.ajax({
    url: app.host + 'vehicles/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: {
      'vehicle': {
        'user_id': app.user.id,
        'make': data.credentials.make,
        'model': data.credentials.model,
        'year': data.credentials.year,
        'mileage': data.credentials.mileage
      }
    }
  })
}

const updateVehicle = function (data) {
  return $.ajax({
    url: app.host + 'vehicles/' + app.user.id + '/' + data.credentials._id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data
    // data: data
  })
}

const deleteVehicle = function (data) {
  return $.ajax({
    url: app.host + 'vehicles/' + data,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

module.exports = {
  getVehicles,
  getUserVehicles,
  createVehicle,
  updateVehicle,
  deleteVehicle
}
