'use strict';

var allProducts = [];
// var totalClicks = 0;
var productNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'sweepers', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

function Product(name) {
  this.name = name;
  this.path = 'img/' + this.name + '.jpg';
  this.votes = 0;
  this.timeShown = 0;
  allProducts.push(this);
  // TODO: Build your constructor and necessary properties.
}

(function() {
  for (var i in productNames) {
    new Product (productNames[i]);
  }
})();

var tracker {
  imagesEl: document.getElementById('images'),
  resultsEL: document.getElementById('results'),
  clickCount = 0

  imageOne: document.createElement('img'),
  imageTwo: document.createElement('img'),
  imageThree: new Image(),

  getRandomIndex: function () {
    return Math.floor(Math.random() * allProducts.length);
  },

  displayImages: function() {
    var idOne = this.getRandomIndex();
    var idTwo = this.getRandomIndex();
    var idThree = this.getRandomIndex();

    if(idOne === idTwo || idOne === idThree || idTwo === idThree) {
      this.displayImages();
    }
    
    this.imageOne.src = allProducts[idOne].path;
    this.imageTwo.src = allProducts[idTwo].path;
    this.imageThree.src = allProducts[idThree].path;

    imageOne.id = allProducts[idOne].name;
    imageTwo.id = allProducts[idTwo].name;
    imageThree.id = allProducts[idThree].name;


    this.imagesEl.appendChild(this.imageOne);
    this.imagesEl.appendChild(this.imageTwo);
    this.imagesEl.appendChild(this.imageThree);
  },

  onClick: function (event) {
    console.log(event.target.src);
    if (event.target.id === 'images'){
      console.log('didnt click an image');
    } return;
    else{
      tracker.clickCount++;

      for (var i in allProducts) {

      }
      tracker.displayImages();
    }
  }
};

tracker.imageEl.addEventListener('click', tracker.onClick);
tracker.displayImages();
//
// var img = new Array(21);
// for(var i = 0; i < 21; i++){
//   img[i] = new Image ();
//   img[i].src = 'img/' + imageName[i] + '.jpg'; }
//
//   var myImage = new Image(100, 200);
//   myImage.src = 'picture.jpg';
//   document.body.appendChild(myImage);
// // TODO: Don't forget to build your objects. How can you do this withough having to write 14 lines of `new Product(., ., .)`?
//
// var productRank = {
//   // TODO: All the properties of the object! What do you think you need? Try to write one piece at a time and make sure it does what you want before writing a little more.
//   // NOTE: A-C-P reminder... Make very intentional and iterative changes to your code, and then A-C-P.
//
//   getRandomIndex: function() {
//     var productNames = Math.floor(Math.random()*productNames.length);
//   },
//
//
//   displayImages: function() {
//
//     // TODO: Hmm... what's going to happen here?
//   },
//
//   tallyClicks: function(elementId) {
//     totalClicks++;
//         window.document.ButtonForm.myButton.value= 'Clicked ' + totalClicks + " times";
//   },
//
//   displayResults: function() {
//     // TODO: Hmm... what's going to happen here?
//   },
//
//   showButton: function() {
//     // TODO: Hmm... what's going to happen here?
//   },
//
//   onClick: function() {
//     // TODO: Hmm... what's going to happen here?
// };
//
// // productRank.imageEls.addEventListener('click', productRank.onClick);
// // productRank.displayImages();
