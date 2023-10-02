

const chai = require('chai');
const expect = chai.expect;
const request = require('supertest');

const WorkFlowModel = require('../models/workFlowModels')


let app = require('../app');


  describe('Test /workflow', () => {

    describe('workflow check on /sync', () => {
        let hash, sampleItemVal;
        const newDocument = new WorkFlowModel({
          name: 'Your Name',
          conditions: [{ type: 'condition_type', value: 'condition_value' }],
          actions: [{ type: 'action_type', value: 'action_value' }],
          start: 'START',
          end: 'END',
        });
        newDocument.save()
        .then((result) => {
          console.log('Document saved:', result);
        })
        .catch((error) => {
          console.error('Error saving document:', error);
        });

        // beforeEach(() => {
        //     hash = '1234567891';
        //     sampleItemVal = {
        //       name: 'sample item',
        //       init: '10',
        //       end: "5",
        //       action: "5",
        //       conditionals:[{name:'test'}]
        //     };
        // });

        it('GET by id /:hash should successfully return workflow', (done) => {
            request(app).get(`/workflow/${hash}`)
              .expect(200)
              .end((err, response) => {
                expect(response.body).to.have.property('message').to.equal('workflow read successfully!');
                expect(response.body).to.have.property('data')
                expect(response.body).to.have.property('status').to.equal(200)
                done(err); // err is null in success scenario
              });
          });

        it('GET should successfully return all workflows', (done) => {
            request(app).get(`/workflows`)
              .expect(200)
              .end((err, response) => {
                expect(response.body).to.have.property('message').to.equal('workflow read successfully!');
                expect(response.body).to.have.property('data')
                expect(response.body).to.have.property('status').to.equal(200)
                done(err); // err is null in success scenario
              });
          });

        it('create should successfully create workflows', (done) => {
            request(app).post(`/workflow`)
              .send(sampleItemVal)
              .expect(200)
              .end((err, response) => {
                expect(response.body).to.have.property('message').to.equal('workflow created successfully!');
                expect(response.body).to.have.property('data')
                expect(response.body).to.have.property('status').to.equal(201)
                done(err); // err is null in success scenario
              });
          });
    });
 
    
  });

