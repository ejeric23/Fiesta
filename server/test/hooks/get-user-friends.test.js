const assert = require('assert');
const feathers = require('@feathersjs/feathers');
const getUserFriends = require('../../src/hooks/get-user-friends');

describe('\'get-user-friends\' hook', () => {
  let app;

  beforeEach(() => {
    app = feathers();

    app.use('/dummy', {
      async get(id) {
        return { id };
      }
    });

    app.service('dummy').hooks({
      after: getUserFriends()
    });
  });

  it('runs the hook', async () => {
    const result = await app.service('dummy').get('test');

    assert.deepEqual(result, { id: 'test' });
  });
});
