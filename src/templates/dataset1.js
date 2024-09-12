export const numberOfAlternatives = 8;
export const numberOfCriteria = 5;
export const numberOfLinguisticTermsForAlternatives = 5;
export const numberOfLinguisticTermsForCriteria = 5;
export const numberOfExperts = 1;
const weightParameter = 0.5;
export const names = {
  alternativeNames: [
    "Alternative1",
    "Alternative2",
    "Alternative3",
    "Alternative4",
    "Alternative5",
    "Alternative6",
    "Alternative7",
    "Alternative8",
  ],
  criteriaNames: [
    "Criteria1",
    "Criteria2",
    "Criteria3",
    "Criteria4",
    "Criteria5",
  ],
  linguisticTermsForAlternativesNames: ["VP", "P", "F", "G", "VG"],
  linguisticTermsForCriteriaNames: ["VL", "L", "M", "H", "VH"],
  expertNames: ["Expert1"],
};

export const optimization = {
  c1: "Min",
  c2: "Min",
  c3: "Min",
  c4: "Max",
  c5: "Max",
};

export const criteriaLinguisticTerms = [
  {
    linguisticTermId: 0,
    confines: [0, 0, 0.25],
    type: "lt-criteria",
    triangularChart: [
      {
        x: 1,
        y: 0,
      },
      {
        x: 1,
        y: 1,
      },
      {
        x: 3,
        y: 0,
      },
    ],
    normalizedConfines: [0, 0, 0.25],
    normalizedTriangularChart: [
      {
        x: 1,
        y: 0,
      },
      {
        x: 1,
        y: 1,
      },
      {
        x: 3,
        y: 0,
      },
    ],
  },
  {
    linguisticTermId: 1,
    confines: [0, 0.25, 0.5],
    type: "lt-criteria",
    triangularChart: [
      {
        x: 1,
        y: 0,
      },
      {
        x: 3,
        y: 1,
      },
      {
        x: 5,
        y: 0,
      },
    ],
    normalizedConfines: [0, 0.25, 0.5],
    normalizedTriangularChart: [
      {
        x: 1,
        y: 0,
      },
      {
        x: 3,
        y: 1,
      },
      {
        x: 5,
        y: 0,
      },
    ],
  },
  {
    linguisticTermId: 2,
    confines: [0.25, 0.5, 0.75],
    type: "lt-criteria",
    triangularChart: [
      {
        x: 3,
        y: 0,
      },
      {
        x: 5,
        y: 1,
      },
      {
        x: 7,
        y: 0,
      },
    ],
    normalizedConfines: [0.25, 0.5, 0.75],
    normalizedTriangularChart: [
      {
        x: 3,
        y: 0,
      },
      {
        x: 5,
        y: 1,
      },
      {
        x: 7,
        y: 0,
      },
    ],
  },
  {
    linguisticTermId: 3,
    confines: [0.5, 0.75, 1],
    type: "lt-criteria",
    triangularChart: [
      {
        x: 5,
        y: 0,
      },
      {
        x: 7,
        y: 1,
      },
      {
        x: 9,
        y: 0,
      },
    ],
    normalizedConfines: [0.5, 0.75, 1],
    normalizedTriangularChart: [
      {
        x: 5,
        y: 0,
      },
      {
        x: 7,
        y: 1,
      },
      {
        x: 9,
        y: 0,
      },
    ],
  },
  {
    linguisticTermId: 4,
    confines: [0.75, 1, 1],
    type: "lt-criteria",
    triangularChart: [
      {
        x: 7,
        y: 0,
      },
      {
        x: 9,
        y: 1,
      },
      {
        x: 9,
        y: 0,
      },
    ],
    normalizedConfines: [0.75, 1, 1],
    normalizedTriangularChart: [
      {
        x: 7,
        y: 0,
      },
      {
        x: 9,
        y: 1,
      },
      {
        x: 9,
        y: 0,
      },
    ],
  },
];

