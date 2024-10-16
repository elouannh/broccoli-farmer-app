export interface Farm {
    capacity: number;
    id: number;
}

export interface GameStore {
    farming: {
        count: number;
        farms: Farm[];
    };
    economy: {
        wallet: number;
        sellingPrice: number;
    };
}