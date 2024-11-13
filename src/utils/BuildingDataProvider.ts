import {useState} from 'react';
import Floors from '../data/building.json'

interface Floor {
  name: string;
  soldiers: number;
  purpose: string;
  description: string;
  activity:string
}

const useBuildingData = () => {
  const [buildingData, setBuildingData] = useState<Floor[]>([]);

  //FILL HERE LOGIC TO SET THE BUILDING DATA

  const getFloorByIndex = (floorIndex:number): Floor |undefined =>
  {
    return Floors[floorIndex];
  }

  const getListOfActivities = ():string[]=> {
    return Floors.map(floor => floor.activity);
  }
  return {
    buildingData,
    getFloorByIndex,
    getListOfActivities
  };
};

export default useBuildingData;
