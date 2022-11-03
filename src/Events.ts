import { domain } from "./Domain";
import {
  DataNode,
  Option,
} from "./interfaces";

export const loadDefaults = domain.createEvent<{
  organisationUnits: DataNode[];
}>();

export const setOrganisations = domain.createEvent<React.Key[]>();
export const setExpandedKeys = domain.createEvent<React.Key[]>();
export const changeOrganisations = domain.createEvent<string>();

export const onChangeOrganisations = domain.createEvent<{
  levels: string[];
  organisations: React.Key[];
  groups: string[];
  expandedKeys: React.Key[];
  checkedKeys: React.Key[];
}>();
export const setSystemId = domain.createEvent<string>();
export const setLevels = domain.createEvent<string[]>();
export const setGroups = domain.createEvent<string[]>();
export const setShowFooter = domain.createEvent<boolean>();
export const setSystemName = domain.createEvent<string>();
export const setMinSublevel = domain.createEvent<number>();
export const setMaxLevel = domain.createEvent<number>();
export const setCheckedKeys = domain.createEvent<
  { checked: React.Key[]; halfChecked: React.Key[] } | React.Key[]
>();
