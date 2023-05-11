function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}
async function count() {
    let input = +document.getElementById("input").value
    while (input >= 0) {
        document.getElementById('result').innerHTML = input;
        input--;
        await sleep(1000);
    }
    document.getElementById('result').innerHTML = `finished`
}


