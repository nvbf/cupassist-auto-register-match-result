require("dotenv").config();

const { TX_TURNERING_ID, TX_SHORTNAME, TX_PASSWORD } = process.env;

const shortName = process.env.TX_SHORTNAME;
const password = process.env.TX_PASSWORD;
const turneringsId = TX_TURNERING_ID;

const matchId = process.env.matchId;
const setHome = process.env.setHome;
const setAway = process.env.setAway;
const set1HomePoints = process.env.set1HomePoints;
const set1AwayPoints = process.env.set1AwayPoints;
const set2HomePoints = process.env.set2HomePoints;
const set2AwayPoints = process.env.set2AwayPoints;
const set3HomePoints = process.env.set3HomePoints;
const set3AwayPoints = process.env.set3AwayPoints;
const homeTeamWon = process.env.homeTeamWon;

console.log(
  `Args:  ${shortName} ${password} ${turneringsId} ${matchId} ${set1HomePoints} ${set1AwayPoints} ${set2HomePoints} ${set2AwayPoints} ${set3HomePoints} ${set3AwayPoints} ${homeTeamWon} `
);

module.exports = {
  login: function(browser) {
    browser
      .url(`https://www.profixio.com/res/${shortName}`)
      .waitForElementVisible("#login_form", 7000)
      .setValue("input#navn", "auto")
      .setValue("input#passord", password)
      .click("button[type=submit]")
      .waitForElementVisible("#matchgrid_cb", 4000)
      .url(
        `https://www.profixio.com/res/matches/register/${turneringsId}/${matchId}`
      )
      .waitForElementVisible("#kamp_kamp_hmaal", 4000)
      .clearValue("#kamp_kamp_hmaal")
      .setValue("#kamp_kamp_hmaal", setHome)
      .clearValue("#kamp_kamp_bmaal")
      .setValue("#kamp_kamp_bmaal", setAway)
      .clearValue("div.sett input[type=number]")
      .setValue("div.sett input[type=number]", set1HomePoints)

      .clearValue("div.sett input[type=number]:nth-child(3)")
      .setValue("div.sett input[type=number]:nth-child(3)", set1AwayPoints)

      .clearValue("div.sett:nth-child(2) input[type=number]:nth-child(2)")
      .setValue(
        "div.sett:nth-child(2) input[type=number]:nth-child(2)",
        set2HomePoints
      )

      .clearValue("div.sett:nth-child(2) input[type=number]:nth-child(3)")
      .setValue(
        "div.sett:nth-child(2) input[type=number]:nth-child(3)",
        set2AwayPoints
      )

      .clearValue("div.sett:nth-child(3) input[type=number]:nth-child(2)")
      .setValue(
        "div.sett:nth-child(3) input[type=number]:nth-child(2)",
        set3HomePoints
      )

      .clearValue("div.sett:nth-child(3) input[type=number]:nth-child(3)")
      .setValue(
        "div.sett:nth-child(3) input[type=number]:nth-child(3)",
        set3AwayPoints
      )
      .execute(
        function(args) {
          if (args === "true") {
            document.querySelector("#kamp_kamp_vinner_h").checked = true;
            document.querySelector("#kamp_kamp_vinner_b").checked = false;
          } else {
            document.querySelector("#kamp_kamp_vinner_h").checked = false;
            document.querySelector("#kamp_kamp_vinner_b").checked = true;
          }
          return args;
        },
        [homeTeamWon],
        result => {
          console.log(`homeTeamWon is ${JSON.stringify(homeTeamWon)}`);
          console.log(`Result is ${JSON.stringify(result.value)}`);
        }
      )
      .click("button[name=_submit]")
      .pause("100");
    browser.end();
  }
};
