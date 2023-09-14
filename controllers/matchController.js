const matches=require("../model/matches.js");

function creatematch(req, res) {
  const { team_1, team_2, date, venue } = req.body;
  // Generate match_id
  const match_id = Math.floor(Math.random() * 100).toString();
  matches.push({
    match_id,
    team_1,
    team_2,
    date,
    venue,
    status: "upcoming",
    squads: { team_1: [], team_2: [] },
  }); // Assuming status is always "upcoming" initially
  res.json({
    message: "Match created successfully",
    match_id,
  });
}

function getMatches(req, res) {
  // Return list of matches
  res.json({ matches });
}

function getspecificMatch(req, res){
  const match_id = req.params.match_id;
  const match = matches.find((m) => m.match_id === match_id);
  if (match) {
    res.json(match);
  } else {
    res.status(404).json({ message: "Match not found" });
  }
};

module.exports = {
  creatematch,
  getMatches,
  getspecificMatch
};