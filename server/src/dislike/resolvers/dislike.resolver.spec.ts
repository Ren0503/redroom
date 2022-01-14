import { Test, TestingModule } from '@nestjs/testing';
import { DislikeResolver } from './dislike.resolver';

describe('DislikeResolver', () => {
  let resolver: DislikeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DislikeResolver],
    }).compile();

    resolver = module.get<DislikeResolver>(DislikeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
