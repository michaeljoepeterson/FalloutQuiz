const questionObjects = [
  {
    question: "You see two super mutants in the distance. To your left is an old protectron. To your right is a locked door, what do you do?",
    choices: ["S) Run head first towards the super mutants, with your teeth and fists clenched", "I) Hack the protectron and send it towards the super mutants", "P) Pick the lock and see what lies behind the door", "A) Take a dusty path that appears to lead around the super mutants"],
    results:["S) You run towards the super mutants, ready to fight. Unfortunately for you the super mutants are much stronger than you, and twice your size! Let’s just say this is a fight you didn’t win. Maybe try intelligence or agility next time!","I) You successfully hack the terminal controlling the protectron. It heads towards the super mutants and turns them into super mutant dust!", "P) You pick the lock and open the door! Uh-oh looks like that was where the super mutants were making camp! I don’t think this will end well. Maybe try intelligence or agility next time!", "A) You sneak down the dusty path, the super mutants had no idea you were there. You even found a fat man rocket launcher the super mutants carelessly left behind."],
    images:["assets/failLimbs.png","assets/hacker.png","assets/failPunch.png","assets/agility1.png"],
    altText:["limbs Fallout Image","hacker Fallout Image","Punch Fallout Image","agility Fallout Image"],
    dataChoices:[0,4,1,5]
  },
  {
    question:"You have been wandering the wasteland all day when suddenly, a radiation storm heads your way! You see a settler and his family heading into their house for shelter. What do you do?",
    choices:["E) Tough it out and face the storm head on", "I) Take some Rad-X and hide in a nearby ditch", "L) Take the pill in your other pocket and hope it’s not Buffout!","C) Talk to the settler and see if he has room in their place for you"],
    results: ["E) Well that didn’t work out quite as planned your rads have gone through the roof! But hey an extra arm never hurt anyone. Maybe try intelligence or luck next time!","I) Good choice! That Rad-X stopped any ill effects you may have faced from the radiation storm.", "L) Well looks like that pill was just some Mentals, you’re feeling much smarter now! Which helps you realize that you had Rad-X all along. Phew that was lucky!", "C) You talk to the settlers they seem great! Until you realize they are a bunch of cannibals, you knew something was off when they asked for a hand. Maybe try intelligence or luck next time!"],
    images:["assets/failMutant.png","assets/intelligence1.png", "assets/luck.png","assets/failLimbs.png"],
    altText:["mutant Fallout Image","intelligence Fallout Image","luck Fallout Image","limbs Fallout Image"],
    dataChoices:[2,4,6,3]
  },
  {
    question:"You are no more than six feet from the most dangerous creature in the wasteland, a death claw! In your inventory is one Stimpak, a bottle of Nuka-Cola, a pistol, and some Jet. What do you do?",
    choices:["S) A death claw? Ha! You chug the Nuka-Cola and start swinging!","P) Take the Jet to give yourself some time to analyze the situation.","A) RUN!","L) Grab your pistol, close your eyes, and start firing!"],
    results: ["S) You take your first swing and hit the death claw right in the jaw! You knock the beast down long enough for you to escape, guess all those hours reading Grognak the Barbarian finally paid off.","P) You take the Jet and time slows. Allowing you to fully appreciate the dexterity the beast has with those claws. Oh, look that arm looks familiar. Maybe try strength or luck next time!", "A) You turn around ready to speed off in the opposite direction, only to find the alpha death claw staring at you, you get the feeling he hasn’t eaten in a while. Maybe try strength or luck next time!", "L) You fire away with your pistol until the clip is empty. You open your eyes and see the death claw laying there lifeless and a stranger standing over its body. That was lucky! You go to thank him, and the stranger vanishes, huh mysterious."],
    images:["assets/strength2.png","assets/failLimbs.png","assets/failLimbs.png","assets/luck.png"],
    altText:["strength Fallout Image","Limbs Fallout Image","Limbs Fallout Image","luck Fallout Image"],
    dataChoices:[0,1,5,6]
  },
  {
    question:"You are exploring some ruins, hoping to find some supplies. You turn around and see a ghoul slowly making its way towards you. You are unsure if it is friendly or ravenous, what do you do?",
    choices:["E) You’re tougher than some decaying ghoul, stand your ground","C) You approach the ghoul and try to speak to it, maybe he’s one of those friendly ghouls?","I) You are certain you can tell whether a ghoul is friendly or not. You analyze the ghoul more closely","A) You think the ghoul hasn’t seen you yet, so you hide"],
    results: ["E) You stand your ground, the ghoul lunges at you and its head bounces off your powerful chest, well that was easy.","C) You talk slowly with the ghoul, you realize it understands you, not only that you can smell alcohol coming from its breath. Just another drunk ghoul from good neighbour.","I) You pause analyzing the situation thinking about all the ghouls you’ve read about. Your deep thought is interrupted by the ghouls irradiated left hand. I guess books can’t teach you everything. Maybe try endurance or charisma next time!", "A) You dive into the nearest pile of junk. You wait a moment and things go quiet. You poke your head out only to see a pack of feral ghouls sleeping around you. Looks like it’s going to be a long night. Maybe try endurance or charisma next time!"],
    images:["assets/endurance1.png","assets/charisma.png","assets/failPunch.png","assets/failMutant.png"],
    altText:["endurance Fallout Image","charisma Fallout Image","Punch Fallout Image","mutant Fallout Image"],
    dataChoices:[2,3,4,5]
  },
  {
    question:"You head to Diamond City, hoping to find some work. What do you do?",
    choices:["S) You head to the nearest bar, grab a couple cold ones, look mean, and hope some work comes your way", "P) You have heard of a detective in the city, goes by Valentine. Seems like a good place for a job","I) You see a mysterious Japanese robot named Takahashi. Maybe if you can decipher what it is saying there it could lead you to some fortune?", "A) You heard of an ambitious journalist named Piper, maybe she has some work?"],
    results:["S) You sit there for a couple hours, nobody says anything to you, or each other for that matter. They all seem too interested in talking to this Weirdo in a jump suit with the numbers 111 written on the back. You wake up the next day hungover and head back to the same bar for some food. You see all the exact same people from last night, in the exact same place, all still saying nothing to each other, just staring endlessly. You bolt out of that city and hope that was all just a bad dream. Maybe try perception or agility next time!", "P) You talk to this detective and find out he used to be a synth! Or still is a synth that was reprogrammed? Maybe badly programmed? Either way he tells you some lady is looking for her kid and maybe you should start there. He said she was headed to the glowing sea, guess you better start there.","I) You spend hours reverse engineering the robot, checking its code, looking for any clues until eureka! You figured out what the robot was saying! It said what are we having today! Wait that’s not useful. Maybe try perception or agility next time!","A) You head over to piper she says she met a lady looking for a hidden society that is obsessed with recreating human like synths. She thinks if she finds this institute she will find her baby. And people thought you were crazy for fist fighting a death claw!"],
    images:["assets/failPuke.png","assets/perception1.png","assets/failPunch.png","assets/agility1.png"],
    altText:["Puke Fallout Image","perception Fallout Image","Punch Fallout Image","agility Fallout Image"],
    dataChoices:[0,1,4,5]
  },
  {
    question: "You have heard stories of these things called vaults. Apparently, people believe that these vaults, which were designed to keep people safe from the bombs, were some government labs, designed to put people in horrible cruel experiments. You just can’t stand it when people bad mouth Vault-Tec! (Note these answers have not been influenced by the fact that this quiz and the vaults were designed by Vault-Tec)",
    choices:["P) Use your expert perception to convince people that these vaults were a great idea!","S) Use your mighty strength to convince people that these vaults were a great idea!","C) Use your dashing charisma to convince people that these vaults were a great idea!","L) Use your luck to convince people that these vaults were a great idea! Wait does that make sense?"],
    results:["P) Wow your perception of the vaults has changed other people’s perception of the vaults! They now realize that perception is not always indicative of reality.","S) You use your might to convince people that the vaults were in fact a great place. You can’t tell if they believe you or are just terrified. Oh well, job well done!","C) You understand the intricacies involved in getting people to believe what you have to say. Thankfully everything bad said about the vaults was false, so it didn’t take much convincing!","L) You simply tell people the vaults were great, and they believed you! Wait they believed you? Wow that was lucky!"],
    images:["assets/perception1.png","assets/strength1.png","assets/charisma.png","assets/luck.png"],
    altText:["perception Fallout Image","strength Fallout Image","charisma Fallout Image","luck Fallout Image"],
    dataChoices:[1,0,3,6]
  },
  {
    question:"You’re wandering through the wasteland when you see a group of raiders ahead. You crouch behind a wrecked old car and watch as they prey on a group of friendly ghouls. Suddenly, a sound catches your attention! You look into the sky and see the Brotherhood of Steel, your comrades in arms, descending in a Vertibird. They look to you for direction; What do you do?",
    choices:["E) Use your connections with the Brotherhood to ambush both opponents!","C) Stop them before they can attack the group of ghouls. Their order will not let the victims survive unless you intervene.","L) Charge into combat blindly","A) You don’t want any part in this, run away!"],
    results:["E) You nod to them, and rush into the fray, their suits of power armour behind you making quick work of anyone still standing. When the dust settles, you loot every corpse you can find, there’s a lot of stuff, it’s a good thing you can carry some extra weight!","C) You try to convince the brotherhood to stand down, but listening isn’t their strong suit, their power armor is their strong suit. They riddle you and the ghouls with bullets. Maybe try endurance or luck next time!","L) You burst out from behind your hiding place with a shout, running at full force towards the combat. You can hear Laser rifles firing and screams. Your eyes are closed, you didn’t bother to draw your weapon, but when the fighting stops you’re still in one piece. You quickly realize that the dead legendary raider beside you has a bounty on his head for murder. Looks like you’ve just made 10000 Caps! That was lucky!","A) You make hasty eye contact with the Brotherhood’s Paladins before turning and bolting from the scene. The brotherhood will not forget this cowardice. Maybe try endurance or luck next time!"],
    images:["assets/endurance1.png","assets/failLimbs.png","assets/luck.png","assets/failPunch.png"],
    altText:["Endurance Fallout Image","Limbs Fallout Image","Luck Fallout Image","Punch Fallout Image"],
    dataChoices:[2,3,6,5]
  },
  {
    question:"You’re walking through the wasteland at night and hear a weak cry for help, what do you do?",
    choices:["S) You believe the cry is coming from the near by rubble. You frantically dig through the rubble","P) You think this might be a trap, sit back and survey the situation from your sniper rifle’s scope", "I) Wait is that cry real or digitally created?", "A) Sneak over to where you heard the cries and investigate further"],
    results:["S) You toss apart the rubble with ease, only to discover a radio is emitting these cries. You turn around and you see a group of raiders armed and ready to take anything you have. You are too tired now to resist! Well at least they let you keep your clothes. Maybe try perception or agility next time!","P) Sensing a trap, you peer down your sniper rifle’s scope. You see a man heading towards a pile of rubble, he tosses the rubble apart with ease. From behind you see some raiders approach him. You quickly take them out with your sniper and you split the loot with your new friend.","I) You head over to the pile of rubble where the cry is coming from. Hah this is just a radio playing these cries, that was close! Unfortunately for you, you wandered a little to close to the sound. Raiders beat you and take everything you have. Maybe try perception or agility next time!","A) You dash from bush to bush, you realize this is just an elaborate trap. You see the raiders are hiding behind a building and haven’t noticed you yet. You sneak behind them and place a few mines near their feet. You whistle, and they run towards you and explode the mines. Well that was a bloody mess!"],
    images:["assets/failPunch.png","assets/perception1.png","assets/failPunch.png","assets/agility2.png"],
    altText:["Punch Fallout Image","perception Fallout Image","Punch Fallout Image","Agility Fallout Image"],
    dataChoices:[0,1,4,5]
  },
  {
    question:"A man approaches you asking for help! Apparently, his wife is just around the corner and has been shot.  Something seems a bit strange about the emotionless way he described his wife’s injuries. What do you do?",
    choices:["P) You know something is wrong with the situation, follow the man, but keep your distance","C) You try to convince him the best way to save his wife is to head to the nearest town for help","I) From his inflections in his speech you know this man can not be telling the truth. Accuse him of lying","L) Follow him and help his wife!"],
    results:["P) You follow the man to a secluded area, keeping your distance. He stops moving, you see no signs of his wife. You knew this was a bad idea. Before you can react, he pulls out his laser pistol and blasts you. As things fade to black you hear him talk about something called the Institute. Maybe try intelligence or luck next time!","C) You manage to convince the man to come with you to the nearest village. As you enter the village you scream out this man is a synth! The villagers turn to you and all say in a monotone voice, we are too. Maybe try intelligence or luck next time!","I) You accuse the man of telling lies. He looks at you, smiles, walks away and tells the same story to another nearby wanderer. Before you can warn them the two run off around the corner. Shortly after you hear laser weapons from around the corner. You leave with your life and wit intact.","L) Why would somebody lie about their loved one being shot? Surely people are to cynical after these nuclear bombs fell. You follow the man and see no signs of his injured wife. He pulls out a laser pistol and aims the barrel at you. Oh, look at that a shiny cap on the ground, you pick it up right as the man pulls the pistol. The laser bounces off a sign near your head and hits the man square in the face. Phew that was some lucky timing! Not only that your one cap richer!"],
    images:["assets/failPunch.png","assets/failPunch.png","assets/intelligence1.png","assets/luck.png"],
    altText:["Punch Fallout Image","Punch Fallout Image","intelligence Fallout Image","Luck Fallout Image"],
    dataChoices:[1,3,4,6]
  },
  {
    question:"You’re building some structures at night in your settlement and hear some rustling in the bush nearby. What do you do?",
    choices:["P) Investigate!","S) Punch first, think never, it’s the only way to survive in this nuclear wasteland","C) Call out and see if anybody’s there","L) Ignore the noise and go back to work"],
    results:["P) You put down your tools and peer into the gloom. The rustling does not start again but with your keen eye, you are able to discern a small glint through the leaves of a particularly large bush. Pushing the growth aside, you find a flying saucer, and a little green man, he doesn’t seem to happy to see you. Maybe try strength or luck next time!","S) A Yao guai bursts forth, leaping out and landing only meters away. With a shout, you charge, grabbing a nearby sledgehammer and swinging wildly. Your weapon connects with the mutant’s head in a sickening crack, blood spraying everywhere. It’s dead and your settlers are safe.", "C) You yell into the distance and a man comes by asking for help. You take him to your settlement and he robs you and your family blind! Never trust anyone in the wasteland. Maybe try strength or luck next time!","L) With a passive shrug, you return to your work, bending down to pick up some scrap metal. Later that evening, a settler approaches you in a panic. Apparently her brother was picking Tatos out near where you were working and got picked off by a roaming super mutant hound. It could have very well attacked you earlier while you were out there unguarded. That was lucky!"],
    images:["assets/failMutant.png","assets/strength2.png","assets/failPunch.png","assets/luck.png"],
    altText:["Mutant Fallout Image","Strength Fallout Image","Punch Fallout Image","Luck Fallout Image"],
    dataChoices:[1,0,3,6]
  },
  {
    question:"You pick some coordinates off of a protectron you have just slain, they look like they’re headed towards some kind of heavily guarded bunker, its locked tight, what do you do?",
    choices:["A) See if there’s a way that you can sneak in subtly past the security","E) A little bullets never hurt anyone, break in and see what’s inside","I) Hack the terminal connected to the locked door","P) See if there’s an alternate way in"],
    results:["A) You safely make it past the turrets guarding the front entrance, deftly picking the lock without being detected. There’s a long hallway before you. Nothing seems to be in your way. You take one step and BANG, you’re sprawled on your back by a super mutant with a stealth boy. Looks like today wasn’t your day. Maybe try endurance or intelligence next time!","E) You barge your way into the bunker, forcing the lock open and emptying clip after clip into every Robco robot in your way. By the time your bullets run out, you’re the only one left standing, a single stimpack still left, unused in your inventory. The bunker is filled with spare parts and scrap metal… dang… looks like the only treasure here is the fusion cells in that mister handy.","I) The terminal was difficult to hack and nearly locked you out, but on your last try you got in on the word FLEECE. Oh look you found a nice wool hat!","P) You sneak around the side of the bunker, looking for a weak point you could potentially use. As you’re about half way around the structure, you hear a low clicking noise inside. That sounds like a mirelurk. Investigating further, you notice a number of eggs buried in the ground nearby. This is a nest. You think it’s probably best that you flee before the queen hears you. Maybe try endurance or intelligence next time!"],
    images:["assets/failLimbs.png", "assets/endurance1.png","assets/hacker.png","assets/failPunch.png"],
    altText:["Limbs Fallout Image","Endurance Fallout Image","Hacker Fallout Image","Punch Fallout Image"],
    dataChoices:[5,2,4,1]
  },
  {
    question:"Someone at good Neighbour has been asking for you around town, word is, he’s a ghoul that wants your help. What do you do?",
    choices:["C) Find the man and see what he needs","I) See what you can find out about this fellow before he finds you","S) Track the guy down and threaten him to stop broadcasting that you’re in town","P) Meet with him in disguise as an anonymous contact"],
    results:["C) You find him easily, George, is his name. He says he needs help back home and asks you to follow him. You charm him easily and he lets slip that a couple thugs are threatening to bring you to them while they hold his pet mole rat hostage. You agree to play along and follow George to his modest home behind a truck stop. As expected two thugs are waiting for you. As George is demanding his mole rat back, you step in and convince the criminals to let the pet go.","I) Asking around the town, you learn that the ghoul is a survivor from the bomb 210 years ago. He thinks you might have some information regarding the location of an old historic monument he’d like to visit. Since your known around the Commonwealth for your extensive knowledge of the Pre War era, you happily oblige the ghoul. He thanks you profusely and gives you 500 caps in return.","S) You track the ghoul down easily enough, he made it clear where he would be waiting for you. Finding him at Hotel Rexford. You slam him up against the nearest brick wall, growling intimidatingly, how did he hear about you and what does he want. The ghoul barely chokes out that he had a request from the famous detective Nick Valentine before falling unconscious. Oops, looks like you may have overdone it. Maybe try charisma or intelligence next time!","P) It’s easy to find a convincing disguise in town. You decide on a raider mask and bandana, uh oh looks like it is too convincing because your spending the night in the town jail. Maybe try charisma or intelligence next time!"],
    images:["assets/charisma.png","assets/intelligence1.png","assets/failPunch.png","assets/failPunch.png"],
    altText:["Charisma Fallout Image","intelligence Fallout Image","Punch Fallout Image","Punch Fallout Image"],
    dataChoices:[3,4,0,1]
  }
];
const introPage = {
  content:`<p>Welcome waste lander to the Vault-Tec S.P.E.C.I.A.L attribute allocation quiz! Other wise known as the Vault-Tec S.A.A.Q. This quiz will help you determine what makes you S.P.E.C.I.A.L! During this quiz you will be presented with various scenarios that you may encounter in the wasteland. Each scenario will provide you with four choices, each pertaining to one of your S.P.E.C.I.A.L attributes. But hey wait a sec, what exactly are these S.P.E.C.I.A.L attributes?  Well they are the things that make you S.P.E.C.I.A.L! They are:</p>
          <p>Strength</p>
          <p>Perception</p>
          <p>Endurance</p>
          <p>Charisma</p>
          <p>Intelligence</p>
          <p>Agility</p>
          <p>Luck</p>
          <p>By the end of this quiz your answers will be tallied up and your S.P.E.C.I.A.L attributes will be displayed! But choose carefully, because some of these choices could lead to unforeseen consequences. Are you ready to find out what makes you S.P.E.C.I.A.L?</p>`,
    headers: "<h1>Vault-Tec S.A.A.Q</h1>",
    image: '<img src="assets/vaultBoy.png" alt="Fallout Vault Boy Image">',
    buttonContent:'<form><button class="beginButton defaultButton js-beginButton">Begin</button></form>'
};
const finalPages = [
  {
    content:`<p>Looks like strength is what makes you S.P.E.C.I.A.L.!</p>
<p>The wasteland hasn’t seen such raw strength since Grognak the barbarian! You like to smash things, and if there is something to big to smash you grab something big to smash it. Any problems in your way you know how to deal with them, SMASH!
</p>`,
    image:"assets/strengthWin.png",
    altText:"Strength Fallout image"
  },
  {
    content:`<p>Looks like perception is what makes you S.P.E.C.I.A.L.!</p>
<p>Nothing can sneak past you, whether it’s a pesky synth pretending to be human, or a mirelurk burrowed underground. You can sense danger and stop it before it even gets close with your trusty sniper rifle. Stick to your instincts and nothing will ever surprise you in the wasteland
</p>`,
    image:"assets/perceptionWin.png",
    altText:"perception Fallout image"
  },
  {
  content:`<p>Looks like endurance is what makes you S.P.E.C.I.A.L.!</p>
<p>You have survived gunshots, radiation, super mutants, raiders, and even a death claw! Nothing can stop you! Although you still have hardships to face you know that as long as you keep your head up and push through, you can endure anything.
</p>`,
    image:"assets/enduranceWin.png",
    altText:"endurance Fallout image"
  },
  {
  content:`<p>Looks like charisma is what makes you S.P.E.C.I.A.L.!</p>
<p>You have a natural talent with words, you can get the best bargains at the shops and convince even the most corrupt politician to see things your way. When something doesn’t go your way, nothing to fear because you know a guy, and that guy knows a guy, and that guy knows a guy and so on. No problem is to big when you have the right connections!
</p>`,
    image:"assets/charismaWin.png",
    altText:"charisma Fallout image"
    
  },
  {
  content:`<p>Looks like intelligence is what makes you S.P.E.C.I.A.L.!</p>
<p>Your friends used to call you a nerd in school, but hacking, robotics, and science all came natural to you. Boy was that a good thing! You can get past the most advanced security systems in mere minutes. You also have a small army of robots always nearby. Who’s the nerd now?
</p>`,
    image:"assets/intelligence1.png",
    altText:"intelligence Fallout image"
  },
  {
  content:`<p>Looks like agility is what makes you S.P.E.C.I.A.L.!</p>
<p>What makes less sound than nothing? You! You are the ninja of the wastelands, you can take out a whole raider camp without even waking their guard dogs. You once broke into the mayor’s office at diamond city just for fun, in daylight. Just imagine you did all that without even using your stealth boy, and people are worried about these synths.
</p>`,
    image:"assets/agilityWin.png",
    altText:"agility Fallout image"
  },
  {
  content:`<p>Looks like luck is what makes you S.P.E.C.I.A.L.!</p>
<p>Growing up it seemed like you were good at nothing! Your parents hated you, and you had no friends. But you had the most important thing on your side, luck! No matter what the situation things just always go your way. Not only that this nice man in a brown trench coat always seems to show up when someone or something tries to start some trouble. One shot from his revolver and the problem is solved. What’s really mysterious though is he just vanishes after he shoots his gun. I guess you’ve seen stranger things out in the wasteland. You really should think of a name for that guy, maybe the cryptic visitor?
</p>`,
    image:"assets/stranger.png",
    altText:"Mysterious Stranger Fallout image"
  }
];
let specialArrayCopy = [];