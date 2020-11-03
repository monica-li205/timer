let args = process.argv.slice(2);

const timer = (seconds) => {
  if (seconds < 0 || typeof !Number) {
    return '';
  } else {
    setTimeout(() => {
      return console.log('beep!');
    }, seconds * 1000);
  }
};


for (let i = 0; i < args.length; i++) {
  timer(args[i]);
}