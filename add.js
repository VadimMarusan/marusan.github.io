
let likeButtons = document.querySelectorAll(".like")


  for (let i = 0; i < likeButtons.length; i++) {
    likeButtons[i].addEventListener("click", function(){
    	likeButtons[i].classList.toggle("liked")
    })
  } 

			
  function addHandlers(product_quantity) {
	  let decrementBtn = product_quantity.querySelector(".decrement_btn");
	  let number = product_quantity.querySelector(".number");
	  let incrementBtn = product_quantity.querySelector(".increment_btn");

	  let minCount = 1;
	  let maxCount = 10;

	  let currentValue = +number.value;
			
	  toggleButtonState(currentValue)

  function toggleButtonState(count) {
					decrementBtn.disabled = count <=minCount;
					incrementBtn.disabled = count >=maxCount;
			}

  incrementBtn.addEventListener("click", function() {
			number.value++;
			toggleButtonState(number.value)
  });
  decrementBtn.addEventListener("click", function() {
			 number.value--;	
			 toggleButtonState(number.value)
  });

}

let counts = document.querySelectorAll(".product_quantity");
counts.forEach(addHandlers);










 





