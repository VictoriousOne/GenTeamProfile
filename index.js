const inquirer = require('inquirer');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
var team = [];
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

    inquirer.prompt([
        {
            type: 'list',
            name: 'engineerORIntern',
            message: 'Choose staff member type.',
            choices: ["Engineer", "Intern"]
        }
    ])
        .then(choice => {
            if (choice.engineerORIntern === "Engineer") {
                addStaff("Engineer", "Enter the github username for the staff member (engineer).");
            }
            else {
                addStaff("Intern", "Enter the school for the staff member (intern)")
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
                for (i=0; i < team.length; i++) {
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
                return;
            }
        })

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
        createManager(managerData);
    })
    .then(buildTeam)
    

