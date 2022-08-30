const sentence = "hello there from lighthouse labs";

const typewriter = (string) => {
  let interval = 200;
  for (const char of string) {
    setTimeout(() => process.stdout.write(char), interval);
    interval += 200;
  }
  setTimeout(() => process.stdout.write('\n'), interval)}

typewriter(sentence);