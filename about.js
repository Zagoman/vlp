const team = document.querySelector("#theteam-title");
const teammarquee1 = document.querySelector("#theteam-marquee");
const teammarquee2 = document.querySelector("#theteam-marquee2");
const teamMarquee = new Marquee(team, teammarquee1, teammarquee2);

const values = document.querySelector("#values-title");
const valuesmarquee1 = document.querySelector("#values-marquee");
const valuesmarquee2 = document.querySelector("#values-marquee2");
const valuesMarquee = new Marquee(values, valuesmarquee1, valuesmarquee2);

const message = document.querySelector("#message-title");
const messagemarquee1 = document.querySelector("#message-marquee");
const messagemarquee2 = document.querySelector("#message-marquee2");
const messageMarquee = new Marquee(message, messagemarquee1, messagemarquee2);
