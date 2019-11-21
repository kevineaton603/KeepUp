import * as messaging from 'messaging';

// Send the weather data to the device
function returnSubjectData(data) {
  if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN) {
    // Send a command to the device
    messaging.peerSocket.send(data);
  } else {
    console.log('Error: Connection is not open');
  }
}

// Fetch the weather from OpenWeather
async function getSubjectData() {
  const response = await fetch('https://keep-up-server.herokuapp.com/subjects');
  const data = await response.json();
  const { subjects } = data;
  returnSubjectData(subjects);
}

async function testSubmission(subject, test) {
  console.log('Test Submission');
  try {
    const response = await fetch('https://keep-up-server.herokuapp.com/subjects/tests',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subject,
          test,
        }),

      });
  } catch (error) {
    console.log(error);
  }
}


// Listen for messages from the device
messaging.peerSocket.onmessage = function (evt) {
  if (evt.data) {
    const { command } = evt.data;
    if (command == 'getData') {
      // The device requested weather data
      getSubjectData();
    } else if (command == 'submitTest') {
      const { subject, test } = evt.data;
      console.log(subject._id, test.time);
      testSubmission(subject, test);
    }
  }
};

// Listen for the onerror event
messaging.peerSocket.onerror = function (err) {
  // Handle any errors
  console.log(`Connection error: ${err.code} - ${err.message}`);
};
