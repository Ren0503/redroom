import { Query, Resolver } from '@nestjs/graphql';
import { DiscoverService } from '../services/discover.service';

@Resolver()
export class DiscoverResolver {
    constructor(private readonly discoverService: DiscoverService) { }

    @Query('profiles')
    profiles() {
        return this.discoverService.search(1);
    }
}
