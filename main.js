const question = document.querySelectorAll('.question');
const answer = document.querySelector('.answer')
const content = document.querySelector('.content');

question.forEach(function(item) {
  item.addEventListener('click', function(e) {
    const target = e.target;
    if(target.classList.contains('question__header')) {
      item.classList.toggle('toggled');
    }
  })
})




