import { SearchState } from "@/pages/SearchPage";
import { Restaurant, restaurantSearchResponse } from "@/types";
import { useQuery } from "react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useGetRestaurant = (restaurantId?: string) => {
  const getRestaurantByIdRequest = async (): Promise<Restaurant> => {
    const response = await fetch(
      `${API_BASE_URL}/api/restaurant/${restaurantId}`
    );
    if (!response.ok) {
      throw new Error("Nie udało się załadować danych o restauracji");
    }
    return response.json();
  };

  const { data: restaurant, isLoading } = useQuery(
    //interacting with hook on the backend
    "fetchRestaurant",
    getRestaurantByIdRequest,
    { enabled: !!restaurantId } //only enable this query if we have a restaurantId
  );
  return { restaurant, isLoading };
};

export const useSearchRestaurants = (
  searchState: SearchState,
  city?: string
) => {
  const createSearchRequest = async (): Promise<restaurantSearchResponse> => {
    const params = new URLSearchParams();
    params.set("searchQuery", searchState.searchQuery);
    params.set("page", searchState.page.toString());
    params.set("selectedCuisines", searchState.selectedCuisines.join(","));
    params.set("sortOption", searchState.sortOption);

    const response = await fetch(
      `${API_BASE_URL}/api/restaurant/search/${city}?${params.toString()}`
    );

    if (!response.ok) {
      throw new Error("Nie udało się załadować danych o restauracji");
    }

    return response.json();
  };

  const { data: results, isLoading } = useQuery(
    ["searchRestaurants", searchState],
    createSearchRequest,
    { enabled: !!city } //this won't run unless we have a truthy value or a string value for the city argument
  );

  return { results, isLoading };
};
