import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login(email: String!, password: String!) {
    login(email: email, password: password) {
        user {
            _id: ID
            username: String
            email: String
            bookCount: Integer
            savedBooks: [Book]
        }
        token
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(username: String!, email: String!, password: String!) {
    addProfile(username: username, email: email, password: password) {
      token
      user {
        _id
        name
      }
    }
  }
`;


export const SAVE_BOOK = gql`
  mutation saveBook(book: Book) {
    saveBook(book: book) {
        user {
            _id: ID
            username: String
            email: String
            bookCount: Integer
            savedBooks: [Book]
        }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook(book: Book) {
    removeBook(book: book) {
        user {
            _id: ID
            username: String
            email: String
            bookCount: Integer
            savedBooks: [Book]
        }
    }
  }
`;