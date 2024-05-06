import { create } from "zustand";

export const useTrucoStore = create((set: any) => ({
  teamA: 0,
  teamB: 0,
  scoreA: () => set((state: any) => ({ teamA: state.teamA + 1 })),
  scoreB: () => set((state: any) => ({ teamB: state.teamB + 1 })),
}));
