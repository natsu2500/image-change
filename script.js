const gridItems = document.querySelectorAll('.gridItem');

gridItems.forEach(function(item){
  item.onclick = function(){
    console.log(this.dataset.image)
    document.getElementById('top-image').src =this.dataset.image;
  }
});