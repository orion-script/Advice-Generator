import AdviceType from "../types/AdviceTypes";

export const CACHE_KEY = "adviceData";

export const fetchData = async (
  currentId: number | null,
  setAdviceData: React.Dispatch<React.SetStateAction<AdviceType>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  setIsLoading(true);
  const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json();
  const newAdviceId = data.slip.id;
  if (newAdviceId === currentId) {
    fetchData(currentId, setAdviceData, setIsLoading);
  } else {
    setAdviceData(data.slip);
    localStorage.setItem(CACHE_KEY, JSON.stringify(data.slip));
    setIsLoading(false);
  }
};