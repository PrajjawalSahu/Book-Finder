import styles from "../styles/Search.module.css";
import React, { useState } from "react";

export default function Search({ data }) {
  // console.log(data.items[0].volumeInfo);
  console.log(data);
  const [input, setInput] = useState("");

async function onSearchBook(event) {
    event.preventDefault();
    // ======================
    // async function getServerSideProps(context) {
    // try {
    //   const res = await fetch(
    //     `https://www.googleapis.com/books/v1/volumes?q=${input}`
    //   );
    //   const data = await res.json();
    //   return {
    //     props: { data },
    //   };
    // } catch (err) {
    //   console.error(err);
    // }
// ======================
    setInput("");
  }

  return (
    <div className={styles.search_container}>
      <form onSubmit={onSearchBook}>
        <input
          className={styles.search_input}
          placeholder="Search Books"
          value={input}
          onInput={(e) => setInput(e.target.value)}
        />
        <button type="submit" value="Submit" className={`${styles.btn} ${styles.first}`}>&#x1F50D;</button>
      </form>
    </div>
  );



  }