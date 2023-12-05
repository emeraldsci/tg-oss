const proteinAlphabet = {
  A: {
    value: "A",
    name: "Alanine",
    threeLettersName: "Ala",
    hydrophobicity: 1.8,
    colorByFamily: "#00FFFF",
    color: "hsl(327.3, 100%, 69%)",
    mass: 71.0779
  },
  R: {
    value: "R",
    name: "Arginine",
    threeLettersName: "Arg",
    hydrophobicity: -4.5,
    colorByFamily: "#FFC0CB",
    color: "hsl(258.1, 100%, 69%)",
    mass: 156.18568
  },

  N: {
    value: "N",
    name: "Asparagine",
    threeLettersName: "Asn",
    hydrophobicity: -3.5,
    colorByFamily: "#D3D3D3",
    color: "hsl(268.9, 100%, 69%)",
    mass: 114.10264
  },
  D: {
    value: "D",
    name: "Aspartic acid",
    threeLettersName: "Asp",
    hydrophobicity: -3.5,
    colorByFamily: "#EE82EE",
    color: "hsl(268.9, 100%, 69%)",
    mass: 115.0874
  },
  C: {
    value: "C",
    name: "Cysteine",
    threeLettersName: "Cys",
    hydrophobicity: 2.5,
    colorByFamily: "#FFFF00",
    color: "hsl(335.1, 100%, 69%)",
    mass: 103.1429
  },

  E: {
    value: "E",
    name: "Glutamic acid",
    threeLettersName: "Glu",
    hydrophobicity: -3.5,
    colorByFamily: "#EE82EE",
    color: "hsl(268.9, 100%, 69%)",
    mass: 129.11398
  },
  Q: {
    value: "Q",
    name: "Glutamine",
    threeLettersName: "Gln",
    hydrophobicity: -3.5,
    colorByFamily: "#D3D3D3",
    color: "hsl(268.9, 100%, 69%)",
    mass: 128.12922
  },
  G: {
    value: "G",
    name: "Glycine",
    threeLettersName: "Gly",
    hydrophobicity: -0.4,
    colorByFamily: "#00FFFF",
    color: "hsl(303.1, 100%, 69%)",
    mass: 57.05132
  },

  H: {
    value: "H",
    name: "Histidine",
    threeLettersName: "His",
    hydrophobicity: -3.2,
    colorByFamily: "#FFC0CB",
    color: "hsl(272.2, 100%, 69%)",
    mass: 137.13928
  },

  I: {
    value: "I",
    name: "Isoleucine ",
    threeLettersName: "Ile",
    hydrophobicity: 4.5,
    colorByFamily: "#00FFFF",
    color: "hsl(356.9, 100%, 69%)",
    mass: 113.15764
  },
  L: {
    value: "L",
    name: "Leucine",
    threeLettersName: "Leu",
    hydrophobicity: 3.8,
    colorByFamily: "#00FFFF",
    color: "hsl(349.4, 100%, 69%)",
    mass: 113.15764
  },
  K: {
    value: "K",
    name: "Lysine",
    threeLettersName: "Lys",
    hydrophobicity: -3.9,
    colorByFamily: "#FFC0CB",
    color: "hsl(264.7, 100%, 69%)",
    mass: 128.17228
  },

  M: {
    value: "M",
    name: "Methionine",
    threeLettersName: "Met",
    hydrophobicity: 1.9,
    colorByFamily: "#FFFF00",
    color: "hsl(328.5, 100%, 69%)",
    mass: 131.19606
  },
  F: {
    value: "F",
    name: "Phenylalanine",
    threeLettersName: "Phe",
    hydrophobicity: 2.8,
    colorByFamily: "#FFA500",
    color: "hsl(338.4, 100%, 69%)",
    mass: 147.17386
  },
  P: {
    value: "P",
    name: "Proline",
    threeLettersName: "Pro",
    hydrophobicity: -1.6,
    colorByFamily: "#00FFFF",
    color: "hsl(289.9, 100%, 69%)",
    mass: 97.11518
  },
  S: {
    value: "S",
    name: "Serine",
    threeLettersName: "Ser",
    hydrophobicity: -0.8,
    colorByFamily: "#90EE90",
    color: "hsl(298.6, 100%, 69%)",
    mass: 87.0773
  },
  T: {
    value: "T",
    name: "Threonine",
    threeLettersName: "Thr",
    hydrophobicity: -0.7,
    colorByFamily: "#90EE90",
    color: "hsl(299.8, 100%, 69%)",
    mass: 101.10388
  },
  U: {
    value: "U",
    name: "Selenocysteine",
    threeLettersName: "Sec",
    colorByFamily: "#FF0000",
    color: "hsl(0, 100%, 69%)",
    mass: 150.3079
  },
  W: {
    value: "W",
    name: "Tryptophan",
    threeLettersName: "Trp",
    hydrophobicity: -0.9,
    colorByFamily: "#FFA500",
    color: "hsl(297.6, 100%, 69%)",
    mass: 186.2099
  },
  Y: {
    value: "Y",
    name: "Tyrosine",
    threeLettersName: "Tyr",
    hydrophobicity: -1.3,
    colorByFamily: "#FFA500",
    color: "hsl(293.2, 100%, 69%)",
    mass: 163.17326
  },
  V: {
    value: "V",
    name: "Valine",
    threeLettersName: "Val",
    hydrophobicity: 4.2,
    colorByFamily: "#00FFFF",
    color: "hsl(353.6, 100%, 69%)",
    mass: 99.13106
  },
  "*": {
    value: "*",
    name: "Stop",
    threeLettersName: "Stop",
    colorByFamily: "#FF0000",
    color: "hsl(0, 100%, 69%)",
    mass: 0
  },
  ".": {
    //tnr: this is actually a deletion/gap character (previously we had this as a stop character which is incorrect) https://www.dnabaser.com/articles/IUPAC%20ambiguity%20codes.html
    value: ".",
    name: "Gap",
    threeLettersName: "Gap",
    colorByFamily: "#FF0000",
    color: "hsl(0, 100%, 69%)",
    mass: 0
  },
  "-": {
    value: "-",
    name: "Gap",
    threeLettersName: "Gap",
    colorByFamily: "#FF0000",
    color: "hsl(0, 100%, 69%)",
    mass: 0
  },
  B: {
    value: "B",
    threeLettersName: "ND",
    colorByFamily: "#D3D3D3",
    color: "hsl(268.9, 100%, 69%)",
    isAmbiguous: true,
    name: "B",
    aliases: "ND",
    mass: 0
  },
  J: {
    value: "J",
    threeLettersName: "IL",
    colorByFamily: "#00FFFF",
    color: "hsl(352, 100%, 69%)",
    isAmbiguous: true,
    name: "J",
    aliases: "IL",
    mass: 0
  },
  X: {
    value: "X",
    threeLettersName: "ACDEFGHIKLMNPQRSTVWY",
    colorByFamily: "#FFFFFF",
    color: "hsl(60, 100%, 69%)",
    isAmbiguous: true,
    name: "X",
    aliases: "ACDEFGHIKLMNPQRSTVWY",
    mass: 0
  },
  Z: {
    value: "Z",
    threeLettersName: "QE",
    colorByFamily: "#3DD3D3",
    color: "hsl(268.9, 100%, 69%)",
    isAmbiguous: true,
    name: "Z",
    aliases: "QE",
    mass: 0
  }
};

export default proteinAlphabet;