export const alternativesLinguisticTerms = [
  {
    linguisticTermId: 0,
    confines: [0, 0, 2.5],
    type: "lt-alternative",
    triangularChart: [
      {
        x: 1,
        y: 0,
      },
      {
        x: 1,
        y: 1,
      },
      {
        x: 3,
        y: 0,
      },
    ],
    normalizedConfines: [0, 0, 2.5],
    normalizedTriangularChart: [
      {
        x: 1,
        y: 0,
      },
      {
        x: 1,
        y: 1,
      },
      {
        x: 3,
        y: 0,
      },
    ],
  },
  {
    linguisticTermId: 1,
    confines: [0, 2.5, 5],
    type: "lt-alternative",
    triangularChart: [
      {
        x: 1,
        y: 0,
      },
      {
        x: 3,
        y: 1,
      },
      {
        x: 5,
        y: 0,
      },
    ],
    normalizedConfines: [0, 2.5, 5],
    normalizedTriangularChart: [
      {
        x: 1,
        y: 0,
      },
      {
        x: 3,
        y: 1,
      },
      {
        x: 5,
        y: 0,
      },
    ],
  },
  {
    linguisticTermId: 2,
    confines: [2.5, 5, 7.5],
    type: "lt-alternative",
    triangularChart: [
      {
        x: 3,
        y: 0,
      },
      {
        x: 5,
        y: 1,
      },
      {
        x: 7,
        y: 0,
      },
    ],
    normalizedConfines: [2.5, 5, 7.5],
    normalizedTriangularChart: [
      {
        x: 3,
        y: 0,
      },
      {
        x: 5,
        y: 1,
      },
      {
        x: 7,
        y: 0,
      },
    ],
  },
  {
    linguisticTermId: 3,
    confines: [5, 7.5, 10],
    type: "lt-alternative",
    triangularChart: [
      {
        x: 5,
        y: 0,
      },
      {
        x: 7,
        y: 1,
      },
      {
        x: 9,
        y: 0,
      },
    ],
    normalizedConfines: [5, 7.5, 10],
    normalizedTriangularChart: [
      {
        x: 5,
        y: 0,
      },
      {
        x: 7,
        y: 1,
      },
      {
        x: 9,
        y: 0,
      },
    ],
  },
  {
    linguisticTermId: 4,
    confines: [7.5, 10, 10],
    type: "lt-alternative",
    triangularChart: [
      {
        x: 7,
        y: 0,
      },
      {
        x: 9,
        y: 1,
      },
      {
        x: 9,
        y: 0,
      },
    ],
    normalizedConfines: [7.5, 10, 10],
    normalizedTriangularChart: [
      {
        x: 7,
        y: 0,
      },
      {
        x: 9,
        y: 1,
      },
      {
        x: 9,
        y: 0,
      },
    ],
  },
];

export const criteriaEstimations = {
  "e1-c1": {
    linguisticTermId: 2,
    criteria: 1,
    expertId: 1,
  },
  "e1-c2": {
    linguisticTermId: 3,
    criteria: 2,
    expertId: 1,
  },
  "e1-c3": {
    linguisticTermId: 4,
    criteria: 3,
    expertId: 1,
  },
  "e1-c4": {
    linguisticTermId: 1,
    criteria: 4,
    expertId: 1,
  },
  "e1-c5": {
    linguisticTermId: 2,
    criteria: 5,
    expertId: 1,
  },
};

