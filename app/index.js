import document from 'document';
import { HeartRateSensor } from "heart-rate";
import { user } from "user-profile";
import { me } from "appbit";

const restingHeartRate = document.getElementById('rhr-data');
const heartRateMonitor = document.getElementById('hrm-data');

if (!me.permissions.granted("access_user_profile")) {
    console.log("We're not allowed to read a users' heart rate!");
}

if (user) {
    console.log((user.restingHeartRate || "Unknown") + " BPM");
    restingHeartRate.text = `${(user.restingHeartRate || "Unknown")} BPM`
} else {
    restingHeartRate.style.display = "none";
}

if (HeartRateSensor) {
    const hrm = new HeartRateSensor({ frequency: 1 });
    hrm.addEventListener("reading", () => {
        heartRateMonitor.text = `${hrm.heartRate} BPM`
        console.log(JSON.stringify({
        heartRate: hrm.heartRate ? hrm.heartRate : 0
        }));
    });
    hrm.start();
} else {
    hrmLabel.style.display = "none";
    hrmData.style.display = "none";
}





console.log('Hello world!');
