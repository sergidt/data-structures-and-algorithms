//// BUILDER

////////////////////

export enum DeviceType {
    Shutter = 'Shutter',
    Light = 'Light',
    AirConditioning = 'Air Conditioning',
    External = 'External',
    Alarm = 'Alarm'
}

export enum ExternalSource {
    Alexa = 'Alexa',
    GoogleHome = 'Google Home',
    MusicSystem = 'Music System',
}

export enum TaskType {
    Run = 'Run',
    GetInfo = 'Get info',
    GetState = 'Get state'
}

export interface Task {
    type: TaskType;
    params?: any;
}

export interface TaskExecutor {
    executeTask(task: Task);
}

export enum DeviceMessageType {
    Log,
    Warning,
    Error,
    Critical
}

export interface DeviceMessage {
    type: DeviceMessageType;
    detail: string;
}


