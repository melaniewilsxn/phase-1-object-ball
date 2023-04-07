function gameObject() {
       return obj = { home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: "0",
                    shoe: "16",
                    points: "22",
                    rebounds: "12",
                    assists: "12",
                    steals: "3",
                    blocks: "1",
                    slamDunks: "1"
                },
                "Reggie Evans": {
                    number: "30",
                    shoe: "14",
                    points: "12",
                    rebounds: "12",
                    assists: "12",
                    steals: "12",
                    blocks: "12",
                    slamDunks: "7"
                },
                "Brook Lopez": {
                    number: "11",
                    shoe: "17",
                    points: "17",
                    rebounds: "19",
                    assists: "10",
                    steals: "3",
                    blocks: "1",
                    slamDunks: "15"
                },
                "Mason Plumlee": {
                    number: "1",
                    shoe: "19",
                    points: "26",
                    rebounds: "12",
                    assists: "6",
                    steals: "3",
                    blocks: "8",
                    slamDunks: "5"
                },
                "Jason Terry": {
                    number: "31",
                    shoe: "15",
                    points: "19",
                    rebounds: "2",
                    assists: "2",
                    steals: "4",
                    blocks: "11",
                    slamDunks: "1"
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turguoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: "4",
                    shoe: "18",
                    points: "10",
                    rebounds: "1",
                    assists: "1",
                    steals: "2",
                    blocks: "7",
                    slamDunks: "2"
                },
                "Bismak Biyombo": {
                    number: "0",
                    shoe: "16",
                    points: "12",
                    rebounds: "4",
                    assists: "7",
                    steals: "7",
                    blocks: "15",
                    slamDunks: "10"
                },
                "DeSagna Diop": {
                    number: "2",
                    shoe: "14",
                    points: "24",
                    rebounds: "12",
                    assists: "12",
                    steals: "4",
                    blocks: "5",
                    slamDunks: "5"
                },
                "Ben Gordon": {
                    number: "8",
                    shoe: "15",
                    points: "33",
                    rebounds: "3",
                    assists: "2",
                    steals: "1",
                    blocks: "1",
                    slamDunks: "0"
                },
                "Brendan Haywood": {
                    number: "33",
                    shoe: "15",
                    points: "6",
                    rebounds: "12",
                    assists: "12",
                    steals: "22",
                    blocks: "5",
                    slamDunks: "12"
                }
            }
        }
    }
}    

function homeTeamName() {
    let object = gameObject();
    return object["home"]["teamName"];
}

function numPointsScored(playerName) {
    let object = gameObject();
    for (const team in object) {
       const teamObj = object[team];
       for (const teamInfo in teamObj){
        const teamInfoObj = teamObj[teamInfo]
        //if (typeof teamInfoObj === "object"){ //other option of code
        if (teamInfo === "players"){
            for (const teamPlayerName in teamInfoObj){
                if (teamPlayerName === playerName){
                    return teamInfoObj[teamPlayerName]["points"]
                }
            }
        }
       }
    }
}

function shoeSize(playerName) {
    let object = gameObject();
    for (const team in object) {
       const teamObj = object[team];
       for (const teamInfo in teamObj){
        const teamInfoObj = teamObj[teamInfo]
        if (teamInfo === "players"){
            for (const teamPlayerName in teamInfoObj){
                if (teamPlayerName === playerName){
                    return teamInfoObj[teamPlayerName]["shoe"]
                }
            }
        }
       }
    }
}

function teamColors(targetTeamName) {
    let object = gameObject();
    for (const team in object) {
       const teamObj = object[team];
       for (const teamInfo in teamObj){
        if (teamObj[teamInfo] === targetTeamName){
            return teamObj["colors"];
        }
       }
    }
}

function teamNames() {
    let object = gameObject();
    const teamNames = [object["home"]["teamName"], object["away"]["teamName"]]
    return teamNames;
}

function playerNumbers(targetTeamName){
    let object = gameObject();
    for (const team in object) {
       const teamObj = object[team];
       for (const teamInfo in teamObj){
        if (teamObj[teamInfo] === targetTeamName){
            const playerNumbersArray = []
            const teamPlayerNamesObj = teamObj["players"]
            for (const teamPlayerName in teamPlayerNamesObj){
                const teamPlayerStatsObj = teamPlayerNamesObj[teamPlayerName]
                for (const playerStats in teamPlayerStatsObj){
                    if (playerStats === "number"){
                        playerNumbersArray.push(teamPlayerStatsObj[playerStats])
                    }
                }
            }
            return playerNumbersArray;
        }
       }
    }
}

function playerStats(playerName) {
    let object = gameObject();
    for (const team in object) {
       const teamObj = object[team];
       for (const teamInfo in teamObj){
        const teamInfoObj = teamObj[teamInfo]
        if (teamInfo === "players"){
            for (const teamPlayerName in teamInfoObj){
                if (teamPlayerName === playerName){
                    return teamInfoObj[teamPlayerName];
                }
            }
        }
       }
    }
}

function bigShoeRebounds() {
    let biggestShoeSize = 0;
    let nameOfBiggestShoeSize;
    let object = gameObject();
    for (const team in object) {
       const teamObj = object[team];
       for (const teamInfo in teamObj){
        const teamInfoObj = teamObj[teamInfo]
        if (teamInfo === "players"){
            for (const teamPlayerName in teamInfoObj){
                const teamPlayerNamesObj = teamInfoObj[teamPlayerName]
                for (const playerStats in teamPlayerNamesObj){
                    if (playerStats === "shoe"){
                        if (teamPlayerNamesObj[playerStats]>biggestShoeSize){
                            biggestShoeSize = teamPlayerNamesObj[playerStats]
                        }
                    }
                    if (teamPlayerNamesObj["shoe"] === biggestShoeSize){
                        return teamPlayerNamesObj["rebounds"]
                    }
                }
            }
        }
       }
    }
}