import { User } from './user.interface';

export interface SearchUsersResponse {
  incomplete_results: boolean;
  items: Array<User>;
  total_count: number;
}
