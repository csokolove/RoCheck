const nblx = require('noblox.js');
const inquirer = require('./inquirer');
const chalk = require('chalk');

module.exports = async () => {

    const run = async () => {
        const username = await inquirer.requestInput();
        try {
            await nblx.getIdFromUsername(username).then(async id => {
                await nblx.getPlayerInfo(id).then(info => {
                    console.log(chalk.red(`Username unavailable.\n`))
                    console.log(`Username: ${info.username}\nID: ${id}\nProfile link: ` + chalk.blue(`https://roblox.com/users/${id}/profile`))
                })
            })
        } catch {
            console.log(chalk.green(`Username available!`))
            console.log('Want to change your username?' + chalk.blue('https://www.roblox.com/my/account'))
        }
    }
    await run()

    const next = async () => {
        let nextStep;
        for(nextStep = await inquirer.askNextStep(); nextStep.nextstep === 'Search again'; ) {
            while (true) {
                await run()
                let postNext = await inquirer.askNextStep()
                if (postNext.nextstep !== 'Search again') {
                    return process.exit()
                }
            }
        }
    }
    await next()
};