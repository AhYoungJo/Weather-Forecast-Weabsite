export interface TimeData {
    time: string;
    temp: number;
    temp_max: number;
    temp_min: number;
    pop: number;
    icon: string;
    windgust: number;
    windspeed: number;
    humidity: number;
    pressure: number
}

export interface DailyWeatherProps {
    todayDateData: TimeData[];
    tomorrowSlicedData: TimeData[];
}

export interface TimesByDateT {
    [date: string]: TimeData[];
}

export interface WindDegreeProps {
    data: TimeData[];
}

export interface WeeklyWeatherProps {
    timesByDate: TimesByDateT;
    todayDateData: TimeData[];
    tomorrowDateData: TimeData[];
}

export interface MainHeadProps {
    weatherGIF: string;
  }