Simple javascript script used to calculate the expected value in terms of points based on the performance of the team compared with the performances of the others team in direct matches.

Example:
TeamA - TeamB 3-2
TeamC - TeamD 0-1

It's clear that TeamB was very unlucky in the draw session so if it would end up playing with TeamC or TeamD it could have won the match.

So teamB has two potential win a potential loss this championship day: this mean that it can score three points in two cases and 0 in another. So expected points are (2 * 3 + 0 * 1) / 3 = 2.

This was applied to an Italian Fantasy Football league hosted on http.//leghe.fantagazzetta.com/fanta-pescio/calendario .

Pasting the content on the file parser.js in the developer console of a browser (Google Chrome was used for testing) a classification based on this algorithm would be printed in the console.