export const expertsEstimations = {
  "e1-a1-c1": {
    linguisticTermId: 3,
    criteria: 1,
    alternative: 1,
    expertId: 1,
  },
  "e1-a1-c2": {
    linguisticTermId: 2,
    criteria: 2,
    alternative: 1,
    expertId: 1,
  },
  "e1-a1-c3": {
    linguisticTermId: 3,
    criteria: 3,
    alternative: 1,
    expertId: 1,
  },
  "e1-a1-c4": {
    linguisticTermId: 4,
    criteria: 4,
    alternative: 1,
    expertId: 1,
  },
  "e1-a1-c5": {
    linguisticTermId: 2,
    criteria: 5,
    alternative: 1,
    expertId: 1,
  },
  "e1-a2-c1": {
    linguisticTermId: 2,
    criteria: 1,
    alternative: 2,
    expertId: 1,
  },
  "e1-a2-c2": {
    linguisticTermId: 3,
    criteria: 2,
    alternative: 2,
    expertId: 1,
  },
  "e1-a2-c3": {
    linguisticTermId: 2,
    criteria: 3,
    alternative: 2,
    expertId: 1,
  },
  "e1-a2-c4": {
    linguisticTermId: 1,
    criteria: 4,
    alternative: 2,
    expertId: 1,
  },
  "e1-a2-c5": {
    linguisticTermId: 1,
    criteria: 5,
    alternative: 2,
    expertId: 1,
  },
  "e1-a3-c1": {
    linguisticTermId: 2,
    criteria: 1,
    alternative: 3,
    expertId: 1,
  },
  "e1-a3-c2": {
    linguisticTermId: 2,
    criteria: 2,
    alternative: 3,
    expertId: 1,
  },
  "e1-a3-c3": {
    linguisticTermId: 1,
    criteria: 3,
    alternative: 3,
    expertId: 1,
  },
  "e1-a3-c4": {
    linguisticTermId: 4,
    criteria: 4,
    alternative: 3,
    expertId: 1,
  },
  "e1-a3-c5": {
    linguisticTermId: 3,
    criteria: 5,
    alternative: 3,
    expertId: 1,
  },
  "e1-a4-c1": {
    linguisticTermId: 3,
    criteria: 1,
    alternative: 4,
    expertId: 1,
  },
  "e1-a4-c2": {
    linguisticTermId: 0,
    criteria: 2,
    alternative: 4,
    expertId: 1,
  },
  "e1-a4-c3": {
    linguisticTermId: 1,
    criteria: 3,
    alternative: 4,
    expertId: 1,
  },
  "e1-a4-c4": {
    linguisticTermId: 2,
    criteria: 4,
    alternative: 4,
    expertId: 1,
  },
  "e1-a4-c5": {
    linguisticTermId: 4,
    criteria: 5,
    alternative: 4,
    expertId: 1,
  },
  "e1-a5-c1": {
    linguisticTermId: 2,
    criteria: 1,
    alternative: 5,
    expertId: 1,
  },
  "e1-a5-c2": {
    linguisticTermId: 3,
    criteria: 2,
    alternative: 5,
    expertId: 1,
  },
  "e1-a5-c3": {
    linguisticTermId: 1,
    criteria: 3,
    alternative: 5,
    expertId: 1,
  },
  "e1-a5-c4": {
    linguisticTermId: 2,
    criteria: 4,
    alternative: 5,
    expertId: 1,
  },
  "e1-a5-c5": {
    linguisticTermId: 4,
    criteria: 5,
    alternative: 5,
    expertId: 1,
  },
  "e1-a6-c1": {
    linguisticTermId: 4,
    criteria: 1,
    alternative: 6,
    expertId: 1,
  },
  "e1-a6-c2": {
    linguisticTermId: 2,
    criteria: 2,
    alternative: 6,
    expertId: 1,
  },
  "e1-a6-c3": {
    linguisticTermId: 2,
    criteria: 3,
    alternative: 6,
    expertId: 1,
  },
  "e1-a6-c4": {
    linguisticTermId: 1,
    criteria: 4,
    alternative: 6,
    expertId: 1,
  },
  "e1-a6-c5": {
    linguisticTermId: 3,
    criteria: 5,
    alternative: 6,
    expertId: 1,
  },
  "e1-a7-c1": {
    linguisticTermId: 0,
    criteria: 1,
    alternative: 7,
    expertId: 1,
  },
  "e1-a7-c2": {
    linguisticTermId: 1,
    criteria: 2,
    alternative: 7,
    expertId: 1,
  },
  "e1-a7-c3": {
    linguisticTermId: 3,
    criteria: 3,
    alternative: 7,
    expertId: 1,
  },
  "e1-a7-c4": {
    linguisticTermId: 4,
    criteria: 4,
    alternative: 7,
    expertId: 1,
  },
  "e1-a7-c5": {
    linguisticTermId: 3,
    criteria: 5,
    alternative: 7,
    expertId: 1,
  },
  "e1-a8-c1": {
    linguisticTermId: 3,
    criteria: 1,
    alternative: 8,
    expertId: 1,
  },
  "e1-a8-c2": {
    linguisticTermId: 3,
    criteria: 2,
    alternative: 8,
    expertId: 1,
  },
  "e1-a8-c3": {
    linguisticTermId: 2,
    criteria: 3,
    alternative: 8,
    expertId: 1,
  },
  "e1-a8-c4": {
    linguisticTermId: 1,
    criteria: 4,
    alternative: 8,
    expertId: 1,
  },
  "e1-a8-c5": {
    linguisticTermId: 2,
    criteria: 5,
    alternative: 8,
    expertId: 1,
  },
};

export const dataset1 = {
  numberOfAlternatives,
  numberOfCriteria,
  numberOfLinguisticTermsForAlternatives,
  numberOfLinguisticTermsForCriteria,
  numberOfExperts,
  names,
  criteriaLinguisticTerms,
  alternativesLinguisticTerms,
  criteriaEstimations,
  expertsEstimations,
  optimization,
  weightParameter,
};
