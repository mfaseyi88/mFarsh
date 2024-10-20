// // // function assign() {
// // //       let personAge = 25; // Replace with the actual age
// // //       let isStudent = true;0 // Replace with true if the person is a student, otherwise return false
    
// // //       if (personAge < 18 && isStudent) {
// // //         console.log("Junior Class");
// // //       } else if (personAge == 18 && isStudent) {
// // //         console.log("Senior Class");
// // //       } else if (personAge > 18 && personAge <= 25) {
// // //         console.log("Advance Class");
// // //       } else {
// // //         console.log("Not in school");
// // //       }
// // //     }

// // // assign();

// // //   function handleDropdownChange(dropdownNumber) {
// // //   const content1 = document.getElementById('content1');
// // //   const content2 = document.getElementById('content2');
// // //   const content3 = document.getElementById('content3');

// // //   // Hide all content initially
// // //   content1.style.display = 'none';
// // //   content2.style.display = 'none';
// // //   content3.style.display = 'none';

// // //   // Show content based on the selected dropdown
// // //   switch (dropdownNumber) {
// // //     case 1:
// // //       if (document.getElementById('myDropdown1').value === 'about') {
// // //         content1.style.display = 'block';
// // //       }
// // //       break;
// // //     case 2:
// // //       content2.style.display = 'block';
// // //       break;
// // //     case 3:
// // //       content3.style.display = 'block';
// // //       break;
// // //   }
// // // }

// // // // JavaScript function to handle dropdown changes
// // // function handleDropdownChange(dropdownNumber) {
// // //   // Hide all dropdown content sections
// // //   const allContents = document.querySelectorAll('.dropdown-content');
// // //   allContents.forEach(content => content.style.display = 'none');

// // //   // Identify the selected dropdown and show its corresponding content
// // //   const selectedValue = document.getElementById(`myDropdown${dropdownNumber}`).value;
// // //   const contentDiv = document.getElementById(`content${dropdownNumber}`);

// // //   if (selectedValue !== 'default') {
// // //     contentDiv.style.display = 'block'; // Show the content if a valid option is selected
// // //   }
// // // }

// // // Function to show the dropdown content when hovering or clicking the select element
// // function showContent(dropdownNumber) {
// //   const contentDiv = document.getElementById(`content${dropdownNumber}`);
// //   contentDiv.style.display = 'block'; // Show the content
// // }

// // // Function to hide the content when the user leaves the dropdown area
// // function hideContent(dropdownNumber) {
// //   const contentDiv = document.getElementById(`content${dropdownNumber}`);
// //   contentDiv.style.display = 'none'; // Hide the content
// // }

// // // Add event listeners for each dropdown to control hover and focus behaviors
// // document.querySelectorAll('select').forEach((dropdown, index) => {
// //   const dropdownNumber = index + 1;

// //   // Show the content when the dropdown is hovered or clicked
// //   dropdown.addEventListener('mouseenter', () => showContent(dropdownNumber));
// //   dropdown.addEventListener('focus', () => showContent(dropdownNumber));

// //   // Hide the content when the mouse leaves the dropdown or it loses focus
// //   dropdown.addEventListener('mouseleave', () => hideContent(dropdownNumber));
// //   dropdown.addEventListener('blur', () => hideContent(dropdownNumber));
// // });
// // Function to show the dropdown content
// function showContent(dropdownNumber) {
//   const contentDiv = document.getElementById(`content${dropdownNumber}`);
//   contentDiv.style.display = 'block'; // Show the content
// }

// // Function to hide the dropdown content
// function hideContent(dropdownNumber) {
//   const contentDiv = document.getElementById(`content${dropdownNumber}`);
//   contentDiv.style.display = 'none'; // Hide the content
// }

// // Detect if the device supports touch (for mobile and tablets)
// const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

// // Add event listeners to each dropdown
// document.querySelectorAll('select').forEach((dropdown, index) => {
//   const dropdownNumber = index + 1;

//   if (isTouchDevice) {
//     // On mobile/tablet: Use click to toggle content visibility
//     dropdown.addEventListener('click', () => {
//       const contentDiv = document.getElementById(`content${dropdownNumber}`);
//       contentDiv.style.display = contentDiv.style.display === 'block' ? 'none' : 'block';
//     });
//   } else {
//     // On desktop/laptop: Use hover for showing/hiding content
//     dropdown.addEventListener('mouseenter', () => showContent(dropdownNumber));
//     dropdown.addEventListener('mouseleave', () => hideContent(dropdownNumber));
//     dropdown.addEventListener('focus', () => showContent(dropdownNumber));
//     dropdown.addEventListener('blur', () => hideContent(dropdownNumber));
//   }
// });


;
// Function to handle dropdown change
function handleDropdownChange(dropdownNumber) {
  // Hide all dropdown contents
  document.querySelectorAll('.dropdown-content').forEach(content => {
    content.style.display = 'none';
  });

  // Show the relevant content for the selected dropdown
  const selectedValue = document.getElementById(`myDropdown${dropdownNumber}`).value;
  const contentDiv = document.getElementById(`content${dropdownNumber}`);

  // Display content only if a valid option is selected
  if (selectedValue !== 'default') {
    contentDiv.style.display = 'block';
  }
}

// Device detection to adjust behavior for touch vs non-touch devices
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

// Add event listeners to each dropdown
document.querySelectorAll('select').forEach((dropdown, index) => {
  const dropdownNumber = index + 1;

  if (isTouchDevice) {
    // For mobile: Toggle content on click
    dropdown.addEventListener('click', () => {
      const contentDiv = document.getElementById(`content${dropdownNumber}`);
      contentDiv.style.display = contentDiv.style.display === 'block' ? 'none' : 'block';
    });
  } else {
    // For desktops: Use hover and focus events
    dropdown.addEventListener('mouseenter', () => handleDropdownChange(dropdownNumber));
    dropdown.addEventListener('mouseleave', () => document.getElementById(`content${dropdownNumber}`).style.display = 'none');
    dropdown.addEventListener('focus', () => handleDropdownChange(dropdownNumber));
    dropdown.addEventListener('blur', () => document.getElementById(`content${dropdownNumber}`).style.display = 'none');
  }
});