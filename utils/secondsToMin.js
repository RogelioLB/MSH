export const secondToMin = (seconds) =>{
    let minutes = String(seconds / 60);
    let totalSeconds = String(minutes * 60)
    minutes =Number(minutes.slice(0,1)).toFixed(0);
    let parsedSeconds = Number(totalSeconds-(minutes * 60)).toFixed(0)
    if(parsedSeconds<10){
        parsedSeconds=0+parsedSeconds;
    }
    return {minutes,totalSeconds,parsedSeconds};
}