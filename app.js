function calculateBoostedOverall() {
  var passingOffenseBoostFactor = document.querySelectorAll('.boost-selectors #passing-offense-boost')[0].valueAsNumber/100;
  var rushingOffenseBoostFactor = document.querySelectorAll('.boost-selectors #rushing-offense-boost')[0].valueAsNumber/100;
  var passingDefenseBoostFactor = document.querySelectorAll('.boost-selectors #passing-defense-boost')[0].valueAsNumber/100;
  var rushingDefenseBoostFactor = document.querySelectorAll('.boost-selectors #rushing-defense-boost')[0].valueAsNumber/100;
  var specialTeamsBoostFactor = document.querySelectorAll('.boost-selectors #special-teams-boost')[0].valueAsNumber/100;

  // Passing Offense
  var qbOverall = document.querySelectorAll('.unboosted-team-offense input[type="number"]#qb')[0].valueAsNumber;
  if (isNaN(qbOverall)) {qbOverall=0;}
  var qbBoostedOverall = (qbOverall * passingOffenseBoostFactor) + qbOverall;
  var wr1Overall = document.querySelectorAll('.unboosted-team-offense input[type="number"]#wr1')[0].valueAsNumber;
  if (isNaN(wr1Overall)) {wr1Overall=0;}
  var wr1BoostedOverall = (wr1Overall * passingOffenseBoostFactor) + wr1Overall;
  var wr2Overall = document.querySelectorAll('.unboosted-team-offense input[type="number"]#wr2')[0].valueAsNumber;
  if (isNaN(wr2Overall)) {wr2Overall=0;}
  var wr2BoostedOverall = (wr2Overall * passingOffenseBoostFactor) + wr2Overall;
  var teOverall = document.querySelectorAll('.unboosted-team-offense input[type="number"]#te')[0].valueAsNumber;
  if (isNaN(teOverall)) {teOverall=0;}
  var teBoostedOverall = (teOverall * passingOffenseBoostFactor) + teOverall;
  var flexOverall = document.querySelectorAll('.unboosted-team-offense input[type="number"]#flex')[0].valueAsNumber;
  if (isNaN(flexOverall)) {flexOverall=0;}
  var flexBoostedOverall = (flexOverall * passingOffenseBoostFactor) + flexOverall;

  // Rushing Offense
  var rbOverall = document.querySelectorAll('.unboosted-team-offense input[type="number"]#rb')[0].valueAsNumber;
  if (isNaN(rbOverall)) {rbOverall=0;}
  var rbBoostedOverall = (rbOverall * rushingOffenseBoostFactor) + rbOverall;
  var fbOverall = document.querySelectorAll('.unboosted-team-offense input[type="number"]#fb')[0].valueAsNumber;
  if (isNaN(fbOverall)) {fbOverall=0;}
  var fbBoostedOverall = (fbOverall * rushingOffenseBoostFactor) + fbOverall;
  var ltOverall = document.querySelectorAll('.unboosted-team-offense input[type="number"]#lt')[0].valueAsNumber;
  if (isNaN(ltOverall)) {ltOverall=0;}
  var ltBoostedOverall = (ltOverall * rushingOffenseBoostFactor) + ltOverall;
  var lgOverall = document.querySelectorAll('.unboosted-team-offense input[type="number"]#lg')[0].valueAsNumber;
  if (isNaN(lgOverall)) {lgOverall=0;}
  var lgBoostedOverall = (lgOverall * rushingOffenseBoostFactor) + lgOverall;
  var cOverall = document.querySelectorAll('.unboosted-team-offense input[type="number"]#c')[0].valueAsNumber;
  if (isNaN(cOverall)) {cOverall=0;}
  var cBoostedOverall = (cOverall * rushingOffenseBoostFactor) + cOverall;
  var rgOverall = document.querySelectorAll('.unboosted-team-offense input[type="number"]#rg')[0].valueAsNumber;
  if (isNaN(rgOverall)) {rgOverall=0;}
  var rgBoostedOverall = (rgOverall * rushingOffenseBoostFactor) + rgOverall;
  var rtOverall = document.querySelectorAll('.unboosted-team-offense input[type="number"]#rt')[0].valueAsNumber;
  if (isNaN(rtOverall)) {rtOverall=0;}
  var rtBoostedOverall = (rtOverall * rushingOffenseBoostFactor) + rtOverall;
  
  // Rushing Defense
  var mlbOverall = document.querySelectorAll('.unboosted-team-defense input[type="number"]#mlb')[0].valueAsNumber;
  if (isNaN(mlbOverall)) {mlbOverall=0;}
  var mlbBoostedOverall = (mlbOverall * rushingDefenseBoostFactor) + mlbOverall;
  var lolbOverall = document.querySelectorAll('.unboosted-team-defense input[type="number"]#lolb')[0].valueAsNumber;
  if (isNaN(lolbOverall)) {lolbOverall=0;}
  var lolbBoostedOverall = (lolbOverall * rushingDefenseBoostFactor) + lolbOverall;
  var rolbOverall = document.querySelectorAll('.unboosted-team-defense input[type="number"]#rolb')[0].valueAsNumber;
  if (isNaN(rolbOverall)) {rolbOverall=0;}
  var rolbBoostedOverall = (rolbOverall * rushingDefenseBoostFactor) + rolbOverall;
  var lb34Overall = document.querySelectorAll('.unboosted-team-defense input[type="number"]#lb34')[0].valueAsNumber;
  if (isNaN(lb34Overall)) {lb34Overall=0;}
  var lb34BoostedOverall = (lb34Overall * rushingDefenseBoostFactor) + lb34Overall;
  var ldeOverall = document.querySelectorAll('.unboosted-team-defense input[type="number"]#lde')[0].valueAsNumber;
  if (isNaN(ldeOverall)) {ldeOverall=0;}
  var ldeBoostedOverall = (ldeOverall * rushingDefenseBoostFactor) + ldeOverall;
  var rdeOverall = document.querySelectorAll('.unboosted-team-defense input[type="number"]#rde')[0].valueAsNumber;
  if (isNaN(rdeOverall)) {rdeOverall=0;}
  var rdeBoostedOverall = (rdeOverall * rushingDefenseBoostFactor) + rdeOverall;
  var dtOverall = document.querySelectorAll('.unboosted-team-defense input[type="number"]#dt')[0].valueAsNumber;
  if (isNaN(dtOverall)) {dtOverall=0;}
  var dtBoostedOverall = (dtOverall * rushingDefenseBoostFactor) + dtOverall;
  var dt43Overall = document.querySelectorAll('.unboosted-team-defense input[type="number"]#dt43')[0].valueAsNumber;
  if (isNaN(dt43Overall)) {dt43Overall=0;}
  var dt43BoostedOverall = (dt43Overall * rushingDefenseBoostFactor) + dt43Overall;

  // Passing Defense
  var cb1Overall = document.querySelectorAll('.unboosted-team-defense input[type="number"]#cb1')[0].valueAsNumber;
  if (isNaN(cb1Overall)) {cb1Overall=0;}
  var cb1BoostedOverall = (cb1Overall * passingDefenseBoostFactor) + cb1Overall;
  var cb2Overall = document.querySelectorAll('.unboosted-team-defense input[type="number"]#cb2')[0].valueAsNumber;
  if (isNaN(cb2Overall)) {cb2Overall=0;}
  var cb2BoostedOverall = (cb2Overall * passingDefenseBoostFactor) + cb2Overall;
  var fsOverall = document.querySelectorAll('.unboosted-team-defense input[type="number"]#fs')[0].valueAsNumber;
  if (isNaN(fsOverall)) {fsOverall=0;}
  var fsBoostedOverall = (fsOverall * passingDefenseBoostFactor) + fsOverall;
  var ssOverall = document.querySelectorAll('.unboosted-team-defense input[type="number"]#ss')[0].valueAsNumber;
  if (isNaN(ssOverall)) {ssOverall=0;}
  var ssBoostedOverall = (ssOverall * passingDefenseBoostFactor) + ssOverall;
  var nbOverall = document.querySelectorAll('.unboosted-team-defense input[type="number"]#nb')[0].valueAsNumber;
  if (isNaN(nbOverall)) {nbOverall=0;}
  var nbBoostedOverall = (nbOverall * passingDefenseBoostFactor) + nbOverall;
  var dbOverall = document.querySelectorAll('.unboosted-team-defense input[type="number"]#db')[0].valueAsNumber;
  if (isNaN(dbOverall)) {dbOverall=0;}
  var dbBoostedOverall = (dbOverall * passingDefenseBoostFactor) + dbOverall;

  // Special Teams
  var kOverall = document.querySelectorAll('.unboosted-team-special input[type="number"]#k')[0].valueAsNumber;
  if (isNaN(kOverall)) {kOverall=0;}
  var kBoostedOverall = (kOverall * specialTeamsBoostFactor) + kOverall;
  var krOverall = document.querySelectorAll('.unboosted-team-special input[type="number"]#kr')[0].valueAsNumber;
  if (isNaN(krOverall)) {krOverall=0;}
  var krBoostedOverall = (krOverall * specialTeamsBoostFactor) + krOverall;
  var pOverall = document.querySelectorAll('.unboosted-team-special input[type="number"]#p')[0].valueAsNumber;
  if (isNaN(pOverall)) {pOverall=0;}
  var pBoostedOverall = (pOverall * specialTeamsBoostFactor) + pOverall;
  var prOverall = document.querySelectorAll('.unboosted-team-special input[type="number"]#pr')[0].valueAsNumber;
  if (isNaN(prOverall)) {prOverall=0;}
  var prBoostedOverall = (prOverall * specialTeamsBoostFactor) + prOverall;

  var passingOffenseBoostedOverall = qbBoostedOverall+wr1BoostedOverall+wr2BoostedOverall+teBoostedOverall+flexBoostedOverall;
  var rushingOffenseBoostedOverall = rbBoostedOverall+fbBoostedOverall+ltBoostedOverall+lgBoostedOverall+cBoostedOverall+rgBoostedOverall+rtBoostedOverall;
  var rushingDefenseBoostedOverall = mlbBoostedOverall+lolbBoostedOverall+rolbBoostedOverall+lb34BoostedOverall+ldeBoostedOverall+rdeBoostedOverall+dt43BoostedOverall+dtBoostedOverall;
  var passingDefenseBoostedOverall = cb1BoostedOverall+cb2BoostedOverall+fsBoostedOverall+ssBoostedOverall+nbBoostedOverall+dbBoostedOverall;
  var specialTeamsBoostedOverall = kBoostedOverall+krBoostedOverall+pBoostedOverall+prBoostedOverall;

  var boostedOverall = passingOffenseBoostedOverall+rushingOffenseBoostedOverall+rushingDefenseBoostedOverall+passingDefenseBoostedOverall+specialTeamsBoostedOverall;
  console.log(boostedOverall);


  return Math.round(boostedOverall);
}

