const agents = [
  {
    icon: "https://media.valorant-api.com/agents/41fb69c1-4189-7b37-f117-bcaf1e96f1bf/displayiconsmall.png",
    name: "Astra",
    emojis: ["🌟", "🌀", "👁️"],
    gender: "Female",
    role: "Controller",
    species: "Radiant",
    region: "Africa",
  },
  {
    icon: "https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/displayiconsmall.png",
    name: "Breach",
    emojis: ["⚡", "🔨", "💪"],
    gender: "Male",
    role: "Initiator",
    species: "Radiant",
    region: "Europa",
  },
  {
    icon: "https://media.valorant-api.com/agents/9f0d8ba9-4140-b941-57d3-a7ad57c6b417/displayiconsmall.png",
    name: "Brimstone",
    emojis: ["🔥", "💨", "🎁"],
    gender: "Male",
    role: "Controller",
    species: "Human",
    region: "America",
  },
  {
    icon: "https://media.valorant-api.com/agents/22697a3d-45bf-8dd7-4fec-84a9e28c69d7/displayicon.png",
    name: "Chamber",
    emojis: ["🕶️", "🪞", "🔫"],
    gender: "Male",
    role: "Sentinel",
    species: "Human",
    region: "Europa",
  },
  {
    icon: "https://media.valorant-api.com/agents/117ed9e3-49f3-6512-3ccf-0cada7e3823b/displayicon.png",
    name: "Cypher",
    emojis: ["🕵️‍♂️", "🔒", "🕸️"],
    gender: "Male",
    role: "Sentinel",
    species: "Human",
    region: "Africa",
  },
  {
    icon: "https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/displayiconsmall.png",
    name: "Fade",
    emojis: ["🐺", "💨", "⚫"],
    gender: "Female",
    role: "Sentinel",
    species: "Radiant",
    region: "Europa",
  },
  {
    icon: "https://media.valorant-api.com/agents/95b78ed7-4637-86d9-7e41-71ba8c293152/displayicon.png",
    name: "Harbor",
    emojis: ["🌊", "🌀", "🔵"],
    gender: "Male",
    role: "Controller",
    species: "Radiant",
    region: "Asia",
  },
  {
    icon: "https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/displayiconsmall.png",
    name: "Gekko",
    emojis: ["🐧", "🚕", "💥"],
    gender: "Male",
    role: "Initiator",
    species: "Human",
    region: "America",
  },
  {
    icon: "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/displayiconsmall.png",
    name: "Jett",
    emojis: ["🪂", "🗡️", "🌬️"],
    gender: "Female",
    role: "Duelist",
    species: "Radiant",
    region: "Asia",
  },
  {
    icon: "https://media.valorant-api.com/agents/601dbbe7-43ce-be57-2a40-4abd24953621/displayicon.png",
    name: "Kay/O",
    emojis: ["🚫", "🗝️", "🤖"],
    gender: "?",
    role: "Initiator",
    species: "Robot",
    region: "?",
  },
  {
    icon: "https://media.valorant-api.com/agents/1e58de9c-4950-5125-93e9-a0aee9f98746/displayicon.png",
    name: "Killjoy",
    emojis: ["🤖", "🔒", "🔧"],
    gender: "Female",
    role: "Sentinel",
    species: "Human",
    region: "Europa",
  },
  {
    icon: "https://media.valorant-api.com/agents/bb2a4828-46eb-8cd1-e765-15848195d751/displayiconsmall.png",
    name: "Neon",
    emojis: ["🏃‍♀️", "☇", "⚡"],
    gender: "Female",
    role: "Duelist",
    species: "Radiant",
    region: "Asia",
  },
  {
    icon: "https://media.valorant-api.com/agents/8e253930-4c05-31dd-1b6c-968525494517/displayiconsmall.png",
    name: "Omen",
    emojis: ["🌑", "👥", "🔮"],
    gender: "Male",
    role: "Controller",
    species: "Radiant",
    region: "?",
  },
  {
    icon: "https://media.valorant-api.com/agents/eb93336a-449b-9c1b-0a54-a891f7921d69/displayiconsmall.png",
    name: "Phoenix",
    emojis: ["🔥", "🐦", "🥊"],
    gender: "Male",
    role: "Duelist",
    species: "Radiant",
    region: "Europa",
  },
  {
    icon: "https://media.valorant-api.com/agents/f94c3b30-42be-e959-889c-5aa313dba261/displayiconsmall.png",
    name: "Raze",
    emojis: ["💣", "🚀", "🔥"],
    gender: "Female",
    role: "Duelist",
    species: "Human",
    region: "America",
  },
  {
    icon: "https://media.valorant-api.com/agents/a3bfb853-43b2-7238-a4f1-ad90e9e46bcc/displayiconsmall.png",
    name: "Reyna",
    emojis: ["👁️", "🩸", "🔪"],
    gender: "Female",
    role: "Duelist",
    species: "Radiant",
    region: "America",
  },
  {
    icon: "https://media.valorant-api.com/agents/569fdd95-4d10-43ab-ca70-79becc718b46/displayiconsmall.png",
    name: "Sage",
    emojis: ["🍃", "💉", "💫"],
    gender: "Female",
    role: "Sentinel",
    species: "Radiant",
    region: "Asia",
  },
  {
    icon: "https://media.valorant-api.com/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/displayicon.png",
    name: "Skye",
    emojis: ["🐺", "🐦", "🌿"],
    gender: "Female",
    role: "initiaor",
    species: "Radiant",
    region: "Australia",
  },
  {
    icon: "https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/displayiconsmall.png",
    name: "Sova",
    emojis: ["🦅", "🏹", "🔍"],
    gender: "Male",
    role: "Sentinel",
    species: "Human",
    region: "Europa",
  },
  {
    icon: "https://media.valorant-api.com/agents/707eab51-4836-f488-046a-cda6bf494859/displayiconsmall.png",
    name: "Viper",
    emojis: ["🐍", "☣️", "🧪"],
    gender: "Female",
    role: "Controller",
    species: "Radiant",
    region: "America",
  },
  {
    icon: "https://media.valorant-api.com/agents/7f94d92c-4234-0a36-9646-3a87eb8b5c89/displayiconsmall.png",
    name: "Yoru",
    emojis: ["👥", "🌙", "🔪"],
    gender: "Male",
    role: "Duelist",
    species: "Radiant",
    region: "Asia",
  },
];
agents.forEach((agent) => {
  agent.name = agent.name.toLowerCase();
});

export default agents;
