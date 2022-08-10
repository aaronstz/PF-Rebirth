import { useQuery, useMutation } from "@tanstack/react-query";
import axios from "axios";


const { REACT_APP_SERVER } = process.env;

export const useFetchPets = (filters) => {
  return useQuery(["pets", filters], async () => await fetchingData(filters), {
    refetchOnWindowFocus: false,
  });
};

export const useUserFavoritesPets = (filters) => {
  return useQuery(
    ["user", filters],
    async () => await fetchingFavorites(filters),
    {
      refetchOnWindowFocus: false,
    }
  );
};

export const useFavoritesPetsDetails = (filters) => {
  return useQuery(
    ["pets", filters],
    async () => await favoritesPetsDetails(filters),
    {
      refetchOnWindowFocus: false,
    }
  );
};

export const useUpdateFavs = (mail, id) => {
  return useMutation(async () => {
    return await axios.put(`${REACT_APP_SERVER}/user/deleteFavs/${mail}`, id);
  })
}

async function fetchingData({
  page = 0,
  name,
  type,
  location,
  gender,
  age,
  size,
}) {
  try {
    const ageFilter = !age ? [] : age;
    const nameFilter = !name ? "" : name;
    const typeFilter = !type.length
      ? "{%22dog%22,%22cat%22}"
      : passArrayByUrl(type);
    const genderFilter = !gender.length
      ? "{%22female%22,%22male%22}"
      : passArrayByUrl(gender);
    const sizeFilter = !size.length
      ? "{%22small%22,%22medium%22,%22big%22}"
      : passArrayByUrl(size);
    const locationFilter = !location.length ? "" : passArrayByUrl(location);

    const dataTest = await axios.get(
      `${REACT_APP_SERVER}/?page=${page}&name=${nameFilter}&type=${typeFilter}&age=${ageFilter}&gender=${genderFilter}&size=${sizeFilter}&location=${locationFilter}`
    );

    return dataTest;
  } catch (error) {
    return error;
  }
}

function passArrayByUrl(filterArray) {
  var auxString = "{";
  if (filterArray.length !== 0) {
    filterArray.forEach((g) => {
      auxString += `%22${g}%22,`;
    });
    auxString = auxString.substring(0, auxString.length - 1);
    auxString += "}";
  }
  return auxString;
}

async function fetchingFavorites({ mail }) {
  try {
    const dataFavorites = await axios.get(
      `${REACT_APP_SERVER}/user/Favs/${mail}`
    );
    return dataFavorites;
  } catch (error) {
    return error;
  }
}

async function favoritesPetsDetails({ id }) {
  let dataFavorites =
    id && id.map((id) => axios.get(`${REACT_APP_SERVER}/pets/${id}`));
  const arrayDetails = await Promise.all(dataFavorites);
  return arrayDetails;
}