function calculateCoinCost() {
  var passingOffenseBoostFactor = document.querySelectorAll('.boost-selectors #passing-offense-boost')[0].valueAsNumber;
  var rushingOffenseBoostFactor = document.querySelectorAll('.boost-selectors #rushing-offense-boost')[0].valueAsNumber;
  var passingDefenseBoostFactor = document.querySelectorAll('.boost-selectors #passing-defense-boost')[0].valueAsNumber;
  var rushingDefenseBoostFactor = document.querySelectorAll('.boost-selectors #rushing-defense-boost')[0].valueAsNumber;
  var specialTeamsBoostFactor = document.querySelectorAll('.boost-selectors #special-teams-boost')[0].valueAsNumber;

  // Passing Offense
  var passingOffenseCoins = [0,
                            1890,
                            4150,
                            7360,
                            11320,
                            16040,
                            21510,
                            27730,
                            34710,
                            42450,
                            52820,
                            84700,
                            115500,
                            170170,
                            258720,
                            404250];
  var passingOffenseCost = 0;
  for (var i = 0; i < passingOffenseCoins.length; i++) {
    if (passingOffenseBoostFactor === i) {
      passingOffenseCost = passingOffenseCoins[i];
      break;
    }
  }

  // Rushing Offense
  var rushingOffenseCoins = [0,
                            2640,
                            5810,
                            10300,
                            15850,
                            22450,
                            30110,
                            38820,
                            48600,
                            59420,
                            73950,
                            118580,
                            161700,
                            238240,
                            362210,
                            565950];
  var rushingOffenseCost = 0;
  for (var i = 0; i < rushingOffenseCoins.length; i++) {
    if (rushingOffenseBoostFactor === i) {
      rushingOffenseCost = rushingOffenseCoins[i];
      break;
    }
  }

  // Rushing Defense
  var rushingDefenseCoins = [0,
    3020,
    6640,
    11770,
    18110,
    25660,
    34410,
    44370,
    55540,
    67910,
    84520,
    135520,
    184800,
    272270,
    413950,
    646800];
  var rushingDefenseCost = 0;
  for (var i = 0; i < rushingDefenseCoins.length; i++) {
    if (rushingDefenseBoostFactor === i) {
      rushingDefenseCost = rushingDefenseCoins[i];
      break;
    }
  }

  // Passing Defense
  var passingDefenseCoins = [0,
    2260,
    4980,
    8830,
    13580,
    19240,
    25810,
    33280,
    41650,
    50940,
    63390,
    101640,
    138600,
    204200,
    310460,
    485100];
  var passingDefenseCost = 0;
  for (var i = 0; i < passingDefenseCoins.length; i++) {
    if (passingDefenseBoostFactor === i) {
      passingDefenseCost = passingDefenseCoins[i];
      break;
    }
  }

  // Special Teams
  var specialTeamsCoins = [0,
    1280,
    2820,
    5000,
    7700,
    10900,
    14620,
    18860,
    23600,
    28860,
    35920,
    57600,
    78540,
    115720,
    175930,
    274890];
  var specialTeamsCost = 0;
  for (var i = 0; i < specialTeamsCoins.length; i++) {
    if (specialTeamsBoostFactor === i) {
      specialTeamsCost = specialTeamsCoins[i];
      break;
    }
  }

  totalCoinCost = passingOffenseCost+rushingOffenseCost+rushingDefenseCost+passingDefenseCost+specialTeamsCost;
  console.log(totalCoinCost);
  return totalCoinCost;
}

