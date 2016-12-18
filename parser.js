goals = Array();
evPoints = Array();
FIRST_GOAL_THRESHOLD = 66;
GOAL_THRESHOLD = 6;
TEAMS_NUMBER = 6;
for (i = 0; i < $(".match").size(); i++) {
    if (i < (TEAMS_NUMBER / 2)) {
        evPoints[$($($(".match")[i]).children()[0]).text()]     = 0;
        evPoints[$($($(".match")[i]).children()[3]).text()]     = 0;
    }
    if (! parseFloat($($($(".match")[i]).children()[1]).text()) > 0) { console.log("Exiting loop"); break;} // Condition to avoid parsing of not played matches
    // Calculate goals for single match (66 points for 1 goal, additional goal every 6 points)
    goals[$($($(".match")[i]).children()[0]).text()] = (parseFloat($($($(".match")[i]).children()[1]).text()) < FIRST_GOAL_THRESHOLD) ? 0 : Math.ceil((parseFloat($($($(".match")[i]).children()[1]).text()) - FIRST_GOAL_THRESHOLD) / GOAL_THERESHOLD) ;
    goals[$($($(".match")[i]).children()[3]).text()] = (parseFloat($($($(".match")[i]).children()[2]).text()) < FIRST_GOAL_THRESHOLD) ? 0 : Math.ceil((parseFloat($($($(".match")[i]).children()[2]).text()) - FIRST_GOAL_THRESHOLD) / GOAL_THRESHOLD) ;

    if (i % (TEAMS_NUMBER / 2) == 0) { // This value is the half of the teams in the league
        for (team in goals) {
            teamHome = team;
            var ev = 0;
            var matches = 0;
            for (team in goals) {
                if (team != teamHome) {
                    if (goals[teamHome] == goals[team]) {
                        ev = ev + 1;
                        matches ++;
                    } else if (goals[teamHome] > goals[team]) {
                        ev = ev + 3;
                        matches ++;
                    } else {
                        matches++;
                    }
                }
            }
            evPoints[teamHome] = evPoints[teamHome] + (ev / matches);
        }
    }
}

// All matches analyzed. Sorting rank...
evPointsSorted = new Array();
for (team in evPoints) {
    evPointsSorted.push({ name : team, val: evPoints[team] });
}
evPointsSorted.sort(function(a,b) {
    return b.val - a.val;
});
// Print out rank
for (team in evPointsSorted) { console.log(evPointsSorted[team].name + " - " + evPointsSorted[team].val) };
