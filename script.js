

let array = [];

// Get all elements with the class name 'add-colors-btn'
const buttons = document.getElementsByClassName("add-colors-btn");

// Convert the HTMLCollection to an array and iterate through each button
Array.from(buttons).forEach(function (button) {
    button.addEventListener('click', function () {
        // Define your selected colors array
        const color = button.getAttribute('data-color');
        const colorIndex = array.indexOf(color);

        if (colorIndex === -1) {
            // If the color is not in the array, add it
            array.push(color);
            // Change button text to "Remove"
            button.textContent = "Remove";
        } else {
            // If the color is already in the array, remove it
            array.splice(colorIndex, 1);
            // Change button text back to "Add"
            button.textContent = "Add";
        }
        console.log(array)
    });
});

// Function to pick a random color from the array
function getRandomColor(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}
const randomColorBtn = document.getElementById('circleBtn')
// Add click event listener to the button
randomColorBtn.addEventListener('click', function () {
    // Get a random color from the colors array
    console.log("array", array)
    const randomColor = getRandomColor(array);
    console.log(randomColor)

    const newDiv = document.createElement('div');

    newDiv.classList.add('new-div');
    newDiv.id = 'createdDiv';
    // Set the background color of the display container to the random color
    newDiv.style.backgroundColor = randomColor;
    document.getElementById('color-container').appendChild(newDiv);
});














