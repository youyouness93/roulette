'use client'

import { FormEvent } from 'react'

export default function NewsletterForm() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // TODO: Implement newsletter subscription
    console.log('Newsletter subscription submitted')
  }

  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Enter your email"
        className="flex-1 px-4 py-2 bg-emerald-500/5 rounded-lg border border-emerald-500/20
          text-emerald-400 placeholder-emerald-400/50 focus:outline-none focus:border-emerald-400/50"
      />
      <button
        type="submit"
        className="px-6 py-2 bg-emerald-500/10 rounded-lg border border-emerald-500/20
          text-emerald-400 font-semibold transition-all duration-300
          hover:bg-emerald-500/20 hover:border-emerald-400/50
          hover:shadow-[0_0_30px_rgba(0,255,200,0.2)]"
      >
        Subscribe
      </button>
    </form>
  )
}
