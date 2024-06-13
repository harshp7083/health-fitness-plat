const hamburgerIcon = document.getElementById('hamburger-icon');
const sidebar = document.getElementById('sidebar');

hamburgerIcon.addEventListener('click', () => {
    sidebar.classList.toggle('show');
});

// Cardio Data
//gym
// no gym
function capitalizeFirstLetters(str) {
// Split the string into an array of words
const words = str.split(' ');

// Map over each word and capitalize the first letter if it's not a number
const capitalizedWords = words.map(word => {
  // Check if the first character of the word is not a number
  if (!isNaN(word.charAt(0))) {
    return word;
  }

  // Capitalize the first letter of each word and combine with the rest of the word
  return word.charAt(0).toUpperCase() + word.slice(1);
});

// Join the capitalized words back into a string
const capitalizedString = capitalizedWords.join(' ');

return capitalizedString;
}
let cardio_data = [
  [
    [
      [
        [["Tabata Intervals (10 seconds rest) with Burpees, Jump Lunges, High Knees - 8 rounds"], 40],
        [["Treadmill Running - 4 sets with 2-minutes rest between sets"], 40]
      ],
      [
        [["Full Body Circuit (Squat Jumps, Push-ups, Plank) - 4 sets with 1 minute rest between sets"], 40],
        [["Elliptical Machine - 4 sets with 2-minutes rest between sets"], 40]
      ],
      [
        [["Jumping Jacks - 4 sets with 1-minute rest between sets"], 30],
        [["Cable Machine Circuit (Cable Rows, Chest Press, Leg Press) - 4 sets of 12-15 reps for each exercise"], 30]
      ],
      [
        [["Jump Rope Intervals - 4 sets of with 2-minutes rest between sets"], 40],
        [["Tabata Intervals (10 seconds rest) with High Knees, Jump Lunges, Burpees - 8 rounds"], 40]
      ],
      [
        [["Jumping Jacks - 4 sets of with 1-minute rest between sets"], 30],
        [["Full Body Circuit (Push-ups, Squat Jumps, Plank) - 4 sets with 1 minute rest between sets"], 30]
      ],
      [
        [["Jump Rope Intervals - 4 sets with 2-minutes rest between sets"], 40],
        [["Cable Machine Circuit (Leg Extensions, Lat Pulldowns, Shoulder Press) - 4 sets of 12-15 reps for each exercise"], 30]
      ],
      [
        [["Jumping Jacks - 4 sets of with 1-minute rest between sets"], 30],
        [["Full Body Circuit (Squat Jumps, Push-ups, Plank) - 4 sets with 1 minute rest between sets"], 30]
      ],
      [
        [["Jump Rope Intervals - 4 sets with 2-minutes rest between sets"], 40],
        [["Tabata Intervals (10 seconds rest) with High Knees, Jump Lunges, Burpees - 8 rounds"], 40]
      ],
      [
        [["Jumping Jacks - 4 sets with 1-minute rest between sets"], 30],
        [["Cable Machine Circuit (Cable Rows, Chest Press, Leg Press) - 4 sets of 12-15 reps for each exercise"], 30]
      ],
      [
        [["Jump Rope Intervals - 4 sets with 2-minutes rest between sets"], 40],
        [["Full Body Circuit (Push-ups, Squat Jumps, Plank) - 4 sets with 1 minute rest between sets"], 30]
      ]
    ],
    [
      [
        [["Tabata Intervals (10 seconds rest) with Burpees, Jump Lunges, High Knees - 8 rounds"], 40],
        [["Jump Rope Intervals - 4 sets with 1-minute rest between sets"], 40]
      ],
      [
        [["Full Body Circuit (Squat Jumps, Push-ups, Plank) - 4 sets "], 40],
        [["Interval Sprints (30 seconds sprint, 1 minute walk) - 6 rounds"], 40]
      ],
      [
        [["Jumping Jacks - 4 sets with 30 seconds rest between sets"], 30],
        [["Bodyweight Circuit (Mountain Climbers, Burpees, Jump Squats) - 4 sets each exercise"], 30]
      ],
      [
        [["Jump Rope Intervals - 4 sets with 1-minute rest between sets"], 40],
        [["Tabata Intervals (10 seconds rest) with High Knees, Jump Lunges, Burpees - 8 rounds"], 40]
      ],
      [
        [["Jumping Jacks - 4 sets with 30 seconds rest between sets"], 30],
        [["Full Body Circuit (Push-ups, Squat Jumps, Plank) - 4 sets of each exercise"], 30]
      ],
      [
        [["Jump Rope Intervals - 4 sets with 1-minute rest between sets"], 40],
        [["Bodyweight Circuit (Jump Lunges, Burpees, Mountain Climbers) - 4 sets of each exercise"], 30]
      ],
      [
        [["Jumping Jacks - 4 sets with 30 seconds rest between sets"], 30],
        [["Full Body Circuit (Squat Jumps, Push-ups, Plank) - 4 sets of each exercise"], 30]
      ],
      [
        [["Jump Rope Intervals - 4 sets with 1-minute rest between sets"], 40],
        [["Tabata Intervals (10 seconds rest) with High Knees, Jump Lunges, Burpees - 8 rounds"], 40]
      ],
      [
        [["Jumping Jacks - 4 sets with 30 seconds rest between sets"], 30],
        [["Bodyweight Circuit (Mountain Climbers, Burpees, Jump Squats) - 4 sets of each exercise"], 30]
      ],
      [
        [["Jump Rope Intervals - 4 sets with 1-minute rest between sets"], 40],
        [["Full Body Circuit (Push-ups, Squat Jumps, Plank) - 4 sets of each exercise"], 30]
      ]
    ]    
  ],
  [
    [
      [
        [["Tabata Intervals (10 seconds rest) with Burpees, Jump Lunges, High Knees - 6 rounds"], 20],
        [["Treadmill Running - 4 sets with 1-minute rest between sets"], 25]
      ],
      [
        [["Full Body Circuit (Squat Jumps, Push-ups, Plank) - 4 sets of each exercise"], 25],
        [["Elliptical Machine - 4 sets with 1-minute rest between sets"], 20]
      ],
      [
        [["Jumping Jacks - 4 sets with 30 seconds rest between sets"], 25],
        [["Cable Machine Circuit (Cable Rows, Chest Press, Leg Press) - 4 sets of 12-15 reps for each exercise"], 15]
      ],
      [
        [["Jump Rope Intervals - 4 sets with 1-minute rest between sets"], 25],
        [["Tabata Intervals (10 seconds rest) with High Knees, Jump Lunges, Burpees - 6 rounds"], 20]
      ],
      [
        [["Jumping Jacks - 4 sets with 30 seconds rest between sets"], 15],
        [["Full Body Circuit (Push-ups, Squat Jumps, Plank) - 4 sets of each exercise"], 25]
      ],
      [
        [["Jump Rope Intervals - 4 sets with 1-minute rest between sets"], 25],
        [["Cable Machine Circuit (Leg Extensions, Lat Pulldowns, Shoulder Press) - 4 sets of 12-15 reps for each exercise"], 15]
      ],
      [
        [["Jumping Jacks - 4 sets with 30 seconds rest between sets"], 20],
        [["Full Body Circuit (Squat Jumps, Push-ups, Plank) - 4 sets of each exercise"], 20]
      ],
      [
        [["Jump Rope Intervals - 4 sets with 1-minute rest between sets"], 25],
        [["Tabata Intervals (10 seconds rest) with High Knees, Jump Lunges, Burpees - 6 rounds"], 20]
      ],
      [
        [["Jumping Jacks - 4 sets with 30 seconds rest between sets"], 15],
        [["Cable Machine Circuit (Cable Rows, Chest Press, Leg Press) - 4 sets of 12-15 reps for each exercise"], 25]
      ],
      [
        [["Jump Rope Intervals - 4 sets with 1-minute rest between sets"], 25],
        [["Full Body Circuit (Push-ups, Squat Jumps, Plank) - 4 sets of each exercise"], 15]
      ]
    ],
    [
      [
        [["Tabata Intervals (10 seconds rest) with Burpees, Jump Lunges, High Knees - 6 rounds"], 20],
        [["Jump Rope Intervals - 4 sets with 1-minute rest between sets"], 25]
      ],
      [
        [["Full Body Circuit (Squat Jumps, Push-ups, Plank) - 4 sets of each exercise"], 25],
        [["Interval Sprints (30 seconds sprint, 1 minute walk) - 4 rounds"], 20]
      ],
      [
        [["Jumping Jacks - 4 sets with 30 seconds rest between sets"], 25],
        [["Bodyweight Circuit (Mountain Climbers, Burpees, Jump Squats) - 4 sets of each exercise"], 15]
      ],
      [
        [["Jump Rope Intervals - 4 sets with 1-minute rest between sets"], 25],
        [["Tabata Intervals (10 seconds rest) with High Knees, Jump Lunges, Burpees - 6 rounds"], 20]
      ],
      [
        [["Jumping Jacks - 4 sets with 30 seconds rest between sets"], 15],
        [["Full Body Circuit (Push-ups, Squat Jumps, Plank) - 4 sets of each exercise"], 25]
      ],
      [
        [["Jump Rope Intervals - 4 sets with 1-minute rest between sets"], 25],
        [["Bodyweight Circuit (Jump Lunges, Burpees, Mountain Climbers) - 4 sets of each exercise"], 15]
      ],
      [
        [["Jumping Jacks - 4 sets with 30 seconds rest between sets"], 20],
        [["Full Body Circuit (Squat Jumps, Push-ups, Plank) - 4 sets of each exercise"], 20]
      ],
      [
        [["Jump Rope Intervals - 4 sets with 1-minute rest between sets"], 25],
        [["Tabata Intervals (20 seconds work, 10 seconds rest) with High Knees, Jump Lunges, Burpees - 6 rounds"], 20]
      ],
      [
        [["Jumping Jacks - 4 sets with 30 seconds rest between sets"], 15],
        [["Bodyweight Circuit (Mountain Climbers, Burpees, Jump Squats) - 4 sets of each exercise"], 25]
      ],
      [
        [["Jump Rope Intervals - 4 sets with 1-minute rest between sets"], 25],
        [["Full Body Circuit (Push-ups, Squat Jumps, Plank) - 4 sets of each exercise"], 15]
      ]
    ]
  ],
  [
    [
      [
        [["Tabata Intervals (10 seconds rest) with Burpees, Jump Lunges, High Knees - 4 rounds"], 15],
        [["Treadmill Running - 4 sets with 1-minute rest between sets"], 20]
      ],
      [
        [["Full Body Circuit (Squat Jumps, Push-ups, Plank) - 4 sets of each exercise"], 10],
        [["Elliptical Machine - 4 sets with 1-minute rest between sets"], 15]
      ],
      [
        [["Jumping Jacks - 4 sets with 30 seconds rest between sets"], 10],
        [["Cable Machine Circuit (Cable Rows, Chest Press, Leg Press) - 4 sets of 12-15 reps for each exercise"], 10]
      ],
      [
        [["Treadmill Running - 4 sets with 1-minute rest between sets"], 20],
        [["Tabata Intervals (10 seconds rest) with High Knees, Jump Lunges, Burpees - 4 rounds"], 15]
      ],
      [
        [["Jumping Jacks - 4 sets with 30 seconds rest between sets"], 10],
        [["Full Body Circuit (Push-ups, Squat Jumps, Plank) - 4 sets of each exercise"], 10]
      ],
      [
        [["Treadmill Running - 4 sets with 1-minute rest between sets"], 20],
        [["Cable Machine Circuit (Leg Extensions, Lat Pulldowns, Shoulder Press) - 4 sets of 12-15 reps for each exercise"], 10]
      ],
      [
        [["Jumping Jacks - 4 sets with 30 seconds rest between sets"], 10],
        [["Full Body Circuit (Squat Jumps, Push-ups, Plank) - 4 sets of each exercise"], 10]
      ],
      [
        [["Treadmill Running - 4 sets with 1-minute rest between sets"], 20],
        [["Tabata Intervals (10 seconds rest) with High Knees, Jump Lunges, Burpees - 4 rounds"], 15]
      ],
      [
        [["Jumping Jacks - 4 sets with 30 seconds rest between sets"], 10],
        [["Cable Machine Circuit (Cable Rows, Chest Press, Leg Press) - 4 sets of 12-15 reps for each exercise"], 10]
      ],
      [
        [["Treadmill Running - 4 sets with 1-minute rest between sets"], 20],
        [["Full Body Circuit (Push-ups, Squat Jumps, Plank) - 4 sets of each exercise"], 10]
      ]
    ],
    [
      [
        [["Tabata Intervals (10 seconds rest) with Burpees, Jump Lunges, High Knees - 4 rounds"], 15],
        [["Jump Rope Intervals - 4 sets with 1-minute rest between sets"], 20]
      ],
      [
        [["Full Body Circuit (Squat Jumps, Push-ups, Plank) - 4 sets of each exercise"], 10],
        [["Interval Sprints (30 seconds sprint, 1 minute walk) - 4 rounds"], 15]
      ],
      [
        [["Jumping Jacks - 4 sets of with 30 seconds rest between sets"], 10],
        [["Bodyweight Circuit (Mountain Climbers, Burpees, Jump Squats) - 4 sets of each exercise"], 10]
      ],
      [
        [["Jump Rope Intervals - 4 sets with 1-minute rest between sets"], 20],
        [["Tabata Intervals (10 seconds rest) with High Knees, Jump Lunges, Burpees - 4 rounds"], 15]
      ],
      [
        [["Jumping Jacks - 4 sets of with 30 seconds rest between sets"], 10],
        [["Full Body Circuit (Push-ups, Squat Jumps, Plank) - 4 sets of each exercise"], 10]
      ],
      [
        [["Jump Rope Intervals - 4 sets with 1-minute rest between sets"], 20],
        [["Bodyweight Circuit (Jump Lunges, Burpees, Mountain Climbers) - 4 sets of each exercise"], 10]
      ],
      [
        [["Jumping Jacks - 4 sets with 30 seconds rest between sets"], 10],
        [["Full Body Circuit (Squat Jumps, Push-ups, Plank) - 4 sets of each exercise"], 10]
      ],
      [
        [["Jump Rope Intervals - 4 sets with 1-minute rest between sets"], 20],
        [["Tabata Intervals (10 seconds rest) with High Knees, Jump Lunges, Burpees - 4 rounds"], 15]
      ],
      [
        [["Jumping Jacks - 4 sets with 30 seconds rest between sets"], 10],
        [["Bodyweight Circuit (Mountain Climbers, Burpees, Jump Squats) - 4 sets of each exercise"], 10]
      ],
      [
        [["Jump Rope Intervals - 4 sets with 1-minute rest between sets"], 20],
        [["Full Body Circuit (Push-ups, Squat Jumps, Plank) - 4 sets of each exercise"], 10]
      ]
    ]
  ]
]

