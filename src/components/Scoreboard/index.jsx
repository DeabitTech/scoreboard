import React, { useState } from 'react'
import Match from '../Match'
import startUpMatches from '../../features/config/matches.json'
import { getRandom } from '../../features/config'
import {useMatchTimeout,useRandomScoreInterval,useScoreInterval} from '../../features'
const Scoreboard = () => {
  const [matches,setMatches] = useState(startUpMatches)
  const [endedMatches,setEndedMatches] = useState([]);
  const [isMatchTime, setIsMatchTime] = useState(true);
  const [time,] = useState([6000, 8000]);
  const [updateScoreTime, ] = useState([8000,9500])
  const minGameId = 0; 
  const maxGameId = matches.length - 1;

  const startMatch = (matchId) => {
    
      setMatches((matches)=>{
        return matches.map((match) => match.gameId === matchId ? { ...match, startedGame: true } : match)
  
      })
  }

  const finishMatch = (matchId) => {
    setMatches((matches)=>{
      return matches.filter(match => match.gameId !== matchId)
    });
    setEndedMatches((endedMatch)=>{
      return [
        ...endedMatch,
        matches.find((match) => match.gameId === matchId)
      ].filter(Boolean) 
      .map(match => {
         match.startedGame = false;
         return match;
      })
    })
  }

  const updateMatch = (teamId, matchId) => {
    console.log(teamId)
    let teamName = Number(teamId) == 2 ? 'awayTeam' : 'homeTeam'
    const isGameStarted = matches.find(match => match.gameId === matchId && match.startedGame === true);
    if (!isGameStarted) {
        return;
    }
    setMatches((matches)=>{
      return matches.map((match) => match.gameId === matchId ?  
      {
        ...match,
       
        [teamName]: {
            ...match[teamName],
            score: match[teamName].score + 1,
        }
      } :  match)

    })
  }
  const cancelMatchTimeout = useRandomScoreInterval(()=>{
    if(isMatchTime){
      let matchId = getRandom(minGameId,maxGameId)
      startMatch(matchId)
    }
    else {
      let matchId = getRandom(minGameId,startUpMatches.length-1)
      finishMatch(matchId)
    }
  }, ...time)

  const cancelScoreTimeout = useRandomScoreInterval(()=>{
    if(isMatchTime){
      let matchId = getRandom(minGameId,maxGameId)
      updateMatch(getRandom(1,2),matchId)
    }
  }, ...updateScoreTime)

  if(matches.length ==0){
    cancelMatchTimeout()
    cancelScoreTimeout()
  }

  useMatchTimeout(() => {
    setIsMatchTime(false);
  }, 90000);
  
  return (
    <div className='flex flex-col px-8'>

      {matches.length>0 && <h1 className='p-2 text-2xl'>{`Current matches`}</h1>}
      <div className='flex flex-row flex-wrap'>
        {matches.map((match)=>{
          return (<Match key={match.gameId} match={match} status={match.startedGame?`Playing`:``}/>)
        })}
      </div>
      {endedMatches.length>  0 &&
      <>
        <h1 className='p-2 text-2xl'>{`Summary`}</h1>
        <div className='flex flex-row flex-wrap'>
          {endedMatches.map((match)=>{
            return (<Match key={match.gameId} match={match} />)
          })}
        </div>
      </>
      }
    </div>
  )
}

export default Scoreboard