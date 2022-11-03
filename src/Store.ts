import { combine } from "effector";
import { fromPairs, isEqual, sortBy } from "lodash";
import { domain } from "./Domain";
import {
  onChangeOrganisations,
  setExpandedKeys,
  setOrganisations,
  setSystemId,
  setLevels,
  setGroups,
  setSystemName,
  setCheckedKeys,
  setMinSublevel,
  setMaxLevel,
} from "./Events";
import {
  Option,IStore
} from "./interfaces";
import { generateUid } from "./utils/uid";
import { getRelativePeriods, relativePeriodTypes } from "./utils/utils";


export const $store = domain
  .createStore<IStore>({
    showSider: false,
    organisations: [],
    levels: [],
    groups: [],
    expandedKeys: [],
    systemId: "",
    checkedKeys: [],
    showFooter: false,
    systemName: "",
    minSublevel: 2,
    maxLevel: 5,
  })
  .on(setOrganisations, (state, organisations) => {
    return { ...state, organisations };
  })
  .on(setExpandedKeys, (state, expandedKeys) => {
    return { ...state, expandedKeys };
  })
  .on(setCheckedKeys, (state, checkedKeys) => {
    return { ...state, checkedKeys };
  })
  .on(
    onChangeOrganisations,
    (state, { levels, groups, organisations, expandedKeys, checkedKeys }) => {
      return {
        ...state,
        levels,
        groups,
        organisations,
        expandedKeys,
        checkedKeys,
      };
    }
  )
  
  .on(setSystemId, (state, systemId) => {
    return { ...state, systemId };
  })
  
  .on(setLevels, (state, levels) => {
    return { ...state, levels };
  })
  .on(setGroups, (state, groups) => {
    return { ...state, groups };
  })
  .on(setMinSublevel, (state, minSublevel) => {
    return { ...state, minSublevel };
  })
  .on(setMaxLevel, (state, maxLevel) => {
    return { ...state, maxLevel };
  });


