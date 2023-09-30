
const app = require('./src/app');
const chalk = require('chalk')


const PORT = process.env.PORT || 3001;
const server = app.listen(PORT, () => {
	console.log(chalk.green(`🎉🎉🎉 Application running on port: ${PORT} 🎉🎉🎉`));
});

module.exports = server;
