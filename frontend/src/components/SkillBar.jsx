import React from "react";

const SkillBar = ({ skill, level }) => {
  return (
    <div className="mb-4 text-left">
      <div className="flex justify-between mb-1">
        <span className="font-medium">{skill}</span>
        <span>{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className="bg-red-600 h-3 rounded-full"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;

