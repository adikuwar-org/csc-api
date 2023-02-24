import { Query, Resolver } from '@nestjs/graphql';
import { User } from './models/users.model';

@Resolver((of) => User)
export class UsersResolver {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  @Query((returns) => [User])
  async getUsers() {
    return [];
  }
}
