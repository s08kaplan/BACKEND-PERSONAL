import React from "react";
import useAxios from "./useAxios";
import { useState } from "react";

const useProducts = () => {
  const { axiosPublic } = useAxios();
  const getAllProducts = async (url = "products") => {
    try {
      const { data } = await axiosPublic(`${url}`);
      console.log(data);
      return data
    } catch (error) {
      console.log("something went wrong", error);
    }
  };
  return { getAllProducts };
};

export default useProducts;
