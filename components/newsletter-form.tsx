'use client'

export default function NewsletterForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add newsletter subscription logic here
  }

  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Enter your email"
        className="flex-1 px-4 py-2 bg-emerald-500/10 rounded-xl border border-emerald-500/20
          text-emerald-400 placeholder:text-emerald-400/50 focus:outline-none focus:border-emerald-400/50"
      />
      <button
        type="submit"
        className="px-6 py-2 bg-emerald-500/10 rounded-xl border border-emerald-500/20
          text-emerald-400 font-bold transition-all duration-300
          hover:bg-emerald-500/20 hover:border-emerald-400/50"
      >
        Subscribe
      </button>
    </form>
  )
}