function calculateWeightCost() {
  var passingOffenseBoostFactor = document.querySelectorAll('.boost-selectors #passing-offense-boost')[0].valueAsNumber;
  var rushingOffenseBoostFactor = document.querySelectorAll('.boost-selectors #rushing-offense-boost')[0].valueAsNumber;
  var passingDefenseBoostFactor = document.querySelectorAll('.boost-selectors #passing-defense-boost')[0].valueAsNumber;
  var rushingDefenseBoostFactor = document.querySelectorAll('.boost-selectors #rushing-defense-boost')[0].valueAsNumber;
  var specialTeamsBoostFactor = document.querySelectorAll('.boost-selectors #special-teams-boost')[0].valueAsNumber;

  // Passing Offense
  var passingOffenseWeights = [0,
                            80,
                            170,
                            290,
                            450,
                            640,
                            860,
                            1110,
                            1390,
                            1700,
                            2110,
                            3390,
                            4620,
                            6810,
                            10350,
                            16170];
  var passingOffenseCost = 0;
  for (var i = 0; i < passingOffenseWeights.length; i++) {
    if (passingOffenseBoostFactor === i) {
      passingOffenseCost = passingOffenseWeights[i];
      break;
    }
  }

  // Rushing Offense
  var rushingOffenseWeights = [0,
                            110,
                            230,
                            410,
                            630,
                            900,
                            1200,
                            1550,
                            1940,
                            2380,
                            2960,
                            4740,
                            6470,
                            9530,
                            14490,
                            22640];
  var rushingOffenseCost = 0;
  for (var i = 0; i < rushingOffenseWeights.length; i++) {
    if (rushingOffenseBoostFactor === i) {
      rushingOffenseCost = rushingOffenseWeights[i];
      break;
    }
  }

  // Rushing Defense
  var rushingDefenseWeights = [0,
    120,
    270,
    470,
    720,
    1030,
    1380,
    1770,
    2220,
    2720,
    3380,
    5420,
    7390,
    10890,
    16560,
    25870];
  var rushingDefenseCost = 0;
  for (var i = 0; i < rushingDefenseWeights.length; i++) {
    if (rushingDefenseBoostFactor === i) {
      rushingDefenseCost = rushingDefenseWeights[i];
      break;
    }
  }

  // Passing Defense
  var passingDefenseWeights = [0,
    90,
    200,
    350,
    540,
    770,
    1030,
    1330,
    1670,
    2040,
    2540,
    4070,
    5540,
    8170,
    12420,
    19400];
  var passingDefenseCost = 0;
  for (var i = 0; i < passingDefenseWeights.length; i++) {
    if (passingDefenseBoostFactor === i) {
      passingDefenseCost = passingDefenseWeights[i];
      break;
    }
  }

  // Special Teams
  var specialTeamsWeights = [0,
    50,
    110,
    200,
    310,
    440,
    580,
    750,
    940,
    1150,
    1440,
    2300,
    3140,
    4630,
    7040,
    11000];
  var specialTeamsCost = 0;
  for (var i = 0; i < specialTeamsWeights.length; i++) {
    if (specialTeamsBoostFactor === i) {
      specialTeamsCost = specialTeamsWeights[i];
      break;
    }
  }

  totalWeightCost = passingOffenseCost+rushingOffenseCost+rushingDefenseCost+passingDefenseCost+specialTeamsCost;
  console.log(totalWeightCost);
  return totalWeightCost;
}

