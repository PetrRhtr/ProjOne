document.addEventListener("DOMContentLoaded", function() {
    const valuesList = document.getElementById('valuesList');
    const storedValues = JSON.parse(localStorage.getItem('sliderValues')) || [];
    
    storedValues.forEach((value, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `Measurement ${index + 1}: ${value}`;
        valuesList.appendChild(listItem);
    });

   // showValuesButton.addEventListener('click', function() {
     //   window.location.href = '';
   // });
    
});