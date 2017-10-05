'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api.js')
const ui = require('./ui.js')

const onGetVehicleLogs = function (event) {
  event.preventDefault()
  console.log('onGetVehicleLogs ran')

  const data = getFormFields(event.target)
  api.getVehicleLogs(data)
    .then(ui.onGetVehicleLogsSuccess)
    .catch(ui.onGetVehicleLogsFailure)
}

const onGetUserVehicleLogs = function (event) {
  event.preventDefault()
  console.log('onGetUserVehicleLogs ran')

  const data = getFormFields(this)
  api.getUserVehicleLogs(data)
    .then(ui.onGetUserVehicleLogsSuccess)
    .catch(ui.onGetUserVehicleLogsFailure)
}

const onCreateVehicleLog = function (event) {
  event.preventDefault()
  console.log('onCreateVehicleLog ran')

  const data = getFormFields(event.target)
  api.createVehicleLog(data)
    .then(ui.onCreateVehicleLogSuccess)
    .catch(ui.onCreateVehicleLogFailure)
}

const onDeleteVehicleLog = function (event) {
  event.preventDefault()
  console.log('onDeleteVehicleLog ran')

  api.deleteVehicleLog()
    .then(ui.onDeleteVehicleLogSuccess)
    .catch(ui.onDeleteVehicleLogFailure)
}

const onUpdateVehicleLog = function (event) {
  event.preventDefault()
  console.log('onUpdateVehicleLog ran')

  const data = getFormFields(event.target)
  api.updateVehicleLog(data)
    .then(ui.onUpdateVehicleLogSuccess)
    .catch(ui.onUpdateVehicleLogFailure)
}

module.export = {
  onGetVehicleLogs,
  onGetUserVehicleLogs,
  onCreateVehicleLog,
  onDeleteVehicleLog,
  onUpdateVehicleLog
}
