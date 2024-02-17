// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Define an array of tips
    const tipsData = [
        "Avoid single-use plastics by using reusable alternatives.",
        "Reduce food waste by planning meals and storing leftovers properly.",
        "Use energy-efficient appliances and turn off lights when not in use.",
        "Choose sustainable transportation options like walking, biking, or public transit.",
        "Support local farmers and businesses to reduce carbon emissions from transportation."
    ];

    // Function to display tips
    function displayTips() {
        const tipsContainer = document.getElementById('tipsList');
        tipsContainer.innerHTML = ''; // Clear previous tips

        tipsData.forEach((tip, index) => {
            const tipElement = document.createElement('div');
            tipElement.classList.add('tip');
            tipElement.textContent = `${index + 1}. ${tip}`;
            tipsContainer.appendChild(tipElement);

            // Add event listener for click to toggle additional information
            tipElement.addEventListener('click', () => {
                tipElement.classList.toggle('expanded');
            });
        });
    }

    // Call the function to display tips
    displayTips();
});
