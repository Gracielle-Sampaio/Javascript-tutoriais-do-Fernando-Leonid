const turnOpen = document.getElementById ('turnOpen');
const turnClosed = document.getElementById ('turnClosed');
const book = document.getElementById ('book');

function bookOpen (){
  book.src = 'imagens/livroaberto.png';
}
function bookClosed (){
  book.src = 'imagens/livroaberto.png';
} 
 

turnOpen.addEventListener (' click', bookOpen)
turnClosed.addEventListener ('click', bookClosed)