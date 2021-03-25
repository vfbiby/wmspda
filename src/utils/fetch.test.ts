import 'react-native';
global.fetch = require('node-fetch');
import unmock, {u} from 'unmock'; // ES6

describe('Fetch', () => {
  beforeAll(() => {
    unmock.on();
    unmock
      .nock('http://t.test.com')
      .get('/api/users')
      .reply(200, [{name: 'vf'}]);
  }); // Activate unmock to start intercepting traffic

  afterEach(() => {
    unmock.off();
  });

  beforeEach(() => {
    unmock.reset();
  });

  it('should fetch things from server', async () => {
    const res = await fetch('http://t.test.com/api/users').then((res) =>
      res.json(),
    );
    expect(res).toEqual([{name: 'vf'}]);
  });
});
