// import { lang, config } from "../config/main";
// import preamble from "./preamble";
// import taskBlock from "./taskBlock";
// import { countdown, showMessage } from "@brown-ccv/behavioral-task-trials";
// import { cameraStart, cameraEnd } from "../trials/camera"
// import { practiceBlock } from "../config/practice";
// import { tutorialBlock } from "../config/tutorial";
// import { exptBlock1, exptBlock2 } from "../config/experiment";
import jsPsychHtmlKeyboardResponse from '@jspsych/plugin-html-keyboard-response';
import jsPsychImageKeyboardResponse from '@jspsych/plugin-image-keyboard-response';
import 'jspsych/css/jspsych.css';
import { images } from '../lib/utils';

// import {
//   ageCheck,
//   sliderCheck,
//   demographics,
//   iusSurvey,
//   debrief,
// } from "../trials/quizTrials";

// Add your jsPsych options here.
// Honeycomb will combine these custom options with other options needed by Honyecomb.
// const jsPsychOptions = {
//   on_trial_finish: function (data) {
//     console.log('A trial just ended, here are the latest data:');
//     console.log(data);
//   },
//   default_iti: 250
// };

const jsPsychOptions = {
  on_trial_finish: function (data) {
    console.log(data)
  }
};


// Add your jsPsych timeline here.
// Honeycomb will call this function for us after the subject logs in, and run the resulting timeline.
// The instance of jsPsych passed in will include jsPsychOptions above, plus other options needed by Honeycomb.
//const buildTimeline = (jsPsych) => config.USE_MTURK ? mturkTimeline : buildPrimaryTimeline(jsPsych);

// const buildPrimaryTimeline = (jsPsych) => {
//   let primaryTimeline = [
//     preamble,
//     ageCheck,
//     sliderCheck,
//     countdown({ message: lang.countdown.message1 }),
//     taskBlock(practiceBlock),
//     countdown({ message: lang.countdown.message2 }),
//     taskBlock(exptBlock1),
//     demographics,
//     iusSurvey,
//     debrief,
//   ];

//   if (config.USE_CAMERA) {
//     primaryTimeline.splice(1, 0, cameraStart(jsPsych))
//     primaryTimeline.push(cameraEnd(5000))
//   }

//   primaryTimeline.push(showMessage(config, {
//     duration: 5000,
//     message: lang.task.end,
//   }))

//   return primaryTimeline
// }

function buildTimeline(jsPsych) {
  console.log(jsPsych.version()); // no unused vars
  var timeline = [];
  var instructions = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
      <p>Blue and Orange!</>
      <div style='width: 700px;'>
        <div style='float: left;'><img src='${images['blue.png']}' /></div>
        <div style='float: right;'><img src='${images['orange.png']}' /></div>
      </div>`
    };
  timeline.push(instructions);

  var blue_trial = {
    type: jsPsychImageKeyboardResponse,
    stimulus: images['blue.png'],
  };
  timeline.push(blue_trial);

  return timeline;
}


// const mturkTimeline = [
//   preamble,
//   countdown({ message: lang.countdown.message1 }),
//   taskBlock(tutorialBlock),
//   countdown({ message: lang.countdown.message2 }),
//   taskBlock(exptBlock2),
//   showMessage(config, {
//     duration: 5000,
//     message: lang.task.end,
//   }),
// ];

// Honeycomb, please include these options, and please get the timeline from this function.
export { jsPsychOptions, buildTimeline };
