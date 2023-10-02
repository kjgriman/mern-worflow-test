const  WorkFlowModel  = require('../models/workFlowModels')

module.exports.getWorkflow = async (_req, res) => {
    try {
        const workflows = await WorkFlowModel.find()
        res.json({
            data: workflows,
            status: 200,
            message: 'workflow read successfully!'
        });
    } catch (err) {
        res.json({
            data: null,
            status: err.code || err.statusCode || 500,
            message: err.message || 'Something went wrong while reading workflow from DB!'
        });
        
    }
}

module.exports.getWorkflowById = async (req, res) => {
    try {
        const { id } = req.params
        const workflow = await WorkFlowModel.findById(id)
        res.json({
            data: workflow,
            status: 200,
            message: 'workflow read successfully!'
        });
    } catch (err) {
        res.json({
            data: null,
            status: err.code || err.statusCode || 500,
            message: err.message || 'Something went wrong while reading workflow from DB!'
        });
    }
 
}

module.exports.createWorkflow = async (req, res) => {
  const workflow = req.body
  let arrCond = new Array()
  arrCond = [{ type: 'condition_type', value: 'condition_value' }]
  try {

    const data = new WorkFlowModel(workflow);
    const result = await data.save();
    res.json({
      data: result,
      status: 201,
      message: 'workflow created successfully!'
  });
  } catch (err) {
    console.log(err);
    res.json({
      data: null,
      status: err.code || err.statusCode || 500,
      message: err.message || 'Something went wrong while created workflow from DB!'
  });
  }
    
    
}

module.exports.updateWorkflow = (req, res) => {
  const { id } = req.params
  const workflow = req.body
  WorkFlowModel.findByIdAndUpdate(
    { _id: id },
    {
      $set: workflow
    },
    { new: true } )
    .then((data) => {
      console.log('updated workflow',data)
      res.json({
        data: data,
        status: 200,
        message: 'workflow updated successfully!'
    });
    })
    .catch((err) => {
      console.log('error updated workflow', err)
      res.json({
        data: null,
        status: err.code || err.statusCode || 500,
        message: err.message || 'Something went wrong while updated workflow from DB!'
    });
    })
}

module.exports.deleteWorkflow = (req, res) => {
  const { id } = req.params
  const workflow = req.body
  WorkFlowModel.findByIdAndDelete(id, { workflow })
    .then((data) => {
      console.log('delete workflow')
      res.json({
        data,
        status: 200,
        message: 'workflow delete successfully!'
    });
    })
    .catch((err) => {
      console.log('error delete workflow', err)
      res.json({
        data: null,
        status: err.code || err.statusCode || 500,
        message: err.message || 'Something went wrong while delete workflow from DB!'
    });
    })
}
