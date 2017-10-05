'use strict'

const app = require('../app.js')

const onGetVehicleLogsSuccess = function (data) {
  console.log('getVehicleLogsSuccess ran')
  $('#message').text('get vehicle log success')
  console.log(data)
}

const onGetVehicleLogsFailure = function (error) {
  $('#message').text('Error getting vehicle logs')
  console.error(error)
}

const onGetUserVehicleLogsSuccess = function (data) {
  app.user = data.user
  $('#message').text('get user vehicle logs success')
  console.log('get user vehicle logs ran. data is :', data)
}

const onGetUserVehicleLogsFailure = function (error) {
  $('#message').text('Error getting user vehicle logs')
  console.log('get user vehicle logs failure ran. error is :', error)
}

const onCreateVehicleLogSuccess = function (data) {
  $('#message').text('create vehicle log success')
  console.log('create vehicle log success ran. and nothing was returned')
}

const onCreateVehicleLogFailure = function (error) {
  $('#message').text('create vehicle log failure')
  console.log('create vehicle log success ran. error is :', error)
}

const onDeleteVehicleLogSuccess = function () {
  app.user = null
  $('#message').text('delete not successful')
  console.log('delete success ran. and nothing was returned')
}

const onDeleteVehicleLogFailure = function (error) {
  $('#message').text('Error on delete')
  console.log('delete failure ran. error is :', error)
}

const onUpdateVehicleLogSuccess = function () {
  $('#message').text('update vehicle log successful')
  console.log('update vehicle log success ran. and nothing was returned')
}

const onUpdateVehicleLogFailure = function (error) {
  $('#message').text('Error on update')
  console.log('update vehicle log failure ran. error is :', error)
}

module.exports = {
  onGetVehicleLogsSuccess,
  onGetVehicleLogsFailure,
  onGetUserVehicleLogsSuccess,
  onGetUserVehicleLogsFailure,
  onCreateVehicleLogSuccess,
  onCreateVehicleLogFailure,
  onDeleteVehicleLogSuccess,
  onDeleteVehicleLogFailure,
  onUpdateVehicleLogSuccess,
  onUpdateVehicleLogFailure
}
