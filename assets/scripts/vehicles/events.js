'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api.js')
const ui = require('./ui.js')

const onGetVehicles = function (event) {
  event.preventDefault()
  console.log('onGetVehicles ran')

  const data = getFormFields(event.target)
  api.getVehicles(data)
    .then(ui.onGetVehiclesSuccess)
    .catch(ui.onGetVehiclesFailure)
}

const onGetUserVehicles = function (event) {
  event.preventDefault()
  console.log('onGetUserVehicles ran')

  const data = getFormFields(this)
  api.getUserVehicles(data)
    .then(ui.onGetUserVehiclesSuccess)
    .catch(ui.onGetUserVehiclesFailure)
}

const onCreateVehicle = function (event) {
  event.preventDefault()
  console.log('onCreateVehicle ran')

  const data = getFormFields(event.target)
  api.createVehicle(data)
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

  const data = getFormFields(event.target)
  api.updateVehicle(data)
    .then(ui.onUpdateVehicleSuccess)
    .catch(ui.onUpdateVehicleFailure)
}

module.export = {
  onGetVehicles,
  onGetUserVehicles,
  onCreateVehicle,
  onDeleteVehicle,
  onUpdateVehicle
}
