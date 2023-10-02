const mongoose = require('mongoose')


const workflowSchema = new mongoose.Schema({
  name: String,
  conditions: [
    {
      type: [{}],
      value: String,
    }
  ],
  edges: [
    {
      type: [{}],
      value: String,
    }
  ],
  actions: [
    {
      type: [{}],
      value: String,
    }
  ],
  start: String, // You can use String for start and end timestamps
  end: String,
});


const WorkFlowModel = mongoose.model('workflow', workflowSchema)

module.exports = WorkFlowModel

