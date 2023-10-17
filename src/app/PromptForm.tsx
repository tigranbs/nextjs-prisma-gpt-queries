'use client'

import {useState} from "react";

interface Props {
  onSubmit: (text: string) => Promise<{error?: string, result: string}>
}

export function PromptForm({ onSubmit }: Props) {
  const [text, setText] = useState('')
  const [isLoading, setLoading] = useState(false)
  const [errorText, setErrorText] = useState('')
  const [resultText, setResultText] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorText('')
    setLoading(true);
    try {
      const {error, result} = await onSubmit(text);
      if (error) {
        setErrorText(error)
      } else {
        setResultText(result);
      }
    } catch (e) {
      setErrorText((e as Error).toString())
    }
    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mt-3 flex flex-col">
        <textarea
          className="border-2 border-gray-300" rows={2} cols={30}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className={
          `mt-3 px-4 py-2 bg-blue-500 text-white rounded-md ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}}`
        }
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'Submit'}
        </button>
        {errorText && errorText.length > 0 && (
          <p className="text-red-500 text-sm font-light">
            {errorText}
          </p>
        )}
        <p className="text-sm text-gray-500 mt-4">
          {resultText}
        </p>
      </div>
    </form>
  )
}
