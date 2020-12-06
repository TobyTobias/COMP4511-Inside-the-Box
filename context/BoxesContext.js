// force the state to clear with fast refresh in Expo
// @refresh reset

import React, { useEffect, createContext, useState } from 'react';
import {database} from '../components/database';

export const BoxesContext = createContext({});

export const BoxesContextProvider = props => {
  // Initial values are obtained from the props
  const {
    boxes: initialBoxes,
    featuredBoxes: initialFeaturedBoxes,
    children
  } = props;

  // Use State to store the values
  const [boxes, setBoxes] = useState(initialBoxes);
  const [featuredBoxes, setFeaturedBoxes] = useState(initialFeaturedBoxes);

  useEffect(() => {
    refreshBoxes();
  }, [] );

  useEffect(() => {
    refreshFeaturedBoxes();
  }, [] );


  const addNewBox = name => {
    return database.insertBox(name, refreshBoxes);
  };

  const refreshBoxes = () =>  {
    console.log('refreshBoxes: ' + database.getBoxes(setBoxes));
    return database.getBoxes(setBoxes);
  };

  const refreshFeaturedBoxes = () =>  {
    console.log('refreshBoxes: ' + database.getFeaturedBoxes(setFeaturedBoxes));
    return database.getFeaturedBoxes(setFeaturedBoxes);
  };

  // Make the context object:
  const boxesContext = {
    boxes,
    featuredBoxes,
    addNewBox
  };

  // pass the value in provider and return
  return <BoxesContext.Provider value={boxesContext}>{children}</BoxesContext.Provider>;
};