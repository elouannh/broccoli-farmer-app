export interface Farm {
    capacity: number;
    id: number;
}

export interface GameStore {
    count: number;
    farms: Farm[];
}