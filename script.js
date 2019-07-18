var shoutouts = [
  "You are one of the first people I talked to and you are so easy to talk to.",
  "You are super funny! I love working with you and you make every project a lot more fun to work on",
  "you are super patient and hardworking",
  "Your ability to overcome problems. You are have Koded some awesome websites this week.",
  "how positive and fun you are!",
  "You are so creative at what you do!",
  "how you helped so much with the tip calculator!",
  "that you still have a smile on your face even when things go wrong",
  "Your smile and how nice you are!",
  "Your humor and kindness.",
  "How you're outgoing and excited to start convos!",
  "how nice and kind you are. I love having coding mental breakdowns with you and love how both of us help each other when we are stuck.",
  "Your kind hearted spirit and your smile is so contagious."
]

for (x of shoutouts) {
  $("#shoutout-container").append("<p>" + x + "</p> <br>");
}
