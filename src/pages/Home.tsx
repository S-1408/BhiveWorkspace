import { useEffect, useState } from "react";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";

import SpaceCard from "../components/SpaceCard";
import Facilities from "../components/Facilities";
import { BottomLayout, HeaderLayout } from "../components/Layout";

const Home: React.FC = () => {
  const spaces = useSelector((state: RootState) => state.space.spaceData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch.space.fetchSpaces();
  }, []);

  return (
    <div>
      <HeaderLayout />
      <Facilities />
      <div className="px-20 flex justify-center flex-col mb-10">
        <p className="text-4xl font-700 mb-4 ">Our Space Overview</p>
        <div className="flex flex-wrap gap-4 ">
          {Array.isArray(spaces) &&
            spaces.map((item: any) => <SpaceCard item={item} />)}
        </div>
      </div>
      <BottomLayout />
    </div>
  );
};
export default Home;
