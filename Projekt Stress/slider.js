document.addEventListener("DOMContentLoaded", function() {
    const slider = document.getElementById('myRange');
    const sliderValue = document.getElementById('sliderValue');
    const ctx = document.getElementById('valueChart').getContext('2d');

    // Initial load from local storage
    const storedValues = JSON.parse(localStorage.getItem('sliderValues')) || [];
    sliderValue.textContent = slider.value;
    updateChart(storedValues);

    slider.addEventListener("input", function() {
        const value = slider.value;
        sliderValue.textContent = value;
        const percentage = (value / 10) * 100;

        // Save value to local storage
        storedValues.push(parseInt(value));
        localStorage.setItem('sliderValues', JSON.stringify(storedValues));
        updateChart(storedValues);
    });

    function updateChart(values) {
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: values.map((_, index) => index + 1),
                datasets: [{
                    label: 'Slider Values',
                    data: values,
                    borderColor: 'rgba(75, 192, 192, 1)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    fill: false,
                    tension: 0.1
                }]
            },
            options: {
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: ''
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Value'
                        },
                        beginAtZero: true,
                        max: 10
                    }
                }
            }
        });
    }
});
