import React, { useContext, useState } from "react";
import { BookContext } from "../context/BookContext";
const BookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const { dispatch } = useContext(BookContext);
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({
            type: "ADD_BOOK",
            book: {
              title,
              author,
            },
          });
          setTitle("");
          setAuthor("");
        }}
      >
        <input
          type="text"
          placeholder="Add your Book"
          value={title}
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Add Book's author name"
          value={author}
          required
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input type="submit" value="Add Book" />
      </form>
    </div>
  );
};

export default BookForm;
