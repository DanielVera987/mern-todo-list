import { server } from '../../../test/setup';

describe('get /v1/users/', () => {
  test('should return status code 200', () => {
    return server.get('/v1/users/').expect(200);
  });
});
