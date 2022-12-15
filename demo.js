function second(){
    console.log("second")
}
const first = async()=>{
    setTimeout(() => {
        console.log("settimeout")
    }, 3000);
    console.log("first");
    await second();
};
first();
console.log("end");
const no = 10;
console.log(`number is:${no}`);