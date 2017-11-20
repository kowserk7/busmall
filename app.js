var allProducts = [];
var productNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
function Product(name, path) {
  // TODO: Build your constructor and necessary properties.
}

// TODO: Don't forget to build your objects. How can you do this withough having to write 14 lines of `new Product(., ., .)`?

var productRank = {
  // TODO: All the properties of the object! What do you think you need? Try to write one piece at a time and make sure it does what you want before writing a little more.
  // NOTE: A-C-P reminder... Make very intentional and iterative changes to your code, and then A-C-P.

  getRandomIndex: function() {
    var randomAnswer = productNames[Math.floor(Math.random() * productNames.length)];
  },

  displayImages: function() {
    // TODO: Hmm... what's going to happen here?
  },

  tallyClicks: function(elementId) {
    var onClick = (function(){
    var count = 0, timer;
    return function(){
      count++;
      clearTimeout(timer);
      timer = setTimeout(function(){count = 0}, 25);
      // do whatever after 3 clicks
      if( count > 2 )
        document.body.classList.toggle('mode');
    }
  })();
  },

  displayResults: function() {
    // TODO: Hmm... what's going to happen here?
  },

  showButton: function() {
    // TODO: Hmm... what's going to happen here?
  },

  onClick: function() {
    // TODO: Hmm... what's going to happen here?
}

productRank.imageEls.addEventListener('click', productRank.onClick);
productRank.displayImages();
Add Comment
