export interface TimeData {
    time: string;
    temp: number;
    pop: number;
    icon: string;
    windgust: number;
    windspeed: number;
}

export interface DailyWeatherProps {
    todayDateData: TimeData[];
    tomorrowSlicedData: TimeData[];
}

export interface TimesByDateT {
    [date: string]: TimeData[];
}