# [Keep Up](https://github.com/kevineaton603/KeepUp)

## Set up

### Pre-Steps

- Download and Install Node.js
- [Create a Fitbit account](https://www.fitbit.com/home)
- Download, Install, Run Fitbit Simulator for your platform: [Windows](https://simulator-updates.fitbit.com/download/latest/win), [Mac](https://simulator-updates.fitbit.com/download/latest/mac)
- [Login to Fitbit Studio](https://studio.fitbit.com)

    Fitbit Studio needs to be running in the browser while running the application.

### Project Installation

- Clone the repository
- In a terminal in the project directory, run `npm install` to install the dependencies
- To open the fitbit cli, run `npx fitbit`
- When you first run the CLI you will have to login to your fitbit account
- To run the application, use the command `build-and-install`. If you have the simulator open, the command will recognize it and open the application in it.

For further instructions:

[Fitbit OS Command Line Interface](https://www.youtube.com/watch?time_continue=68&v=WkCKycDUgmU)

## Application Description

Current State: Prototype

In the application's current state, it is only meant to demonstrate the core functionality of what our application will do. There are two different views for our application currently. First is the subject selection view which is a view that has a list of our subjects. This will allow us to pick which subject we need. Once we pick a subject, that will send us to the testing screen. When the testing screen is selected, a hidden count down timer start and when it hits zero the vibration happens. The testing screen is just one button that the user taps when the vibration occurs.
The start and end are both recorded and then the difference between the two are also record. This information will be stored in a database. Currently, the database and the endpoints are not built out so once that is completed later on we store the reaction time. The current version of the application has four subjects that all correspond to a different vibration patterns that will go off after five seconds.

There are some differences between our low fidelity prototype and this current version. The low fidelity prototype was more of consumer product and wasn't meant for testing reaction times. Since we completed our low fidelity prototype, our application has changed to better test the reaction of subjects.