function displayOutput() {
  var boostedOverall = calculateBoostedOverall();
  if (isNaN(boostedOverall)) {boostedOverall=0;}
  var coinCost = calculateCoinCost();
  var weightCost = calculateWeightCost();
  const overallDisplay = document.getElementById('boosted-overall-display');
  const coinDisplay = document.getElementById('coin-cost-display');
  const weightDisplay = document.getElementById('weight-cost-display');
  overallDisplay.textContent = boostedOverall;
  coinDisplay.textContent = coinCost;
  weightDisplay.textContent = weightCost;
}

// Get the main slider element
const mainSlider = document.getElementById('total-boost');
  
// Get all individual slider elements
const individualSliders = Array.from(document.querySelectorAll('.boost-selectors .slider:not(#total-boost)'));

// Update display function
function updateDisplay(slider, displayElementId) {
    const displayElement = document.getElementById(displayElementId);
    displayElement.textContent = slider.value+"%";
}

// Initialize display values on page load
function initializeDisplays() {
  // Update main slider display
  updateDisplay(mainSlider, 'total-boost-display');

  // Update individual slider displays
  individualSliders.forEach(slider => {
      const displayId = slider.id.replace('-boost', '-display');
      updateDisplay(slider, displayId);
  });
}

// Event listener for main slider
mainSlider.addEventListener('input', function() {
    // Set the value of each individual slider to the main slider's value
    individualSliders.forEach(slider => {
        slider.value = mainSlider.value;
        const displayId = slider.id.replace('-boost', '-display');  // Construct the display id based on the slider id
        updateDisplay(slider, displayId);  // Update the display for each slider
    });

    // Update the display for the main slider
    updateDisplay(mainSlider, 'total-boost-display');
});

// Event listener for individual sliders
individualSliders.forEach(slider => {
    slider.addEventListener('input', function() {
        // Update the display for the adjusted individual slider
        const displayId = slider.id.replace('-boost', '-display');  // Construct the display id based on the slider id
        updateDisplay(slider, displayId);
    });
});

document.addEventListener("DOMContentLoaded", initializeDisplays());