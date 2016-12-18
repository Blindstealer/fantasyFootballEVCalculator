goals = Array();
evPoints = Array();
for (i = 0; i < $(".match").size(); i++) {
    if (i < 3) {
        evPoints[$($($(".match")[i]).children()[0]).text()]     = 0;
        evPoints[$($($(".match")[i]).children()[3]).text()]     = 0;
    }
    if (! parseFloat($($($(".match")[i]).children()[1]).text()) > 0) { console.log("Exiting loop"); break;} // Condition to avoid parsing of not played matches
    // Calculate goals for single match (66 points for 1 goal, additional goal every 6 points)
    goals[$($($(".match")[i]).children()[0]).text()] = (parseFloat($($($(".match")[i]).children()[1]).text()) < 66) ? 0 : Math.ceil((parseFloat($($($(".match")[i]).children()[1]).text()) - 66) / 6) ;
    goals[$($($(".match")[i]).children()[3]).text()] = (parseFloat($($($(".match")[i]).children()[2]).text()) < 66) ? 0 : Math.ceil((parseFloat($($($(".match")[i]).children()[2]).text()) - 66) / 6) ;

if (i % 3 == 0) {
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

evPointsSorted = new Array();
for (team in evPoints) {
    evPointsSorted.push({ name : team, val: evPoints[team] });
}
evPointsSorted.sort(function(a,b) {
    return b.val - a.val;
});
for (team in evPointsSorted) { console.log(evPointsSorted[team].name + " - " + evPointsSorted[team].val) };
