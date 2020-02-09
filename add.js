let classSelector,
    classElements,
    startActive;

classSelector = '.liked';

classElements = document.querySelectorAll(classSelector);

startActive = function() {
  for (let i = 0; i < classElements.length; i++) {
    this.classList.add('liked1');
  }  

};

for (let i = 0; i < classElements.length; i++) {
  classElements[i].addEventListener('mousedown', startActive);
}










