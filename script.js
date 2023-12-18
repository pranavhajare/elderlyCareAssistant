// Get references to the form elements and containers
const medicineForm = document.getElementById('medicineForm');
const medNameInput = document.getElementById('medName');
const medDosageInput = document.getElementById('medDosage');
const medTimingInput = document.getElementById('medTiming');
const medicationList = document.getElementById('medicationList');

const exerciseForm = document.getElementById('exerciseForm');
const exerciseTypeInput = document.getElementById('exerciseType');
const exerciseDurationInput = document.getElementById('exerciseDuration');
const exerciseTimer = document.getElementById('exerciseTimer');
const timerDisplay = document.getElementById('timerDisplay');

const sosButton = document.getElementById('sosButton');
const confirmationModal = document.getElementById('confirmationModal');

// Array to store added medications
let medications = [];

// Function to add medication to the list
function addMedication() {
  const medName = medNameInput.value;
  const medDosage = medDosageInput.value;
  const medTiming = medTimingInput.value;

  if (medName && medDosage && medTiming) {
    // Create a new medication object
    const medication = { name: medName, dosage: medDosage, timing: medTiming };

    // Add the medication to the array
    medications.push(medication);

    // Display the medications in the list
    displayMedications();

    // Clear the form inputs
    medNameInput.value = '';
    medDosageInput.value = '';
    medTimingInput.value = '';
  } else {
    alert('Please fill in all fields.');
  }
}

// Function to display medications in the list
function displayMedications() {
  medicationList.innerHTML = '';
  medications.forEach((medication, index) => {
    const listItem = document.createElement('div');
    listItem.innerHTML = `<p>${medication.name} - ${medication.dosage} - ${medication.timing} <button onclick="removeMedication(${index})">Remove</button></p>`;
    medicationList.appendChild(listItem);
  });
}

// Function to remove medication from the list
function removeMedication(index) {
  medications.splice(index, 1);
  displayMedications();
}

// Function to set exercise routine
function setExerciseRoutine() {
  const exerciseType = exerciseTypeInput.value;
  const exerciseDuration = exerciseDurationInput.value;

  if (exerciseType && exerciseDuration) {
    // Display the exercise timer
    exerciseTimer.style.display = 'block';
    timerDisplay.innerText = `${exerciseDuration}:00`;

    // Display a motivational message
    displayMotivationalMessage();

    // Clear the form inputs
    exerciseTypeInput.value = 'walking';
    exerciseDurationInput.value = '';
  } else {
    alert('Please select exercise type and enter duration.');
  }
}

// Function to start the exercise timer
function startExerciseTimer() {
  // You can implement the timer logic here
  // For simplicity, I'm just displaying a static message
  alert('Exercise timer started!');
}

// Function to reset the exercise timer
function resetExerciseTimer() {
  // Reset the timer display
  timerDisplay.innerText = '00:00';

  // You may need to add additional logic to stop the timer if it's already running
}

// Function to display a motivational message
function displayMotivationalMessage() {
  // You can implement the logic to display a motivational message here
  // For simplicity, I'm just displaying a static message
  const motivationalMessageContainer = document.getElementById('motivationalMessage');
  motivationalMessageContainer.innerHTML = '<p>You can do it! Keep moving!</p>';
}

// Function to confirm SOS button click
function confirmSOS() {
  // Display the confirmation modal
  confirmationModal.style.display = 'block';
}

// Function to send SOS
function sendSOS() {
  // You can implement the logic to send an SOS message here
  // For simplicity, I'm just displaying an alert
  alert('SOS sent!');
  // Hide the confirmation modal
  confirmationModal.style.display = 'none';
}

// Function to cancel SOS
function cancelSOS() {
  // Hide the confirmation modal
  confirmationModal.style.display = 'none';
}
