/* =====================================================================
   DAY 32: THE LITTLE SHOP OF US. Every word and every photo lives here.
   Change text freely. Keep the quotes around each line.

   Photos are in photos/ (cleaned copies of images/, with the Instagram
   arrows and dots painted out). pNN.jpg = images/1 (NN).png.

   Lines marked  // mine  were written by Claude. Change or delete freely.
   Everything else is your own wording.
   ===================================================================== */
window.DAY32 = {
  opening: {
    date: "12 NOVEMBER 2026",
    door: "the final door.",
    lines: ["“bro… I've been keeping a little place for you.”", "“come in.”"],
    hint: "tap the door", // mine
  },

  shop: {
    name: "THE LITTLE SHOP OF US",
    sub: "“a tiny place I made for you.”",
    yours: "“everything here is yours.”",
    note: ["“okay technically I made it.", "but still.” 😂💜"],
    look: "“look around, birthday boy.”",
    swipe: "swipe to look around →", // mine
    back: "← back to the shop", // mine
  },

  /* ---------- the memory cabinet: 12 photos, each with a tiny caption (captions are mine) ---------- */
  memories: {
    title: "the memory cabinet", // mine
    hint: "catch one ✨", // mine
    photos: [
      { src: "photos/p01.jpg", cap: "us. that's it. that's the caption. 💜" },
      { src: "photos/p15.jpg", cap: "look at us, cutting a cake together like pros. 🎂" },
      { src: "photos/p02.jpg", cap: "standing next to you like it's the most normal thing in the world." },
      { src: "photos/p13.jpg", cap: "your smile here though. 🤏🏻" },
      { src: "photos/p16.jpg", cap: "my favourite place to stand: right next to you." },
      { src: "photos/p27.jpg", cap: "the hat. the smile. the whole situation. 😂" },
      { src: "photos/p33.jpg", cap: "you concentrating. me supervising. very important job." },
      { src: "photos/p28.jpg", cap: "matching chaos energy." },
      { src: "photos/p34.jpg", cap: "this one makes my heart do the thing. 🥹" },
      { src: "photos/p35.jpg", cap: "same frame, same smile. my favourite kind of picture." },
      { src: "photos/p37.jpg", cap: "tilted camera. perfect moment." },
      { src: "photos/p39.jpg", cap: "night pictures with you hit different. ✨" },
    ],
  },

  /* ---------- the mailbox: your envelope labels, my tiny letters inside ---------- */
  letters: {
    label: "FOR ARJUN",
    envelopes: [
      { to: "for when you're sleepy", text: "go to sleep, kanna. the world can wait. I'll still be here when you wake up, probably with 14 unread messages. 😂" }, // mine
      { to: "for no reason", text: "no reason. I love you. that's the whole letter. 💜" }, // mine
      { to: "for a random Tuesday", text: "hi. it's Tuesday. that's it. I just wanted to be in your Tuesday." }, // mine
      { to: "for when you need a smile", text: "somewhere right now, a girl is smiling at her phone because of you. (it's me. I'm the girl.)" }, // mine
      { to: "for your future", text: "whatever you build next, I'm already proud. not of the result. of you." }, // mine
      { to: "from your annoying Kanmani", text: "this envelope exists purely to annoy you. mission accomplished? 😌" }, // mine
      { to: "for another birthday", text: "and another one after that. and another. I'd like to be around for a ridiculous number of them. 🎂" }, // mine
      { to: "just because", text: "just because you're you. that's always been enough of a reason." }, // mine
      { to: "for the boy underneath the 32", text: "underneath all the responsibilities, there's still the boy who wants to be babied. I see him. he's my favourite." }, // mine
      { to: "for whenever you miss me", text: "close your eyes. I'm right here, in your corner. always. 🫂" }, // mine
    ],
    footer: "“apparently one lifetime wasn't enough paper.”",
  },

  /* ---------- the potion shelf ---------- */
  potions: [
    { name: "SLEEPY BOY ELIXIR", line: "side effects: immediate nap.", liquid: "#B9A8FF", shape: "round" },
    { name: "LOVERBOY POTION", line: "works regardless of conversation topic.", liquid: "#FF9EC4", shape: "heart" },
    { name: "FOOD POLICE TONIC", line: "administered whenever Kanmani forgets to eat.", liquid: "#9EE6B8", shape: "tall" },
    { name: "BICKERING DRAUGHT", line: "renewable indefinitely.", liquid: "#FFC48A", shape: "flask" },
    { name: "KASU-MASUS SERUM", line: "classified.", liquid: "#8FD6FF", shape: "vial" },
    { name: "DONUT DUST", line: "absolutely classified.", liquid: "#F7D86B", shape: "jar" },
  ],

  /* ---------- the drawer (each line is from your Day 28) ---------- */
  drawer: {
    label: "THINGS I NEVER WANT TO STOP DOING",
    things: [
      { icon: "tease", text: "I never want to stop annoying you." },
      { icon: "polaroid", text: "I never want to stop collecting little moments with you." },
      { icon: "headphones", text: "I never want to stop listening to you." },
      { icon: "scribble", text: "I never want us to become too serious for nonsense." },
      { icon: "gift", text: "I never want to stop making you tiny things." },
      { icon: "letters", text: "And yes... I never want to stop writing to you either." },
      { icon: "phone", text: "I never want you to forget that you're thought of." },
      { icon: "calendar", text: "I never want to wait for a special occasion to love you." },
      { icon: "tag", text: "I never want to stop being your Kanmani." },
      { icon: "note", text: "I never want to stop making a life with you out of tiny things." },
    ],
    footer: "“I don't want to outgrow the little things with you.”",
    tiny: "“there are approximately 900 more. don't worry.”",
  },

  /* ---------- the observatory: wishes, not predictions ---------- */
  observatory: {
    stairs: "↑ the observatory", // mine
    stars: [
      { name: "dreams", text: "“I hope you build things you're proud of.”" },
      { name: "company", text: "“work that excites you.”" },
      { name: "adventures", text: "“adventures worth remembering.”" },
      { name: "travel", text: "“places that surprise you.”" },
      { name: "peaceful mornings", text: "“days that feel peaceful.”" },
      { name: "ridiculous ordinary days", text: "“I hope you get ordinary days that feel extraordinary.”" },
      { name: "achievements", text: "“a life you're proud of.”" },
      { name: "new places", text: "“I hope life takes you places you've never seen.”" },
      { name: "things neither of us can predict", text: "“I hope life surprises you in good ways.”" },
      { name: "future birthdays", text: "“and selfishly… I hope I get to see a lot of them.”" },
    ],
    maybe: "maybe.",
    end: ["“I don't know what all the stars ahead of you are called yet.”", "“I just hope I get to watch a lot of them light up.”"],
  },

  /* ---------- the warm corner ---------- */
  warm: {
    photo: "photos/p06.jpg",
    lines: ["“you've been doing a lot.”", "“building things.”", "“carrying things.”", "“becoming things.”", "“so for a minute…”", "“don't do anything.”", "“just sit here.”", "“welcome home, Ammu.”"],
  },

  /* ---------- the mirror of you (labels are yours, lines are yours) ---------- */
  mirror: {
    versions: [
      { label: "little Arjun", src: "photos/p17.jpg", line: "“I love this one too.”" },
      { label: "school Arjun", src: "photos/p18.jpg", line: "“still you.”" },
      { label: "working Arjun", src: "photos/p21.jpg", line: "“I've met this version.”" },
      { label: "ambitious Arjun", src: "photos/p22.jpg", line: "“I love this one too.”" },
      { label: "sleepy Arjun", src: "photos/p07.jpg", line: "“still you.”" },
      { label: "ridiculous Arjun", src: "photos/p19.jpg", line: "“I love this one too.”" },
      { label: "loverboy Arjun", src: "photos/p14.jpg", line: "“I've met this version.”" },
      { label: "the person building his company", src: "photos/p40.jpg", line: "“different chapter.”" },
      { label: "the private version of Arjun that I know", src: "photos/p31.jpg", line: "“still you.”" },
    ],
    tap: "tap the mirror", // mine
    end: ["“I've met so many versions of you.”", "“and somehow, I still feel like I've only just started discovering you.”", "“I think that's one of my favourite things about loving you.”"],
  },

  /* ---------- the candle of 32: tiny pieces of our world (written from the facts you told me) ---------- */
  candle: {
    missing: "“I think something is missing.”",
    tapPoints: "tap the little lights", // mine
    rest: "light the rest ✨", // mine
    early: ["almost… look around a little more first? 🥹", "light it anyway"], // mine
    points: [
      "the way you fall asleep anywhere. even in a taxi. on a date. 😂",
      "how you still make time to call, even on the busiest days.",
      "the little updates you send so I don't worry.",
      "you listening to all my rants. all of them.",
      "you remembering my food cravings.",
      "random “love you”s out of nowhere.",
      "you scrolling all the way back to react to every reel I sent.",
      "your long messages that make me feel so seen.",
      "you telling me “no” when it's for my own good.",
      "the sneaky reverse psychology. (yes, I noticed.)",
      "you wanting to recreate our lil kasamusas.",
      "how extra energetic you get around me.",
      "the version of you that wants to be babied.",
      "the late-night calls.",
      "physics talk at ridiculous hours.",
      "two strangers in the same community. look at us now.",
      "Interstellar at Phoenix Mall.",
      "Nallur, a little stall, and the first “love you”.",
      "the MVP voice message I still keep.",
      "“You r the best and i want you to stay my side forever.”",
      "boring but never bored.",
      "private but never a secret.",
      "the black hole neither of us expected to fall into.",
      "you building something of your own.",
      "the way you show up for the community.",
      "your innocent smile that ruins every serious moment.",
      "the food police. 😂",
      "your apology arriving before my argument does.",
      "turning normal conversations into flirting for no reason.",
      "a lil world of us, someday.",
      "you, exactly as you are.",
      "borahae, darling. 💜",
    ],
    constellation: "HAPPY BIRTHDAY, AMMU",
    oneMore: "“okay… there's one more room.”",
  },

  /* ---------- the shopkeeper room and the letter ---------- */
  shopkeeper: {
    sign: "SHOPKEEPER",
    envelope: "FOR THE BIRTHDAY BOY",
    photo: "photos/p01.jpg",
    letter: [
      { b: "“okay bro.”" }, { b: "“you found the end.”" },
      { p: "“I couldn't figure out how to put everything I wanted to tell you into one birthday message.”" },
      { p: "“so I made you a little world instead.”" },
      { p: "“because I think that's what my love for you has become too.”" },
      { p: "“not one giant dramatic thing.”" },
      { p: "“just a thousand tiny things.”" },
      { list: ["“memories.”", "“conversations.”", "“stupid jokes.”", "“bickerings.”", "“letters.”", "“tiny gifts.”", "“ordinary moments.”", "“your sleepy face.”", "“your ridiculous smile.”", "“the dreams you're building.”", "“the future neither of us can see yet.”"] },
      { p: "“all those tiny things somehow became something huge.”" },
      { big: "“us.”" },
      { p: "“and if I could give you one thing for 32…”" },
      { p: "“I'd give you the feeling of being loved, understood, remembered, and completely safe to be yourself.”" },
      { p: "“basically…”" },
      { b: "“I made you a magical shop.” 😂💜" },
    ],
    but: "“but bro…”",
    missing: "“I think there's one thing this shop is missing.”",
  },

  birthday: {
    door: "THE BIRTHDAY ROOM",
    lines: ["“come on.”", "“we still have a cake to cut.”"],
    cut: "cut the cake 🎂", // mine
    bigger: "⤢ watch it bigger", // mine
    title: "ONE LAST THING",
    after: [
      "“happy 32nd birthday, Ammu.” 💜",
      "“thank you for being you.”",
      "“and yes…”",
      "“I'm still going to annoy you, bicker with you, make tiny things for you, write ridiculous amounts of letters, and somehow find new ways to bother you.” 😂",
    ],
    stuck: "“you're stuck with me, birthday boy.”",
    comeBack: "“come back to the shop whenever you want.”",
    open: "“the door stays open.”",
  },

  outside: {
    name: "THE LITTLE SHOP OF US",
    sub: "open whenever you need it.",
    final: "HAPPY BIRTHDAY, AMMU 💜",
    date: "12 • 11 • 2026",
    again: "go back inside →", // mine
  },
};
