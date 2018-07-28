import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MessageService } from './message.service';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const usersQuery = gql`
  {
    users {
      id,
      username
    }
  }
`;

const userQuery = gql`
  query getUser($userID: ID!) {
    user(id: $userID) {
      id,
      username
    }
  }
`;

const updateUserMutation = gql`
  mutation updateUser($userID: ID!, $userName: String!) {
    updateUser(id: $userID, username: $userName) {
      id,
      username
    }
  }
`;

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private messageService: MessageService, private apollo: Apollo) {
  }

  getUsers(): Observable<User[]> {
    // TODO: send the message _after_ fetching the usesrs
    this.messageService.add('UserService: fetched usesrs');
    return this.apollo
      .watchQuery({query: usersQuery})
      .valueChanges.pipe<User[]>(
        map(({data}: {data: {users: object[]}}) => data.users)
      );
  }
  getUser(id: string): Observable<User> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`UserService: fetched user id=${id}`);
    return this.apollo
      .watchQuery({
        query: userQuery,
        variables: {
          userID: id
        }
      })
      .valueChanges.pipe<User>(
        map(({data}: {data: {user: object}}) => data.user)
      );
  }

  updateUser(user: User): Observable<any> {
    this.messageService.add(`UserService: updated user id=${user.id}`);
    return this.apollo
      .mutate({
        mutation: updateUserMutation,
        variables: {
          userID: user.id,
          userName: user.username
        }
      });
  }
}
