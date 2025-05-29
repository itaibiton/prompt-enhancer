import { Button } from '@/components/ui/button'
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectWithLabel
} from '@/components/ui/select'
import { CommandIcon, WandSparklesIcon, ClipboardCopyIcon } from 'lucide-react'
import { Textarea } from './components/ui/textarea'
import { useState } from 'react'

function App(): JSX.Element {
  const [prompt, setPrompt] = useState('')
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setPrompt(e.target.value)
  }

  const handleEnhance = (): void => {
    setLoading(true)
    setResponse(null)
    setTimeout(() => {
      setLoading(false)
      setResponse('This is a simulated enhanced response for your prompt!')
    }, 1000)
  }

  const handleCopy = (): void => {
    if (response) {
      navigator.clipboard.writeText(response)
      setCopied(true)
      setTimeout(() => setCopied(false), 1200)
    }
  }

  return (
    <div className="p-4 rounded flex gap-2 flex-col w-[500px] bg-background">
      <div className="h-8 w-full app-region-drag flex items-center select-none">
        <span className="font-bold text-primary">Prompt Enhancer</span>
      </div>
      <div className="app-region-no-drag flex flex-col gap-2 ">
        <Textarea
          className="border border-gray-300 rounded p-2 app-region-no-drag max-h-[200px]"
          placeholder="Type here..."
          value={prompt}
          onChange={handleChange}
        />
        {response && !loading && (
          <div className="mt-2 bg-muted/40 border border-muted rounded p-3 flex items-center justify-between gap-2">
            <span className="text-xs text-foreground break-words flex-1">{response}</span>
            <button
              className="ml-2 px-2 py-1 rounded bg-accent text-accent-foreground text-xs flex items-center gap-1 hover:bg-accent/80 transition"
              onClick={handleCopy}
              aria-label="Copy response"
            >
              <ClipboardCopyIcon className="w-4 h-4" />
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
        )}
        <div className="flex w-full gap-4 app-region-no-drag items-end justify-between mt-4">
          <SelectWithLabel
            label={
              <div className="text-xs font-medium text-muted-foreground flex items-center gap-1">
                Enhance Model
                <CommandIcon className="w-3 h-3 ml-2" />M
              </div>
            }
            className="border-none"
          >
            <SelectTrigger className="text-xs p-0.5 px-2 border-primary/10">
              <SelectValue placeholder="Select a model" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem className="text-xs p-0.5 px-2 " value="gpt-4o">
                GPT-4o
              </SelectItem>
              <SelectItem className="text-xs p-0.5 px-2 " value="gpt-4o-mini">
                GPT-4o-mini
              </SelectItem>
              <SelectItem className="text-xs p-0.5 px-2 " value="gpt-4">
                GPT-4
              </SelectItem>
              <SelectItem className="text-xs p-0.5 px-2 " value="gpt-3.5-turbo">
                GPT-3.5-turbo
              </SelectItem>
              <SelectItem className="text-xs p-0.5 px-2 " value="gpt-3.5-turbo-1106">
                GPT-3.5-turbo-1106
              </SelectItem>
              <SelectItem className="text-xs p-0.5 px-2 " value="gpt-3.5-turbo-1106-preview">
                GPT-3.5-turbo-1106-preview
              </SelectItem>
            </SelectContent>
          </SelectWithLabel>
          <Button
            size="sm"
            variant="default"
            className="p-4 flex items-center gap-2 cursor-pointer"
            onClick={handleEnhance}
            disabled={loading}
          >
            Enhance <WandSparklesIcon className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default App
