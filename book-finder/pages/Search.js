import styles from "../styles/Search.module.css";
import React, { useEffect, useState } from "react";

export default function Search() {
  // console.log(data.items[0].volumeInfo);
  // console.log(data);
  const [books, setBooks] = useState(null);
  const [isEmptyInput, setEmptyInput] = useState(true);
  const [input, setInput] = useState("");

  // useEffect(() => {
    // setBooks(null);
  // },[isEmptyInput]);

  async function onSearchBook(event) {
    setEmptyInput(false);
    event.preventDefault();
    // ======================
    // async function getServerSideProps(context) {                     //if I am sending the input then can we still do Server Side API fetch? ANS- NO
    try {
      const res = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${input}`
      );
      const data = await res.json();
      // return {
      //   props: { data },
      // };
      setBooks(data);
    } catch (err) {
      console.error(err);
    }
    // ======================
    setInput("");
    setEmptyInput(true);
    window.location.href = "/Results";
  }
  console.log(books);

  return (
    <div className={styles.search_container}>
      <form onSubmit={onSearchBook}>
        <input
          className={styles.search_input}
          placeholder="Search Books"
          value={input}
          onInput={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          value="Submit"
          className={`${styles.btn} ${styles.first}`}
        >
          &#x1F50D;
        </button>
      </form>
    </div>
  );
}
// async function getServerSideProps(context) {
// try {
//   const res = await fetch(
//     `https://www.googleapis.com/books/v1/volumes?q=${input}`
//   );
//   const data = await res.json();
//   return {
//     props: { data },
//   };
// console.log(data)
// } catch (err) {
//   console.error(err);
// }
