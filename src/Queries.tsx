import { useDataEngine } from "@dhis2/app-runtime";
import { useQuery } from "react-query";
import { DataNode, Option } from "./interfaces";


export const useOrganisationUnits = () => {
    const engine = useDataEngine();
    const ouQuery = {
      me: {
        resource: "me.json",
        params: {
          fields: "organisationUnits[id,name,level,leaf]",
        },
      },
      levels: {
        resource: "organisationUnitLevels.json",
        params: {
          fields: "id,level~rename(value),name~rename(label)",
        },
      },
      groups: {
        resource: "organisationUnitGroups.json",
        params: {
          fields: "id~rename(value),name~rename(label)",
        },
      },
    };
  
    return useQuery<
      { units: DataNode[]; levels: Option[]; groups: Option[] },
      Error
    >(["organisation-units"], async () => {
      const {
        me: { organisationUnits },
        levels: { organisationUnitLevels },
        groups: { organisationUnitGroups },
      }: any = await engine.query(ouQuery);
      const units: DataNode[] = organisationUnits.map((o: any) => {
        return {
          key: o.id,
          title: o.name,
          level: o.level,
          isLeaf: o.leaf,
        };
      });
  
      return {
        units,
        levels: organisationUnitLevels.map((x: any) => {
          return { ...x, value: String(x.value) };
        }),
        groups: organisationUnitGroups,
      };
    });
  };