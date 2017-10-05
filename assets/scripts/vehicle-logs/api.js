'user strict'

const app = require('../app.js')

const getVehicleLogs = function (data) {
  return $.ajax({
    url: app.host + 'vehicles/',
    method: 'GET'
  })
}

const getUserVehicleLogs = function (data) {
  return $.ajax({
    url: app.host + 'vehicles/' + app.user.id,
    method: 'GET'
  })
}

const createVehicleLog = function (data) {
  return $.ajax({
    url: app.host + 'vehicles/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: {
      'vehicle_log': {
        'vehicle_id': app.user.id,
        'mileage': data.credentials.mileage,
        'gas_price': data.credentials.gas_price,
        'repair_type': data.credentials.repair_type,
        'total_price': data.credentials.total_price,
        'date': data.credentials.date,
        'receipt': data.credentials.receipt
      }
    }
  })
}

const updateVehicleLog = function (data) {
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

const deleteVehicleLog = function (data) {
  return $.ajax({
    url: app.host + 'vehicles/' + data,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

module.exports = {
  getVehicleLogs,
  getUserVehicleLogs,
  createVehicleLog,
  updateVehicleLog,
  deleteVehicleLog
}
