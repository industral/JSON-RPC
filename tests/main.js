const URL = 'https://eth.gateway.whoisens.org';

describe('Main', () => {
  const json_rpc = new JSON_RPC({url: URL});

  it('passing one call without id get by index', async () => {
    const results = await json_rpc.calls([{
      method: 'net_version',
      params: {}
    }]);

    const result = results.get();

    expect(result.error).to.be.undefined;
    expect(result.result).to.equal('1');
  });

  it('passing one call with id get by index', async () => {
    const id = new Date().valueOf();

    const results = await json_rpc.calls([{
      id,
      method: 'net_version',
      params: {}
    }]);

    const result = results.get();

    expect(result.error).to.be.undefined;
    expect(result.result).to.equal('1');
  });

  it('passing one call with id get by ID', async () => {
    const id = new Date().valueOf();

    const results = await json_rpc.calls([{
      id,
      method: 'net_version',
      params: {}
    }]);

    const result = results.getById(id);

    expect(result.error).to.be.undefined;
    expect(result.result).to.equal('1');
  });

  it('passing 2 calls without id get by indexes', async () => {
    const results = await json_rpc.calls([{
      method: 'net_version',
      params: {}
    }, {
      method: 'web3_sha3',
      params: ["0x68656c6c6f21"]
    }]);

    const result1 = results.get(0);
    const result2 = results.get(1);

    expect(result1.error).to.be.undefined;
    expect(result1.result).to.equal('1');
    expect(result2.result).to.equal('0x96b8d442f4c09a08d266bf37b18219465cfb341c1b3ab9792a6103a93583fdf7');

    expect(result1.id).not.to.equal(result2.id);
  });

  it('passing 2 calls without id get by id', async () => {
    const id1 = new Date().valueOf();
    const id2 = new Date().valueOf() + 1;

    const results = await json_rpc.calls([{
      id: id1,
      method: 'net_version',
      params: {}
    }, {
      id: id2,
      method: 'web3_sha3',
      params: ["0x68656c6c6f21"]
    }]);

    const result2 = results.getById(id2);
    const result1 = results.getById(id1);

    expect(result1.error).to.be.undefined;
    expect(result1.result).to.equal('1');
    expect(result2.result).to.equal('0x96b8d442f4c09a08d266bf37b18219465cfb341c1b3ab9792a6103a93583fdf7');

    expect(result1.id).not.to.equal(result2.id);
  });
});
