// Description
//   A Hubot script that returns "好きなことで、生きていく"
//
// Configuration:
//   None
//
// Commands:
//   hubot youtuber - 好きなことで、生きていく
//
// Author:
//   bouzuya <m@bouzuya.net>
//
module.exports = function(robot) {
  return robot.respond(/youtuber$/i, function(res) {
    return res.send('好きなことで、生きていく');
  });
};
