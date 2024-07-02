
export const formatFoodData = (rawData) => {
  return {
    foods: rawData?.data || [],
    total: rawData?.data?.length || 0
  }
}