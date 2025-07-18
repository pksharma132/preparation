/** bombed this in an interview */

class RateLimiter {
  fn;
  executions;
  ttl; // in secs
  currentExecutions;
  window;

  constructor(fn, executions, ttl) {
    this.fn = fn;
    this.executions = executions;
    this.ttl = ttl * 1000;
    this.window = Date.now();
    this.currentExecutions = 1;
  }

  async execute(...params) {
    // reset the window
    if (Date.now() - this.window >= this.ttl) {
      this.window = Date.now();
      this.currentExecutions = 1;
    }

    if (this.currentExecutions > this.executions) {
      throw new Error("Limit exceeded within the time");
    }

    this.fn(...params);
    this.currentExecutions++;
  }
}

function print(a) {
  console.log("function is running!!", a);
}

async function main() {
  const rl = new RateLimiter(print, 3, 1);
  rl.execute(1); // works
  rl.execute(2); // works
  rl.execute(3); // works

  rl.execute(4).catch((err) => console.log(err)); // throws

  await new Promise((resolve) => setTimeout(() => resolve(), 1000));

  rl.execute(5).catch((err) => console.log(err));
  rl.execute(6).catch((err) => console.log(err));
  rl.execute(7).catch((err) => console.log(err));
  rl.execute(8).catch((err) => console.log(err));
  await new Promise((resolve) => setTimeout(() => resolve(), 1000));

  rl.execute(9).catch((err) => console.log(err));
}

main().catch((e) => console.log(e));

// should only execute the given number of times for the specified time
// so if called more than the specified no of times within the specifed time should throw
