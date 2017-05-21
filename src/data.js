const data = {
  aptitudes: ['Cognition', 'Coordination', 'Intuition', 'Reflexes', 'Savvy', 'Somatics', 'Willpower'],
  aptAbbreviations: ['COG', 'COO', 'INT', 'REF', 'SAV', 'SOM', 'WIL'],
  aptitudeDefs: ['Cognition (COG) is your aptitude for problem-solving, logical analysis, and understanding. It also includes memory and recall.', 'Coordination (COO) is your skill at integrating the actions of different parts of your morph to produce smooth, successful movements. It includes manual dexterity, fine motor control, nimbleness, and balance.', 'Intuition (INT) is your skill at following your gut instincts and evaluating on the fly. It includes physical awareness, cleverness, and cunning.', 'Reflexes (REF) is your skill at acting quickly. This encompasses your reaction time, your gut-level response, and your ability to think fast.', 'Savvy (SAV) is your mental adaptability, social intuition, and proficiency for interacting with others. It includes social awareness and manipulation.', 'Somatics (SOM) is your skill at pushing your morph to the best of its physical ability, including the fundamental utilization of the morph’s strength, endurance, and sustained positioning and motion.', 'Willpower (WIL) is your skill for self-control, your ability to command your own destiny.'],
  morphs: [
    {
      name: 'Flat',
      description: 'Flats are baseline unmodifed humans, born with all of the natural defects, hereditary diseases, and other genetic mutations that evolution so lovingly applies. Flats are increasingly rare—most died off with the rest of humanity during the Fall. Most new children are splicers—screened and genefixed at the least—except in habitats where flats are treated as second-class citizens and indentured labor.',
      implants: [],
      aptMax: 20,
      durability: 30,
      aptMods: [0, 0, 0, 0, 0, 0, 0],
      traits: [],
      cpCost: 0,
      creditCost: 'High',
      type: 'Biomorph'
    },
    {
      name: 'Splicer',
      description: 'Splicers are genefixed humans. Their genome has been cleansed of hereditary diseases and optimized for looks and health, but has not otherwise been substantially upgraded. Splicers make up the majority of transhumanity.',
      implants: ['Basic Biomods', 'Basic Mesh Inserts', 'Cortical Stack'],
      aptMax: 25,
      durability: 30,
      aptMods: [0, 0, 0, 0, 0, 0, 0],
      customAptBonuses: 1,
      traits: [],
      cpCost: 10,
      creditCost: 'High',
      type: 'Biomorph'
    },
    {
      name: 'Exalt',
      description: 'Exalt morphs are genetically enhanced humans, designed to emphasize specific traits. Their genetic code has been tweaked to make them healthier, smarter, and more attractive. Their metabolism is modifed to predispose them towards staying fit and athletic for the duration of an extended lifespan.',
      implants: ['Basic Biomods', 'Basic Mesh Inserts', 'Cortical Stack'],
      aptMax: 30,
      durability: 35,
      aptMods: [5, 0, 0, 0, 0, 0, 0],
      customAptBonuses: 3,
      traits: [],
      cpCost: 30,
      creditCost: 'Expensive',
      type: 'Biomorph'
    },
    {
      name: 'Menton',
      description: 'Mentons are genetically modifed to increase cognitive abilities, particularly learning ability, creativity, attentiveness, and memory. Rumors exist of super-enhanced mentons with more extreme intelligence mods, but brain-hacking is notoriously difficult, and many attempts to redesign mental faculties result in impaired functioning, instability, or insanity.',
      implants: ['Basic Biomods', 'Basic Mesh Inserts', 'Cortical Stack', 'Eidetic Memory', 'Hyper Linguist', 'Math Boost'],
      aptMax: 30,
      durability: 35,
      aptMods: [10, 0, 5, 0, 0, 0, 5],
      customAptBonuses: 1,
      traits: [],
      cpCost: 40,
      creditCost: 'Expensive',
      type: 'Biomorph'
    },
    {
      name: 'Olympian',
      description: 'Olympians are human upgrades with improved athletic capabilities like endurance, eye-hand coordination, and cardiovascular functions. Olympians are common among athletes, dancers, freerunners, and soldiers.',
      implants: ['Basic Biomods', 'Basic Mesh Inserts', 'Cortical Stack'],
      aptMax: 30,
      durability: 40,
      aptMods: [0, 5, 0, 5, 0, 10, 0],
      customAptBonuses: 1,
      traits: [],
      cpCost: 40,
      creditCost: 'Expensive',
      type: 'Biomorph'
    },
    {
      name: 'Sylph',
      description: 'Sylph morphs are tailor-made for media icons, elite socialites, XP stars, models, and narcissists. Sylph gene sequences are specifically designed for distinctive good looks. Ethereal and elfin features are common, with slim and lithe bodies. Their metabolism has also been sanitized to eliminate unpleasant bodily odors and their pheromones adjusted for universal appeal.',
      implants: ['Basic Biomods', 'Basic Mesh Inserts', 'Cortical Stack', 'Clean Metabolism', 'Enhanced Pheromones'],
      aptMax: 30,
      durability: 35,
      aptMods: [0, 5, 0, 0, 10, 0, 0],
      customAptBonuses: 1,
      traits: ['Striking Looks (Level 1)'],
      cpCost: 40,
      creditCost: 'Expensive',
      type: 'Biomorph'
    },
    {
      name: 'Bouncer',
      description: 'Bouncers are humans genetically adapted for zero-g and microgravity environments. Their legs are more limber, and their feet can grasp as well as their hands.',
      implants: ['Basic Biomods', 'Basic Mesh Inserts', 'Cortical Stack', 'Grip Pads', 'Oxygen Reserve', 'Prehensile Feet'],
      aptMax: 30,
      durability: 35,
      aptMods: [0, 5, 0, 0, 0, 5, 0],
      customAptBonuses: 1,
      traits: ['Limber (Level 1)'],
      cpCost: 40,
      creditCost: 'Expensive',
      type: 'Biomorph'
    },
    {
      name: 'Fury',
      description: 'Furies are combat morphs. These transgenic human upgrades feature genetics tailored for endurance, strength, and reflexes, as well as behavioral modifications for aggressiveness and cunning. To offset tendencies for unruliness and macho behavior patterns, furies feature gene sequences promoting pack mentalities and cooperation, and they tend to be biologically female.',
      implants: ['Basic Biomods', 'Basic Mesh Inserts', 'Cortical Stack', 'Bioweave Armor (Light)', 'Enhanced Vision', 'Neurachem (Level 1)', 'Toxin Filters'],
      aptMax: 30,
      durability: 50,
      aptMods: [0, 5, 0, 5, 0, 10, 5],
      customAptBonuses: 1,
      traits: [],
      cpCost: 75,
      creditCost: 'Expensive',
      type: 'Biomorph'
    },
    {
      name: 'Futura',
      description: 'An exalt variant, futura morphs were specially crafted for the “Lost generation.” Tailor-made for accelerated growth and adjusted for confidence, self-reliance, and adaptability, futuras were intended to help transhumanity regain its foothold. These programs proved disastrous and the line was discontinued, but some models remain, viewed by some with distaste and others as collectibles or exotic oddities.',
      implants: ['Basic Biomods', 'Basic Mesh Inserts', 'Cortical Stack', 'Eidetic Memory', 'Emotional Dampers'],
      aptMax: 30,
      durability: 35,
      aptMods: [5, 0, 0, 0, 5, 0, 10],
      customAptBonuses: 1,
      traits: [],
      cpCost: 40,
      creditCost: 'Expensive',
      type: 'Biomorph'
    },
    {
      name: 'Ghost',
      description: 'Ghosts are partially designed for combat applications, but their primary focus is stealth and infiltration. Their genetic profile encourages speed, agility, and reflexes, and their minds are modifiked for patience and problem-solving.',
      implants: ['Basic Biomods', 'Basic Mesh Inserts', 'Cortical Stack', 'Chameleon Skin', 'Adrenal Boost', 'Enhanced Vision', 'Grip Pads'],
      aptMax: 30,
      durability: 45,
      aptMods: [0, 10, 0, 5, 0, 5, 5],
      customAptBonuses: 1,
      traits: [],
      cpCost: 70,
      creditCost: 'Expensive',
      type: 'Biomorph'
    },
    {
      name: 'Hibernoids',
      description: 'Hibernoids are transgenic-modified humans with heavily altered sleep patterns and metabolic processes. Hibernoids have a decreased need for sleep, requiring only 1–2 hours a day on average. They also have the ability to trigger a form of voluntary hibernation, effectively stopping their metabolism and need for oxygen. Hibernoids make excellent long-duration space travelers and habtechs, but these morphs are also favored by personal aides and hypercapitalists with non-stop lifestyles.',
      implants: ['Basic Biomods', 'Basic Mesh Inserts', 'Cortical Stack', 'Circadian Regulation', 'Hibernation'],
      aptMax: 25,
      durability: 35,
      aptMods: [0, 0, 5, 0, 0, 0, 0],
      customAptBonuses: 1,
      traits: [],
      cpCost: 25,
      creditCost: 'Expensive',
      type: 'Biomorph'
    },
    {
      name: 'Neotenics',
      description: 'Neotenics are transhumans modified to retain a child-like form. They are smaller, more agile, inquisitive, and less resource-depleting, making them ideal for habitat living and spacecraft. Some people find neotenic sleeves distasteful, especially when employed in certain media and sex work capacities.',
      implants: ['Basic Biomods', 'Basic Mesh Inserts', 'Cortical Stack'],
      aptMax: 30,
      durability: 30,
      aptMods: [0, 5, 5, 5, 0, 0, 0],
      customAptBonuses: 1,
      traits: ['Small target (-10 to hit in combat)', 'Social Stigma (Neotenic)'],
      cpCost: 25,
      creditCost: 'Expensive',
      type: 'Biomorph'
    },
    {
      name: 'Remade',
      description: 'The remade are completely redesigned humans: humans 2.0. Their cardiovascular systems are stronger, the digestive tract has been sanitized and restructured to eliminate flaws, and they have otherwise been optimized for good health, smarts, and longevity with numerous transgenic mods. The remade are popular with the ultimates faction. The remade look close to human, but are different in very noticeable and sometimes eerie ways: taller, lack of hair, slightly larger craniums, wider eyes, smaller noses, smaller teeth, and elongated digits.',
      implants: ['Basic Biomods', 'Basic Mesh Inserts', 'Cortical Stack', 'Circadian Regulation', 'Clean Metabolism', 'Eidetic Memory', 'Enhanced Respiration', 'Termpurature Tolerance', 'Toxin Filters'],
      aptMax: 40,
      durability: 40,
      aptMods: [10, 0, 0, 0, 5, 10, 0],
      customAptBonuses: 2,
      traits: ['Uncanny Valley'],
      cpCost: 60,
      creditCost: 'Expensive',
      type: 'Biomorph'
    },
    {
      name: 'Ruster',
      description: 'Adapted for survival with minimum gear in the not-yet-terraformed Martian environment, these transgenic morphs feature insulated skin for more effective thermoregulation and respiratory system improvements to require less oxygen and filter carbon dioxyde, among other mods.',
      implants: ['Basic Biomods', 'Basic Mesh Inserts', 'Cortical Stack', 'Circadian Regulation', 'Enhanced Respiration', 'Termpurature Tolerance'],
      aptMax: 25,
      durability: 35,
      aptMods: [0, 0, 0, 0, 0, 5, 0],
      customAptBonuses: 1,
      traits: [],
      cpCost: 25,
      creditCost: 'Expensive',
      type: 'Biomorph'
    },
    {
      name: 'Pleasure Pods',
      description: 'Pleasure pods are exactly what they seem — faux humans designed purely for intimate entertainment purposes. Pleasure pods have extra nerve clusters in their erogenous zones,  ne motor control over certain muscle groups, enhanced pheromones, sanitized metabolisms, and the genetics for purring. Naturally, they are crafted for good looks and charisma and enhanced in other areas as well. Pleasure pods are capable of switching their sex at will to male, female, hermaphrodite, neuter, or other intersex variations.',
      implants: ['Basic Biomods', 'Basic Mesh Inserts', 'Cortical Stack', 'Clean Metabolism', 'Cyberbrain', 'Enhanced Pheromones', 'Mnemonic Augmentation', 'Puppet Sock', 'Sex Switch'],
      aptMax: 30,
      durability: 30,
      aptMods: [0, 0, 5, 0, 5, 0, 0],
      customAptBonuses: 1,
      traits: ['Social Stigma (Pleasure Pod)'],
      cpCost: 20,
      creditCost: 'High',
      type: 'Biomorph'
    },
    {
      name: 'Worker Pod',
      description: 'Part exalt human, part machine, these basic pods are virtually indistinguishable from humans. Worker pods are often used in menial labor jobs where interaction with humans is necessary.',
      implants: ['Basic Biomods', 'Basic Mesh Inserts', 'Cortical Stack', 'Cyberbrain', 'Mnemonic Augmentation', 'Puppet Sock'],
      aptMax: 30,
      durability: 35,
      aptMods: [0, 0, 0, 0, 0, 10, 0],
      customAptBonuses: 1,
      traits: ['Social Stigma (Pod)'],
      cpCost: 20,
      creditCost: 'High',
      type: 'Biomorph'
    },
    {
      name: 'Case',
      description: 'Cases are extremely cheap, mass-produced robotic shells intended to provide an affordable remorphing option for the millions of infugees created by the Fall. Though many varieties of case shells exist, they are uniformly regarded as shoddy and inferior. Most case morphs are vaguely anthropomorphic, with a thin framework body standing just shorter than an average human. They suffer from frequent malfunctions.',
      implants: ['Access Jacks', 'Basic Mesh Inserts', 'Cortical Stack', 'Cyberbrain', 'Mnemonic Augmentation'],
      aptMax: 20,
      durability: 20,
      aptMods: [0, 0, 0, 0, 0, 0, 0],
      customAptBonuses: 0,
      traits: ['Social Stigma (Clanking Masses)', 'Lemon', '-5 to one attribute'],
      armor: '4/4',
      cpCost: 0,
      creditCost: 'Moderate',
      type: 'Synthmorph'
    },
    {
      name: 'Synth',
      description: 'Synths are anthropomorphic robotic shells (androids and gynoids). They are typically used for menial labor jobs where pods are not as good of an option. Cheaper than many other morphs, they are commonly used for people who need a body quickly and cheaply or simply on a transient basis. Though they look humanoid, synths are easily recognizable as non-biological unless they have the synthetic mask option (p. 311).',
      implants: ['Access Jacks', 'Basic Mesh Inserts', 'Cortical Stack', 'Cyberbrain', 'Mnemonic Augmentation'],
      aptMax: 30,
      durability: 40,
      aptMods: [0, 0, 0, 0, 0, 5, 0],
      customAptBonuses: 1,
      traits: ['Social Stigma (Clanking Masses)', 'Uncanny Valley'],
      armor: '6/6',
      cpCost: 30,
      creditCost: 'High',
      type: 'Synthmorph'
    },
    {
      name: 'Arachnoid',
      description: 'Arachnoid robotic shells are 1-meter in length, segmented into two parts, with a smaller head like a spider or termite. They feature four pairs of 1.5-meter-long retractable arms/legs, capable of rotating around the axis of the body, with built-in pneumatic systems for propelling the bot with small leaps. The manipulator claws on each arm/leg can be switched out with extendable mini-wheels for high-speed skating movement. A smaller pair of manipulator arms near the head allows for closer handling and tool use. In zero-g environments, arachnoids can retract their arms/legs and maneuver with vectored air thrusters.',
      implants: ['Access Jacks', 'Basic Mesh Inserts', 'Cortical Stack', 'Cyberbrain', 'Mnemonic Augmentation', 'Enhanced Vision', 'Extra Limbs (10 Arms/Legs)', 'Lidar', 'Pneumatic Limbs', 'Radar'],
      aptMax: 30,
      durability: 40,
      aptMods: [0, 5, 0, 0, 0, 10, 0],
      traits: [],
      armor: '8/8',
      cpCost: 45,
      creditCost: 'Expensive',
      type: 'Synthmorph'
    },
    {
      name: 'Dragonfly',
      description: 'The dragonfly robotic morph takes the shape of a meter-long flexible shell with multiple wings and manipulator arms. Capable of near-silent turbofan-aided fight in Earth gravity, dragonfly bots fare even better in microgravity.',
      implants: ['Access Jacks', 'Basic Mesh Inserts', 'Cortical Stack', 'Cyberbrain', 'Mnemonic Augmentation'],
      aptMax: 30,
      durability: 25,
      aptMods: [0, 0, 0, 5, 0, 0, 0],
      traits: ['Flight', 'Small target (-10 to hit in combat)'],
      armor: '2/2',
      cpCost: 20,
      creditCost: 'High',
      type: 'Synthmorph'
    },
    {
      name: 'Flexbot',
      description: 'Designed for multipurpose functions, flexbots can transform their shells to suit a range of situations and tasks. Their core frame consists of a half-dozen interlocking and shape-adjustable modules capable of auto-transforming into a variety of shapes: multi-legged walker, tentacle, hovercraft, and many others. Each module features its own sensor units and “bush robot” fractal-branching digits (capable of breaking into smaller digits, down to the micrometer scale, allowing for ultra-fine manipulation). The flexbot control computer is also distributed between modules. Individual flexbots are only the size of a large dog, but multiple flexbots can join together for larger mass operations, even taking on heavy-duty tasks such as demolition, excavation, manufacturing, robotics assembly, and so on.',
      implants: ['Access Jacks', 'Basic Mesh Inserts', 'Cortical Stack', 'Cyberbrain', 'Mnemonic Augmentation', 'Fractal Digits', 'Modular Design', 'Nanoscopic Vision', 'Shape Adjusting'],
      aptMax: 30,
      durability: 25,
      aptMods: [0, 0, 0, 0, 0, 0, 0],
      traits: ['Small target (-10 to hit in combat)'],
      armor: '4/4',
      cpCost: 20,
      creditCost: 'Expensive',
      type: 'Synthmorph'
    },
    {
      name: 'Reaper',
      description: 'The reaper is a common combat bot, used in place of biomorph soldiers and typically operated via teleoperation or by autonomous AI. The reaper’s core form is an armored disc, so that it can turn and present a thin profile to an enemy. It uses vector-thrust nozzles to maneuver in microgravity and also takes advantage of an ionic drive for fast movement over distance. Four legs/manipulating arms and four weapon pods are folded inside its frame. The reaper’s shell is made of smart materials, allowing these limbs and weapon mounts to extrude in any direction desired and even to change shape and length. In gravity environments, the reaper walks or hops on two or four of these limbs. Reapers are infamous due to numerous war XPs, and bringing one into most habitats will undoubtedly raise eyebrows if not get you arrested.',
      implants: ['Access Jacks', 'Basic Mesh Inserts', 'Cortical Stack', 'Cyberbrain', 'Mnemonic Augmentation', '360-Degree Vision', 'Anti-Glare', 'Cyber Claws', 'Extra Limbs (4)', 'Magnetic System', 'Pneumatic Limbs', 'Puppet Sock', 'Radar', 'Reflex Booster', 'Shape Adjusting', 'Structural Enhancement', 'T-Ray Emitter', 'Weapon Mount (Articulated, 4)'],
      aptMax: 40,
      durability: 50,
      aptMods: [0, 5, 0, 10, 0, 10, 0],
      traits: ['4 Limbs'],
      armor: '16/16',
      cpCost: 100,
      creditCost: 'Expensive',
      type: 'Synthmorph'
    },
    {
      name: 'Slitheroid',
      description: 'Slitheroid bots are synthetic shells taking the form of a 2-meter-long segmented metallic snake, with two retractable arms for tool use. Snake bots can coil, twist, and roll their bodies into a ball or hoop, moving either by slithering, burrowing, rolling, or pulling themselves along by their arms. The sensor suite and control computer are housed in the head.',
      implants: ['Access Jacks', 'Basic Mesh Inserts', 'Cortical Stack', 'Cyberbrain', 'Mnemonic Augmentation', 'Enhanced Vision'],
      aptMax: 30,
      durability: 45,
      aptMods: [0, 5, 0, 0, 0, 5, 0],
      customAptBonuses: 1,
      traits: [],
      armor: '8/8',
      cpCost: 40,
      creditCost: 'Expensive',
      type: 'Synthmorph'
    },
    {
      name: 'Swarmanoid',
      description: 'The swarmanoid is not a single shell per se, but rather a swarm of hundreds of insect-sized robotic micro- drones. Each individual “bug” is capable of crawling, rolling, hopping several meters, or using nanocopter fan blades for airlift. The controlling computer, cortical stack, and sensor systems are distributed throughout the swarm. Though the swarm can “meld” together into a roughly child-sized shape, the swarm is incapable of tackling physical tasks like grabbing, lifting, or holding as a unit. Individual bugs are quite capable of interfacing with electronics.',
      implants: ['Access Jacks', 'Basic Mesh Inserts', 'Cortical Stack', 'Cyberbrain', 'Mnemonic Augmentation', 'Swarm Composition'],
      aptMax: 30,
      durability: 30,
      aptMods: [0, 0, 0, 0, 0, 0, 0],
      traits: [],
      cpCost: 25,
      creditCost: 'Expensive',
      type: 'Synthmorph'
    },
    {
      name: 'Infomorph',
      description: 'Infomorphs are digital-only forms—they lack a physical body. Infomorphs are sometimes carried by other characters instead of (or in addition to) a muse in a ghostrider module (p. 307). Full rules for infomorphs can be found on p. 265.',
      implants: ['Mnemonic Augmentation'],
      aptMax: 40,
      durability: 0,
      aptMods: [0, 0, 0, 0, 0, 0, 0],
      traits: ['No physical form', 'Speed +2'],
      cpCost: 0,
      creditCost: 'None',
      type: 'Synthmorph'
    },
  ],
  skills: [
    {
      name: 'Animal Handling',
      type: ['Active', 'Social'],
      aptitude: 'SAV',
      def: 'Skilled animal handlers are able to train and control a wide variety of natural and transgenic animals, including partial uplifts. Though many animal species went extinct during the Fall, a few “ark” and zoo habitats keep some species alive, and many others can be resurrected from genetic samples. Exotic animals are considered a sign of prestige among the hypercorp elites, and guard animals are occasionally used to protect high-security installations. Likewise, many habitats and settlements employ small armies of partially uplifted, genetically modified, and behavior-controlled creatures for sanitation or other purposes. Many new and strange breeds of animal are created daily to serve a variety of roles.',
      use: 'Animal Handling is used whenever you are trying to manipulate an animal, whether your intent is to calm it down, keep it from attacking, intimidate it, acquire its trust, or goad it into attacking. Your Margin of Success determines how effective you are at convincing the creature. At the gamemaster’s discretion, modifiers may be applied to the test. Likewise, winning an animal over may sometimes take time, and so could be handled as a Task Action with a timeframe of five minutes or more.'
    },
    {
      name: 'Beam Weapons',
      type: ['Active', 'Combat'],
      aptitude: 'COO',
      def: 'The Beam Weapons skill covers the usage and maintenance of standard coherent beam energy weapons such as lasers, particle beam weapons, plasma rifles, and microwave weapons.',
      use: 'A player uses their Beam Weapons skill whenever attacking with a beam weapon in combat. Beam Weapons may also be used for tests involving maintenance of the weapon, but not for repairing or modifying the weapon (that would be Hardware: Armorer skill).'
    },
    {
      name: 'Blades',
      type: ['Active', 'Combat'],
      aptitude: 'SOM',
      def: 'The Blades skill covers the usage and maintenance of standard bladed weapons.',
      use: 'A player uses their Blades skill whenever attacking with a blade weapon in melee combat. Blades may also be used for tests involving maintenance of the weapon, but not for repairing or modifying the weapon (that would be Hardware: Armorer skill). This skill is used for blade weapons implanted in the body at the end of an appendage (hands, forearms, feet, octomorph arms, etc.), but the Exotic Melee Weapon skill is used for blades implanted in other parts of the body.'
    },
    {
      name: 'Climbing',
      type: ['Active', 'Physical'],
      aptitude: 'SOM',
      def: 'Climbing is the skill of ascending and descending sheer surfaces with or without the aid of specialized equipment.',
      use: 'This skill is used whenever a character wishes to scale a climbable surface. For heights greater than one story, climbing is handled as a Task Action with a timeframe equivalent to one meter per Combat Turn. For rappelling, the timeframe for descent is 50 meters per Action Turn. Climbing gear provides appropriate modifiers.'
    },
    {
      name: 'Clubs',
      type: ['Active', 'Combat'],
      aptitude: 'SOM',
      def: 'The Clubs skill covers the usage and maintenance of standard blunt melee weapons such as batons or sticks.',
      use: 'Players use their Clubs skill whenever they want to attack with a blunt weapon in melee combat. The Clubs skill may also be used for tests involving maintenance of the weapon, but not for repairing or modifying the weapon (that would be Hardware: Armorer skill).'
    },
    {
      name: 'Control',
      type: ['Active', 'Mental', 'Psi'],
      aptitude: 'WIL',
      noDefault: true,
      def:'Controlis the use of psi to manipulate individuals or actively penetrate their mental processes. This skill is only available to characters with the Psi trait.',
      use: 'Use Control when taking a psionic tour through a foreign ego—messing around included. See Playing Asyncs.'
    },
    {
      name: 'Deception',
      type: ['Active', 'Social'],
      aptitude: 'SAV',
      def: 'Deception is your ability to act, bluff, con, fast talk, lie, misrepresent, and pretend. Accomplished users of deception are able to convince anyone of nearly anything. This skill does not include using a physical disguise to appear to be another person (the Impersonation skill covers that area).',
      use: 'Use this skill whenever you want to deceive someone with words or gestures. A successful skill test means that you have passed off your deception convincingly. At the gamemaster’s discretion, someone who is actively alert for signs of deception may make an Opposed Test using the Kinesics skill.'
    },
    {
      name: 'Demolitions',
      type: ['Active', 'Technical'],
      aptitude: 'COG',
      noDefault: true,
      def: 'Demolitions covers the controlled user of explosives',
      use: 'Use it when making, placing, and disarming explosives and explosive devices.'
    },
    {
      name: 'Disguise',
      type: ['Active', 'Physical'],
      aptitude: 'INT',
      def: 'Disguise is the art of physically altering your appearance so that you look like someone else. This includes both the use of props (wigs, contacts, skin pigments) and the altering of subtle physical characteristics (gait, posture, poise).',
      use: 'Use Disguise to fool someone into thinking you’re someone you’re not. This can be used to hide your identity or to make yourself look like someone in particular. When used against someone who knows your true look or the appearance of the person you are imitating, this is handled as an Opposed Test against Perception or Investigation.'
    },
    {
      name: 'Flight',
      type: ['Active', 'Physical'],
      aptitude: 'SOM',
      def: 'Flight is the skill of using your body to fly. This skill is used when sleeved in or jamming a winged or otherwise flight-capable morph (manual and remote-control flight are handled using the Pilot skill).',
      use: 'Use this skill whenever you need to make an aerial maneuver, land in difficult conditions, maintain your course in steep winds, or otherwise keep from crashing or falling.'
    },
    {
      name: 'Fray',
      type: ['Active', 'Combat'],
      aptitude: 'REF',
      def: 'Fray is the ability to get out of the way of incoming attacks, debris, or inconvenient passers-by. Characters that have a high Fray score are able to react quicker than others when dodging or maneuvering.',
      use: 'Whenever a character is physically attacked by an opponent in melee combat, roll Fray to avoid getting hit. Fray may also be used to dodge other events that may harm the character, such as avoiding a charging vehicle or jumping out of the way of a collapsing stack of crates.'
    },
    {
      name: 'Free Fall',
      type: ['Active', 'Physical'],
      aptitude: 'REF',
      def: 'Free Fall is about moving in free-fall and microgravity environments.',
      use: 'Use whenever you need to maneuver in a zero-g situation, such as propelling yourself across a large open space or making sure you don’t accidentally send yourself spinning off into space. Free Fall is also used when moving with spacesuit maneuvering jets and when parachuting.'
    },
    {
      name: 'Freerunning',
      type: ['Active', 'Physical'],
      aptitude: 'SOM',
      def: 'Freerunning is part running, part gymnastics. It is about moving fast, maneuvering over/under/around/through obstacles, and placing your body where it needs to go. Freerunning/parkour is a popular pastime in habitats where open space is limited.',
      use: 'Use Freerunning whenever you need to overcome an obstacle via movement, such as hurdling a railing, rolling across the hood of a car, jumping across a pit, or swinging around a pole. Freerunning is also used for sprinting and full defense against attacks.'
    },
    {
      name: 'Gunnery',
      type: ['Active', 'Combat'],
      aptitude: 'INT',
      def: 'Gunnery skill covers the use and maintenance of large, vehicular, or non-portable weapons systems. Firing these weapons is more like playing a video game than firing a gun.',
      use: 'Use Gunnery when attacking with a vehicle-mounted weapon or weapon emplacement in ranged combat.'
    },
    {
      name: 'Impersonation',
      type: ['Active', 'Social'],
      aptitude: 'SAV',
      def: 'Impersonation is the skill of trying to pass yourself off as someone else in social situations, including virtual ones. This includes copying mannerisms and speech patterns and using accumulated information to convince others that you are that person. In a universe where appearance is highly variable, the question of identity is largely one of both trust and picking up on behavioral quirks and verbal cues to recognize a given individual.',
      use: 'Sometimes it’s fun to pretend you’re someone else, and sometimes it’s protable or lifesaving. Use this skill whenever you attempt to convince someone that you are actually someone else through some sort of social or online interaction. Forks use this skill when passing themselves off as their alpha ego. Impersonate is handled as an Opposed Test against the Kinesics skill.'
    },
    {
      name: 'Infiltration',
      type: ['Active', 'Physical'],
      aptitude: 'COO',
      def: 'Infiltration is the art of escaping detection.',
      use: 'Use Infiltration whenever you need to physically hide or move with stealth to avoid someone sensing you, whether you are hiding behind a tree, sneaking past a guard, or blending into a crowd. Infiltration can also be used to follow people (shadowing) without them detecting you. Infiltration is an Opposed Test against the Perception of whomever you are hiding from. The gamemaster may wish to roll such tests in secret so the player does not know whether they have succeeded or failed.'
    },
    {
      name: 'Infosec',
      type: ['Active', 'Technical'],
      aptitude: 'COG',
      noDefault: true,
      def: 'Infosec is short for "information security." It encompasses training in electronic intrusion and counterintrusion techniques as well as encryption and decryption.',
      use: 'Infosec is used both for hacking into electronic devices and mesh networks and for protecting them. See The Mesh chapter, p. 234, for more details.'
    },
    {
      name: 'Interfacing',
      type: ['Active', 'Technical'],
      aptitude: 'COG',
      def: 'Interfacing is about using computerized electronic devices and software.',
      use: 'Use Interfacing to understand an electronic device you are not familiar with, use a program according to its normal operating parameters, manipulate electronic files of various types (including images, video, XP, and audio files), scan for wireless devices, and otherwise interact with and command your ecto, muse, and other computerized devices. Some Interfacing actions may be Task Actions, with a timeframe determined by the gamemaster. For more detail, see the Mesh.'
    },
    {
      name: 'Intimidation',
      type: ['Active', 'Social'],
      aptitude: 'SAV',
      def: 'Intimidation is convincing someone to do what you want based on direct threats (implied or actual) or sheer force of personality.',
      use: 'Use Intimidation to scare someone into submission, browbeat them into getting your way, command them to follow your orders, or berate them into giving up information. Influence is handled as an Opposed Test, pitted against the target’s WIL + WIL + SAV.'
    },
    {
      name: 'Investigation',
      type: ['Active', 'Mental'],
      aptitude: 'INT',
      def: 'Investigation is the art of analyzing evidence, piecing together clues, solving mysteries, and making logical deductions from groups of facts. Investigation differs from Perception in that it is the conscious search for clues or pieces of a puzzle.',
      use: 'Use Investigation to draw conclusions from assorted details. For example, Investigation could be used to determine the likely sequence of events at a crime scene, determine a possible social connection between two people, or deduce how an enemy made their escape. Investigation is a great way to provide clues to players, especially when the subject matter is something their character might know well but the player does not.'
    },
    {
      name: 'Kinesics',
      type: ['Active', 'Social'],
      aptitude: 'SAV',
      def: 'Kinesics is the art of empathy and nonvocal communication.',
      use: 'Use Kinesics to read body language, tells, social cues, and other subconscious indicators. It can also be used to emote more effectively. Kinesics is used defensively whenever someone is trying to deceive you; make an Opposed Test against that person’s Deception or Impersonation skill.'
    },
    {
      name: 'Kinetic Weapons',
      type: ['Active', 'Combat'],
      aptitude: 'COO',
      def: 'Kinetic Weapons covers the use and maintenance of standard kinetic projectile weapons like firearms and railguns.',
      use: 'Use this skill whenever attacking with a kinetic weapon in ranged combat.'
    },
    {
      name: 'Navigation',
      type: ['Active', 'Mental'],
      aptitude: 'INT',
      def: 'Navigation is the art of finding your way, whether using AR maps, a compass, the stars, or an astrogation AI.',
      use: 'Use Navigation whenever you need to plot out a course, determine a direction, or otherwise keep from getting lost.'
    },
    {
      name: 'Palming',
      type: ['Active', 'Physical'],
      aptitude: 'COO',
      def: 'Palming is the skill of handling items quickly and nimbly without others noticing. Palming is not only about dexterous manipulation of objects but also relies heavily on obfuscation, timing, and misdirection.',
      use: 'Use Palming any time you are trying to conceal an item on your person, shoplift, pick a pocket, surreptitiously discard something, or perform a magic trick. Palming is an Opposed Test against the Perception of any onlookers. The gamemaster may wish to make this roll secretly.'
    },
    {
      name: 'Perception',
      type: ['Active', 'Mental'],
      aptitude: 'INT',
      def: 'Perception is the use of your physical senses (including cybernetic) and awareness of the physical world around you. Perception differs from Investigation in that it is noticing things by chance, rather than actively searching for something.',
      use: 'Use Perception whenever you wanted to take a detailed account of your surroundings (see Detailed Perception, below). Perception can also be considered an Automatic Action (see Basic Perception, below) and so the gamemaster may call for a Perception Test to determine if you notice something; it is recommended that such tests be rolled secretly by the gamemaster. Perception is also used as an Opposed Test whenever someone around you is trying to be sneaky with Infiltration or Palming.'
    },
    {
      name: 'Persuasion',
      type: ['Active', 'Social'],
      aptitude: 'SAV',
      def: 'Persuasion is the art of convincing someone to do what you want through the use of words and gestures. This does not include persuasion through threats or force (that is covered by Intimidation) or by lying (covered by Deception).',
      use: 'Use Persuasion any time you are trying to bargain with, convince, or manipulate someone. This can include motivating your subordinates or peers to take action, seducing a companion, winning a political debate, or negotiating a contract, among other things. Persuasion is handled as an Opposed Test against the target’s WIL + WIL + SAV when one person is simply trying to win over another. If both parties are trying to convince each other, make it an Opposed Test between Persuasion skills.'
    },
    {
      name: 'Programming',
      type: ['Active', 'Technical'],
      aptitude: 'COG',
      noDefault: true,
      'def':'Programmingis your talent at writing and modifying software code.',
      'use': 'Use Programming to write new programs, modify or patch existing software, break copy protection, find or introduce exploitable flaws, write virii or worms, design virtual settings, and so on. See the Mesh. Programming is also applied when using nanofabrication devices.'
    },
    {
      name: 'Protocol',
      type: ['Active', 'Social'],
      aptitude: 'SAV',
      def: 'Protocol is the art of making a good impression in social settings. This includes keeping up with the latest memes, trends, gossip, interests and habits of various (sub)cultural group.',
      use: 'Use Protocol whenever you need to choose your words carefully, determine who is the appropriate person to speak to, impress someone with your grasp of customs, or otherwise fit into a specific social/cultural grouping. Part etiquette, part streetwise, Protocol allows you to navigate treacherous social waters and put people at ease. If the character is dealing with a suspicious or hostile audience, make this an Opposed Test against the target’s WIL + WIL + SAV.'
    },
    {
      name: 'Psi Assault',
      type: ['Active', 'Mental', 'Psi'],
      aptitude: 'WIL',
      noDefault: true,
      'def':'PsiAssault is the skill of damaging another ego’s mind. It can only be purchased by characters with the Psi trait.',
      'use': 'Use Psi Assault when attacking another ego’s mind in psi combat.'
    },
    {
      name: 'Psychosurgery',
      type: ['Active', 'Technical'],
      aptitude: 'INT',
      def: 'Psychosurgery is the use of machine-aided psychological techniques to repair, damage, or manipulate the psyche.',
      use: 'Use Psychosurgery to attempt the tricky process of editing someone’s mind (see Psychosurgery). Psychosurgery can be used beneficially to help patients who remember their deaths, feel disconnected after remorphing, or have experienced other sorts of mental traumas. This skill may also be used to interrogate, torture, or otherwise mess with captive minds in a VR environment.'
    },
    {
      name: 'Research',
      type: ['Active', 'Technical'],
      aptitude: 'COG',
      def: 'Research is the skill for looking up information on the Mesh: searching, sifting, mining, and interpreting data. This includes knowing where to look, what links to follow, and how to optimize your queries.',
      use: 'Use the Research skill whenever you need to look up the answer to a question, find databases, search archives, or track down anything online. Research is typically a Task Action with the timeframe and difficulty modifier determined by the gamemaster.'
    },
    {
      name: 'Scrounging',
      type: ['Active', 'Mental'],
      aptitude: 'INT',
      def: 'Scrounging is your ability to find things, particularly things of use or value that are concealed, buried, or hard to find. This includes knowing where to look and what to look for. Scrounging differs from both Perception and Investigation in that it is about finding items hidden among others, and in most cases about finding something in particular (food, valuables, etc.).',
      use: 'Use Scrounging to dumpster-dive a meal, search ruins for relics, find bargains at a bazaar, forage berries in the forest, locate a spacesuit in an abandoned ship, etc. Scrounging is typically handled as a Task Action with a timeframe and difficulty modifier determined by the gamemaster.'
    },
    {
      name: 'Seeker Weapons',
      type: ['Active', 'Combat'],
      aptitude: 'COO',
      def: 'Seeker Weapons covers the use and maintenance of seeker launchers and seeker missiles.',
      use: 'Use this skill when attacking with a seeker in ranged combat.'
    },
    {
      name: 'Sense',
      type: ['Active', 'Mental', 'Psi'],
      aptitude: 'INT',
      noDefault: true,
      'def':'Senseis the use of psi to scan egos. Only characters with the Psi trait may purchase this skill.',
      'use': 'See Playing Asyncs'
    },
    {
      name: 'Spray Weapons',
      type: ['Active', 'Combat'],
      aptitude: 'COO',
      def: 'The Spray Weapons skill covers the use and maintenance of cone-effect ranged weapons.',
      use: 'A player uses their Spray Weapons skill whenever they are attacking with a spray weapon in ranged combat.'
    },
    {
      name: 'Swimming',
      type: ['Active', 'Physical'],
      aptitude: 'SOM',
      def: 'Swimming is the art of moving and not drowning within fluids. It includes floating, surface swimming, snorkeling, diving, and related equipment use.',
      use: 'Use Swimming whenever you need to move and survive in water or another liquid environment. Swimming in a non-threatening environment can be handled as a Simple Success Test. Swimming over a long distance could be handled as a Task Action. Diving off a cliff into a lake, preventing yourself from being swept away in a raging river current, or making sure you’ve set a proper gas mix for a deep-sea dive, among other things, requires a Success Test.'
    },
    {
      name: 'Throwing Weapons',
      type: ['Active', 'Combat'],
      aptitude: 'COO',
      def: 'Throwing Weapons skill covers the use and maintenance of standard throwing weapons, like grenades.',
      use: 'Use Throwing Weapons skill whenever you are attacking with a throwing weapon in ranged combat.'
    },
    {
      name: 'Unarmed Combat',
      type: ['Active', 'Combat'],
      aptitude: 'SOM',
      def: 'Unarmed Combat is your ability to attack and defend without using weapons.',
      use: 'Use Unarmed Combat whenever you want to attack someone with your fists, feet, elbows, knees, or other body parts in melee combat.'
    }
  ],
  fieldSkills: [
    {
      name: 'Academics',
      type: ['Field', 'Knowledge'],
      aptitude: 'COG',
      def: 'Academics covers any sort of specialized non-applied knowledge you can only get through intensive education. Most theoretical and applied sciences, social sciences, transhumanities, etc. are covered by this skill. Most of the other skills listed in this chapter could also be taken as an Academics  eld, re ecting a working theoretical knowledge of the skill—for example, Academics: Armorer or Academics: Interrogation.',
      use: 'Academics is used when a character wishes to call upon a specific body of knowledge. For example, Academics: Chemistry could be used to identify a particular substance, understand an unusual chemical reaction, or determine what elements are needed to nanofabricate something that requires exotic materials. At the gamemaster’s discretion, some Academics-related tests might not be defaultable, given that only someone who has been educated in that subject is likely to be able to tackle it.',
      examples: 'Archeology, Astrobiology, Astronomy, Astrophysics, Astrosociology, Biochemistry, Biology, Botany, Computer Science, Cryptography, Economics, Engineering, Genetics, Geology, Linguistics, Mathematics, Memetics, Nanotechnology, Old Earth History, Physics, Political Science, Psychology, Sociology, Xeno-archeology, Xenolinguistics, Zoology'
    },
    {
      name: 'Art',
      type: ['Field', 'Knowledge'],
      aptitude: 'INT',
      def: 'Art confers the ability to create and evaluate artistic endeavors. This is a particularly useful skill in Eclipse Phase, especially in the post-scarcity economies where creativity and vision can be a key component to a character’s reputation.',
      use: 'The Art skill can be used to either create a new work of art or to duplicate an existing piece of art in the hopes of passing it off as your own. The skill can also determine the approximate value of a piece of art either on the open market, for monetary exchange systems, or in terms of reputation for the artist.',
      examples: 'Architecture, Criticism, Dance, Drama, Drawing, Painting, Performance, Sculpture, Simulspace Design, Singing, Speech, Writing'
    },
    {
      name: 'Exotic Melee Weapon',
      type: ['Field', 'Active', 'Combat'],
      aptitude: 'SOM',
      def: 'The Exotic Melee Weapon skill covers the use and maintenance of all melee weapons not covered by the Clubs or Blades skills (see p. 334).',
      use: 'Use the Exotic Melee Weapon skill when attacking someone with an exotic melee weapon in melee combat (see p. 191).',
      examples: 'Morning Star, Spear, Whip'
    },
    {
      name: 'Exotic Ranged Weapon',
      type: ['Field', 'Active', 'Combat'],
      aptitude: 'COO',
      def: 'Exotic Ranged Weapon skill includes the use and maintenance of all ranged weapons not covered by the Beam, Kinetic, Seeker, Spray, or Throwing Weapons skills.',
      use: 'Use this skill whenever attacking with an exotic ranged weapon in ranged combat (see p. 191).',
      examples: 'Blowgun, Crossbow, Slingshot'
    },
    {
      name: 'Hardware',
      type: ['Field', 'Active', 'Technical'],
      aptitude: 'COG',
      def: 'This skill encompasses the ability to build, repair, physically hack, and upgrade equipment of a specific type.',
      use: 'Hardware is primarily used to repair devices, vehicles, habitat systems, or synthetic morphs. See Building, Repairing, and Modifying below.',
      examples: 'Aerospace (all air and space vehicles), Armorer (armor and weapons), Electronics (all computerized devices), Groundcraft, Implants, Industrial (habitat, factory, and life support systems), Nautical (watercraft and submarines), Robotics (synthetic morphs)'
    },
    {
      name: 'Interest',
      type: ['Field', 'Knowledge'],
      aptitude: 'COG',
      def: 'Interest includes just about any topic that captures your attention that isn’t covered by another skill. This includes hobbies, obsessions, causes, pastimes, and other recreational pursuits.',
      use: 'Use the Interest skill whenever you need to recall or use knowledge related to the particular interest in question.',
      samples: 'Ancient Sports, Celebrity Gossip, Conspiracies, Factor Trivia, Gambling, Hypercorp Politics, Lunar Habitats, Martian Beers, Old Earth Nation-States, Reclaimer Blogs, Science Fiction, Scum Drug Dealers, Spaceship Models, Triad Economics, Underground XP'
    },
    {
      name: 'Language',
      type: ['Field', 'Knowledge'],
      aptitude: 'INT',
      def: 'Language covers the speaking and reading of languages other than the player’s native tongue. A speaker is considered  uent at a skill level of 50; anything above this indicates further refinement in technical vocabulary, accents, and knowledge of dialects.',
      use: 'Use the Language skill whenever you want to speak, understand, or read something in a language at which you are skilled. Most speaking and reading comprehension tests can be considered Simple Success Tests if your skill is over 50, unless the gamemaster rules the subject is suficiently complex that a non-native speaker would have trouble understanding it.',
      examples: 'Arabic, Cantonese, English, French, Hindi, Japanese, Mandarin, Portuguese, Russian, Spanish'
    },
    {
      name: 'Medicine',
      type: ['Field', 'Active', 'Technical'],
      aptitude: 'COG',
      def: 'Medicine is the applied care and maintenance of biological beings and life.',
      use: 'se Medicine whenever you need to apply medical care beyond the immediate help provided by  rst responders. This includes conducting physical exams, diagnosing ailments, treating prob- lems and illnesses, surgery, using biotech and nanotech medical tools, and long-term care. see Healing and Repair, p. 208.',
      examples: 'Biosculpting, Exotic Biomorphs, Gene Therapy, General Practice, Implant Surgery, Nanomedicine, Paramedic, Pods, Psychiatry, Remote Surgery, Trauma Surgery, Uplifts (by type), Veterinary'
    },
    {
      name: 'Networking',
      type: ['Field', 'Active', 'Social'],
      aptitude: 'SAV',
      def: 'Networking is your skill at working your contacts, trading favors, and keeping your finger on the pulse of a particular faction or cultural grouping.',
      use: 'Use Networking to gather information or call on services using your Reputation (see Reputation and Social Networks, p. 285).',
      examples: 'Autonomists (@-rep), Criminals (g-rep), Ecologists (e-rep), Firewall (i-rep), Hypercorps (c-rep), Media (f-rep), Scientists (r-rep). At the gamemaster’s discretion, this list can be expanded to other (sub)cultural groupings.'
    },
    {
      name: 'Pilot',
      type: ['Field', 'Active', 'Vehicle'],
      aptitude: 'REF',
      def: 'Pilot is your skill at driving/ ying a vehicle of a particular type.',
      use: 'You use Pilot skill whenever you need to maneuver, control, or avoid crashing a vehicle, whether you are in the pilot’s seat, remote controlling a robot, or directly jamming a vehicle with VR. Each vehicle has a Handling modifier that applies to this test, along with other situational modifiers (see Bots, Synthmorphs, and Vehicles, p. 195).',
      examples: 'Aircraft, Anthroform (walkers), Exotic Vehicle, Groundcraft (wheeled or tracked), Spacecraft, Watercraft'
    },
    {
      name: 'Profession',
      type: ['Field', 'Knowledge'],
      aptitude: 'COG',
      def: 'Profession skills indicate training in a profession practiced in Eclipse Phase. This can indicate either formal training or informal, on-the-job type training and includes both legal and extralegal trades.',
      use: 'Use Profession to perform work-related tasks for a speci c trade (i.e. mining, balancing accounts, designing a security system, etc.) or to reference specialized knowledge that someone trained in that profession might have.',
      examples: 'Accounting, Appraisal, Asteroid Prospecting, Banking, Cool Hunting, Con Schemes, Distribution, Forensics, Lab Technician, Mining, Police Procedures, Psychotherapy, Security Ops, Smuggling Tricks, Social Engineering, Squad Tactics, Viral Marketing, XP Production'
    },
  ],
  gear: [
    {
      name: 'Basic Biomods',
      type: ['Personal Augmentations', 'Standard Augmentations'],
      desc: 'Almost universal in biomorphs, many habitats will not allow individuals to visit/immigrate if their biomorph does not possess these biomods in order to preserve public health. Basic biomods consists of a series of genetic tweaks, tailored viruses, and bacteria that speed healing, greatly increase disease resistance, and impede aging. A morph with basic biomods heals twice as fast as an early 21st century human, gradually regrows lost body parts, is immune to all normal diseases (from cancer to the flu), and is largely immune to aging. In addition, the morph requires no more than 3–4 hours of sleep per night, is immune to ill effects from long-term exposure to low or zero gravity, and does not naturally suffer from biological problems like depression, shock reactions after being injured, or allergies.',
      cost: 'Moderate',
      compatibilty: ['Biomorph', 'Synthmorph'],
      included: true
    },
    {
      name: 'Basic Mesh Inserts',
      type: ['Personal Augmentations', 'Standard Augmentations'],
      desc: 'Mesh inserts are ubiquitous among modern morphs. This network of cybernetic brain implants is essential equipment for anyone who wants to stay connected and make full use of the wireless mesh. The interconnected components of this system include a cranial computer, radio transciever and medical sensors (see original text for more info).',
      cost: 'Moderate',
      compatibilty: ['Biomorph', 'Synthmorph'],
      included: true
    },
    {
      name: 'Cortical Stack',
      type: ['Personal Augmentations', 'Standard Augmentations'],
      desc: 'A cortical stack is a tiny cyberware data storage unit protected within a synthdiamond case the size of a grape, implanted at the base of the skull where the brain stem and spinal cord connect. It contains a digital backup of that character’s ego. Part nanoware, the implant maintains a network of nanobots that monitor synaptic connections and brain architecture, noting any changes and updating the ego backup in real time, right up to the moment of death. If the character dies, the cortical stack can be recovered and they may be restored from the backup (see Resleeving, p. 270). Cortical stacks do not have external or wireless access (for security), they must be surgically removed (see Retrieving a Cortical Stack, p. 268). Cortical stacks are extremely durable, requiring special effort to damage or destroy. They are commonly recovered from bodies that have otherwise been pulped or mangled. Cortical stacks are intentionally isolated from mesh inserts and other implants, as a security measure to prevent hacking or external tampering.',
      cost: 'Moderate',
      compatibilty: ['Biomorph', 'Synthmorph'],
      included: true
    },
    {
      name: 'Cyberbrain',
      type: ['Personal Augmentations', 'Standard Augmentations'],
      desc: 'Cybernetic brains are where the ego (or controlling AI) resides in synthmorphs and pods. Modeled on biological brains, cyberbrains have a holistic architecture and serve as the command node and central processing point for sensory input and decision-making. Only one ego or AI may "inhabit" a cyberbrain at a time; to accommodate extras, mesh inserts (p. 300) or a ghostrider module (p. 307) must be used. Since cyberbrains store memories digitally, they have the equivalent of mnemonic augmentation (p. 307). They also have a built-in puppet sock (p. 307) and may be remote-controlled, though this option may be removed by those who value their security. Cyberbrains are vulnerable to cyberbrain hacking (p. 261) and other forms of electronic in ltration/ attack. Cyberbrains come equipped with two or more pairs of external access jacks (p. 306), usually located at the base of the skull, which allow for direct wired connections.',
      cost: 'Moderate',
      compatibilty: ['Biomorph', 'Synthmorph'],
      included: true
    },
    {
      name: 'Direction Sense',
      type: ['Personal Augmentations', 'Bioware', 'Enhanced Senses'],
      desc: 'The character has an innate sense of direction and distance using advanced inertial navigation. The character can arbitrarily define any point as "north" and keep track of which direction that is, as well as knowing approximately how far they have come. Characters with this augmentation can always retrace any route they have taken, only experiencing difficulty with three-dimensional routes lacking navigational markers (such as deep space or undersea; apply a –30 modifier). Since positioning inside habitats by anyone with basic mesh inserts is an automatic affair, only characters venturing to remote locations require this augmentation.',
      cost: 'Low',
      compatibilty: ['Biomorph', 'Synthmorph']
    },
    {
      name: 'Echolocation',
      type: ['Personal Augmentations', 'Bioware', 'Enhanced Senses'],
      desc: 'The character possesses sonar similar to that of a bat or dolphin. The character bounces brief ultrasonic pulses off their surroundings and uses them to form an image of these surroundings through the pattern of reflections of these pulses received by the character’s ears. For more details, see Using Enhanced Senses. This augmentation works in both air and water and has a range of 20 meters in air and 100 meters in water.',
      cost: 'Low',
      compatibilty: ['Biomorph', 'Synthmorph']
    },
    {
      name: 'Enhanced Hearing',
      type: ['Personal Augmentations', 'Bioware', 'Enhanced Senses'],
      desc: 'The morph’s ears are enhanced to hear both higher and lower frequency sounds—the range of sounds they can hear is twice that of normal human ears (see Using Enhanced Senses). In addition, their hearing is considerably more sensitive, allowing them to hear sounds as if they were five times closer than they are. A character with this augmentation can easily overhear even a softly spoken conversation at another table in a small restaurant. This augmentation provides a +20 modifier to all Perception Tests involving hearing.',
      cost: 'Low',
      compatibilty: ['Biomorph', 'Synthmorph']
    },
    {
      name: 'Enhanced Smell',
      type: ['Personal Augmentations', 'Bioware', 'Enhanced Senses'],
      desc: 'The morph’s sense of smell is equal to that of a bloodhound. The user can identify both chemicals and individuals by smell, and can track people and chemically reactive objects by smell as long as the trail was made within the last several hours and has not been obscured. The character can also gain a general sense of the emotions and health of any character within 5 meters (+20 to Perception or Kinesics Tests to do so).',
      cost: 'Low',
      compatibilty: ['Biomorph', 'Synthmorph']
    },
    {
      name: 'Enhanced Vision',
      type: ['Personal Augmentations', 'Bioware', 'Enhanced Senses'],
      desc: 'The morph’s eyes have tetrachromatic vision capable of exceptional color differentiation. These eyes can also see the electromagnetic spectrum from terahertz wave frequencies to gamma rays, enabling them to see a total of several dozen colors, instead of the seven ordinary human eyes can perceive. In addition, these eyes have a variable focus equivalent to 5 power magnifiers or binoculars. This augmentation provides a +20 modifier to all Perception Tests involving vision. For further applications, see Using Enhances Senses.',
      cost: 'Low',
      compatibilty: ['Biomorph', 'Synthmorph']
    },
    {
      name: 'Lateral Line',
      type: ['Personal Augmentations', 'Bioware', 'Enhanced Senses'],
      desc: 'A transgenic organ developed from aquatic creatures, a lateral line hears low-frequency sounds and can detect movement and vibrations through nearby liquids. Suryas use lateral lines to “hear” in the corona’s plasma atmosphere.',
      cost: 'Low',
      compatibilty: ['Biomorph', 'Synthmorph']
    },
    {
      name: 'Polarization Vision',
      type: ['Personal Augmentations', 'Bioware', 'Enhanced Senses'],
      desc: 'Characters capable of seeing polarized light can view an aspect of light most humans only see weakly. Polarization reveals visual characteristics much in the way that color does for normal vision: it enhances contrast, foils camouflage, and helps to detect patterns and objects, particularly in light that is reflected off a shiny surface or scattered through the atmosphere or water. One major use of polarization is easier orientation in relation to polarized light sources (such as navigating underwater by the direction of sunlight). It also allows better detection of water surfaces, reflective surfaces, and certain patterns made in the water or on skin (which can be created by chameleon skin). Polarization vision can discriminate watery surfaces from mirages and better detect transparent objects. In game terms, polarization vision allows the character to ignore negative visual Perception modifiers for camouflage, transparency, or viewing underwater. At the gamemaster’s discretion, it may provide a bonus modifier for Perception Tests to detect patterns and Navigation Tests where orientation to light sources is beneficial. Octomorphs have natural polarization vision by default.',
      cost: 'Low',
      compatibilty: ['Biomorph', 'Synthmorph']
    },
    {
      name: 'Scent Affinity',
      type: ['Personal Augmentations', 'Bioware', 'Enhanced Senses'],
      desc: 'This modification may only be applied to smart animals. This particular animal has been modified to identify and trust a particular scent or pheromonal signature. Anyone giving off this particular olfactory signature receives a +30 modifier to Animal Handling Tests against this creature, assuming the critter can smell them. Trainers, smart animal handlers, and wealthy owners use this bioware to maintain better control over their pets/investments.',
      cost: 'Trivial',
      compatibilty: ['Biomorph']
    },
    {
      name: 'Ultraviolet Vision',
      type: ['Personal Augmentations', 'Bioware', 'Enhanced Senses'],
      desc: 'This is a minor enhancement, simply adding perception of ultraviolet frequencies to the character’s visual capabilities. Neo-avians have natural ultraviolet vision by default.',
      cost: 'Trivial',
      compatibilty: ['Biomorph', 'Synthmorph']
    },
    {
      name: 'Eidetic Memory',
      type: ['Personal Augmentations', 'Bioware', 'Mental Augmentations'],
      desc: 'The character can remember everything that ever happened to them, in detail, with no long term memory loss. For example, they can recite a page they read in a book a month ago, recall a string of 200 random characters they viewed a year ago, or even tell you what they had for breakfast on a particular date a decade ago. However, they can only remember things they paid attention to. The character will not remember the contents of a note on someone’s desk if they merely glanced at it; they must specifically have read it. No effort is required to use this augmentation, the character merely needs to attempt to remember a specific fact.',
      cost: 'Low',
      compatibilty: ['Biomorph']
    },
    {
      name: 'Hyper Linguist',
      type: ['Personal Augmentations', 'Bioware', 'Mental Augmentations'],
      desc: 'The morph’s brain maintains the linguistic flexibility of a small child, allowing the character to learn languages with great ease. This functions as the Hyper Linguist trait.',
      cost: 'Low',
      compatibilty: ['Biomorph']
    },
    {
      name: 'Math Boost',
      type: ['Personal Augmentations', 'Bioware', 'Mental Augmentations'],
      desc: 'This implants functions as the Math Wiz trait.',
      cost: 'Low',
      compatibilty: ['Biomorph']
    },
    {
      name: 'Multiple Personalities',
      type: ['Personal Augmentations', 'Bioware', 'Mental Augmentations'],
      desc: 'The character’s brain is intentionally partitioned to accommodate an extra personality. This multiplicity is not viewed as a disorder, but as a cognitive tool to help people deal with their hypercomplex environments. This extra personality can be an NPC run by the gamemaster, a separate character (in ego form only) made by the player, or the downloaded fork of another character. For all intents and purposes, the extra personality is treated as a separate ego (i.e., it may fork separately), except that both personalities are backed up in the same cortical stack and if downloaded they must be placed in separate morphs or in another morph with this implant. Only one ego may be in control of the morph at a time. The other resides in the background, still active, but not on a surface level. Each ego is completely aware of what the other is doing, thinking, etc. If for some reason the subsumed personality wants to come to the fore, but the other personality won’t relinquish control, make an Opposed WIL x 3 Test. Each ego has its own Lucidity and Trauma Threshold, and they track stress and trauma separately. Any psi attacks or social/mental influences only affect the personality at the fore. Having an extra ego in your head, working in the background, is helpful for multitasking. The character receives an extra Complex Action each turn that may only be used for mental or mesh actions.',
      cost: 'High',
      compatibilty: ['Biomorph']
    },
    {
      name: 'Adrenal Boost',
      type: ['Personal Augmentations', 'Bioware', 'Physical Augmentations'],
      desc: 'This adrenal gland enhancement supercharges the character’s adrenal response to situations that invoke stress, pain, or strong emotions (fear, anger, lust, hate). When activated, the concentrated burst of norepinephrine accelerates heart rate and blood flow and burns carbohydrates. In game terms, this allows the character to ignore the –10 modifier from 1 wound and temporarily increases REF by +10 (also boosting REF-linked skills and Initiative). These modifiers apply until the character has calmed down (if the character also has endocrine control, then adrenal boosts can be activated and deactivated at will, and the negated wounds are cumulative).',
      cost: 'High',
      compatibilty: ['Biomorph']
    },
    {
      name: 'Bioweave Armor (Light)',
      type: ['Personal Augmentations', 'Bioware', 'Physical Augmentations'],
      desc: 'Bioweave armor involves lacing the morph’s skin with artificial spider silk biological fibers. This provides an Armor rating of 2/3 without changing the appearance, texture, or sensitivity of the morph’s skin. This armor is cumulative with worn armor, but not with heavy bioweave or carapace armor.',
      cost: 'Low',
      compatibilty: ['Biomorph']
    },
    {
      name: 'Bioweave Armor (Heavy)',
      type: ['Personal Augmentations', 'Bioware', 'Physical Augmentations'],
      desc: 'Heavy bioweave armor involves lacing the morph’s skin with a denser and thicker network of the same fibers. The morph’s skin becomes thicker and somewhat less flexible except at the joints. The morph’s skin also has an unusually smooth look, and a distinctively smooth and tough-feeling texture. This provides an Armor rating of 3/4 without decreasing the morph’s mobility. The character’s sense of touch, however, is significantly reduced (–20 modifier) except on their hands, feet, and face. This armor is cumulative with worn armor, but not with light bioweave or carapace armor.',
      cost: 'Moderate',
      compatibilty: ['Biomorph']
    },
    {
      name: 'Carapace Armor',
      type: ['Personal Augmentations', 'Bioware', 'Physical Augmentations'],
      desc: 'Carapace armor combines bioweave armor with hard but flexible plates of a chitin-ceramic hybrid material modeled on the microscopic structure and texture of arthropod exoskeletons. This armor is obvious and has a somewhat crocodilian or insectoid appearance (character’s choice). The morph is completely hairless as well. This provides an Armor rating of 11/11. This armor is not cumulative with worn armor or bioweave.',
      cost: 'Moderate',
      compatibilty: ['Biomorph']
    },
    {
      name: 'Chameleon Skin',
      type: ['Personal Augmentations', 'Bioware', 'Physical Augmentations'],
      desc: 'The morph’s skin is augmented with complex chromatophores so that it changes color like the skin of a chameleon or an octopus. The morph can match the appearance of almost any color and most patterns. This provides a +20 modifier to Infiltration Tests to avoid being seen or noticed, as long as the character is stationary or not moving faster than a slow walk. The character must be nude or wearing smart clothing of the same color/pattern. If incompletely camouflaged, or if moving faster, reduce the modifier to +10. In addition to blending in, the character can also consciously change the color and pattern of their skin to deliberately stand out (+20 on Perception Tests to notice) or simply to produce attractive or interesting colors or patterns.',
      cost: 'Low',
      compatibilty: ['Biomorph']
    },
    {
      name: 'Circadian Regulation',
      type: ['Personal Augmentations', 'Bioware', 'Physical Augmentations'],
      desc: 'The morph only requires 2 hours of sleep to maintain health and function at peak mental capacity. The character dreams constantly while asleep and can both fall asleep and wake up almost instantly. In addition, the character can easily and with no ill-effects shift to a 2-day cycle, where they are awake for 44 hours and sleep for 4.',
      cost: 'Moderate',
      compatibilty: ['Biomorph']
    },
    {
      name: 'Claws',
      type: ['Personal Augmentations', 'Bioware', 'Physical Augmentations'],
      desc: 'The morph has retractable claws like those of a cat. These claws do not interfere with the character’s manual dexterity and are razor sharp. However, they are relatively small and only do 1d10 + 1 + (SOM ÷ 10) damage, with an AP of –1. As a result, they are legal in almost all habitats and are considered tools as much as weapons.',
      cost: 'Low',
      compatibilty: ['Biomorph']
    },
    {
      name: 'Clean Metabolism',
      type: ['Personal Augmentations', 'Bioware', 'Physical Augmentations'],
      desc: 'The morph’s symbiotic bacteria, gut flora, and glands have been genetically engineered to keep the morph “clean.” The morph also produces smart antibiotics that prevent the growth of any bacteria or yeasts in it or on its skin. As a result, the morph is completely immune to infections, dental cavities, and bad breath, its sweat has no scent, and the morph’s efficient digestion produces somewhat less solid waste and less odorous chemicals.',
      cost: 'Moderate',
      compatibilty: ['Biomorph']
    },
    {
      name: 'Digging Claws',
      type: ['Personal Augmentations', 'Bioware', 'Physical Augmentations'],
      desc: 'Adapted from the genetics of hole-digging creatures like moles and aardvarks, digging claws are lengthier, sturdier hands with hardy claws for loosening ground, cutting through hard surfaces, and shoveling dirt aside. Despite these changes, digging claws are still capable of grasping and fine manipulation like regular human hands. They can also be wielded offensively with Unarmed Combat skill, inflicting 1d10 + 2 + (SOM ÷ 10) DV with an AP of –1.',
      cost: 'Low',
      compatibilty: ['Biomorph']
    },
    {
      name: 'Eelware',
      type: ['Personal Augmentations', 'Bioware', 'Physical Augmentations'],
      desc: 'Derived from electric eel genetics, a character can have eelware implanted so that it connects to a network of bioconductors in the hands and feet (or other limbs), allowing the character to generate stunning shocks with a touch. Eelware inflicts shock damage exactly like a pair of shock gloves. Eelware can also be used to power implants and specially designed handheld devices by touch.',
      cost: 'Low',
      compatibilty: ['Biomorph']
    },
    {
      name: 'Efficient Digestion',
      type: ['Personal Augmentations', 'Bioware', 'Physical Augmentations'],
      desc: 'The character uses food and water more efficiently, to approximately 20% of normal caloric expenditure. The character functions normally by eating and drinking only once every ﬁve days. They can survive forty days without food and twenty-ﬁve days without water, though the effects of starvation become noticeable after ten days without food or water. These modifications come at a price, though, as physical strength and coordination are reduced in order to improve caloric usage efficiency: the character takes a −5 penalty to SOM and COO. This augmentation is not compatible with the personal power plant implant.',
      cost: 'High',
      compatibilty: ['Biomorph']
    },
    {
      name: 'Emotional Dampers',
      type: ['Personal Augmentations', 'Bioware', 'Physical Augmentations'],
      desc: 'This low-cost alternative to endocrine control allows the user to voluntarily damp their morph’s emotional responses and various non-verbal cues like pupil dilation, eye movement, or vocal tone. Using this augmentation allows the user to lie and conceal their emotions in such as way as to fool the keenest observer; apply a +30 modifier to Deception and Impersonation Tests. This modification does not affect methods of detecting lies and emotions that involve reading the character’s neural state, including psi-gamma sleights. However, this augmentation damps out all emotional responses and so causes the character to be less persuasive in real-time personal interactions, imposing a –10 modifier to other Social skill tests like Persuasion. Characters can turn this augmentation on or off at will.',
      cost: 'Low',
      compatibilty: ['Biomorph']
    },
    {
      name: 'Endocrine Control',
      type: ['Personal Augmentations', 'Bioware', 'Physical Augmentations'],
      desc: 'This augmentation modifies the morph’s endocrine system, giving the character fine control over their hormone output. This allows the character to completely control their appetite and emotions and to regulate pain. They receive a +30 modifier against the effects of hunger, fear, and any forms of emotional manipulation, such as the Drive Emotion sleight. This augmentation also allows character to lie with perfect conviction and to completely fool all methods of lie detection that do not rely on the target’s neural output; apply a +20 modifier to Deception Tests. It also allows the character to remain awake for 48 hours without penalty, but after this time the character begins experiencing normal fatigue. Finally, the ability to regulate pain reception allows the character to ignore the –10 modifier from 1 wound.',
      cost: 'High',
      compatibilty: ['Biomorph']
    },
    {
      name: '',
      type: ['Personal Augmentations', 'Bioware', 'Physical Augmentations'],
      desc: '',
      cost: 'Low',
      compatibilty: ['Biomorph']
    },
    {
      name: '',
      type: ['Personal Augmentations', 'Bioware', 'Physical Augmentations'],
      desc: '',
      cost: 'Low',
      compatibilty: ['Biomorph']
    },
    {
      name: '',
      type: ['Personal Augmentations', 'Bioware', 'Physical Augmentations'],
      desc: '',
      cost: 'Low',
      compatibilty: ['Biomorph']
    },
    {
      name: '',
      type: ['Personal Augmentations', 'Bioware', 'Physical Augmentations'],
      desc: '',
      cost: 'Low',
      compatibilty: ['Biomorph']
    },
    {
      name: '',
      type: ['Personal Augmentations', 'Bioware', 'Physical Augmentations'],
      desc: '',
      cost: 'Low',
      compatibilty: ['Biomorph']
    },
    {
      name: '',
      type: ['Personal Augmentations', 'Bioware', 'Physical Augmentations'],
      desc: '',
      cost: 'Low',
      compatibilty: ['Biomorph']
    },
    {
      name: '',
      type: ['Personal Augmentations', 'Bioware', 'Physical Augmentations'],
      desc: '',
      cost: 'Low',
      compatibilty: ['Biomorph']
    },
    {
      name: '',
      type: ['Personal Augmentations', 'Bioware', 'Physical Augmentations'],
      desc: '',
      cost: 'Low',
      compatibilty: ['Biomorph']
    },
  ]
};

export default data;