const chalk = require('chalk')

const color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
}

const cafnayLog = (text, color) => {
	return !color ? chalk.cyan('[cafnay] ') + chalk.yellow(text) : chalk.cyan('[cafnay] ') + chalk.keyword(color)(text)
}

module.exports = {
  color,
  cafnayLog
}
