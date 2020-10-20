import React, { createContext, useReducer } from "react";
import { bookReducer } from "../reducer/BookReducer";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, dispatch] = useReducer(bookReducer, [
    { title: "name of the wind", author: "patrick rothfus", id: 1 },
    { title: "the final empire", author: "Richard benson", id: 2 },
  ]);
  // Neechay jo functions hai unko dispatch k zarye 1 file mai kardia gya hai,jo bookReducer ki file he

  // const addBook = (title, author) => {
  //   setBooks([...books, { title, author, id: uuid() }]);
  // };

  // const removeBook = (id) => {
  //   setBooks(books.filter((book) => book.id !== id));
  // };
  return (
    <div>
      <BookContext.Provider value={{ books, dispatch }}>
        {props.children}
      </BookContext.Provider>
    </div>
  );
};

export default BookContextProvider;
