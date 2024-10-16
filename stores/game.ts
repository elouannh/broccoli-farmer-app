import {defineStore, type StoreDefinition} from 'pinia';
import type {Farm, GameStore} from "~/types/game";

export const useGameStore: StoreDefinition = defineStore('game', {
    state: (): GameStore => ({
        farming: {
            count: 0,
            farms: [{ capacity: 10, id: 0 }]
        },
        economy: {
            wallet: 0,
            sellingPrice: 0.50,
        }
    }),
    getters: {
        getFarmById: (state: GameStore) => (id: number) => state.farming.farms.filter((f: Farm): boolean => f.id === id).at(0),
    },
    actions: {
        increment(): void {
            this.farming.count += this.farming.farms.reduce((sum: number, f: Farm) => sum + f.capacity / 10, 0);
        },
        upgradeFarm(id: number): void {
            const farm: Farm | undefined = this.getFarmById(id);

            if (!farm) return;
            this.economy.wallet -= farm.capacity * 5;
            farm.capacity++;
            this.farming.farms = this.farming.farms.map((f: Farm): Farm => f.id === farm.id ? farm : f);
        },
        sell(): void {
            this.economy.wallet += this.farming.count * this.economy.sellingPrice;
            this.farming.count = 0;
        }
    }
});