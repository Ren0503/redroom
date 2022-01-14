import { Test, TestingModule } from '@nestjs/testing';
import { DiscoverResolver } from './discover.resolver';

describe('DiscoverResolver', () => {
  let resolver: DiscoverResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DiscoverResolver],
    }).compile();

    resolver = module.get<DiscoverResolver>(DiscoverResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
