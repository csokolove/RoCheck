const inquirer = require('inquirer');

module.exports = {
    requestInput: () => {
      const questions = [
        {
          name: 'username',
          type: 'input',
          message: 'Enter the username you want to check.',
          validate: function( value ) {
            if (value.length) {
              return true;
            } else {
              return 'Please enter the username you want to check.';
            }
          }
        },
      ];
      return inquirer.prompt(questions);
    },

    askNextStep: () => {
      const questions = [
        {
          name: 'nextstep',
          type: 'list',
          choices: [
            'Search again',
            'Exit'
          ],
          message: 'Would you like to search another name, or exit?',
          validate: function( value ) {
            if (value.length) {
              return true;
            } else {
              return 'Please choose one of the options.';
            }
          }
        },
      ];
      return inquirer.prompt(questions);
    }
  };