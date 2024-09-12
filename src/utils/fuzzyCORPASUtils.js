export function groupEstimations(selectedItems, type) {
  const groupedEstimations = {};
  for (const key in selectedItems) {
    const item = selectedItems[key];
    const { alternative, criteria, expertId, linguisticTermId } = item;
    const aggregationKey =
      type === "alternatives" ? `a${alternative}-c${criteria}` : `c${criteria}`;

    // Create the aggregation key if it doesn't exist
    if (!groupedEstimations[aggregationKey]) {
      groupedEstimations[aggregationKey] = {
        linguisticTermsId: [{ ...item }],
      };
    } else {
      // If the aggregation key already exists, push the linguisticTermId to the existing object
      groupedEstimations[aggregationKey].linguisticTermsId.push(item);
    }
  }

  return groupedEstimations;
}

export function getAveragedEstimations(
  groupedEstimations,
  linguisticTerms,
  numberOfExperts
) {
  const averagedEstimations = {};
  for (const key in groupedEstimations) {
    const { linguisticTermsId } = groupedEstimations[key];

    const fuzzyEstimations = linguisticTermsId.map(
      (estimation) =>
        linguisticTerms[estimation.linguisticTermId].normalizedConfines
    );
    const sumFuzzyEstimations = sumFuzzyNumbers(fuzzyEstimations);
    const averegeFuzzyEstimations = sumFuzzyEstimations.map(
      (sum) => sum / numberOfExperts
    );
    averagedEstimations[key] = averegeFuzzyEstimations;
  }
  return averagedEstimations;
}

function sumFuzzyNumbers(sumArray) {
  const leftElements = sumArray.map((subarray) => subarray[0]);
  const middleElements = sumArray.map((subarray) => subarray[1]);
  const rightElements = sumArray.map((subarray) => subarray[2]);

  const sumLeftElements = leftElements.reduce((a, b) => a + b, 0);
  const sumMiddleElements = middleElements.reduce((a, b) => a + b, 0);
  const sumRightElements = rightElements.reduce((a, b) => a + b, 0);

  return [sumLeftElements, sumMiddleElements, sumRightElements];
}

export function convertAlternativesDatasetToArray(alternativesDataset) {
  const alternatives = new Map();

  for (const key in alternativesDataset) {
    const [alternative, criterion] = key.split("-");

    if (!alternatives.has(alternative)) {
      alternatives.set(alternative, []);
    }

    const criterionIndex = parseInt(criterion.substring(1)) - 1;
    alternatives.get(alternative)[criterionIndex] = alternativesDataset[key];
  }

  return Array.from(alternatives.values());
}

export function convertWeightsToArray(weights) {
  // Create a new array to hold the transformed data
  const weightsArray = [];

  // Iterate over each key in the weights object
  for (const key in weights) {
    // Assuming weights[key] is an array of arrays, we need to push it into weightsArray
    if (Array.isArray(weights[key])) {
      weightsArray.push(weights[key]);
    }
  }

  // Wrap the result in another array to match your desired format
  return [weightsArray];
}

export function convertCriterionTypesToArray(criterionTypes) {
  const types = criterionTypes.optimization;
  const criterionTypesArray = [];

  for (const criterion in types) {
    criterionTypesArray.push(types[criterion].toLowerCase());
  }

  return criterionTypesArray;
}

