import React, { useState, useEffect } from "react";
import AdviceType from "../../types/AdviceTypes";
import diceIcon from "../../assets/icon-dice.svg";
import {
  AdviceWrapper,
  AdviceContainer,
  Loading,
  AdviceId,
  AdviceText,
  AdviceButton,
  Divider,
} from "./cardstyle";

import { fetchData, CACHE_KEY } from "../../utils/Cardutils";

const Cards: React.FC = () => {

    const [adviceData, setAdviceData] = useState<AdviceType>({
        id: 0,
        advice: "",
      });
      const [isLoading, setIsLoading] = useState(true);
      const { id, advice } = adviceData;
    
      const handleClick = () => {
        setIsLoading(true);
        fetchData(adviceData.id, setAdviceData, setIsLoading);
      };
    
      useEffect(() => {
        const cachedData = localStorage.getItem(CACHE_KEY);
        if (cachedData) {
          setAdviceData(JSON.parse(cachedData));
          setIsLoading(false);
        } else {
          fetchData(null, setAdviceData, setIsLoading);
        }
    }, []);



    return (
        <AdviceWrapper>
          <AdviceContainer>
            {isLoading ? (
              <Loading>Loading...</Loading>
            ) : (
              <>
                <AdviceId>Advice #{id}</AdviceId>
                <AdviceText>&#34;{advice}&#34;</AdviceText>
                <Divider />
              </>
            )}
          </AdviceContainer>
          <AdviceButton onClick={handleClick}>
            <img src={diceIcon} alt='advice button' />
          </AdviceButton>
        </AdviceWrapper>
      );
}
 
export default Cards;