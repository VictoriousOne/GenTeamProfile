const inquirer = require('inquirer');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const generateTeam = require('./src/page-template');
var team = [];
var finished = 0;
//const manager = new Manager('Ted', 1234, '275@gmail.com', '100A');
/*
console.log(manager.getName());
console.log(manager.getId());
console.log(manager.getEmail());
console.log(manager.getRole());
console.log(manager.offcNum); */

const promptForManager = () => {

    console.log(`
=======================
Add Manager Information
=======================
    `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'Enter the name of the manager.'
        },
        {
            type: 'input',
            name: 'managerID',
            message: 'Enter the manager employee ID.'
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'Enter the email for the manager.'
        },
        {
            type: 'input',
            name: 'managerOffc',
            message: 'Enter the office number for the manager.'
        }
    ]);

};

const buildTeam = () => {

    console.log(`

    =================
    Add Staff Member
    =================

        `);

    return inquirer.prompt([
        {
            type: 'list',
            name: 'engineerORIntern',
            message: 'Choose staff member type.',
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'staffName',
            message: 'Enter the name of the staff member.'
        },
        {
            type: 'input',
            name: 'staffID',
            message: 'Enter the staff member employee ID.'
        },
        {
            type: 'input',
            name: 'staffEmail',
            message: 'Enter the email for the staff member.'
        },
        {
            type: 'input',
            name: 'githubORSchool',
            message: 'Enter the github username for Engineer or school name for Intern.'
        },
        {
            type: 'confirm',
            name: 'confirmAddMore',
            message: 'Would you like to add another staff member?',
            default: false
        }
    ])
        .then(staffData => {
            if (staffData.engineerORIntern === 'Engineer') {
                createEngineer(staffData);
            }
            else if (staffData.engineerORIntern === 'Intern') {
                createIntern(staffData);
            }

            if (staffData.confirmAddMore) {
                return buildTeam();

            }
            else {
                return staffData;
            }
        });
};

const addStaff = (staffType, theMsg) => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'staffName',
            message: 'Enter the name of the staff member.'
        },
        {
            type: 'input',
            name: 'staffID',
            message: 'Enter the staff member employee ID.'
        },
        {
            type: 'input',
            name: 'staffEmail',
            message: 'Enter the email for the staff member.'
        },
        {
            type: 'input',
            name: 'githubORSchool',
            message: theMsg
        },
        {
            type: 'confirm',
            name: 'confirmAddMore',
            message: 'Would you like to add another staff member?',
            default: false
        }
    ])

        .then(staffData => {
            if (staffType === "Engineer") {
                createEngineer(staffData);
            }
            else {
                createIntern(staffData);
            }

            if (staffData.confirmAddMore) {
                buildTeam();
            }
            else {
                finished = 1;
                for (i = 0; i < team.length; i++) {
                    console.log(`\r\n`);
                    console.log(team[i].getRole());
                    console.log(team[i].getName());
                    console.log(team[i].getId());
                    console.log(team[i].getEmail());
                    if (team[i].getRole() === "Manager") {
                        console.log(team[i].offcNum);
                    }
                    else if (team[i].getRole() === "Engineer") {
                        console.log(team[i].githubUserName);
                    }
                    else {
                        console.log(team[i].schoolName);
                    }

                }

            }
        })
    /*
    .then(generateTeam(team))
    .then(htmlPage => {
        console.log(htmlPage);
    }) */

};

const createEngineer = staffData => {
    const engineer = new Engineer(staffData.staffName, staffData.staffID,
        staffData.staffEmail, staffData.githubORSchool);

    team.push(engineer);

}

const createIntern = staffData => {
    const intern = new Intern(staffData.staffName, staffData.staffID,
        staffData.staffEmail, staffData.githubORSchool);

    team.push(intern);

}

const createManager = managerData => {

    const manager = new Manager(managerData.managerName, managerData.managerID,
        managerData.managerEmail, managerData.managerOffc);

    team.push(manager);
    /*
    console.log(manager.getName());
    console.log(manager.getId());
    console.log(manager.getEmail());
    console.log(manager.getRole());
    console.log(manager.offcNum);*/
}

promptForManager()
    .then(managerData => {
        return createManager(managerData);
    })
    .then(buildStaff => {
        return buildTeam();
    })
    .then(staffData => {
       return generateTeam(team);
    })
    .then(htmlPage => {
        console.log(htmlPage);
    });



