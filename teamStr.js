var team = " ";

const buildTeam = () => {
    
    for (i=0; i < 2; i++) {
        team = team + `
        <div class="card" >
            <div class="card-header">
                Featured
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Cras justo odio</li>
                <li class="list-group-item">Dapibus ac facilisis in</li>
                <li class="list-group-item">Vestibulum at eros</li>
            </ul>
        </div>`;
        
    }
    console.log(team);
}

buildTeam();