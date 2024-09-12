import React from "react";
import { useSelector } from "react-redux";
import GroupedEstimations from "./GroupedEstimations";
import AveragedEstimations from "./AveragedEstimations";
import NormalizedEstimations from "./NormalizedEstimations";
import WeightedNormalizedEstimations from "./WeightedNormalizedEstimations";
import RankedAlternatives from "./RankedAlternatives";

import {
  getAveragedEstimations,
  groupEstimations,
  convertAlternativesDatasetToArray,
  convertWeightsToArray,
  convertCriterionTypesToArray,
  fuzzyCoprasMethod,
} from "../../../utils/fuzzyCORPASUtils";
import CrispEstimations from "./CrispEstimations";

export default function FuzzyCORPAS() {
  const names = useSelector((state) => state.nameConfiguration);
  const numbers = useSelector((state) => state.numberConfiguration);
  const expertsEstimations = useSelector(
    (state) => state.expertsEstimationConfiguration
  );

  const criteriaEstimations = useSelector(
    (state) => state.criteriaEstimationConfiguration
  );

  const criteriaLinguisticTerms = useSelector(
    (state) => state.criteriaConfiguration
  );

  const alternativesLinguisticTerms = useSelector(
    (state) => state.alternativeConfiguration
  );

  const groupedAlternativesEstimations = groupEstimations(
    expertsEstimations.expertsEstimation,
    "alternatives"
  );

  const groupedCriteriaEstimations = groupEstimations(
    criteriaEstimations.criteriaEstimation,
    "criteria"
  );

  const optimization = useSelector((state) => state.optimizationConfiguration);

  const criteriaAveragedEstimations = getAveragedEstimations(
    groupedCriteriaEstimations,
    criteriaLinguisticTerms.criteriaLinguisticTerms,
    numbers.numberOfExperts
  );

  const alternativesAveragedEstimations = getAveragedEstimations(
    groupedAlternativesEstimations,
    alternativesLinguisticTerms.alternativeLinguisticTerms,
    numbers.numberOfExperts
  );

  const alternativesDataset = convertAlternativesDatasetToArray(
    alternativesAveragedEstimations
  );

  const weights = convertWeightsToArray(criteriaAveragedEstimations);

  const criterionTypes = convertCriterionTypesToArray(optimization);

  const {
    decisionMatrixCrispObj,
    decisionMatrixNormalizedObj,
    decisionMatrixpWeightedObj,
    rankingValuesRankedObj,
    utilityDegrees,
  } = fuzzyCoprasMethod(
    alternativesDataset,
    weights,
    criterionTypes,
    true,
    true
  );

  return (
    <>
      <GroupedEstimations
        groupedAlternativesEstimations={groupedAlternativesEstimations}
        groupedCriteriaEstimations={groupedCriteriaEstimations}
        names={names}
        criteriaLinguisticTerms={criteriaLinguisticTerms}
        alternativesLinguisticTerms={alternativesLinguisticTerms}
      />

      <AveragedEstimations
        alternativesAveragedEstimations={alternativesAveragedEstimations}
        criteriaAveragedEstimations={criteriaAveragedEstimations}
        names={names}
        optimization={optimization.optimization}
      />
      <CrispEstimations
        alternativesCrispEstimations={decisionMatrixCrispObj}
        names={names}
      />

      <NormalizedEstimations
        alternativesNormalizedEstimations={decisionMatrixNormalizedObj}
        names={names}
      />
      <WeightedNormalizedEstimations
        alternativesWeightedNormalizedEstimations={decisionMatrixpWeightedObj}
        names={names}
      />
      <RankedAlternatives
        rankedAlternatives={rankingValuesRankedObj}
        names={names}
      ></RankedAlternatives>
    </>
  );
}
