import { useSettingsStore } from '../lib/store/settings'
import { SelectContent, SelectItem, SelectTrigger, SelectValue, SelectWithLabel } from './ui/select'
import { Button } from './ui/button'
import { Slider } from './ui/slider'

export function Settings() {
    const { theme, fontSize, setTheme, setFontSize } = useSettingsStore()

    return (
        <div className="space-y-6 text-primary h-full">
            <div className="space-y-4">
                <SelectWithLabel
                    label={<span className="text-xs">Theme</span>}
                    value={theme}
                    onValueChange={(value) => setTheme(value as 'light' | 'dark')}
                >
                    <SelectTrigger className="text-xs p-0.5 px-2 w-fit">
                        <SelectValue placeholder="Select theme" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light" className="text-xs p-0.5 px-2">Light</SelectItem>
                        <SelectItem value="dark" className="text-xs p-0.5 px-2">Dark</SelectItem>
                    </SelectContent>
                </SelectWithLabel>
            </div>
        </div>
    )
} 