export interface TimeData {
    code: string;
    date: string;
    day: string;
    description: string;
    main: string;
    time: string;
    temp: number;
    temp_max: number;
    temp_min: number;
    feels_like: number;
    pop: number;
    icon: string;
    windgust: number;
    windspeed: number;
    humidity: number;
    pressure: number
}

export interface WeatherData {
    code: string;
    date: string;
    day: string;
    description: string;
    main: string;
    time: string;
    temp: number;
    temp_max: number;
    temp_min: number;
    feels_like: number;
    pop: number;
    icon: string;
    windgust: number;
    windspeed: number;
    humidity: number;
    pressure: number;
}

export interface MainHeadProps {
    weatherGIF: string;
    todayDateData: TimeData[];
}

export interface DailyHeadProps {
    todayDateData: TimeData[];
}

export interface DailyWeatherProps {
    todayDateData: TimeData[];
}

export interface TimesByDateT {
    [date: string]: TimeData[];
}

export interface WindDegreeProps {
    todayDateData: TimeData[];
    tomorrowSlicedData: TimeData[];
}

export interface WeeklyWeatherProps {
    todayDateData: TimeData[];
    tomorrowDateData: TimeData[];
}
