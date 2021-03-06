'use strict';

var allProducts = [];
var productNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'sweepers', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

class Product {
  constructor(name) {
    this.name = name;
    this.path = 'img/' + this.name + '.jpg';
    this.votes = 0;
    this.timeShown = 0;
    allProducts.push(this);
  }
}

(function() {
  for (var i in productNames) {
    new Product (productNames[i]);
  }
})();

var tracker =
{
  imagesEl: document.getElementById('images'),
  resultsEL: document.getElementById('results'),
  clickCount: 0,

  imageOne: document.createElement('img'),
  imageTwo: document.createElement('img'),
  imageThree: document.createElement('img'),

  getRandomIndex: function() {
    return Math.floor(Math.random() * allProducts.length);
  },

  displayImages: function() {
    var idOne = this.getRandomIndex();
    var idTwo = this.getRandomIndex();
    var idThree = this.getRandomIndex();

    if(idOne === idTwo || idOne === idThree || idTwo === idThree) {
      this.displayImages();
      return;
    }

    this.imageOne.src = allProducts[idOne].path;
    this.imageTwo.src = allProducts[idTwo].path;
    this.imageThree.src = allProducts[idThree].path;

    this.imageOne.id = allProducts[idOne].name;
    this.imageTwo.id = allProducts[idTwo].name;
    this.imageThree.id = allProducts[idThree].name;


    this.imagesEl.appendChild(this.imageOne);
    this.imagesEl.appendChild(this.imageTwo);
    this.imagesEl.appendChild(this.imageThree);
  },

  onClick: function (event) {
    console.log(event.target.id);
    if (tracker.clickCount === 24) {
      tracker.imagesEl.removeEventListener('click', tracker.onClick);
      allProducts.push(JSON.parse(localStorage.getItem('allProducts')));
      localStorage.setItem('allProducts', JSON.stringify(allProducts));
      var ctx = document.getElementById('myChart').getContext('2d');
      var options = {
        type: 'bar',
        data: {
          labels:  allProducts.map(function(x) {return x.name;}),
          datasets: [{
            label: '# of Votes',
            data: allProducts.map(function(x) {return x.votes;}),
            backgroundColor: [
              '#585123',
              '#585123',
              '#585123',
              '#585123',
              '#585123',
              '#585123',
              '#585123',
              '#585123',
              '#585123',
              '#585123',
              '#585123',
              '#585123',
              '#585123',
              '#585123',
              '#585123',
              '#585123',
              '#585123',
              '#585123',
              '#585123',
              '#585123',
              '#585123',
            ],
            borderColor: [
              '#585123',
              '#585123',
              '#585123',
              '#585123',
              '#585123',
              '#585123',
              '#585123',
              '#585123',
              '#585123',
              '#585123',
              '#585123',
              '#585123',
              '#585123',
              '#585123',
              '#585123',
              '#585123',
              '#585123',
              '#585123',
              '#585123',
              '#585123',
            ],
            borderWidth: 1
          }]
        },
        options: {
          // responsive: false,
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }],
            xAxes: [{
              ticks: {
                autoSkip: false
              }
            }]
          }

        }
      };
      new Chart(ctx, options);

    }
    else if (event.target.id === 'images'){
      console.log('didn\'t click an image');
      return;
    } else {
      tracker.clickCount++;
    }

    for (var i in allProducts) {
      if (event.target.id === allProducts[i].name) {
        allProducts[i].votes++;
      }
    }
    tracker.displayImages();
  }
};



tracker.imagesEl.addEventListener('click', tracker.onClick);
console.log(tracker);
console.log(allProducts);
tracker.displayImages();
