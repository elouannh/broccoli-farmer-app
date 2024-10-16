import type {Farm} from "~/types/game";
import { useGameStore } from "~/stores/game";

export const useDisableUpgradeButton = (farm: Farm) => {
    return (): boolean => {
        const store = useGameStore();
        const { economy } = storeToRefs(store);
        return economy.value.wallet < (farm.capacity * 5);
    }
};