const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://gateway.marvel.com:443/v1/public";

// [GET] Comics 리스트
export async function apiGetComics({ queryKey }) {
  const limit = queryKey[1].limit;
  try {
    return await fetch(`${BASE_URL}/comics?limit=${limit}&apikey=${API_KEY}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  } catch (error) {
    console.log(error);
    }
  }


// [GET] Events 리스트
export async function apiGetEvents() {
  return await fetch(`${BASE_URL}/events?limit=10&apikey=${API_KEY}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
}


// [GET] Characters 리스트(전체 리스트 불러옴)
export async function apiGetCharacters({ queryKey }) {
  const limit = queryKey[1].limit;
  try{
    return await fetch(`${BASE_URL}/characters?limit=${limit}&apikey=${API_KEY}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  } catch(error) {
    console.log(error);
  }
}


// Params: id
// [GET] Characters Detail
export async function apiGetCharacterDetail({ queryKey }) {
  const id = queryKey[1].id;
  try{
    return await fetch(`${BASE_URL}/characters/${id}?&apikey=${API_KEY}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  } catch(error) {
    console.log(error);
  }
}
