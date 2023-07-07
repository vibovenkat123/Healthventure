import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
interface HealthventureState {
  points: number;
  increase: (by: number) => void;
}

export const usePointStore = create<HealthventureState>()(
  persist(
    (set, get) => ({
      points: 0,
      increase: (by: number) => set((state) => ({ points: state.points + by })),
      reset: () => set({ points: 0 }),
    }),
    {
      name: "healthventure-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
