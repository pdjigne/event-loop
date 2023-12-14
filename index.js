let counter = 0;

function incrementAndCall() {
  counter++;
  incrementAndCall();
}

try {
  incrementAndCall();
} catch (error) {
  console.log("Error:", error);
  console.log("Counter value:", counter);
}