// Fatloss Data
//gym
// no gym
let fatloss_data = [
  [
    [
      [
        [["Burpees, Jump Squats with Dumbbells, Mountain Climbers - 4 sets of each exercise"], 45],
        [["Circuit (Dumbbell Press, Lunges with Dumbbells, Plank) - 4 sets of 12-15 reps for each exercise"], 30]
      ],
      [
        [["Tabata Intervals (10 seconds rest) with Equipment (Burpees, Jump Lunges with Dumbbells, High Knees) - 8 rounds"], 40],
        [["Jump Rope Intervals with Weighted Rope - 4 sets with 1-minute rest between sets"], 40]
      ],
      [
        [["Plyometrics with Additional Weight (Jump Squats with Dumbbells, Plyo Push-ups with Weighted Vest, Burpees with Resistance Bands) - 4 sets of 12-15 reps for each exercise"], 45],
        [["Isometric Holds with Equipment (Wall Sit with Medicine Ball, Plank with Stability Ball, Glute Bridge with Resistance Bands) - 4 sets of each exercise"], 20],
        [["Active Recovery with Cardio Equipment (Treadmill Walking, Cycling)"], 15]
      ],
      [
        [["Full Body Circuit with Added Resistance (Squat Jumps with Medicine Ball, Push-ups with Weighted Vest, Plank with Resistance Bands) - 4 sets of each exercise"], 40],
        [["Interval Sprints (30 seconds sprint, 1 minute walk) on Treadmill - 6 rounds"], 40]
      ],
      [
        [["Core Circuit with Equipment (Plank variations with Stability Ball, Russian Twists with Medicine Ball, Leg Raises with Ab Roller) - 4 sets of 15-20 reps for each exercise"], 45],
        [["Calisthenics Circuit with Equipment (Assisted Bulgarian Split Squats, Pike Push-ups with Stability Ball, Chin-ups with Pull-up Bar) - 4 sets of 8-10 reps for each exercise"], 20],
        [["Active Recovery with Cardio Equipment (Treadmill Walking, Cycling)"], 15]
      ],
      [
        [["Bodyweight Circuit with Added Weight (Push-ups with Weighted Vest, Jump Lunges with Dumbbells, Burpees with Medicine Ball) - 4 sets of each exercise"], 45],
        [["Jump Rope Intervals with Weighted Rope - 4 sets with 1-minute rest between sets"], 30]
      ],
      [
        [["Resistance Bands Workout (Chest Press with Bands, Rows with Bands, Leg Curls with Bands) - 4 sets of 12-15 reps for each exercise"], 45],
        [["Interval Sprints (30 seconds sprint, 1 minute walk) on Treadmill - 6 rounds"], 30]
      ],
      [
        [["Full Body Circuit with Equipment (Squat Jumps with Barbell, Push-ups with Resistance Bands, Plank with Stability Ball) - 4 sets of each exercise"], 40],
        [["Isolation Movements with Equipment (Bicep Curls with Dumbbells, Tricep Dips with Bench, Shoulder Raises with Resistance Bands) - 4 sets of 10-12 reps for each exercise"], 40]
      ],
      [
        [["Plyometrics with Added Weight (Jump Squats with Barbell, Plyo Push-ups with Weighted Vest, Burpees with Medicine Ball) - 4 sets of 12-15 reps for each exercise"], 45],
        [["Progressive Overload with Bodyweight and Equipment (Increase reps, tempo, or difficulty) - 4 sets of 8-10 reps for each exercise"], 30]
      ],
      [
        [["Full Body Circuit with Added Weight (Squat Jumps with Barbell, Push-ups with Weighted Vest, Plank with Resistance Bands) - 4 sets of each exercise"], 45],
        [["Jump Rope Intervals with Weighted Rope - 4 sets with 1-minute rest between sets"], 30]
      ],
      [
        [["Core Circuit with Equipment (Plank variations with Stability Ball, Russian Twists with Medicine Ball, Leg Raises with Ab Roller) - 4 sets of 15-20 reps for each exercise"], 45],
        [["Isometric Holds with Equipment (Wall Sit with Medicine Ball, Plank with Stability Ball, Glute Bridge with Resistance Bands) - 4 sets of each exercise"], 20],
        [["Active Recovery with Cardio Equipment (Treadmill Walking, Cycling)"], 15]
      ],
      [
        [["Bodyweight Circuit with Added Weight (Push-ups with Weighted Vest, Jump Lunges with Dumbbells, Burpees with Medicine Ball) - 4 sets of each exercise"], 45],
        [["Jump Rope Intervals with Weighted Rope - 4 sets with 1-minute rest between sets"], 30]
      ]
    ],
    [
      [
        [["Burpees, Jump Squats, Mountain Climbers - 4 sets of each exercise"], 45],
        [["Circuit (Push-ups, Lunges, Plank) - 4 sets of 12-15 reps for each exercise"], 30]
      ],
      [
        [["Tabata Intervals (10 seconds rest) with Burpees, Jump Lunges, High Knees - 8 rounds"], 40],
        [["Jump Rope Intervals - 4 sets with 1-minute rest between sets"], 40]
      ],
      [
        [["Plyometrics (Jump Squats, Plyo Push-ups, Burpees) - 4 sets of 12-15 reps for each exercise"], 45],
        [["Isometric Holds (Wall Sit, Plank, Glute Bridge) - 4 sets of each exercise"], 20],
        [["Active Recovery (Brisk Walking, Cycling)"], 15]
      ],
      [
        [["Full Body Circuit (Squat Jumps, Push-ups, Plank) - 4 sets of each exercise"], 40],
        [["Interval Sprints (30 seconds sprint, 1 minute walk) - 6 rounds"], 40]
      ],
      [
        [["Core Circuit (Plank variations, Russian Twists, Leg Raises) - 4 sets of 15-20 reps for each exercise"], 45],
        [["Calisthenics Circuit (Bulgarian Split Squats, Pike Push-ups, Chin-ups) - 4 sets of 8-10 reps for each exercise"], 20],
        [["Active Recovery (Brisk Walking, Cycling)"], 15]
      ],
      [
        [["Bodyweight Circuit (Push-ups, Jump Lunges, Burpees) - 4 sets of each exercise"], 45],
        [["Jump Rope Intervals - 4 sets with 1-minute rest between sets"], 30]
      ],
      [
        [["Resistance Bands Workout (Chest Press, Rows, Leg Curls) - 4 sets of 12-15 reps for each exercise"], 45],
        [["Interval Sprints (30 seconds sprint, 1 minute walk) - 6 rounds"], 30]
      ],
      [
        [["Full Body Circuit (Squat Jumps, Push-ups, Plank) - 4 sets of each exercise"], 40],
        [["Isolation Movements (Bicep Curls, Tricep Dips, Shoulder Raises) - 4 sets of 10-12 reps for each exercise"], 40]
      ],
      [
        [["Plyometrics (Jump Squats, Plyo Push-ups, Burpees) - 4 sets of 12-15 reps for each exercise"], 45],
        [["Progressive Overload with Bodyweight (Increase reps, tempo, or difficulty) - 4 sets of 8-10 reps for each exercise"], 30]
      ],
      [
        [["Full Body Circuit (Squat Jumps, Push-ups, Plank) - 4 sets of each exercise"], 45],
        [["Jump Rope Intervals - 4 sets with 1-minute rest between sets"], 30]
      ],
      [
        [["Core Circuit (Plank variations, Russian Twists, Leg Raises) - 4 sets of 15-20 reps for each exercise"], 45],
        [["Isometric Holds (Wall Sit, Plank, Glute Bridge) - 4 sets of each exercise"], 20],
        [["Active Recovery (Brisk Walking, Cycling)"], 15]
      ],
      [
        [["Bodyweight Circuit (Push-ups, Jump Lunges, Burpees) - 4 sets of each exercise"], 45],
        [["Jump Rope Intervals - 4 sets with 1-minute rest between sets"], 30]
      ]
    ]
  ],
  [
    [
      [
        [["Circuit (Dumbbell Press, Goblet Squats, Plank Rows) - 3 sets of 12-15 reps for each exercise"], 25],
        [["Incline Walking and High Knees - 3 sets of each exercise"], 20]
      ],
      [
        [["Bodyweight Circuit (Burpees, Mountain Climbers, Jump Squats) with added Resistance Bands - 3 sets of each exercise"], 25],
        [["Intervals - 3 sets with 1-minute rest between sets"], 20]
      ],
      [
        [["Core Workout (Medicine Ball Crunches, Leg Raises with Ball, Plank Twists) - 3 sets of 15-20 reps for each exercise"], 25],
        [["Intervals - 3 sets with 1-minute rest between sets"], 20]
      ],
      [
        [["Full Body Circuit (Push-ups, Squat Jumps, Plank) with added Resistance Bands - 3 sets of each exercise"], 25],
        [["High Knees and Butt Kicks - 3 sets of each exercise"], 20]
      ],
      [
        [["Lower Body Focus (Lunges with Dumbbells, Glute Bridges with Barbell, Calf Raises) - 3 sets of 12-15 reps for each exercise"], 25],
        [["Side Lunges and Step Jumps - 3 sets of each exercise"], 20]
      ],
      [
        [["Core and Cardio (Russian Twists with Ball, Bicycle Crunches with Ball, Jumping Jacks with Ball) - 3 sets of each exercise"], 25],
        [["Mountain Climbers and Plank Jacks - 3 sets of each exercise"], 20]
      ],
      [
        [["Upper Body Focus (Barbell Bench Press, Tricep Dips with Bench, Superman with Barbell) - 3 sets of 12-15 reps for each exercise"], 25],
        [["Burpees and Jumping Jacks - 3 sets of each exercise"], 20]
      ],
      [
        [["Lower Body Blast (Squats with Barbell, Lunges with Barbell, Jump Squats with Barbell) - 3 sets ofeach exercise"], 25],
        [["High Knees and Butt Kicks - 3 sets of each exercise"], 20]
      ],
      [
        [["Core and Abs (Plank on Ball, Leg Raises with Ball, Russian Twists with Ball) - 3 sets of 15-20 reps for each exercise"], 25],
        [["Intervals - 3 sets with 1-minute rest between sets"], 20]
      ],
      [
        [["Upper Body Burn (Push-ups with Resistance Bands, Tricep Dips with Resistance Bands, Plank with Resistance Bands) - 3 sets of each exercise"], 25],
        [["Mountain Climbers and Plank Jacks - 3 sets of each exercise"], 20]
      ]
    ],
    [
      [
        [["Circuit (Push-ups, Squats, Plank) - 3 sets of 12-15 reps for each exercise"], 20],
        [["Jumping Jacks and High Knees - 3 sets of each exercise"], 25]
      ],
      [
        [["Bodyweight Circuit (Burpees, Mountain Climbers, Jump Squats) - 3 sets of each exercise"], 20],
        [["Interval Sprints (30 seconds sprint, 1 minute walk) - 6 rounds"], 25]
      ],
      [
        [["Bodyweight Strength Training: Core Workout (Crunches, Leg Raises, Plank) - 3 sets of 15-20 reps for each exercise"], 25],
        [["Cardio: Jump Rope - 3 sets of with 1-minute rest between sets"], 20]
      ],
      [
        [["Full Body Circuit (Push-ups, Squat Jumps, Plank) - 3 sets each exercise"], 25],
        [["High Knees and Butt Kicks - 3 sets of each exercise"], 25]
      ],
      [
        [["Lower Body Focus (Lunges, Glute Bridges, Calf Raises) - 3 sets of 12-15 reps for each exercise"], 25],
        [["Jumping Jacks and Side Lunges - 3 sets of each exercise"], 15]
      ],
      [
        [["Core and Cardio (Russian Twists, Bicycle Crunches, Jumping Jacks) - 3 sets of each exercise"], 20],
        [["Mountain Climbers and Plank Jacks - 3 sets of each exercise"], 25]
      ],
      [
        [["Upper Body Focus (Push-ups, Tricep Dips, Superman) - 3 sets of 12-15 reps for each exercise"], 20],
        [["Burpees and Jumping Jacks - 3 sets of 1 each exercise"], 25]
      ],
      [
        [["Lower Body Blast (Squats, Lunges, Jump Squats) - 3 sets of each exercise"], 25],
        [["High Knees and Butt Kicks - 3 sets of each exercise"], 15]
      ],
      [
        [["Core and Abs (Plank, Leg Raises, Russian Twists) - 3 sets of 15-20 reps for each exercise"], 25],
        [["Jump Rope - 3 sets with 1-minute rest between sets"], 15]
      ],
      [
        [["Upper Body Burn (Push-ups, Tricep Dips, Plank) - 3 sets of each exercise"], 20],
        [["Mountain Climbers and Plank Jacks - 3 sets of each exercise"], 20]
      ]
    ]
  ],
  [
    [
      [
        [["Sprinting, Incline Walking, Jogging - 3 sets of each exercise"], 15],
        [["Circuit (Dumbbell Press, Lunges, Plank) - 2 sets of 12-15 reps for each exercise"], 15]
      ],
      [
        [["Tabata Intervals on Elliptical (10 seconds rest) with Burpees, Jump Lunges, High Knees - 5 rounds"], 20],
        [["Stationary Bike Intervals - 3 sets of with 1-minute rest between sets"], 15]
      ],
      [
        [["Plyometrics with Resistance (Jump Squats with Dumbbells, Plyo Push-ups, Burpees) - 3 sets of 12-15 reps for each exercise"], 15],
        [["Isometric Holds with Equipment (Leg Press Machine, Plank on Stability Ball, Glute Bridge with Resistance) - 3 sets each exercise"], 15],
      ],
      [
        [["Full Body Circuit (Squat Jumps with Medicine Ball, Cable Machine Push-ups, Plank) - 3 sets of each exercise"], 15],
        [["Interval Sprints on Treadmill (30 seconds sprint, 1 minute walk) - 3 rounds"], 10]
      ],
      [
        [["Core Circuit with Equipment (Cable Machine Crunches, Russian Twists with Medicine Ball, Leg Raises on Roman Chair) - 3 sets of 10-12 reps for each exercise"], 15],
        [["Calisthenics Circuit with Equipment (Assisted Pull-ups, Dips on Parallel Bars, Chin-ups) - 3 sets of 5-7 reps for each exercise"], 15],
      ],
      [
        [["Bodyweight Circuit (Push-ups, Jump Lunges, Burpees) with Additional Weight - 2 sets of each exercise"], 10],
        [["Jump Rope Intervals with Weighted Rope - 3 sets with 1-minute rest between sets"], 15]
      ],
      [
        [["Resistance Bands Workout (Chest Press, Rows, Leg Curls) - 3 sets of 9-12 reps for each exercise"], 15],
        [["Interval Sprints on Treadmill (30 seconds sprint, 1 minute walk) - 4 rounds"], 15]
      ],
      [
        [["Full Body Circuit (Squat Jumps, Push-ups, Plank) with Equipment (Kettlebells, Resistance Bands) - 2 sets of each exercise"], 15],
        [["Isolation Movements with Equipment (Bicep Curls with Dumbbells, Tricep Dips with Bench, Shoulder Raises with Resistance Bands) - 2 sets of 7-8 reps for each exercise"], 15]
      ],
      [
        [["Plyometrics with Additional Weight (Jump Squats with Barbell, Weighted Plyo Push-ups, Burpees with Dumbbells) - 2 sets of 10 reps for each exercise"], 10],
        [["Progressive Overload with Equipment (Increase reps, weight, or difficulty) - 2 sets of 8-10 reps for each exercise"], 15]
      ],
      [
        [["Full Body Circuit (Squat Jumps, Push-ups, Plank) with Additional Weight (Weighted Vest, Dumbbells) - 2 sets of each exercise"], 15],
        [["Jump Rope Intervals with Weighted Rope - 2 sets with 1-minute rest between sets"], 15]
      ],
      [
        [["Core Circuit with Equipment (Cable Machine Crunches, Russian Twists with Medicine Ball, Leg Raises on Roman Chair) - 3 sets of 15 reps for each exercise"], 25],
        [["Isometric Holds with Equipment (Leg Press Machine, Plank on Stability Ball, Glute Bridge with Resistance) - 2 sets of each exercise"], 10],
      ],
      [
        [["Bodyweight Circuit (Push-ups, Jump Lunges, Burpees) with Additional Weight - 2 sets of each exercise"], 15],
        [["Jump Rope Intervals with Weighted Rope - 3 sets with 1-minute rest between sets"], 15]
      ]
    ],
    [
      [
        [["Jog in Place or Marching "], 5],
        [["Circuit (Push-ups, Squats, Plank) - 2 sets of 10-12 reps for each exercise"], 10],
        [["Jumping Jacks - 2 sets "], 5]
      ],
      [
        [["Jump Rope or High Knees "], 5],
        [["Bodyweight Circuit (Burpees, Mountain Climbers, Jump Squats) - 2 sets each exercise"], 10],
        [["Running in Place - 2 sets"], 5]
      ],
      [
        [["Dynamic Stretching (Leg Swings, Arm Circles, Torso Twists)"], 5],
        [["Core Workout (Crunches, Leg Raises, Plank) - 2 sets of 12-15 reps for each exercise"], 10],
        [["High Knees and Butt Kicks - 2 sets of each exercise"], 5]
      ],
      [
        [["Jumping Jacks or Marching"], 5],
        [["Full Body Circuit (Push-ups, Squat Jumps, Plank) - 2 sets of each exercise"], 10],
        [["Jump Rope - 2 sets"], 5]
      ],
      [
        [["Jog in Place or Jumping Jacks"], 5],
        [["Lower Body Focus (Lunges, Glute Bridges, Calf Raises) - 2 sets of 10-12 reps for each exercise"], 10],
        [["Side Lunges and Skaters - 2 sets of each exercise"], 5]
      ],
      [
        [["Dynamic Stretching (Arm Circles, Leg Swings, Torso Twists)"], 5],
        [["Core and Cardio (Russian Twists, Bicycle Crunches, Jumping Jacks) - 2 sets of each exercise"], 10],
        [["Mountain Climbers and Plank Jacks - 2 sets of each exercise"], 5]
      ],
      [
        [["High Knees "], 5],
        [["Upper Body Focus (Push-ups, Tricep Dips, Superman) - 2 sets of 10-12 reps for each exercise"], 10],
        [["Burpees and Jumping Jacks - 2 sets of each exercise"], 5]
      ],
      [
        [["Jump Rope or Jog in Place"], 5],
        [["Lower Body Blast (Squats, Lunges, Jump Squats) - 2 sets of each exercise"], 10],
        [["High Knees and Butt Kicks - 2 sets of each exercise"], 5]
      ],
      [
        [["Dynamic Stretching (Leg Swings, Arm Circles, Torso Twists)"], 5],
        [["Core and Abs (Plank, Leg Raises, Russian Twists) - 2 sets of 12-15 reps for each exercise"], 10],
        [["Jump Rope - 2 sets "], 5]
      ],
      [
        [["High Knees "], 5],
        [["Upper Body Burn (Push-ups, Tricep Dips, Plank) - 2 sets each exercise"], 10],
        [["Mountain Climbers and Plank Jacks - 2 sets each exercise"], 5]
      ]
    ]
  ]
]

