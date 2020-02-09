
let likeButtons = document.querySelectorAll(".like")


  for (let i = 0; i < likeButtons.length; i++) {
    likeButtons[i].addEventListener("click", function(){
    	likeButtons[i].classList.toggle("liked")
    })
  } 
	let minCount = 1;
	let maxCount = 5;

	function toggleButtonState(count) {
					decrementBtn.disabled = count <=minCount;
					incrementBtn.disabled = count >=maxCount;
			}

	let decrementBtn = document.querySelectorAll(".decrement-btn")[0],
	    incrementBtn = document.querySelectorAll(".increment-btn")[0],
		quaintityInput = document.querySelectorAll(".product-quantity input")[0];

		let currentValue = +quaintityInput.value;
			
			toggleButtonState(currentValue)

		incrementBtn.addEventListener("click", function() {
			let currentValue = +quaintityInput.value;
			let nextValue = currentValue+1;
			quaintityInput.value = nextValue;
			toggleButtonState(nextValue)
		})
			decrementBtn.addEventListener("click", function() {
			let currentValue = +quaintityInput.value;
			let nextValue = currentValue-1;
			quaintityInput.value = nextValue;
			
			toggleButtonState(nextValue)
		})











 





