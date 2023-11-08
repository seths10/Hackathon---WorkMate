export const users = [
  {
    username: "opoku",
    token: "1234567890",
    firstName: "Kwame",
    lastName: "Opoku",
    email: "o.k@example.com",
  },
];

export const questions = [
  {
    tags: [{ name: "support" }, { name: "tech" }],
    answerDetails: [
      "You’ve probably heard someone say, “If it’s on the internet, it’s not private.” That’s not totally true, however, since there are several ways you can ensure your privacy across digital platforms and services. Still, you should be concerned. Not everybody may be interested in your things, but somebody probably is.",
      "adfa",
    ],
    title: "Should I be worried about my privacy?",
    _id: 3,
    create_at: "7-05-2023",
    user: { displayName: "Seth Addo" },
    body: "Should I be worried about my online privacy? If yes, how can I make sure I’m protected?",
  },
  {
    tags:[{ name: "linux" }, { name: "tech" }],
    answerDetails: [
      "sdfs",
      "Malware is the umbrella term used to identify viruses, Trojans, spyware, adware, and other malicious programs that are widespread across the web. If you’ve encountered viruses before, then you’re already familiar with their effects. Other types of malware, however, can cause various impacts or damage.",
    ],
    title: "What does malware do? ",
    _id: 3,
    create_at: "27-01-2023",
    user: { displayName: "Seth Addo" },
    body: "string",
  },
];
