const nwrun = require("nwrun");
require("dotenv").config();
const { TX_TURNERING_ID, TX_SHORTNAME, TX_PASSWORD } = process.env;

function registerNightwatch({
  matchId,
  setHome,
  setAway,
  set1HomePoints,
  set1AwayPoints,
  set2HomePoints,
  set2AwayPoints,
  set3HomePoints,
  set3AwayPoints,
  homeTeamWon
}) {
  process.env.password = TX_PASSWORD;
  process.env.shortName = TX_SHORTNAME;
  process.env.turneringsId = TX_TURNERING_ID;
  process.env.matchId = matchId;
  process.env.setHome = setHome;
  process.env.setAway = setAway;
  process.env.set1HomePoints = set1HomePoints;
  process.env.set1AwayPoints = set1AwayPoints;
  process.env.set2HomePoints = set2HomePoints;
  process.env.set2AwayPoints = set2AwayPoints;
  process.env.set3HomePoints = set3HomePoints;
  process.env.set3AwayPoints = set3AwayPoints;
  process.env.homeTeamWon = homeTeamWon;

  nwrun(
    {
      src_folders: __dirname + "/tests",
      target: "default"
    },
    function(success) {
      if (!success) {
        console.log("Failed:" + matchId);
        process.exit(-1);
      }
      console.log("success:" + matchId);
      process.exit(0);
    }
  );
}

module.exports = registerNightwatch;
