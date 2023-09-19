let books = [];


function go() {
    for (let i = 0; i < 5; i++) {
        books.push({
            title: 'book_' + books.length,
            author: 'author_' + books.length,
            grade: 0,
            id: 'book_' + books.length,
        })
    }
    render();
}


function render() {
    for (book of books) {
        document.getElementById('books').innerHTML += `
        <div class="book">
                <h6>${book.author}</h6>
                <input type="image" src="" alt="add" class="input-image">
                <h5>${book.title}</h5>
                <div class="rating-area">
                    <input type="radio" id="star-5" name="rating" value="5">
                    <label for="star-5" title="Оценка «5»"></label>	
                    <input type="radio" id="star-4" name="rating" value="4">
                    <label for="star-4" title="Оценка «4»"></label>    
                    <input type="radio" id="star-3" name="rating" value="3">
                    <label for="star-3" title="Оценка «3»"></label>  
                    <input type="radio" id="star-2" name="rating" value="2">
                    <label for="star-2" title="Оценка «2»"></label>    
                    <input type="radio" id="star-1" name="rating" value="1">
                    <label for="star-1" title="Оценка «1»"></label>
                    </div>
                    </div>
                    `
    }
}


function search() {

}

function addBook() {

}