// Muscle Gain Data
//gym
// no gym
let muscle_gain_data =[
  [
    [
      [
        [["Bench Press - 4 sets of 10-12 reps"], 20],
        [["Pull-ups with Weighted Vest - 4 sets of 10-12 reps"], 20],
        [["Dips with Weighted Belt - 4 sets of 10-12 reps"], 20]
      ],
      [
        [["Leg Press - 4 sets of 8-10 reps"], 20],
        [["Leg Extension Machine - 4 sets of 8-10 reps"], 20],
        [["Leg Curl Machine - 4 sets of 8-10 reps"], 20]
      ],
      [
        [["Seated Row Machine - 4 sets of 10-12 reps"], 20],
        [["Chest Fly Machine - 4 sets of 10-12 reps"], 20],
        [["Shoulder Press Machine - 4 sets of 10-12 reps"], 20]
      ],
      [
        [["Tricep Extension Machine - 4 sets of 10-12 reps"], 20],
        [["Bicep Curl Machine - 4 sets of 10-12 reps"], 20],
        [["Leg Press Calf Raises - 4 sets of 10-12 reps"], 20]
      ],
      [
        [["Abdominal Crunch Machine - 4 sets of 15-20 reps"], 20],
        [["Cable Woodchopper - 4 sets of 12-15 reps"], 20],
        [["Treadmill Running - 4 sets "], 20]
      ],
      [
        [["Bench Press - 4 sets of 10-12 reps"], 20],
        [["Pull-ups with Weighted Vest - 4 sets of 10-12 reps"], 20],
        [["Dips with Weighted Belt - 4 sets of 10-12 reps"], 20]
      ],
      [
        [["Leg Press - 4 sets of 8-10 reps"], 20],
        [["Leg Extension Machine - 4 sets of 8-10 reps"], 20],
        [["Leg Curl Machine - 4 sets of 8-10 reps"], 20]
      ],
      [
        [["Seated Row Machine - 4 sets of 10-12 reps"], 20],
        [["Chest Fly Machine - 4 sets of 10-12 reps"], 20],
        [["Shoulder Press Machine - 4 sets of 10-12 reps"], 20]
      ],
      [
        [["Tricep Extension Machine - 4 sets of 10-12 reps"], 20],
        [["Bicep Curl Machine - 4 sets of 10-12 reps"], 20],
        [["Leg Press Calf Raises - 4 sets of 10-12 reps"], 20]
      ],
      [
        [["Abdominal Crunch Machine - 4 sets of 15-20 reps"], 20],
        [["Cable Woodchopper - 4 sets of 12-15 reps"], 20],
        [["Treadmill Running - 4 sets"], 20]
      ],
      [
        [["Bench Press - 4 sets of 10-12 reps"], 20],
        [["Pull-ups with Weighted Vest - 4 sets of 10-12 reps"], 20],
        [["Dips with Weighted Belt - 4 sets of 10-12 reps"], 20]
      ],
      [
        [["Leg Press - 4 sets of 8-10 reps"], 20],
        [["Leg Extension Machine - 4 sets of 8-10 reps"], 20],
        [["Leg Curl Machine - 4 sets of 8-10 reps"], 20]
      ],
      [
        [["Seated Row Machine - 4 sets of 10-12 reps"], 20],
        [["Chest Fly Machine - 4 sets of 10-12 reps"], 20],
        [["Shoulder Press Machine - 4 sets of 10-12 reps"], 20]
      ],
      [
        [["Tricep Extension Machine - 4 sets of 10-12 reps"], 20],
        [["Bicep Curl Machine - 4 sets of 10-12 reps"], 20],
        [["Leg Press Calf Raises - 4 sets of 10-12 reps"], 20]
      ],
      [
        [["Abdominal Crunch Machine - 4 sets of 15-20 reps"], 20],
        [["Cable Woodchopper - 4 sets of 12-15 reps"], 20],
        [["Treadmill Running - 4 sets"], 20]
      ],
      [
        [["Bench Press - 4 sets of 10-12 reps"], 20],
        [["Pull-ups with Weighted Vest - 4 sets of 10-12 reps"], 20],
        [["Dips with Weighted Belt - 4 sets of 10-12 reps"], 20]
      ],
      [
        [["Leg Press - 4 sets of 8-10 reps"], 20],
        [["Leg Extension Machine - 4 sets of 8-10 reps"], 20],
        [["Leg Curl Machine - 4 sets of 8-10 reps"], 20]
      ],
      [
        [["Seated Row Machine - 4 sets of 10-12 reps"], 20],
        [["Chest Fly Machine - 4 sets of 10-12 reps"], 20],
        [["Shoulder Press Machine - 4 sets of 10-12 reps"], 20]
      ],
      [
        [["Tricep Extension Machine - 4 sets of 10-12 reps"], 20],
        [["Bicep Curl Machine - 4 sets of 10-12 reps"], 20],
        [["Leg Press Calf Raises - 4 sets of 10-12 reps"], 20]
      ],
      [
        [["Abdominal Crunch Machine - 4 sets of 15-20 reps"], 20],
        [["Cable Woodchopper - 4 sets of 12-15 reps"], 20],
        [["Treadmill Running - 4 sets"], 20]
      ]
    ],
    [
      [
        [["Compound Movements (Push-ups, Pull-ups, Dips) - 4 sets of 10-12 reps for each exercise"], 45],
        [["Plyometric Workout (Jump Lunges, Plyo Push-ups, Box Jumps, etc.) - 4 sets of 10-12 reps for each exercise"], 30]
      ],
      [
        [["Calisthenics Circuit (Bulgarian Split Squats, Pike Push-ups, Chin-ups) - 4 sets of 8-10 reps for each exercise"], 40],
        [["Advanced Circuit (Muscle-ups, Plyo Pull-ups, Pistol Squats with Jump, etc.) - 4 sets of 8-10 reps for each exercise"], 40]
      ],
      [
        [["Push-up variations (Wide-grip, Diamond, Explosive) - 4 sets of 12-15 reps for each variation"], 30],
        [["Progressive Overload (Increase difficulty or reps each week) - 4 sets of 8-10 reps for each exercise"], 30]
      ],
      [
        [["Compound Movements (Push-ups, Pull-ups, Dips) - 4 sets of 10-12 reps for each exercise"], 45],
        [["Plyometric Workout (Jump Lunges, Plyo Push-ups, Box Jumps, etc.) - 4 sets of 10-12 reps for each exercise"], 20],
        [["Active Recovery (Stretching, etc.)"], 15]
      ],
      [
        [["Progressive Overload with (Increase reps, tempo, or difficulty) - 4 sets of 8-10 reps for each exercise"], 40],
        [["Tabata Intervals with Burpees (Alternating between Sprinting  and Burpees) - 10 rounds of work/rest intervals"], 4]
      ],
      [
        [["Compound Movements (Push-ups, Pull-ups, Dips) - 4 sets of 10-12 reps for each exercise"], 45],
        [["Core Circuit (Plank variations, Russian Twists, Mountain Climbers) - 4 sets of 15-20 reps for each exercise"], 20]
      ],
      [
        [["Resistance Bands Workout (Chest Press, Rows, Leg Curls) - 4 sets of 12-15 reps for each exercise"], 45],
        [["Progressive Overload (Increase difficulty or reps each week) - 4 sets of 8-10 reps for each exercise"], 30]
      ],
      [
        [["Isolation Movements (Bicep Curls, Tricep Dips, Shoulder Raises) - 4 sets of 10-12 reps for each exercise"], 40],
        [["Core Circuit (Plank variations, Russian Twists, Mountain Climbers) - 4 sets of 15-20 reps for each exercise"], 20]
      ],
      [
        [["Explosive Movements (Jump Squats, Explosive Push-ups, Box Jumps) - 4 sets of 8-10 reps for each exercise"], 30],
        [["Progressive Overload (Increase difficulty or reps each week) - 4 sets of 8-10 reps for each exercise"], 30]
      ],
      [
        [["Compound Movements (Push-ups, Pull-ups, Dips) - 4 sets of 10-12 reps for each exercise"], 45],
        [["Core Circuit (Plank variations, Russian Twists, Mountain Climbers) - 4 sets of 15-20 reps for each exercise"], 20]
      ],
      [
        [["Isolation Movements (Bicep Curls, Tricep Dips, Shoulder Raises) - 4 sets of 10-12 reps for each exercise"], 40],
        [["Core Circuit (Plank variations, Russian Twists, Mountain Climbers) - 4 sets of 15-20 reps for each exercise"], 20]
      ],
      [
        [["Resistance Bands Workout (Chest Press, Rows, Leg Curls) - 4 sets of 12-15 reps for each exercise"], 45]
      ]
    ]
  ],
  [
    [
      [
        [["Bench Press - 3 sets of 8-10 reps"], 15],
        [["Lat Pulldowns - 3 sets of 8-10 reps"], 15]
      ],
      [
        [["Leg Press - 3 sets of 8-10 reps"], 15],
        [["Leg Extension Machine - 3 sets of 8-10 reps"], 15]
      ],
      [
        [["Seated Row Machine - 3 sets of 10-12 reps"], 15],
        [["Chest Fly Machine - 3 sets of 10-12 reps"], 15]
      ],
      [
        [["Shoulder Press Machine - 3 sets of 8-10 reps"], 15],
        [["Leg Curl Machine - 3 sets of 8-10 reps"], 15]
      ],
      [
        [["Tricep Extension Machine - 3 sets of 10-12 reps"], 15],
        [["Bicep Curl Machine - 3 sets of 10-12 reps"], 15]
      ],
      [
        [["Abdominal Crunch Machine - 3 sets of 10-12 reps"], 15],
        [["Treadmill Running - 3 sets "], 15]
      ],
      [
        [["Bench Press - 3 sets of 8-10 reps"], 15],
        [["Lat Pulldowns - 3 sets of 8-10 reps"], 15]
      ],
      [
        [["Leg Press - 3 sets of 8-10 reps"], 15],
        [["Leg Extension Machine - 3 sets of 8-10 reps"], 15]
      ],
      [
        [["Seated Row Machine - 3 sets of 10-12 reps"], 15],
        [["Chest Fly Machine - 3 sets of 10-12 reps"], 15]
      ],
      [
        [["Shoulder Press Machine - 3 sets of 8-10 reps"], 15],
        [["Leg Curl Machine - 3 sets of 8-10 reps"], 15]
      ],
      [
        [["Tricep Extension Machine - 3 sets of 10-12 reps"], 15],
        [["Bicep Curl Machine - 3 sets of 10-12 reps"], 15]
      ],
      [
        [["Abdominal Crunch Machine - 3 sets of 10-12 reps"], 15],
        [["Treadmill Running - 3 sets"], 15]
      ],
      [
        [["Bench Press - 3 sets of 8-10 reps"], 15],
        [["Lat Pulldowns - 3 sets of 8-10 reps"], 15]
      ],
      [
        [["Leg Press - 3 sets of 8-10 reps"], 15],
        [["Leg Extension Machine - 3 sets of 8-10 reps"], 15]
      ],
      [
        [["Seated Row Machine - 3 sets of 10-12 reps"], 15],
        [["Chest Fly Machine - 3 sets of 10-12 reps"], 15]
      ],
      [
        [["Shoulder Press Machine - 3 sets of 8-10 reps"], 15],
        [["Leg Curl Machine - 3 sets of 8-10 reps"], 15]
      ],
      [
        [["Tricep Extension Machine - 3 sets of 10-12 reps"], 15],
        [["Bicep Curl Machine - 3 sets of 10-12 reps"], 15]
      ],
      [
        [["Abdominal Crunch Machine - 3 sets of 10-12 reps"], 15],
        [["Treadmill Running - 3 sets"], 15]
      ],
      [
        [["Bench Press - 3 sets of 8-10 reps"], 15],
        [["Lat Pulldowns - 3 sets of 8-10 reps"], 15]
      ],
      [
        [["Leg Press - 3 sets of 8-10 reps"], 15],
        [["Leg Extension Machine - 3 sets of 8-10 reps"], 15]
      ]
    ],
    [
      [
        [["Compound Movements (Push-ups, Pull-ups, Dips) - 3 sets of 8-10 reps for each exercise"], 30],
        [["Plyometric Workout (Jump Lunges, Plyo Push-ups, Box Jumps, etc.) - 3 sets of 8-10 reps for each exercise"], 20]
      ],
      [
        [["Calisthenics Circuit (Bulgarian Split Squats, Pike Push-ups, Chin-ups) - 3 sets of 8-10 reps for each exercise"], 25],
        [["Advanced Circuit (Jump Squats, Burpees, Pistol Squats, etc.) - 3 sets of 8-10 reps for each exercise"], 25]
      ],
      [
        [["Push-up variations (Wide-grip, Diamond, Explosive) - 3 sets of 10-12 reps for each variation"], 20],
        [["Progressive Overload (Increase difficulty or reps each week) - 3 sets of 8-10 reps for each exercise"], 20]
      ],
      [
        [["Compound Movements (Push-ups, Pull-ups, Dips) - 3 sets of 8-10 reps for each exercise"], 30],
        [["Plyometric Workout (Jump Lunges, Plyo Push-ups, Box Jumps, etc.) - 3 sets of 8-10 reps for each exercise"], 15],
        [["Active Recovery (Jumping Jacks, High Knees, etc.)"], 5]
      ],
      [
        [["Progressive Overload with (Increase reps, tempo, or difficulty) - 3 sets of 8-10 reps for each exercise"], 25],
        [["HIIT (High-Intensity Interval Training) - Alternating between Sprinting and Jumping Jacks - 8 rounds of work/rest intervals"], 4]
      ],
      [
        [["Compound Movements (Push-ups, Pull-ups, Dips) - 3 sets of 8-10 reps for each exercise"], 30],
        [["Core Circuit (Plank variations, Russian Twists, Mountain Climbers) - 3 sets of 10-12 reps for each exercise"], 15]
      ],
      [
        [["Calisthenics (Squats, Lunges, Push-ups) - 3 sets of 10-12 reps for each exercise"], 30],
        [["Progressive Overload (Increase difficulty or reps each week) - 3 sets of 8-10 reps for each exercise"], 20]
      ],
      [
        [["Isolation Movements (Tricep Dips, Leg Raises, Shoulder Taps) - 3 sets of 8-10 reps for each exercise"], 25],
        [["Core Circuit (Plank variations, Russian Twists, Mountain Climbers) - 3 sets of 10-12 reps for each exercise"], 15]
      ],
      [
        [["Explosive Movements (Jump Squats, Explosive Push-ups, Burpees) - 3 sets of 8-10 reps for each exercise"], 20],
        [["Progressive Overload (Increase difficulty or reps each week) - 3 sets of 8-10 reps for each exercise"], 20]
      ],
      [
        [["Compound Movements (Push-ups, Pull-ups, Dips) - 3 sets of 8-10 reps for each exercise"], 30],
        [["Core Circuit (Plank variations, Russian Twists, Mountain Climbers) - 3 sets of 10-12 reps for each exercise"], 15]
      ],
      [
        [["Calisthenics (Squats, Lunges, Push-ups) - 3 sets of 10-12 reps for each exercise"], 30],
        [["Core Circuit (Plank variations, Russian Twists, Mountain Climbers) - 3 sets of 10-12 reps for each exercise"], 15]
      ],
      [
        [["Exercises (Push-ups, Squats, Lunges) - 3 sets of 10-12 reps for each exercise"], 30]
        [["Core Circuit (Plank variations, Russian Twists, Mountain Climbers) - 3 sets of 10-12 reps for each exercise"], 15]
      ],
      [
        [["Calisthenics (Squats, Lunges, Push-ups) - 3 sets of 10-12 reps for each exercise"], 30],
        [["Core Circuit (Plank variations, Russian Twists, Mountain Climbers) - 3 sets of 10-12 reps for each exercise"], 15]
      ],
      [
        [["Exercises (Push-ups, Squats, Lunges) - 3 sets of 10-12 reps for each exercise"], 30],
        [["Core Circuit (Plank variations, Russian Twists, Mountain Climbers) - 3 sets of 10-12 reps for each exercise"], 15]
      ],
      [
        [["Compound Movements (Push-ups, Pull-ups, Dips) - 3 sets of 8-10 reps for each exercise"], 30],
        [["Progressive Overload (Increase difficulty or reps each week) - 3 sets of 8-10 reps for each exercise"], 20]
      ]
    ]
  ],
  [
    [
      [
        [["Bench Press - 2 sets of 8-10 reps"], 10],
        [["Lat Pulldowns - 2 sets of 8-10 reps"], 15]
      ],
      [
        [["Leg Press - 2 sets of 8-10 reps"], 15],
        [["Leg Extension Machine - 2 sets of 8-10 reps"], 10]
      ],
      [
        [["Seated Row Machine - 2 sets of 10-12 reps"], 15],
        [["Chest Fly Machine - 2 sets of 10-12 reps"], 10]
      ],
      [
        [["Shoulder Press Machine - 2 sets of 8-10 reps"], 15],
        [["Leg Curl Machine - 2 sets of 8-10 reps"], 15]
      ],
      [
        [["Tricep Extension Machine - 2 sets of 10-12 reps"], 15],
        [["Bicep Curl Machine - 2 sets of 10-12 reps"], 10]
      ],
      [
        [["Abdominal Crunch Machine - 2 sets of 10-12 reps"], 10],
        [["Treadmill Running - 1 sets "], 15]
      ],
      [
        [["Upper Body Stretch (Arm Circles, Shoulder Stretch) - 3 sets each exercise"], 10],
        [["Lower Body Stretch (Quad Stretch, Hamstring Stretch) - 2 sets each exercise"], 10],
        [["Full Body Stretch (Forward Bend, Chest Opener) - 3 sets each exercise"], 5]
      ],
      [
        [["Bench Press - 2 sets of 8-10 reps"], 10],
        [["Lat Pulldowns - 2 sets of 8-10 reps"], 15]
      ],
      [
        [["Leg Press - 2 sets of 8-10 reps"], 10],
        [["Leg Extension Machine - 2 sets of 8-10 reps"], 15]
      ],
      [
        [["Seated Row Machine - 2 sets of 10-12 reps"], 15],
        [["Chest Fly Machine - 2 sets of 10-12 reps"], 10]
      ]
    ],
    [
      [
        [["Compound Movements (Push-ups, Knee Push-ups, Chair Dips) - 2 sets of 8-10 reps for each exercise"], 10],
        [["Isolation Movements (Bicep Curls with Water Bottles, Tricep Dips on a Chair) - 2 sets of 8-10 reps for each exercise"], 15]
      ],
      [
        [["Basic Circuit (Squats, Lunges, Wall Push-ups) - 2 sets of 8-10 reps for each exercise"], 15],
        [["Calisthenics (Bodyweight Rows, Incline Push-ups, Bodyweight Squats) - 2 sets of 8-10 reps for each exercise"], 10]
      ],
      [
        [["Core Workout (Plank, Bicycle Crunches, Leg Raises) - 2 sets of 10-12 reps for each exercise"], 15],
        [["Resistance Band Exercises (Chest Press, Rows, Leg Curls) - 2 sets of 10-12 reps for each exercise"], 15]
      ],
      [
        [["Upper Body Circuit (Push-ups, Plank Shoulder Taps, Superman) - 2 sets of 8-10 reps for each exercise"], 10],
        [["Lower Body Circuit (Squats, Calf Raises, Glute Bridges) - 2 sets of 8-10 reps for each exercise"], 15]
      ],
      [
        [["Chair Workout (Seated Leg Lifts, Chair Dips, Leg Extensions) - 2 sets of 10-12 reps for each exercise"], 15],
        [["Wall Sit and Hold - 2 sets of 30 seconds each"], 5],
        [["Jumping Jacks and High Knees - 2 sets of 30 seconds each"], 10]
      ],
      [
        [["Core Workout (Plank, Bicycle Crunches, Leg Raises) - 2 sets of 10-12 reps for each exercise"], 15],
        [["Balance Exercises (Single-leg Squats, Standing Leg Raises) - 2 sets of 8-10 reps for each exercise"], 10]
      ],
      [
        [["Full Body Circuit (Push-ups, Squats, Lunges, Plank) - 2 sets of 8-10 reps for each exercise"], 15],
        [["Running in Place - 2 sets of 30 seconds each"], 10],
        [["Chair Dips - 2 sets of 10-12 reps"], 5]
      ],
      [
        [["Upper Body Stretch (Arm Circles, Shoulder Stretch) - 2 sets each exercise"], 10],
        [["Lower Body Stretch (Quad Stretch, Hamstring Stretch) - 3 sets each exercise"], 10],
        [["Full Body Stretch (Forward Bend, Chest Opener) - 3 sets each exercise"], 5]
      ],
      [
        [["Core Workout (Plank, Bicycle Crunches, Leg RaiseBs) - 2 sets of 10-12 reps for each exercise"], 10],
        [["Mountain Climbers - 2 sets"], 10],
        [["Burpees - 2 sets of 10-12 reps"], 5]
      ],
      [
        [["Squats - 2 sets of 8-10 reps"], 10],
        [["Push-ups - 2 sets of 8-10 reps"], 10],
        [["Jump Rope - 2 sets"], 5]
      ]
    ]
  ]
]

