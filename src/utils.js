module.exports = {
  scissorsGradient: "hsl(39, 89%, 49%), hsl(40, 84%, 53%)",
  paperGradient: "hsl(230, 89%, 62%), hsl(230, 89%, 65%)",
  rockGradient: "hsl(349, 71%, 52%), hsl(349, 70%, 56%)",
  lizardGradient: "hsl(261, 73%, 60%) to hsl(261, 72%, 63%)",
  cyan: "hsl(189, 59%, 53%) to hsl(189, 58%, 57%)",

  darkText: "hsl(229, 25%, 31%)",
  scoreText: "hsl(229, 64%, 46%)",
  headerOutline: "hsl(217, 16%, 45%)",

  radialGradient: "hsl(214, 47%, 23%) to hsl(237, 49%, 15%)",

  moves: {
    ROCK: 0,
    PAPER: 1,
    SCISSORS: 2,
    PLACEHOLDER: "placeholder",
  },
  winners: {
    PLAYER: 0,
    CPU: 1,
    DRAW: -1,
    NONE: -99,
  },
};
