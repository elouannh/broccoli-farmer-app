import {defineStore, type StoreDefinition} from 'pinia';
import type {Farm, GameStore} from "~/types/game";

export const useGameStore: StoreDefinition = defineStore('game', {
    state: (): GameStore => ({
        count: 0,
        farms: [{ capacity: 10, id: 0 }]
    }),
    getters: {
        getCount: (state: GameStore) => state.count,
        getFarms: (state: GameStore) => state.farms,
        getFarmById: (state: GameStore) => (id: number) => state.farms.filter((f: Farm): boolean => f.id === id).at(0),
    },
    actions: {
        increment(): void {
            this.count += this.farms.reduce((sum: number, f: Farm) => sum + f.capacity / 10, 0);
        },
        upgradeFarm(id: number): void {
            const farm: Farm | undefined = this.getFarmById(id);

            if (!farm) return;
            farm.capacity++;
            this.count -= farm.capacity * 10;
            this.farms = this.farms.map((f: Farm): Farm => f.id === farm.id ? farm : f);
        }
    }
});