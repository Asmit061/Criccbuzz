// Get Player Statistics
const players=("../model/players.js");
function getPlayer(req, res){
  const player_id = req.params.player_id;
  const player = players.find((p) => p.player_id === player_id);
  if (player) {
    res.json(player);
  } else {
    res.status(404).json({ message: "Player not found" });
  }
};

function addPlayer(req, res){
  const team_id = req.params.team_id;
  const { name, role } = req.body;
  // Generate player_id
  const player_id = Math.floor(Math.random() * 1000).toString();
  players.push({
    player_id,
    name,
    matches_played: 0,
    runs: 0,
    average: 0,
    strike_rate: 0,
  }); // Assuming initial stats are 0
  res.json({
    message: "Player added to squad successfully",
    player_id,
  });
};

module.exports={
  getPlayer,
  addPlayer,
}