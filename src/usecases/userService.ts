import type { User } from '../entities/user';
import type { UserRepository } from '../repositories/userRepository';

export type UserService = {
  getUserInfo(): Promise<User>;
};

export const getUserService = (userRepository: UserRepository): UserService => {
  return {
    getUserInfo: () => userRepository.getUserInfo(),
  };
};
