import books from "../assets/data/books.json";
import BookItem from "./BookItem";

function BookBox() {
    const listBooks = books.books.map((book) => {
        return (<BookItem key={book.id} name={book.BookName} author={book.Author} image={book.Image} />)
    }
    )
    return (
        <div className="book-list">
            {listBooks}
            
           
        </div>

    )
};





export default BookBox;