import React from "react";

function Results({books}) {
//   let bookDetails;
//   for (var i in books)
//     bookDetails.push({
//       title: books[i].volumeInfo.title,
//       author: books[i].volumeInfo.authors[0],
//       publisher: books[i].volumeInfo.publisher,
//       description: books[i].volumeInfo.description,
//       pageCount: books[i].volumeInfo.pageCount,
//     });
  return (
    <div>
      <ul>
        {/* {bookDetails.map((book) => (
          <li>
            {book.title}
            <strong>{book.pageCount}</strong>
          </li>
        ))} */}
        <li>{books.items[0].volumeInfo.title}</li>
        <li>list item two</li>
      </ul>
    </div>
  );
}
//=================================================
// export async function getServerSideProps() {
//   const res = await fetch(
//     `https://www.googleapis.com/books/v1/volumes?q=${input}`
//   );
//   const data = await res.json();

//   return { props: { books: data.items } };
// }
//=================================================
export default Results;
