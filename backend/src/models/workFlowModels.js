const mongoose = require('mongoose')

const Comment = mongoose.model(
  "Comment",
  new mongoose.Schema({
    username: String,
    text: String,
    createdAt: Date
  })
);

const Tutorial = mongoose.model(
  "Tutorial",
  new mongoose.Schema({
    title: String,
    author: String,
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
      }
    ]
  })
);

const workflowSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  init: {
    type: String,
    require:false
  },
  end: {
    type: String,
    require:false
  },
  conditionals: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Conditional'
    }
  ],
  action: {
    type: String,
    require:false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }

})

const ConditionalSchema = mongoose.Schema({
  _workflow: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Workflow' },
  name: String
})

const ConditionalModel = mongoose.model('Conditional', ConditionalSchema)
const WorkFlowModel = mongoose.model('Workflow', workflowSchema)

module.exports = { ConditionalModel, WorkFlowModel, Tutorial}

