var allProducts = [];
var totalClicks = 0;
var productNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'sweepers', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

function Product(name, path) {
  this.name = name;
  this.filePath = filePath;
  allProducts.push(this);
  // TODO: Build your constructor and necessary properties.
}
var img = new Array(21);
for(var i = 0; i < 21; i++){
  img[i] = new Image ();
  img[i].src = 'img/' + imageName[i] + '.jpg'; }

  var myImage = new Image(100, 200);
  myImage.src = 'picture.jpg';
  document.body.appendChild(myImage);
// TODO: Don't forget to build your objects. How can you do this withough having to write 14 lines of `new Product(., ., .)`?

var productRank = {
  // TODO: All the properties of the object! What do you think you need? Try to write one piece at a time and make sure it does what you want before writing a little more.
  // NOTE: A-C-P reminder... Make very intentional and iterative changes to your code, and then A-C-P.

  getRandomIndex: function() {
    var productNames = Math.floor(Math.random()*productNames.length);
  },


  displayImages: function() {

    // TODO: Hmm... what's going to happen here?
  },

  tallyClicks: function(elementId) {
    totalClicks++;
        window.document.ButtonForm.myButton.value= 'Clicked ' + totalClicks + " times";
  },

  displayResults: function() {
    // TODO: Hmm... what's going to happen here?
  },

  showButton: function() {
    // TODO: Hmm... what's going to happen here?
  },

  onClick: function() {
    // TODO: Hmm... what's going to happen here?
};

// productRank.imageEls.addEventListener('click', productRank.onClick);
// productRank.displayImages();
