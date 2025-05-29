import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface Settings {
  theme: 'light' | 'dark'
  fontSize: number
  // Add more settings as needed
}

interface SettingsStore extends Settings {
  setTheme: (theme: 'light' | 'dark') => void
  setFontSize: (size: number) => void
  // Add more actions as needed
}

const DEFAULT_SETTINGS: Settings = {
  theme: 'light',
  fontSize: 14,
}

export const useSettingsStore = create<SettingsStore>()(
  persist(
    (set) => ({
      ...DEFAULT_SETTINGS,
      setTheme: (theme) => set({ theme }),
      setFontSize: (fontSize) => set({ fontSize }),
    }),
    {
      name: 'settings-storage',
    }
  )
) 