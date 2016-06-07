module.exports = require('cqrs-saga').defineSaga({
  name: 'accountCreated',
  containingProperties: ['payload.id'],
  id: 'payload.id',
},
function (evt, saga, callback) {
    var cmd = {
        command: 'createOrder',
        payload: {
            text : 'order_'+ evt.payload.email,
            userId: evt.payload.id
        },
        meta: evt.meta 
    };

    saga.addCommandToSend(cmd);
    saga.commit(callback);
});
