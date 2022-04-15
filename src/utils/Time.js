const getElapsedTime = data => {

    let givenDate = new Date(data);
    let currentDate = new Date();

    let timeDifference = (currentDate.getTime()-givenDate.getTime())/1000;

    if(timeDifference<60){
        return `${Math.ceil(timeDifference)} seconds`;
    }else if(timeDifference<3600){
        return `${Math.ceil(timeDifference/60)} minutes`;
    }
    return  `${Math.ceil(timeDifference/60/60)} hours`;

};

export default getElapsedTime;