# Description
#   A Hubot script that returns "好きなことで、生きていく"
#
# Configuration:
#   None
#
# Commands:
#   hubot youtuber - 好きなことで、生きていく
#
# Author:
#   bouzuya <m@bouzuya.net>
#
module.exports = (robot) ->
  robot.respond /youtuber$/i, (res) ->
    res.send '好きなことで、生きていく'