export const fuzzyCoprasMethod = (
  dataset,
  weights,
  criterionTypes,
  showGraph = true,
  showVerbose = true
) => {
  const alternativesNumber = dataset.length;
  const criteriaNumber = dataset[0].length;
  // Initialize decision matrix for each alternative and criterion
  const decisionMatrixCrisp = Array(dataset.length)
    .fill(0)
    .map(() => Array(dataset[0].length).fill(0));

  // Initialize crisp weights
  const weightCrisp = Array(weights[0].length).fill(0);

  // Defuzzify weights and decision matrix using the COA method
  for (
    let criterionIndex = 0;
    criterionIndex < dataset[0].length;
    criterionIndex++
  ) {
    // Defuzzify the weight using COA method
    const [lowerWeight, middleWeight, upperWeight] = weights[0][criterionIndex];
    weightCrisp[criterionIndex] =
      (lowerWeight + middleWeight + upperWeight) / 3;

    // Defuzzify the decision matrix for each alternative using COA method
    for (
      let alternativeIndex = 0;
      alternativeIndex < dataset.length;
      alternativeIndex++
    ) {
      const [lowerBound, middleBound, upperBound] =
        dataset[alternativeIndex][criterionIndex];
      decisionMatrixCrisp[alternativeIndex][criterionIndex] =
        (lowerBound + middleBound + upperBound) / 3;
    }
  }

  // Normalize the defuzzified decision matrix according to formula (8)
  const decisionMatrixNormalized = Array(dataset.length)
    .fill(0)
    .map(() => Array(dataset[0].length).fill(0));

  for (
    let criterionIndex = 0;
    criterionIndex < dataset[0].length;
    criterionIndex++
  ) {
    // Sum of values for the j-th criterion (sum over alternatives)
    const columnSum = decisionMatrixCrisp.reduce(
      (sum, row) => sum + row[criterionIndex],
      0
    );

    // Normalize each value
    decisionMatrixCrisp.forEach((row, i) => {
      decisionMatrixNormalized[i][criterionIndex] =
        row[criterionIndex] / columnSum;
    });
  }

  // Calculate the weighted normalized decision matrix according to formula (10)
  const decisionMatrixWeighted = Array(dataset.length)
    .fill(0)
    .map(() => Array(dataset[0].length).fill(0));

  for (
    let criterionIndex = 0;
    criterionIndex < dataset[0].length;
    criterionIndex++
  ) {
    decisionMatrixNormalized.forEach((row, i) => {
      decisionMatrixWeighted[i][criterionIndex] =
        row[criterionIndex] * weightCrisp[criterionIndex];
    });
  }

  // Initialize beneficial and non-beneficial sums
  const beneficialSum = Array(dataset.length).fill(0);
  const nonBeneficialSum = Array(dataset.length).fill(0);

  // Calculate beneficial and non-beneficial sums based on criterion type
  for (
    let alternativeIndex = 0;
    alternativeIndex < dataset.length;
    alternativeIndex++
  ) {
    for (
      let criterionIndex = 0;
      criterionIndex < dataset[0].length;
      criterionIndex++
    ) {
      if (criterionTypes[criterionIndex] === "max") {
        beneficialSum[alternativeIndex] +=
          decisionMatrixWeighted[alternativeIndex][criterionIndex];
      } else {
        nonBeneficialSum[alternativeIndex] +=
          decisionMatrixWeighted[alternativeIndex][criterionIndex];
      }
    }
  }

  // Initialize final ranking values (Q_i) for each alternative

  const rankingValues = Array(dataset.length).fill(0); // Q_i values
  const sumR = nonBeneficialSum.reduce((sum, R) => sum + R, 0); // Sum of R_i values
  const sumInverseR = nonBeneficialSum.reduce(
    (sum, R) => sum + (R > 0 ? 1 / R : 0),
    0
  ); // Sum of 1/R_i values

  // Compute Q_i (relative weights) for each alternative
  for (
    let alternativeIndex = 0;
    alternativeIndex < dataset.length;
    alternativeIndex++
  ) {
    const P_i = beneficialSum[alternativeIndex];
    const R_i = nonBeneficialSum[alternativeIndex];
    rankingValues[alternativeIndex] = P_i + sumR / (R_i * sumInverseR); // Use corrected formula here
  }

  // Get Q_max for normalization
  const Q_max = Math.max(...rankingValues);

  // Calculate N_i (utility degree as a percentage) for each alternative
  const utilityDegrees = rankingValues.map((Q_i) => (Q_i / Q_max) * 100);

  // // Display verbose results
  // if (showVerbose) {
  //   rankingValues.forEach((Q_i, index) => {
  //     const N_i = utilityDegrees[index];
  //     console.log(
  //       `Alternative a${index + 1}: Q_i = ${Q_i.toFixed(
  //         3
  //       )}, N_i = ${N_i.toFixed(2)}%`
  //     );
  //   });
  // }

  const decisionMatrixObj = arrayToObject(
    decisionMatrixCrisp,
    alternativesNumber,
    criteriaNumber
  );
  const decisionMatrixNormalizedObj = arrayToObject(
    decisionMatrixNormalized,
    alternativesNumber,
    criteriaNumber
  );
  const decisionMatrixpWeightedObj = arrayToObject(
    decisionMatrixWeighted,
    alternativesNumber,
    criteriaNumber
  );

  const decisionMatrixCrispObj = arrayToObject(
    decisionMatrixCrisp,
    alternativesNumber,
    criteriaNumber
  );
  const rankingValuesObj = rankingValues.map((rankingValue, index) => ({
    Q_i: rankingValue,
    N_i: utilityDegrees[index],
    id: index,
  }));
  const rankingValuesRankedObj = [...rankingValuesObj].sort(
    (a, b) => b.Q_i - a.Q_i
  );

  return {
    decisionMatrixObj,
    decisionMatrixCrispObj,
    decisionMatrixNormalizedObj,
    decisionMatrixpWeightedObj,
    rankingValuesRankedObj,
    utilityDegrees,
  };
};

const arrayToObject = (array, alternativesNumber, criteriaNumber) => {
  const obj = {};

  for (let i = 0; i < alternativesNumber; i++) {
    for (let j = 0; j < criteriaNumber; j++) {
      obj[`a${i + 1}-c${j + 1}`] = array[i][j];
    }
  }

  return obj;
};
