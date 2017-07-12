(function(){
	var moveBtn = document.querySelector('.move-button');
	var items = document.querySelectorAll('.gird-a .gird-item');
	var isMoved = false;
	moveBtn.onclick = function(){
		isMoved = !isMoved;
		for(var i = 0;i < items.length; i++){
			var toggleItemMove = getToggleItemMove(i);
			var delay = isMoved ? (items.length - i - 1) : i;
			delay *= 50;
			setTimeout(toggleItemMove, delay);
		}
	};
	 function getToggleItemMove(i){
	 	var item = items[i];
	 	return function(){
	 		item.classList.toggle('is-moved');
	 	}
	 }
}());