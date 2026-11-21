import * as fs from "node:fs";

const text =
  "The tide comes in the way it always has, unhurried, and the light on the water stays a little longer than it should, as if the evening itself has nowhere else to be. Long after the shore empties, the sea keeps arriving, and the stars come out one by one, in no hurry at all.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", text, "utf8");
