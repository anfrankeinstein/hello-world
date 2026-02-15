// Vibe Coding Hello World Script
// Demonstrating the power of vibe coding with AI assistance

console.log("🚀 Welcome to Vibe Coding!");
console.log("This is a simple hello world example.");

// A function to greet with vibe
function vibeGreet(name) {
    const vibes = ["awesome", "fantastic", "amazing", "vibrant"];
    const randomVibe = vibes[Math.floor(Math.random() * vibes.length)];
    return `Hello, ${name}! You're ${randomVibe} at vibe coding! 🌟`;
}

console.log(vibeGreet("Coder"));

// Let's add some async vibe
async function vibeDelay() {
    console.log("Thinking with AI... 🤖");
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Done! Ready to code! 💻");
}

vibeDelay();