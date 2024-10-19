"use strict";

// I think I need to remake this to have the canvases as separate layers

let emitter;
let nodeColour;
let fontLyric;
let fontScoreLabel;
let headerSize = 100;
let footerSize = 80;
let pieceDuration = 1;
const dynamicRange = Array(10).fill().map((element, index) => (index + 1) * 10);
let currentTime;
let eg;
let windowSizeW;
let windowSizeH;




//NB Top 70 pixels are HEADER

// Some ideas:
// Restrain appearing objects
// Animate appearing objects
//  - Vibrating = tremolo/flutter/growl
//  - Size (set a list of sizes to choose from)
//  - Create a 'start timer' button as the best approximation of sync
//  - Text overlay = sing the indicated text
//  - Markov chance of stacked sound
//  - Markov chance of image = quote snippets of memorised tunes of any style
//  - Repeating sequences (show(), hide(), duration)
//  - ppppp = quietest = as if whispering only to yourself (instrument/voice) (v. introspective)
//  - pppp = as if softly talking to yourself (introspective)
//  - ppp = standard very soft
//  - pp = standard interpretation
//  - ff = standard interpretation
//  - fff = standard very loud
//  - ffff = as if yelling into the void
//  - fffff = so loud that the the sound should distort/clip/break/be uncontrollable














