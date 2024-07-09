export const formatFoodData = (rawData) => {
  return {
    foods: rawData?.data || [],
    total: rawData?.data?.length || 0,
  };
};

export const formatData = (rawData) => {
  return {
    results: rawData?.data || [],
    total: rawData?.data?.length || 0,
  };
};
