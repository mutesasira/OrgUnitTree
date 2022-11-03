import { MakeGenerics } from "@tanstack/react-location";
import { OptionBase } from "chakra-react-select";
import { Event } from "effector";

export interface DataNode {
    title: string;
    key: string;
    isLeaf?: boolean;
    level?: string;
    children?: DataNode[];
  }

  export interface Option extends OptionBase {
    label: string;
    value: string;
    id?: string;
  }

  export type OUTreeProps = {
    units: DataNode[];
    levels: Option[];
    groups: Option[];
  };
  export interface IStore {
    showSider: boolean;
    showFooter: boolean;
    organisations: React.Key[];
    groups: string[];
    levels: string[];
    expandedKeys: React.Key[];
    systemId: string;
    systemName: string;
    checkedKeys: { checked: React.Key[]; halfChecked: React.Key[] } | React.Key[];
    minSublevel: number;
    maxLevel: number;
  }