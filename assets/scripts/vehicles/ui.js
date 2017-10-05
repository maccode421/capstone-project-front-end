'use strict'

const app = require('../app.js')

const onGetVehiclesSuccess = function (data) {
  console.log('getVehiclesSuccess ran')
  $('#message').text('get vehicles success')
  console.log(data)
}

const onGetVehiclesFailure = function (error) {
  $('#message').text('Error getting vehicles')
  console.error(error)
}

const onGetUserVehiclesSuccess = function (data) {
  app.user = data.user
  $('#message').text('get user vehicle success')
  console.log('get user vehicle ran. data is :', data)
}

const onGetUserVehiclesFailure = function (error) {
  $('#message').text('Error getting user vehicle')
  console.log('get user vehicle failure ran. error is :', error)
}

const onCreateVehicleSuccess = function (data) {
  $('#message').text('create vehicle success')
  console.log('create vehicle success ran. and nothing was returned')
}

const onCreateVehicleFailure = function (error) {
  $('#message').text('create vehicle failure')
  console.log('create vehicle success ran. error is :', error)
}

const onDeleteVehicleSuccess = function () {
  app.user = null
  $('#message').text('delete not successful')
  console.log('delete success ran. and nothing was returned')
}

const onDeleteVehicleFailure = function (error) {
  $('#message').text('Error on delete')
  console.log('delete failure ran. error is :', error)
}

const onUpdateVehicleSuccess = function () {
  $('#message').text('update vehicle successful')
  console.log('update vehicle success ran. and nothing was returned')
}

const onUpdateVehicleFailure = function (error) {
  $('#message').text('Error on update')
  console.log('update vehicle failure ran. error is :', error)
}

module.exports = {
  onGetVehiclesSuccess,
  onGetVehiclesFailure,
  onGetUserVehiclesSuccess,
  onGetUserVehiclesFailure,
  onCreateVehicleSuccess,
  onCreateVehicleFailure,
  onDeleteVehicleSuccess,
  onDeleteVehicleFailure,
  onUpdateVehicleSuccess,
  onUpdateVehicleFailure
}
