const content = document.querySelector('.banner-content');

const tl = new TimelineMax();

tl.fromTo(content, 2, {opacity: 0, x: '-100'}, {opacity: 1, x:'0'});  


(function() {
  const buttons = document.querySelectorAll('.order-select-btn');
  const storeItems = document.querySelectorAll('.store-item');
  console.log(buttons);
  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault()
      const filter = e.target.dataset.filter

      storeItems.forEach((item) => {  
          if(item.classList.contains(filter)){
            item.style.display = 'block'
          } else {
            item.style.display = 'none'
          }
      })
    })
  })
}) ();