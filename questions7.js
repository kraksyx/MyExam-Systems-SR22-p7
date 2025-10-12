const questions = [
  {
    "question": "313. Where is the expiration date of the ELT batteries indicated?",
    "options": ["In the Garmin avionics system", "On the ELT control switch", "On the aircraft’s control panel", "On the outside of the ELT battery case and recorded in the aircraft logs"],
    "correct": 3
  },
  {
    "question": "314. What does the warning buzzer do when the ELT is activated?",
    "options": ["It emits a constant tone", "It “beeps” periodically", "It remains silent", "It flashes a light"],
    "correct": 1
  },
  {
    "question": "315. What is the role of the warning buzzer in relation to the ELT panel indicator?",
    "options": ["It controls the ELT panel indicator", "It deactivates the ELT panel indicator", "It replaces the ELT panel indicator", "It operates in tandem with the ELT panel indicator and serves as a redundant annunciation"],
    "correct": 3
  },
  {
    "question": "316. What powers the warning buzzer?",
    "options": ["The avionics system", "A separate battery pack", "The ELT batteries", "The aircraft’s main electrical system"],
    "correct": 2
  },
  {
    "question": "317. Where does the ram air for heating come from?",
    "options": ["The engine compartment", "The RH instrument panel", "The NACA inlet", "The cabin mixing chamber"],
    "correct": 2
  },
  {
    "question": "318. Where does the ram air flow after entering the NACA inlet?",
    "options": ["Directly into the cabin", "Into the engine compartment", "Through the hot air valve", "Through the upper cowl and ducted to the heat exchanger"],
    "correct": 3
  },
  {
    "question": "319. Where is the hot air valve mounted?",
    "options": ["In the engine compartment", "On the forward side of the firewall", "In the cabin mixing chamber", "On the RH instrument panel"],
    "correct": 1
  },
  {
    "question": "320. What does the hot air valve control?",
    "options": ["The entry of hot air into the cabin distribution system", "The engine cooling airflow", "The temperature selector", "The ram air from the NACA inlet"],
    "correct": 0
  },
  {
    "question": "321. What happens when the hot air valve is open?",
    "options": ["The air flows into the cabin mixing chamber", "The heated air is exhausted overboard", "The air is routed to the heat exchanger", "The heated air exits into the engine compartment"],
    "correct": 0
  },
  {
    "question": "322. What happens when the hot air valve is closed?",
    "options": ["The ram air is redirected to the NACA inlet", "The heated air flows into the cabin mixing chamber", "The heated air exits into the engine compartment and is exhausted overboard with the engine cooling airflow", "The cabin heat increases"],
    "correct": 2
  },
  {
    "question": "323. How is cabin heat regulated?",
    "options": ["By adjusting the engine cooling airflow", "By turning the heat exchanger on or off", "By changing the ram air flow through the NACA inlet", "By controlling the volume of hot air admitted into the distribution system’s air mixing chamber"],
    "correct": 3
  },
  {
    "question": "324. How is the proportion of heated air to fresh air adjusted?",
    "options": ["Using the hot air valve", "Using a control in the engine compartment", "Using the cabin mixing chamber directly", "Using the temperature selector mounted on the RH instrument panel"],
    "correct": 3
  },
  {
    "question": "325. What type of fire extinguisher is installed in the airplane?",
    "options": ["Foam-type fire extinguisher", "Liquefied-gas-type fire extinguisher containing Halon 1211", "Water-based fire extinguisher", "Dry powder-type fire extinguisher"],
    "correct": 1
  },
  {
    "question": "326. Where is the fire extinguisher mounted?",
    "options": ["On the aft side of the cabin bulkhead", "On the RH instrument panel", "On the forward outboard side of the pilot-side footwell", "In the baggage compartment"],
    "correct": 2
  },
  {
    "question": "327. What types of fires is the fire extinguisher approved for?",
    "options": ["Class A (ordinary combustibles) and class B (liquid, grease) fires", "Class C (electrical equipment) and class D (metals) fires", "Class B (liquid, grease) and class C (electrical equipment) fires", "Class A (ordinary combustibles) and class D (metals) fires"],
    "correct": 2
  },
  {
    "question": "328. What is installed to prevent inadvertent discharge of the fire extinguisher?",
    "options": ["A locking lever", "A pin through the discharge mechanism", "A sealed nozzle", "A safety cap"],
    "correct": 1
  },
  {
    "question": "329. What must be done with the fire extinguisher after each use?",
    "options": ["It must be recharged or replaced", "It must be inspected and reused", "It must be cleaned and stored", "It must be discarded without replacement"],
    "correct": 0
  },
  {
    "question": "330. What happens when the rocket launches?",
    "options": ["The parachute assembly is extracted outward due to rocket thrust and rearward due to relative wind", "The parachute inflates immediately", "The rocket thrust pushes the parachute downward", "The parachute assembly is extracted inward"],
    "correct": 0
  },
  {
    "question": "331. What forces cause the parachute assembly to be extracted?",
    "options": ["Rocket thrust and gravity", "Relative wind and air pressure", "Rocket thrust and cabin pressure", "Rocket thrust and relative wind"],
    "correct": 3
  },
  {
    "question": "332. How long does it take for the parachute to begin to inflate after the rocket launches?",
    "options": ["Approximately one second", "Approximately two seconds", "Approximately five seconds", "Approximately ten seconds"],
    "correct": 1
  },
  {
    "question": "333. What type of harnesses are used for the front and back seats?",
    "options": ["Front seats: 4-point harness, Back seats: 3-point harness", "Front seats: 3-point harness, Back seats: 4-point harness", "Front seats: 2-point harness, Back seats: 3-point harness", "Front seats: 5-point harness, Back seats: 2-point harness"],
    "correct": 0
  },
  {
    "question": "334. What material are the main wheels made of?",
    "options": ["Composite", "Aluminum", "Steel", "Rubber"],
    "correct": 0
  },
  {
    "question": "335. What are the dimensions of the nose wheel and main wheels?",
    "options": ["Nose wheel: 5x5, Main wheels: 6x6", "Nose wheel: 4x4, Main wheels: 5x5", "Nose wheel: 6x6, Main wheels: 4x4", "Nose wheel: 6x6, Main wheels: 5x5"],
    "correct": 0
  },
  {
    "question": "336. How is the fuel injection system operated?",
    "options": ["Continuous injection, automatically controlled", "Intermittent injection, automatically controlled", "Intermittent injection, pilot controls it", "Continuous injection, pilot controls it"],
    "correct": 3
  },
  {
    "question": "337. Are the alternators self-exciting?",
    "options": ["Only one alternator is self-exciting", "Both alternators are self-exciting", "Neither alternator is self-exciting", "The alternators do not require excitation"],
    "correct": 2
  },
  {
    "question": "338. What material is the main landing gear made of?",
    "options": ["Composite", "Steel", "Aluminum", "Titanium"],
    "correct": 0
  },
  {
    "question": "339. What material is the nose wheel made of?",
    "options": ["Plastic", "Aluminum", "Composite", "Tubular steel"],
    "correct": 3
  },
  {
    "question": "340. What can be done with the baggage compartment and back seats?",
    "options": ["Baggage compartment can be extended, back seats can be folded", "Neither the baggage compartment nor the back seats can be adjusted", "Baggage compartment cannot be extended, back seats can be folded", "Baggage compartment can be extended, back seats cannot be folded"],
    "correct": 0
  },
  {
    "question": "341. Where does the alternator air come from?",
    "options": ["Outside the aircraft", "Inside cabin", "Engine compartment", "Fuel tank"],
    "correct": 1
  },
  {
    "question": "342. Where is the adjustment for panel lights located?",
    "options": ["Instrument panel", "Bolster panel", "Side panel", "Overhead panel"],
    "correct": 1
  },
  {
    "question": "343. Is the statement 'Honey comb true' correct for the aircraft structure?",
    "options": ["The aircraft uses a honeycomb structure only in the wings", "No, the aircraft does not use a honeycomb structure", "The aircraft uses a partial honeycomb structure", "Yes, the aircraft uses a honeycomb structure"],
    "correct": 3
  },
  {
    "question": "344. Does the aircraft have gust locks, and how is rigidity maintained?",
    "options": ["Yes, it has gust locks to keep it rigid", "No gust locks, and it cannot maintain rigidity", "No gust locks, but it has enough to keep it rigid", "Yes, gust locks are optional"],
    "correct": 2
  },
  {
    "question": "345. Where does the ram air for heating come from?",
    "options": ["Wingtip vent", "Cabin exhaust", "NACA inlet", "Engine compartment"],
    "correct": 2
  },
  {
    "question": "346. What fuel condition triggers a warning above 30 USG?",
    "options": ["Fuel imbalance", "Fuel pressure", "Fuel high", "Fuel low"],
    "correct": 2
  },
  {
    "question": "347. How long does it take for the parachute to deploy?",
    "options": ["2 seconds", "1 second", "5 seconds", "3 seconds"],
    "correct": 0
  },
  {
    "question": "348. What indicates that pitch limits are exceeded?",
    "options": ["A value of 2", "A value of 1", "A value of 3", "A value of 0"],
    "correct": 1
  },
  {
    "question": "349. Are the front and rear systems fully integrated?",
    "options": ["Front and rear systems are fully integrated", "Only the rear systems are integrated", "Only the front systems are integrated", "Front and rear systems are not integrated"],
    "correct": 0
  },
  {
    "question": "350. What type of seat harnesses are used for the front and back seats?",
    "options": ["Front seats: 5 points, Back seats: 2 points", "Front seats: 4 points, Back seats: 3 points", "Front seats: 3 points, Back seats: 4 points", "Front seats: 2 points, Back seats: 3 points"],
    "correct": 1
  },
  {
    "question": "351. At what fuel imbalance level is an advisory issued?",
    "options": ["10 USG", "8 USG", "12 USG", "5 USG"],
    "correct": 1
  },
  {
    "question": "352. Where is the parachute located?",
    "options": ["In the forward cabin", "In the engine compartment", "In the bulkhead aft", "On the wing"],
    "correct": 2
  },
  {
    "question": "353. How many batteries are there, and where are they located?",
    "options": ["2 batteries, one in the firewall, one in the aft compartment", "2 batteries, both in the firewall", "1 battery in the firewall", "1 battery in the aft compartment"],
    "correct": 0
  },
  {
    "question": "354. How long does it take for the CAPS (parachute) to deploy?",
    "options": ["2 seconds", "1 second", "5 seconds", "3 seconds"],
    "correct": 0
  },
  {
    "question": "355. Is the statement 'On MFD' true for the aircraft?",
    "options": ["Yes, the information is displayed on the MFD", "The information is displayed on the control panel", "No, the information is not displayed on the MFD", "The information is displayed on the PFD"],
    "correct": 0
  },
  {
    "question": "356. What causes a brake temperature message?",
    "options": ["Faulty temperature sensor", "Low hydraulic fluid", "Overheating of the engine", "Improper braking"],
    "correct": 3
  },
  {
    "question": "357. How does the propeller adjust?",
    "options": ["Using a manual lever", "Using electronic controls", "Using hydraulic pressure", "Using flyweights"],
    "correct": 3
  },
  {
    "question": "358. Where is the baggage compartment located?",
    "options": ["Right side aft of the wing", "Forward of the wing", "Left side aft of the wing", "In the cabin"],
    "correct": 2
  },
  {
    "question": "359. Does the aircraft have gust locks, and what maintains control stability?",
    "options": ["Yes, it has gust locks", "No gust locks, but spring-loaded cartridges maintain stability", "Yes, gust locks with spring-loaded cartridges", "No gust locks, and no stability mechanism"],
    "correct": 1
  },
  {
    "question": "360. What are the conditions for the air conditioning to work?",
    "options": ["Engine should be OFF, and temperature below 0", "Engine should be ON, and temperature below 0", "Engine should be OFF, and temperature above 0", "Engine should be ON, and temperature above 0"],
    "correct": 3
  },
  {
    "question": "361. What frequencies does the ELT transmit, and for how long does the 406 MHz signal last?",
    "options": ["121.5 MHz only for 24 hours", "121.5 MHz and 406 MHz for 24 hours", "121.5 MHz and 406 MHz for 12 hours", "406 MHz only for 12 hours"],
    "correct": 1
  },
  {
    "question": "362. Which cockpit lights last the longest?",
    "options": ["Indicator lights", "Instrument panel lights", "Emergency lights", "Overhead lights"],
    "correct": 2
  },
  {
    "question": "363. What is the CAPS system, and does it have its own battery?",
    "options": ["CAPS is a parachute with a rocket, without its own battery", "CAPS is a parachute with a rocket, and it has its own battery", "CAPS is a parachute without a rocket, without its own battery", "CAPS is a parachute without a rocket, with its own battery"],
    "correct": 0
  },
  {
    "question": "364. How does the aircraft taxi?",
    "options": ["Using a rudder pedal system", "Using a nose wheel steering system", "Using engine thrust only", "Using differential braking"],
    "correct": 3
  }
];