// Weight Loss Data
//gym
// no gym
let weight_loss_data = [
  [
    [
      [
        [["HIIT Circuit (Treadmill Sprints, Jump Squats, etc.)"], 45],
        [["Plyometric Workout (Jump Lunges, Plyo Push-ups, Box Jumps, etc.) - 4 sets of 10-12 reps for each exercise"], 30]
      ],
      [
        [["Interval Running (Treadmill Alternating between sprinting and jogging , repeat 3 times with 2 minutes rest in between)"], 40],
        [["Yoga or Stretching"], 30]
      ],
      [
        [["Deadlift variations (Barbell Deadlifts, Sumo Deadlifts) (5 sets of 5 reps) + Box Jumps (5 sets of 10 reps) - Rest 45 seconds between exercises"], 30],
        [["Lower Body with Supersets (Squats + Leg Press, Leg Extensions + Leg Curls) - 4 sets of 8 reps per exercise (with 60 seconds rest after superset)"], 40]
      ],
      [
        [["Push-up variations (AMRAP sets) + Battle Ropes (5 sets) - Rest 60 seconds between exercises"], 30],
        [["Advanced Circuit (Muscle-ups, Plyo Pull-ups, Pistol Squats with Jump, etc.) - 4 sets of 8-10 reps for each exercise"], 30]
      ],
      [
        [["Fartlek Run (Treadmill Alternating between jogging and sprinting paces with variations in intensity and duration)"], 60]
      ],
      [
        [["HIIT Circuit (Treadmill Sprints, Jump Squats)"], 45],
        [["Plyometric Workout (Jump Lunges, Plyo Push-ups, Box Jumps, etc.) - 4 sets of 10-12 reps for each exercise"], 20],
        [["Active Recovery (Streching)"], 15]
      ],
      [
        [["Interval Running (Treadmill Alternating between sprinting and jogging, repeat 3 times with 2 minutes rest in between)"], 40],
        [["Yoga or Stretching"], 15]
      ],
      [
        [["Power Lifts (Barbell Squats, Deadlifts, Bench Press) - 4 sets of 3 reps (with 2-3 minutes rest in between sets)"], 40],
        [["Tabata Intervals with Burpees (Treadmill Alternating between Sprinting and Burpees ) - 10 rounds of work intervals"], 4]
      ],
      [
        [
          ["Upper Body with Drop Sets (Pull-ups, Rows, Dips) - 3 sets of 10 reps (followed by a drop set of 8-12 reps with reduced weight) - Rest 60 seconds between exercises"],
          30
        ],
        [["Plyometric Circuit with High Knees (Box Jumps, Broad Jumps, Lateral Shuffles with Jumps + High Knees between stations) - 5 rounds of 20 seconds work, 40 seconds rest"], 7],
        [["Active Recovery (Swimming, Cycling, etc.)"], 15]
      ],
      [
        [["Deadlift variations (Barbell Romanian Deadlifts, Sumo Deadlifts) (5 sets of 5 reps) + Lateral Box Jumps (5 sets of 10 reps) - Rest 45 seconds between exercises"], 30],
        [["Upper Body (Push-ups, Bench Press variations (Incline/Decline), Overhead Press) - 4 sets of 8 reps per exercise (with 60 seconds rest after set)"], 40]
      ],
      [
        [["Hill Sprints (Treadmill Find a hill and alternate between sprinting up and jogging down)"], 20],
        [["Core Circuit (Plank variations, Russian Twists, Mountain Climbers) - 4 sets of 15-20 reps for each exercise"], 20]
      ],
      [
        [["HIIT Circuit (Treadmill High Knees, Squat Jumps, Jumping Jacks)"], 30],
        [["Plyometric Workout (focus on proper form, reduce reps if needed) - 3 sets of 8-10 reps for each exercise"], 20],
        [["Active Recovery (Walking, Yoga)"], 20]
      ],
      [
        [["Power Lifts (Barbell Squats, Deadlifts, Bench Press) - 5 sets of 5 reps (with 2-3 minutes rest between sets)"], 45],
        [["Moderate intensity Cardio"], 30]
      ],
      [
        [["Interval Running (Treadmill Alternating between sprinting and jogging, repeat 3 times with 2 minutes rest in between)"], 40],
        [["Yoga or Stretching"], 15]
      ],
      [
        [["Fartlek Run (Treadmill Alternating between jogging and sprinting paces)"], 60]
      ]
    ],
    [
      [
        [["HIIT Circuit (Burpees, Jump Squats, etc.)"], 45],
        [["Plyometric Workout (Jump Lunges, Plyo Push-ups, Box Jumps) - 4 sets of 10-12 reps for each exercise"], 30]
      ],
      [
        [["Interval Running (Alternating between sprinting and jogging, repeat 3 times with 2 minutes rest between)"], 40],
        [["Yoga or Stretching"], 30]
      ],
      [
        [["Deadlift variations (5 sets of 5 reps) + Box Jumps (5 sets of 10 reps) - Rest 45 seconds between exercises"],30],
        [["Lower Body with Supersets (Squats + Romanian Deadlifts, Lunges + Calf Raises) - 4 sets of 8 reps per exercise (with 60 seconds rest after superset)"], 40]
      ],
      [
        [["Push-up variations (AMRAP sets for 3 minutes) + Battle Ropes (5 sets of 40 seconds work) - Rest 60 seconds between exercises"],30],
        [["Advanced Circuit (Muscle-ups, Plyo Pull-ups, Pistol Squats with Jump) - 4 sets of 8-10 reps for each exercise"], 30]
      ],
      [
        [["Fartlek Run (Alternating between jogging and sprinting paces )"]], 60
      ],
      [
        [["HIIT Circuit (Burpees, Jump Squats)"], 45],
        [["Plyometric Workout (Jump Lunges, Plyo Push-ups, Box Jumps) - 4 sets of 10-12 reps for each exercise"], 20],
        [["Active Recovery (Stretching)"], 15]
      ],
      [
        [["Interval Running (Alternating between sprinting and jogging, repeat 3 times with 2 minutes rest in between)"], 40],
        [["Yoga or Stretching"], 15]
      ],
      [
        [["Power Lifts (Squats, Deadlifts, Bench Press) - 4 sets of 3 reps (with 2-3 minutes rest in between sets)"],40],
        [["Tabata Intervals with Burpees (Alternating between Sprinting for 20 seconds and Burpees for 20 seconds) - 10 rounds of work intervals"], 4]
      ],
      [
        [
          ["Upper Body with Drop Sets (Pull-ups, Rows, Dips) - 3 sets of 10 reps (followed by a drop set of 8-12 reps with reduced weight) - Rest 60 seconds between exercises"],
          30
        ],
        [["Plyometric Circuit with High Knees (Box Jumps, Broad Jumps, Lateral Shuffles with Jumps + High Knees between stations) - 5 rounds of 20 seconds work, 40 seconds rest"], 7],
        [["Active Recovery (Swimming, Cycling)"], 15]
      ],
      [
        [["Deadlift variations (Romanian Deadlifts, Sumo Deadlifts) (5 sets of 5 reps) + Lateral Box Jumps (5 sets of 10 reps) - Rest 45 seconds between exercises"], 30],
        [["Upper Body (Push-ups, Bench Press variations (Incline/Decline), Overhead Press) - 4 sets of 8 reps per exercise (with 60 seconds rest after set)"], 40]
      ],
      [
        [["Hill Sprints (Find a hill and alternate between sprinting up and jogging)"], 20],
        [["Core Circuit (Plank variations, Russian Twists, Mountain Climbers) - 4 sets of 15-20 reps for each exercise"], 20]
      ],
      [
        [["HIIT Circuit (High Knees, Squat Jumps, Jumping Jacks)"], 30],
        [["Plyometric Workout (focus on proper form, reduce reps if needed) - 3 sets of 8-10 reps for each exercise"], 20],
        [["Active Recovery (Walking, Yoga)"], 20]
      ],
      [
        [["Power Lifts (Squats, Deadlifts, Bench Press) - 5 sets of 5 reps (with 2-3 minutes rest in between sets)"], 45],
        [["Moderate intensity Cardio "], 30]
      ],
      [
        [["Interval Running (Alternating between sprinting and jogging, repeat 3 times with 2 minutes rest in between)"], 40],
        [["Yoga or Stretching"], 15]
      ],
      [
        [["Fartlek Run (Alternating between jogging and sprinting paces)"], 60]
      ]
    ]
  ],
  [
    [
      [
        [["Moderate Intensity Treadmill Run"], 30],
        [["Full Body Strength Training Circuit with Equipment (Squats with Barbell, Lunges with Dumbbells, Push-ups, Rows on Machine) - 3 sets of 12-15 reps for each exercise"], 15]
      ],
      [
        [["Interval Training on Treadmill (Alternating between jogging and moderate intensity sprints , repeat 2 times with 2 minutes rest in between)"], 20],
        [["Lower Body Strength Training with Equipment (Leg Press, Calf Raises) - 3 sets of 10-12 reps for each exercise"], 20]
      ],
      [
        [["METCON: Modified Deadlifts with Barbell (3 sets of 8 reps) + Box Jumps (optional, or substitute with Squat Jumps) (3 sets of 10 reps) - Rest 60 seconds"], 20],
        [["Upper Body Strength Training Circuit with Equipment (Chest Press, Lat Pulldowns, Tricep Dips) - 3 sets of 10-12 reps for each exercise"], 20]
      ],
      [
        [["Hill Repeats on Treadmill (Find a moderate incline and alternate between walking briskly uphill and jogging"], 15],
        [["Core Circuit with Equipment (Plank variations, Russian Twists on Stability Ball, Crunches on Decline Bench) - 3 sets of 15-20 reps for each exercise"], 15],
        [["Active Recovery (Walking on Treadmill, Light Yoga)"], 15]
      ],
      [
        [["HIIT Circuit on Treadmill (Modified exercises: High Knees, Jumping Jacks, Butt Kicks)"], 25],
        [["Bodyweight Strength Training with Equipment: Focus on proper form, reduce reps if needed (Squats with Smith Machine, Lunges with Dumbbells, Push-ups on Bosu Ball) - 2 sets of 8-10 reps for each exercise"], 15]
      ],
      [
        [["Cardio: Interval Running on Treadmill (Alternating between jogging and moderate intensity sprints, repeat 2 times with 1 minute rest in between)"], 22],
        [["Rest or Light Active Recovery with Equipment (Yoga or Stretching using Resistance Bands)"], 18]
      ],
      [
        [["Upper Body Strength Training with Equipment (Chest Press, Rows) - 3 sets of 8-10 reps for each exercise"], 30],
        [["Moderate Intensity Treadmill Run "], 15]
      ],
      [
        [["Moderate Intensity Treadmill Run"], 25],
        [["Full Body Strength Training Circuit with Equipment (Squats with Barbell, Lunges with Dumbbells, Rows on Machine, Chest Press) - 3 sets of 10-12 reps for each exercise"], 20]
      ],
      [
        [["Interval Training on Treadmill (Alternating between jogging and moderate intensity sprints, repeat 3 times with 1.5 minutes rest in between)"], 20],
        [["Upper Body Strength Training with Equipment (Chest Press, Overhead Press variations, Dips on Assisted Dip Machine) - 3 sets of 8-10 reps"], 20]
      ],
      [
        [["Cardio: Moderate Intensity Treadmill Run with Inclines "], 20],
        [["Lower Body & Core Circuit with Equipment (Squats with Barbell, Calf Raises, Plank variations on Stability Ball, Russian Twists with Medicine Ball) - 3 sets of 12-15 reps"], 20]
      ],
      [
        [["HIIT Circuit on Treadmill (Modified exercises: Jumping Jacks, Butt Kicks, Squat Jumps with reduced height)"], 20],
        [["Focus on form (Lunges with Dumbbells, Push-ups on Stability Ball, Overhead Press with Barbell) - 2 sets of 8-10 reps"], 15],
        [["Active Recovery with Equipment (Walking on Treadmill, Light Yoga with Resistance Bands)"], 15]
      ],
      [
        [["Interval Running on Treadmill (Alternating between jogging and moderate intensity sprints, repeat 2 times with 1 minute rest in between)"], 25],
        [["Rest or Light Active Recovery with Equipment (Yoga or Stretching using Resistance Bands)"], 20]
      ],
      [
        [["Full Body Strength Training Circuit with Equipment (Squats with Barbell, Lunges with Dumbbells, Push-ups, Rows on Machine) - 3 sets of 12-15 reps"], 30],
        [["Moderate Intensity Treadmill Run "], 15]
      ],
      [
        [["HIIT Circuit on Treadmill (Modified exercises: High Knees, Jumping Jacks, Mountain Climbers)"], 25],
        [["Core & Lower Body Circuit (Plank variations on Stability Ball, Squats with Smith Machine, Lunges with Dumbbells, Glute Bridges with Barbell, Russian Twists with Medicine Ball) - 3 sets of 12-15 reps for each exercise"], 20]
      ]
    ],
    [
      [
      [["Moderate Intensity Cardio "], 30],
      [["Full Body Circuit (Squats, Lunges, Push-ups, Rows) - 3 sets of 12-15 reps for each exercise"], 15]
      ],
      [
      [["Interval Training (Alternating between jogging and moderate intensity sprints, repeat 2 times with 2 minutes rest in between)"], 20],
      [["Lower Body Focus (Squats,Calf Raises) - 3 sets of 10-12 reps for each exercise"], 20]
      ],
      [
      [["Modified Deadlifts (3 sets of 8 reps) + Box Jumps (optional, or substitute with Squat Jumps) (3 sets of 10 reps) - Rest 60 seconds between exercises"], 20],
      [["Upper Body Circuit (Push-ups, Rows, Dips) - 3 sets of 10-12 reps for each exercise"], 20]
      ],
      [
      [["Hill Repeats (Find a moderate incline and alternate between walking briskly uphill and jogging downhill)"], 15],
      [["Core Circuit (Plank variations, Russian Twists, Crunches) - 3 sets of 15-20 reps for each exercise"], 15],
      [["Active Recovery (Walking, Light Yoga)"], 15]
      ],
      [
      [["Cardio: HIIT Circuit (Modified exercises: High Knees, Jumping Jacks, Butt Kicks)"], 25],
      [["Focus on proper form, reduce reps if needed (Squats, Lunges, Push-ups) - 2 sets of 8-10 reps for each exercise"], 15]
      ],
      [
      [["Interval Running (Alternating between jogging and moderate intensity sprints, repeat 2 times with 1 minute rest in between)"], 22],
      [["Rest or Light Active Recovery (Yoga or Stretching)"], 18]
      ],
      [
      [["Upper Body Focus (Push-ups, Rows) - 3 sets of 8-10 reps for each exercise"], 30],
      [["Moderate Intensity Cardio "], 15]
      ],
      [
        [["Moderate Intensity Cardio "], 25],
        [["Full Body Circuit (Push-ups, Lunges, Rows, Squats) - 3 sets of 10-12 reps for each exercise"], 20]
      ],
      [
        [["Interval Training (Alternating between jogging and moderate intensity sprints, repeat 3 times with 1.5 minutes rest in between)"], 20],
        [["Upper Body Focus (Push-ups, Overhead Press variations, Dips) - 3 sets of 8-10 reps"], 20]
      ],
      [
        [["Cardio: Moderate Intensity Cardio with Inclines"], 20],
        [["Strength Training: Lower Body & Core Circuit (Squats, Calf Raises, Plank variations, Russian Twists) - 3 sets of 12-15 reps"], 20]
      ],
      [
        [["HIIT Circuit (Modified exercises: Jumping Jacks, Butt Kicks, Squat Jumps with reduced height)"], 20],
        [["Focus on form (Lunges, Push-ups, Overhead Press) - 2 sets of 8-10 reps"], 15],
        [["Active Recovery (Walking, Light Yoga)"], 15]
      ],
      [
        [["Interval Running (Alternating between jogging and moderate intensity sprints, repeat 2 times with 1 minute rest in between)"], 25],
        [["Rest or Light Active Recovery (Yoga or Stretching)"], 20]
      ],
      [
        [["Full Body Focus (Squats, Lunges, Push-ups, Rows) - 3 sets of 12-15 reps"], 30],
        [["Moderate Intensity Cardio "], 15]
      ],
      [
        [["HIIT Circuit (Modified exercises: High Knees, Jumping Jacks, Mountain Climbers)"], 25]
        [["Core & Lower Body Circuit (Plank variations, Squats, Lunges, Glute Bridges, Russian Twists) - 3 sets of 12-15 reps for each exercise"], 20]
      ]
    ]
  ],
  [
    [
      [
        [["Cardio: Treadmill Walking"], 30]
      ],
      [
        [["Light jumping jacks, arm circles, high knees"], 5],
        [["Beginner Circuit (Squats with Smith Machine, Lunges with Dumbbells, Wall Push-ups, Plank) - 3 sets of 10-12 reps for each exercise"], 20],
        [["Cool-down (walking lunges, arm stretches, light bouncing)"], 5]
      ],
      [
        [["Interval Walking on Treadmill (Alternate between brisk walking and moderate-paced walking, 6 sets)"], 30]
      ],
      [
        [["Light jumping jacks, arm circles, high knees"], 5],
        [["Core Focus (Crunches on Stability Ball, Russian Twists with Medicine Ball, Side Plank variations) - 3 sets of 10-12 reps for each exercise"], 15],
        [["Lower Body Focus with Equipment (Leg Press Machine, Leg Extensions) - 3 sets of 10-12 reps for each exercise"], 10],
        [["Cool-down (walking lunges, arm stretches, light bouncing)"], 5]
      ],
      [
        [["Cardio: Stair Climbing on Stair Climber Machine"], 30]
      ],
      [
        [["Light jumping jacks, arm circles, high knees"], 5],
        [["Upper Body Focus (Chest Press Machine, Shoulder Presses with Dumbbells, Bicep Curls with Dumbbells) - 3 sets of 8-10 reps for each exercise"], 15],
        [["Lower Body Focus with Equipment (Leg Press Machine, Lunges with Dumbbells) - 3 sets of 10-12 reps for each exercise"], 10],
        [["Cool-down (walking lunges, arm stretches, light bouncing"], 5]
      ],
      [
        [["Jogging on Treadmill with Walking Intervals (Alternate between jogging and walking briskly , repeat 10 times)"], 30]
      ],
      [
        [["light jumping jacks, arm circles, high knees"], 5],
        [["Full Body Circuit (Squats with Smith Machine, Lunges with Dumbbells, Push-ups on Bench, Plank variations on Stability Ball) - 3 sets of 8-10 reps for each exercise"], 20],
        [["Cool-down (walking lunges, arm stretches, light bouncing"], 5]
      ],
      [
        [["Jumping Jacks (Perform jumping jacks, rest for 30 seconds, repeat 15 times)"], 30]
      ],
      [
        [["light jumping jacks, arm circles, high knees"], 10],
        [["Strength Training with Equipment: Core & Lower Body Circuit (Crunches on Stability Ball, Russian Twists with Medicine Ball, Side Plank variations, Squats with Smith Machine, Walking Lunges with Dumbbells) - 3 sets of 10-12 reps for each exercise"], 20]
      ]
    ],
    [
      [
        [["Cardio: Brisk Walking"], 30]
      ],
      [
        [["Light jumping jacks, arm circles, high knees"], 5],
        [["Beginner Circuit (Squats, Lunges, Wall Push-ups, Plank (modify on knees if needed)) - 3 sets of 10-12 reps for each exercise"], 20],
        [["Cool-down (walking lunges, arm stretches, light bouncing"], 5]
      ],
      [
        ["Interval Walking (Alternate between brisk walking and moderate-paced walking , repeat 15 times)"], 30]
      ],
      [
        [["Light jumping jacks, arm circles, high knees"], 5,],
        [["Core Focus (Crunches, Russian Twists, Side Plank variations (on knees if needed)) - 3 sets of 10-12 reps for each exercise"], 15,],
        [["Lower Body Focus (Squats, Lunges) - 3 sets of 10-12 reps for each exercise"], 10,],
        [["Cool-down (walking lunges, arm stretches, light bouncing)"], 5]
      ],
      [
        [["Stair Climbing (Find stairs and walk up and down at a moderate pace)"], 30]
      ],
      [
        [["light jumping jacks, arm circles, high knees"], 5,],
        [["Upper Body Focus (Push-ups against a wall, Shoulder Presses with water bottles, Bicep Curls with water bottles) - 3 sets of 8-10 reps for each exercise"], 15],
        [["Lower Body Focus (Squats, Lunges with arm raises) - 3 sets of 10-12 reps for each exercise"], 10],
        [["Cool-down (walking lunges, arm stretches, light bouncing)"], 5]
      ],
      [
        [["Jogging with Walking Intervals (Alternate between jogging for and walking briskly, repeat 10 times)"], 30]
      ],
      [
        [["Light jumping jacks, arm circles, high knees"], 5],
        [["Full Body Circuit (Squats, Lunges, Push-ups against a wall, Plank variations) - 3 sets of 8-10 reps for each exercise"], 20],
        [["Cool-down (walking lunges, arm stretches, light bouncing)"], 5]
      ],
      [
        [["Jumping Jacks (Perform jumping jacks, rest for 30 seconds, repeat 15 times)"], 30]
      ],
      [
        [["Light jumping jacks, arm circles, high knees)"], 10],
        [["Core & Lower Body Circuit (Crunches, Russian Twists, Side Plank variations, Squats with arm raises, Walking Lunges) - 3 sets of 10-12 reps for each exercise"], 20]
      ]
  ]
]

