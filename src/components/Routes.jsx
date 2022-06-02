import React from "react";
import { Routes as Pages, Route, Navigate } from "react-router-dom";

import { Results } from "./imports";

const Routes = () => {
  return (
    <Pages>
      <Route path="/" element={<Navigate to="/search" />} />
      <Route path="/search" element={<Results />} />
      <Route path="/image" element={<Results />} />
      <Route path="/news" element={<Results />} />
      <Route path="/video" element={<Results />} />
    </Pages>
  );
};

export default Routes;
