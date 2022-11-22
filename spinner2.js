const msg = ['|', '/', '-', '\\'];
let delay = 0;
for (const index of msg) {
  setTimeout(() => {
    process.stdout.write(`\r${index}`);
  }, delay)
  delay += 100;
}