import { Chapter } from "../types";

export const chapter1: Chapter = {
  topicID: "chapter_1",
  topic: "Personal Requirements: Fitness To Drive",
  content: [
    {
      id: 1,
      question: "What can be the cause for veering off the roadway?",
      answers: [
        { text: "Excessive speed", isCorrect: true },
        { text: "Inattentiveness, distraction", isCorrect: true },
        { text: "Fatigue", isCorrect: true },
        { text: "Talking Too much", isCorrect: false },
        { text: "Smoking a cigarette", isCorrect: false },
      ],
    },
    {
      id: 2,
      question:
        "What must you do if you notice signs of fatigue when driving (e.g., open stretches of road at night, heavy eyelids, feeling chilly, or even frights, etc.)?",
      answers: [
        {
          text: "Interrupt your journey for an adequate break",
          isCorrect: true,
        },
        { text: "Turn up the radio to stay awake", isCorrect: false },
        { text: "Drink more coffee", isCorrect: false },
      ],
    },
    {
      id: 3,
      question: "How can fatigue be prevented on a long journey?",
      answers: [
        {
          text: "By well-timed and sufficient stops for rests",
          isCorrect: true,
        },
        { text: "Gymnastic exercises during stops", isCorrect: true },
        {
          text: "Driving faster to reach the destination sooner",
          isCorrect: false,
        },
        { text: "Taking a nap while driving", isCorrect: false },
      ],
    },
    {
      id: 4,
      question: "What can diminish alertness in road traffic?",
      answers: [
        {
          text: "Strong emotions (e.g. delight, annoyance, impatience)",
          isCorrect: true,
        },
        { text: "Animated conversation", isCorrect: true },
        { text: "Engrossing programs on the car radio", isCorrect: true },
        { text: "Having a well-maintained vehicle", isCorrect: false },
        { text: "Driving on familiar roads", isCorrect: false },
      ],
    },
    {
      id: 5,
      question: "What strongly distracts you while you are driving?",
      answers: [
        { text: "Telephoning", isCorrect: true },
        { text: "Lighting a cigarette", isCorrect: true },
        { text: "Nagging children on the backseats", isCorrect: true },
        { text: "Checking mirrors frequently", isCorrect: false },
        { text: "Adjusting the air conditioning", isCorrect: false },
      ],
    },
    {
      id: 6,
      question: "What can prevent you from hearing warning signals?",
      answers: [
        { text: "Having the radio on too loud", isCorrect: true },
        { text: "Using headphones", isCorrect: true },
        { text: "The exhaust being too loud", isCorrect: true },
        { text: "Driving with windows open", isCorrect: false },
        { text: "Having passengers talking quietly", isCorrect: false },
      ],
    },
    {
      id: 7,
      question: "What does 'power sound' in the car result in?",
      answers: [
        {
          text: "Signals from other traffic – in particular sirens – are not heard",
          isCorrect: true,
        },
        {
          text: "There is noise pollution for others even when the windows are closed",
          isCorrect: true,
        },
        {
          text: "Driving errors due to the driver being diverted",
          isCorrect: true,
        },
        { text: "Improved concentration for the driver", isCorrect: false },
        { text: "Faster driving speeds", isCorrect: false },
      ],
    },
    {
      id: 8,
      question:
        "A motorist has drunk too much alcohol and for this reason must not drive. How can his fitness to drive not be restored in a short time?",
      answers: [
        { text: "By sleeping for half an hour", isCorrect: true },
        { text: "By drinking two cups of strong coffee", isCorrect: true },
        { text: "By going for a half hour's walk", isCorrect: true },
        { text: "By eating a large meal", isCorrect: false },
        { text: "By taking a cold shower", isCorrect: false },
      ],
    },
    {
      id: 9,
      question:
        "Can a motorist's fitness to drive be impaired by even relatively small quantities of alcohol?",
      answers: [
        {
          text: "Yes, even small quantities of alcohol can impair fitness to drive",
          isCorrect: true,
        },
        {
          text: "No, small quantities of alcohol have no effect",
          isCorrect: false,
        },
        {
          text: "Only large quantities of alcohol impair fitness to drive",
          isCorrect: false,
        },
      ],
    },
    {
      id: 10,
      question:
        "Which substances can impair fitness to drive in a similar way to alcohol?",
      answers: [
        { text: "Certain medicines and intoxicants", isCorrect: true },
        { text: "Coffee and tea", isCorrect: false },
        { text: "Vitamin supplements", isCorrect: false },
      ],
    },
    {
      id: 11,
      question: "What can impair fitness to drive?",
      answers: [
        { text: "Fatigue", isCorrect: true },
        { text: "Alcohol and other intoxicants", isCorrect: true },
        { text: "Certain medicines", isCorrect: true },
        {
          text: "Listening to the radio at a moderate volume",
          isCorrect: false,
        },
        { text: "Driving in daylight", isCorrect: false },
      ],
    },
    {
      id: 12,
      question:
        "Above which alcohol level in your blood can you expect your fitness to drive to be impaired?",
      answers: [
        { text: "0.3 per mille (30 mg/100 ml)", isCorrect: true },
        { text: "0.1 per mille (10 mg/100 ml)", isCorrect: false },
        { text: "0.8 per mille (80 mg/100 ml)", isCorrect: false },
      ],
    },
    {
      id: 13,
      question:
        "How long can hashish and its catabolite (decomposition products) be detected in urine?",
      answers: [
        { text: "Weeks later", isCorrect: true },
        { text: "Hours later", isCorrect: false },
        { text: "Days later", isCorrect: false },
      ],
    },
    {
      id: 14,
      question:
        "In general, how long does it take before an alcohol level of 1.0 per mille (100 mg/100 ml) is cleared from the blood stream?",
      answers: [
        { text: "10 hours", isCorrect: true },
        { text: "1 hour", isCorrect: false },
        { text: "3 hours", isCorrect: false },
      ],
    },
    {
      id: 15,
      question: "Which of the following are unfit to drive motor vehicles?",
      answers: [
        {
          text: "Persons who regularly take drugs (e.g. hashish, heroin, cocaine), even if they are not unfit to drive at the time of the journey",
          isCorrect: true,
        },
        {
          text: "Persons who smoke a single hashish cigarette per day",
          isCorrect: true,
        },
        {
          text: "Persons who occasionally drink alcohol",
          isCorrect: false,
        },
        { text: "Persons who consume caffeine", isCorrect: false },
      ],
    },
    {
      id: 16,
      question: "What can increase the intoxicating effect of alcohol?",
      answers: [
        {
          text: "Sleeping pills, painkillers or sedatives",
          isCorrect: true,
        },
        { text: 'Drinking on an "empty" stomach', isCorrect: true },
        { text: "Downing alcoholic drinks in one", isCorrect: true },
        { text: "Eating a large meal before drinking", isCorrect: false },
        { text: "Drinking water alongside alcohol", isCorrect: false },
      ],
    },
    {
      id: 17,
      question:
        "May a person who has just smoked a hashish cigarette drive a motor vehicle?",
      answers: [
        {
          text: "No, because he/she could be unfit to drive",
          isCorrect: true,
        },
        { text: "Yes, if they feel capable", isCorrect: false },
        {
          text: "Only if they have a passenger to assist",
          isCorrect: false,
        },
      ],
    },
    {
      id: 18,
      question: "What can be the effects of even small quantities of alcohol?",
      answers: [
        { text: "Delayed reactions", isCorrect: true },
        { text: "Reckless driving", isCorrect: true },
        { text: "Impairment of hearing and vision", isCorrect: true },
        { text: "Improved coordination", isCorrect: false },
        { text: "Increased alertness", isCorrect: false },
      ],
    },
    {
      id: 19,
      question:
        "When is a drug-dependent person fit to drive a motor vehicle again?",
      answers: [
        {
          text: "After presenting a proof that he/she has not taken any drugs for a whole year and there is no likelihood of a relapse",
          isCorrect: true,
        },
        { text: "After a week of being drug-free", isCorrect: false },
        {
          text: "Immediately after completing a rehabilitation program",
          isCorrect: false,
        },
      ],
    },
    {
      id: 20,
      question: "What effects can drugs have?",
      answers: [
        { text: "Intoxication", isCorrect: true },
        { text: "Dependence, addiction", isCorrect: true },
        { text: "Increased driving ability", isCorrect: false },
        { text: "Enhanced senses", isCorrect: false },
      ],
    },
    {
      id: 21,
      question:
        "How is the intoxicating substance in hashish broken down by the body?",
      answers: [
        { text: "Unevenly over an indeterminate period", isCorrect: true },
        { text: "Quickly and completely", isCorrect: false },
        { text: "Only when the person is asleep", isCorrect: false },
      ],
    },
    {
      id: 22,
      question:
        "Which drugs can make a person temporarily unfit to drive even when consumed on a single occasion?",
      answers: [
        { text: "Hashish, marijuana", isCorrect: true },
        { text: "Heroin, cocaine, amphetamines", isCorrect: true },
        { text: "LSD, Dagga", isCorrect: true },
        { text: "Paracetamol", isCorrect: false },
        { text: "Caffeine pills", isCorrect: false },
      ],
    },
    {
      id: 23,
      question:
        "Why are drugs (e.g. hashish, heroin, cocaine) still dangerous even if they are just taken on a single occasion?",
      answers: [
        {
          text: "They can cause the person to be unfit to drive",
          isCorrect: true,
        },
        {
          text: "They can produce intoxication lasting several hours",
          isCorrect: true,
        },
        {
          text: "They have no effect on driving ability",
          isCorrect: false,
        },
        { text: "They make the driver more cautious", isCorrect: false },
      ],
    },
    {
      id: 24,
      question:
        "What are the consequences for a person driving a motor vehicle under the influence of drugs (e.g. hashish, heroin, cocaine)?",
      answers: [
        {
          text: "Confiscation of driving license or driving ban",
          isCorrect: true,
        },
        { text: "Fine and/or imprisonment", isCorrect: true },
        {
          text: "Compulsory medical/psychological examination",
          isCorrect: true,
        },
        { text: "A commendation for bravery", isCorrect: false },
        { text: "A free car wash", isCorrect: false },
      ],
    },
    {
      id: 25,
      question: "What are the possible effects of hashish consumption?",
      answers: [
        {
          text: "Intoxication with dangerous hallucination and reduced reaction capability",
          isCorrect: true,
        },
        {
          text: "Intoxication with confusion and depression",
          isCorrect: true,
        },
        { text: "Enhanced mental clarity", isCorrect: false },
        { text: "Increased physical endurance", isCorrect: false },
      ],
    },
    {
      id: 26,
      question: "What are the possible effects of hashish consumption?",
      answers: [
        { text: "Diminished awareness of danger", isCorrect: true },
        {
          text: "Increased likelihood of mistakes in assimilating information",
          isCorrect: true,
        },
        { text: "Misjudgment of speed and distance", isCorrect: true },
        { text: "Improved short-term memory", isCorrect: false },
        { text: "Reduced stress while driving", isCorrect: false },
      ],
    },
    {
      id: 27,
      question: "What are the possible effects of hashish consumption?",
      answers: [
        { text: "Impaired attention and concentration", isCorrect: true },
        { text: "Heightened sensory perception", isCorrect: false },
        { text: "Improved decision-making skills", isCorrect: false },
      ],
    },
    {
      id: 28,
      question:
        "Immediately before setting off you have felt very angry and you are furious. What is right?",
      answers: [
        {
          text: "You should not drive when you are furious",
          isCorrect: true,
        },
        { text: "Driving can help to calm you down", isCorrect: false },
        {
          text: "It's fine to drive as long as you're careful",
          isCorrect: false,
        },
      ],
    },
    {
      id: 29,
      question:
        "What do you think of drivers who travel too fast under pressure of time and do not observe speed regulations?",
      answers: [
        {
          text: "Pressure of time is no justification for ignoring traffic regulations",
          isCorrect: true,
        },
        {
          text: "It's acceptable if they are in a hurry",
          isCorrect: false,
        },
        {
          text: "They are skilled drivers who can handle the speed",
          isCorrect: false,
        },
      ],
    },
    {
      id: 30,
      question:
        "A car with a young driver has stopped next to you at a red traffic light. He is playing with his accelerator and obviously intends to start first and shake you off when the lights change. How do you react?",
      answers: [
        {
          text: "You ignore the challenge, remain cool and let the other car drive off",
          isCorrect: true,
        },
        {
          text: "You accept the challenge and try to accelerate faster",
          isCorrect: false,
        },
        {
          text: "You honk your horn to show your displeasure",
          isCorrect: false,
        },
      ],
    },
  ],
};
