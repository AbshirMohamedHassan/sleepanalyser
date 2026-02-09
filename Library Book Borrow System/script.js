const studentName = document.getElementById("studentName");
const bookTitle = document.getElementById("bookTitle");
const borrowBtn = document.getElementById("borrowBtn");
const message = document.getElementById("message");
const bookList = document.getElementById("bookList");
const totalCount = document.getElementById("totalCount");

let borrowedBooks = [];

borrowBtn.addEventListener("click", borrowBook);

function borrowBook() {
    message.textContent = "";

    const name = studentName.value.trim();
    const book = bookTitle.value.trim();

    // VALIDATION
    if (name.length < 3) {
        message.textContent = "Student name must be at least 3 characters.";
        return;
    }

    if (book === "") {
        message.textContent = "Book title cannot be empty.";
        return;
    }

    const studentBooks = borrowedBooks.filter(
        item => item.student === name
    );

    if (studentBooks.length >= 3) {
        message.textContent = "This student has already borrowed 3 books.";
        return;
    }

    // ADD BOOK
    borrowedBooks.push({
        student: name,
        book: book
    });

    displayBooks();

    // RESET INPUTS
    studentName.value = "";
    bookTitle.value = "";
}

function displayBooks() {
    bookList.innerHTML = "";

    borrowedBooks.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.student} borrowed "${item.book}"`;
        bookList.appendChild(li);
    });

    totalCount.textContent = borrowedBooks.length;
}