function showPlan(e){
    e.preventDefault();
    let Age= document.getElementById('age').value;
    let Height= document.getElementById('height').value;
    let Weight= document.getElementById('weight').value;
    let Gender= document.getElementById('gender').value;

    let day_mapping = {
      0: "Monday",
      1: "Tuesday",
      2: "Wednesday",
      3: "Thursday",
      4: "Friday",
      5: "Saturday",
      6: "Sunday",
    };

    let FitnessPreference = document.getElementById('FitnessPreference').value;
    let fitnessType = document.getElementById('fitnessType').value;
    let rest_days = document.getElementById('RestDays').value;
    let gym_a = document.getElementById('Gym').value;
    let target_fitness_plans = [];
    if(FitnessPreference == 0)
    {
      target_fitness_plans = cardio_data[fitnessType][gym_a]
    }else if(FitnessPreference == 1){
      target_fitness_plans = fatloss_data[fitnessType][gym_a]
    }else if(FitnessPreference == 2){
      target_fitness_plans = muscle_gain_data[fitnessType][gym_a]
    }else if(FitnessPreference == 3){
      target_fitness_plans = weight_loss_data[fitnessType][gym_a]
    }
    let rest_days_numbers = [];
    if(rest_days==0)
    {
      rest_days_numbers = []
    }else if(rest_days==1)
    {
      rest_days_numbers = [6]
    }else if(rest_days==2){
      rest_days_numbers = [2,6]
    }
    else if(rest_days==3)
    {
      rest_days_numbers = [1,3,5]
    }

    let random_fitness_random = Math.floor(Math.random()*(target_fitness_plans.length))

    let tableContainer = document.getElementById('tableContainer');
    let ftable = document.querySelector('.fitness-table')
    ftable.classList.remove('d-none')
    document.querySelector('.display-exercise-container').classList.remove('d-none')
    let tableHTML = '<h2 class="table-heading" >Here Is Your Fitness Plan 🏋🏻‍♂️ </h2>';
    tableHTML += '<table>';
    tableHTML += '<tr><th>Day</th><th><p class="table-heading-exercise">Exercise</p></th></tr>';
        
    for (let i = 0; i < 7; i++) 
    {
        tableHTML += '<tr class = "table-row">';
        tableHTML += '<td>' + day_mapping[i] + '</td>';
        if(rest_days_numbers.includes(i)){
          tableHTML += '<td><ul><li>' + capitalizeFirstLetters("Rest Day - Allow your body to recover and rebuild muscle. Spend some time stretching, going for a walk, or doing light yoga") + '</li></ul></td>';
          tableHTML += '</tr>';
        }else{
          let fit_string = "<ul>"
          for(let j=0;j<target_fitness_plans[(random_fitness_random+i)%(target_fitness_plans.length)].length;j++)
          {
            let routine = target_fitness_plans[(random_fitness_random+i)%(target_fitness_plans.length)][j][0]
            let dura = target_fitness_plans[(random_fitness_random+i)%(target_fitness_plans.length)][j][1]
            let dura_string =dura.toString()
            console.log(routine)
            let combinedstring = "<li>"+capitalizeFirstLetters(routine[0])+" "+" ( "+dura_string+" Minutes )"+"</li>"
            fit_string= fit_string + combinedstring
          }
          fit_string = fit_string+"</ul>"
          tableHTML += '<td>' +fit_string+ '</td>';
          tableHTML += '</tr>';
        }
        
    }
  
    tableHTML += '</table>';
    tableContainer.innerHTML = tableHTML;
    const section1 = document.querySelectorAll(".table-row");
    console.log(section1)
    let len = section1.length;
    const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
          section1.forEach((sect)=>{
          animateElement(sect);
          })
          observer.unobserve(entry.target);
          }
      });
      });
    for(let i=0;i<len;i++) {
        if(i%2==1)
        {
          section1[i].classList.add('odd')
        }
        else{
          section1[i].classList.add('even')
        }
          observer.observe(section1[i]);   
        }
            // Function to animate the element based on its ID
    function animateElement(element) {
        const elementClasses = element.classList;
        if (elementClasses.contains("odd")) {
              element.style.animation = "fadeInLeft 2s ease-in-out forwards";
          } else if (elementClasses.contains("even")) {
                element.style.animation = "fadeInRight 2s ease-in-out forwards";
              }
        }        
    }
    document.getElementById('fitness-form').addEventListener("submit",showPlan)
    document.addEventListener("DOMContentLoaded", function () {
    const section1 = document.querySelector(".ff-fc-bg");
    const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateElement(entry.target);
        observer.unobserve(entry.target);
      }
    });
  });
  observer.observe(section1);
  function animateElement(element) {
    const elementClasses = element.classList;
    if (elementClasses.contains("ff-fc-bg")) {
      element.style.animation = "disappear 2s ease-in-out forwards";
    } 
  }
});



	

