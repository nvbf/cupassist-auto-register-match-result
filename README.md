# Cupassist Auto Register Match Result

This scripts uses nightwatch and chrome to automaticly register teams into a given tournament.

It dependens that you are using [Beachvolleyball-scoreboard](https://github.com/nvbf/beachvolleyball-scoreboard) to register your matches.

It connects and lisen to a firebase account that the scoreboard store is values to.

When it sees a change so that the tournament is registered as `isFinished` it starts a nightwatch test that registeres that match in the correct tournament

# Installation

```
npm install
```

# Run

```bash
./run.sh
```

# Know problems.

1.  Be sure to check that your chrome and the chromedriver version in pacage.json is compatible

2.  For some reason it fails on the second match it tries to registed. So the very pratical solution is to kill the process after the first match is registerd, and in the `run.sh` script I have a infinite loop so that it never reaches the second match. It's always the first :D
