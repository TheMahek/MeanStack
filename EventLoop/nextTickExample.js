console.log("A");
process.nextTick(() => {
    console.log("Mahek(Next tick)");
});
console.log("B");
