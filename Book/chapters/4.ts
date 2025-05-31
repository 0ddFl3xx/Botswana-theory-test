import { Chapter } from "../types";

export const chapter4: Chapter = {
  topicID: "chapter_4",
  topic: "Traffic Routes: Use, Risks and Importance",
  content: [
    {
      id: 1,
      question:
        "Which motor vehicles must, if possible, use the hard shoulder on country roads?",
      answers: [
        {
          text: "Farm tractors and working machines driving at low speed",
          isCorrect: true,
        },
        { text: "Mopeds and invalid carriages", isCorrect: true },
        { text: "Sports cars", isCorrect: false },
        { text: "Delivery trucks", isCorrect: false },
      ],
    },
    {
      id: 2,
      question: "What are you allowed to use the left-hand hard shoulder for?",
      img: "/question-images/13-16/13-16_01.png",
      answers: [
        { text: "Stopping and parking", isCorrect: true },
        { text: "Driving with slow vehicles", isCorrect: true },
        { text: "Overtaking other vehicles", isCorrect: false },
        { text: "Making U-turns", isCorrect: false },
      ],
    },
    {
      id: 3,
      question:
        "You are driving in dense fog on a road outside a built-up area. Are you allowed to drive in the middle of the road continuously straddling the broken white line?",
      answers: [
        {
          text: "No, because it could represent a danger to oncoming traffic",
          isCorrect: true,
        },
        { text: "Yes, if there is no oncoming traffic", isCorrect: false },
        { text: "Only if you drive very slowly", isCorrect: false },
      ],
    },
    {
      id: 4,
      question:
        "You are driving on a road outside a built-up area with three lanes in your direction. Individual vehicles are traveling well spaced out in the left-hand lane. Which lane may you use continuously?",
      answers: [
        { text: "The middle lane", isCorrect: true },
        { text: "The right-hand lane", isCorrect: false },
        { text: "The left-hand lane", isCorrect: false },
      ],
    },
    {
      id: 5,
      question:
        "Which motor vehicles may freely choose their lane inside built-up areas?",
      answers: [
        {
          text: "All motor vehicles with a permissible total mass of up to ((3.5)) t",
          isCorrect: true,
        },
        { text: "Only motorcycles", isCorrect: false },
        { text: "Only buses", isCorrect: false },
      ],
    },
    {
      id: 6,
      question:
        "In which cases are you allowed to drive faster on the left-hand side than on the right-hand side of roads with marked lanes?",
      answers: [
        { text: "When queues of vehicles have formed", isCorrect: true },
        {
          text: "When arrows for the individual lanes point in different directions",
          isCorrect: true,
        },
        { text: "When driving in a residential area", isCorrect: false },
        { text: "When you are in a hurry", isCorrect: false },
      ],
    },
    {
      id: 7,
      question:
        "What leads frequently to serious accidents when overtaking on Highways?",
      answers: [
        {
          text: "Not keeping a close enough eye on the traffic situation behind",
          isCorrect: true,
        },
        { text: "Driving too close to the vehicle in front", isCorrect: true },
        { text: "Checking mirrors frequently", isCorrect: false },
        { text: "Using turn signals", isCorrect: false },
      ],
    },
    {
      id: 8,
      question:
        "Are you allowed to overtake the black car on this Highways on the left?",
      img: "/question-images/13-16/13-16_02.png",
      answers: [
        {
          text: "No, because there is no queue of vehicles in the right lane",
          isCorrect: true,
        },
        { text: "Yes, if you accelerate quickly", isCorrect: false },
        {
          text: "Only if the black car is driving very slowly",
          isCorrect: false,
        },
      ],
    },
    {
      id: 9,
      question: "What must you reckon with on this Highway car park?",
      img: "/question-images/13-16/13-16_03.png",
      answers: [
        { text: "People suddenly stepping onto the roadway", isCorrect: true },
        { text: "Danger of skidding when you brake", isCorrect: true },
        { text: "All vehicles will be parked correctly", isCorrect: false },
        { text: "The car park will be empty", isCorrect: false },
      ],
    },
    {
      id: 10,
      question:
        "You are driving at least 20 km/h faster than the truck. What is correct?",
      img: "/question-images/13-16/13-16_04.png",
      answers: [
        {
          text: "Overtake the truck on the left and join the Highway",
          isCorrect: true,
        },
        { text: "Stay behind the truck", isCorrect: false },
        { text: "Overtake the truck on the right", isCorrect: false },
      ],
    },
    {
      id: 11,
      question:
        "After a long journey at about 120 km/h, you want to leave the Highway. What must you remember?",
      answers: [
        {
          text: "Indicate in good time and reduce speed on the exit lane",
          isCorrect: true,
        },
        {
          text: "Check the speedometer to ensure that you do not underestimate your speed",
          isCorrect: true,
        },
        { text: "Brake suddenly on the Highway", isCorrect: false },
        { text: "Exit without indicating", isCorrect: false },
      ],
    },
    {
      id: 12,
      question:
        "You want to leave the Highway. The next exit has an exit lane. What must you do?",
      answers: [
        {
          text: "Use the right-hand lane early enough and indicate in good time",
          isCorrect: true,
        },
        { text: "Reduce and check speed in the exit lane", isCorrect: true },
        { text: "Brake suddenly just before the exit", isCorrect: false },
        { text: "Exit from the left lane", isCorrect: false },
      ],
    },
    {
      id: 13,
      question:
        "You are approaching the vehicles in the picture. What do you do?",
      img: "/question-images/13-16/13-16_05.png",
      answers: [
        {
          text: "Stay in the middle lane, reduce speed and do not overtake the cars",
          isCorrect: true,
        },
        { text: "Overtake all cars on the right", isCorrect: false },
        { text: "Accelerate to get past the cars quickly", isCorrect: false },
      ],
    },
    {
      id: 14,
      question: "What must you do here?",
      img: "/question-images/13-16/13-16_06.png",
      answers: [
        {
          text: "Check your speed again and, if necessary, brake",
          isCorrect: true,
        },
        { text: "Accelerate to maintain speed", isCorrect: false },
        { text: "Ignore the curve and continue straight", isCorrect: false },
      ],
    },
    {
      id: 15,
      question: "What must you reckon with here?",
      img: "/question-images/13-16/13-16_07.png",
      answers: [
        { text: "A traffic jam on the bend", isCorrect: true },
        { text: "The bend will narrow", isCorrect: true },
        { text: "The bend will widen", isCorrect: false },
        { text: "The road will be perfectly straight", isCorrect: false },
      ],
    },
    {
      id: 16,
      question: "What must you remember when you join the Highway?",
      answers: [
        { text: "The traffic on the Highway has priority", isCorrect: true },
        {
          text: "You may drive faster in the accelerating lane than in the Highway lane",
          isCorrect: true,
        },
        { text: "You have priority over Highway traffic", isCorrect: false },
        {
          text: "You should stop at the end of the accelerating lane",
          isCorrect: false,
        },
      ],
    },
    {
      id: 17,
      question:
        "You want to join the driving lane of the Highway from the accelerating lane. Where must you stop, if necessary, on the accelerating lane, if you cannot join because of the high traffic density?",
      answers: [
        { text: "Toward the end of the accelerating lane", isCorrect: true },
        { text: "At the beginning of the accelerating lane", isCorrect: false },
        { text: "In the middle of the accelerating lane", isCorrect: false },
      ],
    },
    {
      id: 18,
      question:
        "What do you do if a driver is following you closely on the Highway and urges you constantly by flashing his headlights to clear the overtaking lane?",
      answers: [
        {
          text: "You move over to the left lane as soon as possible",
          isCorrect: true,
        },
        {
          text: "You speed up to prevent him from overtaking",
          isCorrect: false,
        },
        { text: "You brake suddenly to make him slow down", isCorrect: false },
      ],
    },
    {
      id: 19,
      question:
        "While you are stationary in a traffic jam, you see in the rear-view mirror that a motorcyclist ignores the regulations and is threading his way through. What do you do?",
      answers: [
        { text: "You allow him to pass", isCorrect: true },
        { text: "You block his path", isCorrect: false },
        { text: "You open your door to stop him", isCorrect: false },
      ],
    },
    {
      id: 20,
      question:
        "You want to quickly overtake a queue of cars on the Highway. A car traveling at lower speed stops you from doing so. You are annoyed and frustrated. What do you do?",
      answers: [
        {
          text: "You control yourself and wait until overtaking is possible",
          isCorrect: true,
        },
        {
          text: "You honk your horn repeatedly to make the car move faster",
          isCorrect: false,
        },
        { text: "You overtake on the hard shoulder", isCorrect: false },
      ],
    },
    {
      id: 21,
      question:
        "In which cases are you allowed to drive faster on the left lane than on the right?",
      answers: [
        {
          text: "When queues of vehicles have formed in thick traffic",
          isCorrect: true,
        },
        {
          text: "When you want to join a motorway in an acceleration lane",
          isCorrect: true,
        },
        {
          text: "When there are no other vehicles on the road",
          isCorrect: false,
        },
        { text: "When you are driving a sports car", isCorrect: false },
      ],
    },
    {
      id: 22,
      question:
        "What is the recommended speed that applies to cars and motorcycles on the Highway?",
      answers: [
        { text: "((130)) km/h", isCorrect: true },
        { text: "((80)) km/h", isCorrect: false },
        { text: "((160)) km/h", isCorrect: false },
      ],
    },
    {
      id: 23,
      question: "You are driving in the acceleration lane. What do you do?",
      answers: [
        {
          text: "Accelerate adequately if possible, avoid stopping, observe priority and filter into the stream of traffic",
          isCorrect: true,
        },
        {
          text: "Pass vehicles traveling more slowly in the driving lane on the left and filter into the stream of traffic in front of them",
          isCorrect: true,
        },
        {
          text: "Stop at the end of the acceleration lane and wait for a gap",
          isCorrect: false,
        },
        { text: "Force your way into the traffic flow", isCorrect: false },
      ],
    },
    {
      id: 24,
      question:
        "What must you do in a traffic jam on two-lane clearways for motor vehicles only?",
      answers: [
        {
          text: "Vehicles driving on the right must keep well over to the right and vehicles driving on the left must keep well over to the left so that a channel is let clear for emergency vehicles",
          isCorrect: true,
        },
        {
          text: "Stay in your lane and do not create a channel",
          isCorrect: false,
        },
        {
          text: "Drive onto the hard shoulder to create a channel",
          isCorrect: false,
        },
      ],
    },
    {
      id: 25,
      question:
        "You are driving in the right of two lanes and approaching a vehicle that has just started to overtake. What do you do?",
      answers: [
        {
          text: "Keep an adequate distance behind the vehicle in front",
          isCorrect: true,
        },
        { text: "Allow the vehicle in front to overtake", isCorrect: true },
        {
          text: "Accelerate to prevent the vehicle from overtaking you",
          isCorrect: false,
        },
        { text: "Honk your horn to warn the vehicle", isCorrect: false },
      ],
    },
    {
      id: 26,
      question:
        "You are driving on the Highway in light traffic. How long are you allowed to stay in the right-hand lane?",
      answers: [
        {
          text: "As long as is necessary to overtake other vehicles",
          isCorrect: true,
        },
        {
          text: "As long as you are driving behind a vehicle which is overtaking on the right-hand lane",
          isCorrect: true,
        },
        {
          text: "You must always stay in the right-most lane",
          isCorrect: false,
        },
        {
          text: "You can stay in the right lane indefinitely",
          isCorrect: false,
        },
      ],
    },
    {
      id: 27,
      question: "You have missed the Highway exit. What do you do?",
      answers: [
        { text: "Drive on to the next exit", isCorrect: true },
        { text: "Reverse to the exit", isCorrect: false },
        { text: "Make a U-turn on the Highway", isCorrect: false },
      ],
    },
    {
      id: 28,
      question: "What applies on clearways for motor vehicles only?",
      answers: [
        { text: "No U-turns", isCorrect: true },
        {
          text: "Join the clearway only at crossroads and junctions",
          isCorrect: true,
        },
        { text: "U-turns are allowed if traffic is clear", isCorrect: false },
        { text: "You can join anywhere you like", isCorrect: false },
      ],
    },
    {
      id: 29,
      question:
        "What top speed must be entered in the vehicle documents to allow the vehicle's use on Highways?",
      answers: [
        { text: "More than ((60)) km/h", isCorrect: true },
        { text: "Exactly 60 km/h", isCorrect: false },
        { text: "Less than 60 km/h", isCorrect: false },
      ],
    },
    {
      id: 30,
      question:
        "A traffic jam has formed on a three-lane Highway. Where must the channel for emergency vehicles be formed?",
      answers: [
        {
          text: "Between the right-hand and the middle lanes",
          isCorrect: true,
        },
        { text: "Between the middle and left-hand lanes", isCorrect: false },
        { text: "On the hard shoulder", isCorrect: false },
      ],
    },
    {
      id: 31,
      question:
        "Your vehicle has broken down on the Highway. What must you remember when having it towed away?",
      answers: [
        {
          text: "You must leave the Highway at the next exit",
          isCorrect: true,
        },
        {
          text: "During towing, both vehicles must have their hazard warning lights switched on",
          isCorrect: true,
        },
        {
          text: "You can be towed to any destination you choose",
          isCorrect: false,
        },
        {
          text: "Hazard warning lights are not necessary if it's daylight",
          isCorrect: false,
        },
      ],
    },
    {
      id: 32,
      question: "What applies on Highways?",
      answers: [
        {
          text: "No stopping on the roadway and hard shoulder",
          isCorrect: true,
        },
        { text: "No reversing", isCorrect: true },
        {
          text: "Stopping on the hard shoulder is allowed for a quick break",
          isCorrect: false,
        },
        { text: "Reversing is allowed in an emergency", isCorrect: false },
      ],
    },
    {
      id: 33,
      question:
        "What is the maximum speed at which you are allowed to drive a car with a trailer on the Highway?",
      answers: [
        { text: "((80)) km/h", isCorrect: true },
        { text: "((100)) km/h", isCorrect: false },
        { text: "((60)) km/h", isCorrect: false },
      ],
    },
  ],
};
