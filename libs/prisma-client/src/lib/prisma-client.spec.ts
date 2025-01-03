import { prismaClient } from './prisma-client.module';

describe('prismaClient', () => {
  it('should work', () => {
    expect(prismaClient()).toEqual('prisma-client');
  });
});
