module.exports = {
    log: data => console.log(`[\x1b[31mSTORM TESTING\x1b[0m] ${data}\x1b[0m`),
    request: data => console.log(`[\x1b[31mREQUEST\x1b[0m] ${data}\x1b[0m`)
}