var friends = require("../data/friends");

// Routing
module.exports = function(app) {
    // API GET Requests
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    // API POST Requests
    app.post("/api/friends", function(req, res) {
        var scoreArray = [];
        var bestMatchNum;
        var bestMatch;
            // Check for each friend 
        for (var friend in friends){
            // var scoreComparison = [];
            var totalDifference = 0;
            // Go through the entire score of a friend
            for (var i = 0; i < friends[friend].scores.length; i++) {
                // Subtract friend score from submitted score using absolute value
                var scoreDiff = Math.abs(req.body.scores[i] - friends[friend].scores[i]);
                totalDifference = totalDifference + scoreDiff;
                // If loop is on final iteration, push the totalDifference to the array for later comparison
                if (i === friends[friend].scores.length-1) {
                    scoreArray.push(totalDifference);
                }
            }
        }
        // Find the smallest difference
        bestMatchNum = Math.min.apply(null, scoreArray);
        // Find the location of the smallest difference in the array
        for (i=0; i < scoreArray.length; i++) {
            if (bestMatchNum === scoreArray[i]) {
                bestMatch = i;
            } 
        }
        // Send the bestmatch data
        res.json(friends[bestMatch]);

        // Push the new friend
        friends.push(req.body);
    })
}