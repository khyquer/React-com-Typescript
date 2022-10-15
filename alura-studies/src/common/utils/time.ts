const TimetoSeconds = (time: string) => {

    const [hours = '0', minutes = '0', seconds = '0'] = time.split(':');
    const hoursInSeconds = Number(hours) * 3600;
    const minutesInSeconds = Number(minutes) * 60 ;    
    return hoursInSeconds + minutesInSeconds + Number(seconds)
}

const SecondsToTime = (seconds: number) => {
    const hoursString  = Math.floor(seconds / 3600);
    const minutsString  = Math.floor(seconds / 60) % 60;
    const secondsString = seconds % 60;
    return String(hoursString).padStart(2, '0') + ':' +
        String(minutsString).padStart(2, '0') + ':' +
        String(secondsString).padStart(2, '0'); 
}

export { TimetoSeconds, SecondsToTime };