//define functions here
function getIt() {
  $('p').on('click', function() {
    alert('Hey!');
  });
}

let frameIt = function () {
  $('img').on('load', function () {
    this.addClass('tasty');
  })
};

$(document).ready(function(){

// call functions here
getIt();

});
