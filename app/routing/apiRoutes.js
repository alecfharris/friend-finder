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
                // // OLD KEEPING IN CASE IT'S NEEDED
                // // Push the result to an array so that it can be added together later
                // scoreComparison.push(scoreDiff);
                // // Check if for loop is on last iteration
                // if (i === friend.score.length) {
                //     // Add up the all the score differences
                //     for (var i = 0; i < scoreComparison.length; i++) {
                //         totalDifference += scoreComparison[i];
                //     }
                // }
            }
        }
        // Find the smallest difference
        bestMatchNum = Math.min.apply(null, scoreArray);
        console.log("bestMatchNum: " + bestMatchNum);
        console.log(scoreArray);
        // Find the location of the smallest difference in the array
        for (i=0; i < scoreArray.length; i++) {
            if (bestMatchNum === scoreArray[i]) {
                bestMatch = i;
                console.log("Loop Best Match: " + bestMatch);
            } 
        }
        // Send the bestmatch data
        console.log("bestMatch: " + bestMatch)
        res.json(friends[bestMatch]);
    })
}