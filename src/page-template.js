
const generateTeam = theTeam => {
    var teamSection = "";
    for (i = 0; i < theTeam.length; i++) {

        if (theTeam[i].getRole() === "Manager") {

            teamSection = teamSection + `
        <div class="card" >
            <div class="card-header">
                <p>${theTeam[i].getName()}</p>
                <p>${theTeam[i].getRole()}<p/p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${theTeam[i].getId()}</li>
                <li class="list-group-item">Email:<a href = "mailto: ${theTeam[i].getEmail()}">${theTeam[i].getEmail()}</a></li>
                <li class="list-group-item">Office: ${theTeam[i].offcNum}</li>
            </ul>
        </div>`;
        }
        else if (theTeam[i].getRole() === "Engineer") {
            teamSection = teamSection + `
        <div class="card" >
            <div class="card-header">
                <p>${theTeam[i].getName()}</p>
                <p>${theTeam[i].getRole()}<p/p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${theTeam[i].getId()}</li>
                <li class="list-group-item">Email:<a href = "mailto: ${theTeam[i].getEmail()}">${theTeam[i].getEmail()}</a></li>
                <li class="list-group-item"><a href="https://github.com/${theTeam[i].githubUserName}" target="_blank">Github: ${theTeam[i].githubUserName}</a></li>
            </ul>
        </div>`;
        }
        else if (theTeam[i].getRole() === "Intern") {
            teamSection = teamSection + `
        <div class="card" >
            <div class="card-header">
                <p>${theTeam[i].getName()}</p>
                <p>${theTeam[i].getRole()}<p/p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${theTeam[i].getId()}</li>
                <li class="list-group-item">Email:<a href = "mailto: ${theTeam[i].getEmail()}">${theTeam[i].getEmail()}</a></li>
                <li class="list-group-item">School: ${theTeam[i].schoolName}</li>
            </ul>
        </div>`;
        }

    }
    
    return teamSection;

}



const genTeam = team => {
    //console.log("Logging team " + team);
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <title>Bootstrap Example</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="style.css" />

</head>

<body class="flex-column min-100-vh">

    <header class="hero flex-row justify-center">
        <h1 class="app-title align-center">My Team</h1>
    </header>
    <div class="flex-row justify-center">
    ${generateTeam(team)}
       
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
</body>

</html>
    
    `
}

module.exports = genTeam;