class Player {
  constructor() {
    this.index = null;
    this.distance = 0;
    this.name = null;
  }

  getCount() {
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value", function (data) {
      playerCount = data.val();
    })
    playerCount = this.index;
  }

  updateCount(count) {
    database.ref('/').update({
      playerCount: count
    });
    count = this.index;
  }

  update() {
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name: this.name,
      distance: this.distance
    });
  }

  static getPlayerInfo() {
    var playerInfoRef = database.ref('players')

    playerInfoRef.on("value", (data) => {
      allPlayers = data.val();
    })
  }
}
