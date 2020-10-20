import uuid from "uuid/dist/v1";
export const bookReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return [
        ...state,
        { title: action.book.title, author: action.book.author, id: uuid() }, // <--- here (book) are comming from bookForm.js where we are passing title and author and here we are updating it
      ];
    case "REMOVE_BOOK":
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};
