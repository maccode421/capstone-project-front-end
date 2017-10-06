'use strict'

// const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api.js')
const ui = require('./ui.js')

const onGetVehicles = function (event) {
  event.preventDefault()
  console.log('onGetVehicles ran')
  // const data = getFormFields(event.target)
  api.getVehicles()
    .then(ui.onGetVehiclesSuccess)
    .catch(ui.onGetVehiclesFailure)
}

const onGetUserVehicles = function (event) {
  event.preventDefault()
  console.log('onGetUserVehicles ran')
  // const data = getFormFields(this)
  api.getUserVehicles()
    .then(ui.onGetUserVehiclesSuccess)
    .catch(ui.onGetUserVehiclesFailure)
}

const onCreateVehicle = function (event) {
  event.preventDefault()
  console.log('onCreateVehicle ran')
  // const data = getFormFields(event.target)
  api.createVehicle()
    .then(ui.onCreateVehicleSuccess)
    .catch(ui.onCreateVehicleFailure)
}

const onDeleteVehicle = function (event) {
  event.preventDefault()
  console.log('onDeleteVehicle ran')
  api.deleteVehicle()
    .then(ui.onDeleteVehicleSuccess)
    .catch(ui.onDeleteVehicleFailure)
}

const onUpdateVehicle = function (event) {
  event.preventDefault()
  console.log('onUpdateVehicle ran')
  // const data = getFormFields(event.target)
  api.updateVehicle()
    .then(ui.onUpdateVehicleSuccess)
    .catch(ui.onUpdateVehicleFailure)
}

// const addHandlers = () => {
//   $('#getCars').on('click', onGetVehicles)
//   $('#get-vehicles').on('click', onGetVehicles)
//   // put in auth UI to prompt on sign in
//   $('#get-user-vehicles').on('submit', onGetUserVehicles)
//   $('#create-vehicle').on('submit', onCreateVehicle)
//   $('#delete-vehicle').on('submit', onDeleteVehicle)
//   $('#update-vehicle').on('submit', onUpdateVehicle)
// }
const addHandlers = () => {
  $('#getCars').on('click', onGetVehicles)
  $('#get-vehicles').on('click', onGetVehicles)
  // put in auth UI to prompt on sign in
  $('#get-user-vehicles').on('submit', onGetUserVehicles)
  $('#create-vehicle').on('submit', onCreateVehicle)
  $('#delete-vehicle').on('submit', onDeleteVehicle)
  $('#update-vehicle').on('submit', onUpdateVehicle)
}

module.exports = {
  addHandlers
}
