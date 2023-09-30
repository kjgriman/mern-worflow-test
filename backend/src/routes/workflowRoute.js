const { Router } = require('express')
const router = Router()
const {
  getWorkflow,
  createWorkflow,
  updateWorkflow,
  deleteWorkflow,
  getWorkflowById
} = require('../controllers/workFlowController')

router.get('/workflows', getWorkflow)
router.get('/workflow/:id', getWorkflowById)
router.post('/workflow', createWorkflow)
router.put('/workflow/:id', updateWorkflow)
router.delete('/workflow/:id', deleteWorkflow)

module.exports = router
