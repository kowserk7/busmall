var allProducts = [];
var totalClicks = 0;
function Product(name, path) {
  this.name = name;
  this.filePath = filePath;
  this.clicks = 0
  allProducts.push(this);
  // TODO: Build your constructor and necessary properties.
}
var bagImg = new Product('bag', 'img/bag.jpg');
var bananaImg = new Product('banana', 'img/banana.jpg');
var bathroomImg = new Product('bathroom', 'img/bathroom.jpg');
var bootsImg = new Product('boots', 'img/boots.jpg');
var breakfastImg = new Product('breakfast', 'img/breakfast.jpg');
var bubblegumImg = new Product('bubblegum', 'img/bubblegum.jpg');
var chairImg = new Product('chair', 'img/chair.jpg');
var cthulhuImg = new Product('cthulhu', 'img/cthulhu.jpg');
var dogduckImg = new Product('dog-duck', 'img/dog-duck.jpg');
var dragonImg = new Product('dragon', 'img/dragon.jpg');
var penImg = new Product('pen', 'img/pen.jpg');
var petsweepImg = new Product('pet-sweep', 'img/pet-sweep.jpg');
var scissorsImg = new Product('scissors', 'img/scissors.jpg');
var sharkImg = new Product('shark', 'img/shark.jpg');
var sweepImg = new Product('sweep', 'img/sweep.jpg');
var sweepersImg = new Product ('sweepers', 'img/sweepers.jpg')
var tauntaunImg = new Product('tauntaun', 'img/tauntaun.jpg');
var unicornImg = new Product('unicorn', 'img/unicorn.jpg');
var usbImg = new Product('usb', 'img/usb.jpg');
var watercanImg = new Product('water-can', 'img/water-can.jpg');
var wineglassImg = new Product('wine-glass', 'img/wine-glass.jpg');
// TODO: Don't forget to build your objects. How can you do this withough having to write 14 lines of `new Product(., ., .)`?

var productRank = {
  // TODO: All the properties of the object! What do you think you need? Try to write one piece at a time and make sure it does what you want before writing a little more.
  // NOTE: A-C-P reminder... Make very intentional and iterative changes to your code, and then A-C-P.

  getRandomIndex: function(arr, slice) {
  
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

// productRank.imageEls.addEventListener('click', productRank.onClick);
// productRank.displayImages();
