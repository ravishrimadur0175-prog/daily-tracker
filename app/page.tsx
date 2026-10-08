'use client'

import { FormEvent, useState } from 'react'
import { ArrowUpRight, CalendarDays, Check, MapPin } from 'lucide-react'

export default function Page() {
  const [contact, setContact] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (contact.trim()) setSubmitted(true)
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#eee5d5] text-[#25231f]">
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 sm:px-10 lg:px-16">
        <a href="#top" className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#25231f]">
          Daily Tracker
        </a>
        <a
          href="#signup"
          className="group inline-flex items-center gap-2 rounded-full border border-[#25231f]/25 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition-colors hover:bg-[#25231f] hover:text-[#eee5d5]"
        >
          Sign up
          <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
        </a>
      </header>

      <section id="top" className="mx-auto grid min-h-[calc(100vh-88px)] w-full max-w-7xl items-center gap-14 px-6 pb-16 pt-8 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:px-16 lg:pb-24 lg:pt-10">
        <div className="max-w-3xl">
          <p className="mb-7 flex items-center gap-3 font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#796d5d]">
            <span className="size-2 rounded-full bg-[#a8653c]" aria-hidden="true" />
            An event for everyone
          </p>
          <h1 className="max-w-2xl text-[clamp(4rem,10vw,9rem)] font-semibold leading-[0.87] tracking-[-0.08em]">
            Daily
            <br />
            Tracker<span className="text-[#a8653c]">.</span>
          </h1>
          <p className="mt-9 max-w-md text-lg leading-7 text-[#625849] sm:text-xl">
            Tracks down your To do List
          </p>

          <div className="mt-12 flex flex-wrap gap-x-10 gap-y-5 border-t border-[#25231f]/20 pt-5 text-sm">
            <div className="flex items-start gap-3">
              <CalendarDays className="mt-0.5 size-4 text-[#a8653c]" aria-hidden="true" />
              <div>
                <p className="font-semibold">Wednesday September 30</p>
                <p className="mt-1 text-[#796d5d]">3:00 pm</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 text-[#a8653c]" aria-hidden="true" />
              <div>
                <p className="font-semibold">India</p>
                <p className="mt-1 text-[#796d5d]">Everyone is welcome</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex min-h-[390px] items-end justify-end sm:min-h-[470px] lg:min-h-[560px]">
          <div className="absolute left-0 top-0 size-40 rounded-full bg-[#d8c4a9] sm:size-56" aria-hidden="true" />
          <div className="absolute right-6 top-10 h-64 w-44 rotate-[12deg] rounded-[100%] border border-[#a8653c]/40 sm:right-12 sm:h-80 sm:w-56" aria-hidden="true" />
          <div className="relative z-10 w-full max-w-sm border border-[#25231f]/20 bg-[#e5d8c4] p-6 sm:p-8">
            <div className="flex items-start justify-between border-b border-[#25231f]/20 pb-5">
              <span className="font-mono text-xs uppercase tracking-[0.15em] text-[#796d5d]">The plan</span>
              <span className="text-4xl font-semibold tracking-[-0.08em] text-[#a8653c]">03</span>
            </div>
            <div className="flex flex-col gap-5 py-7">
              {['Write it down', 'Make it clear', 'Get it done'].map((item, index) => (
                <div key={item} className="flex items-center gap-4">
                  <span className="flex size-7 items-center justify-center rounded-full border border-[#25231f]/25 font-mono text-xs">{index + 1}</span>
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-[#25231f]/20 pt-5 font-mono text-[10px] uppercase tracking-[0.15em] text-[#796d5d]">
              One task at a time
            </div>
          </div>
        </div>
      </section>

      <section id="signup" className="border-t border-[#25231f]/15 bg-[#e5d8c4]">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-16 sm:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:px-16 lg:py-24">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#a8653c]">Reserve your spot</p>
            <h2 className="mt-4 max-w-sm text-4xl font-semibold leading-none tracking-[-0.06em] sm:text-5xl">Show up for your list.</h2>
          </div>
          <div className="max-w-xl">
            <p className="mb-7 text-[#625849]">Sign up with your email or number.</p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
              <label htmlFor="contact" className="sr-only">Email or number</label>
              <input
                id="contact"
                name="contact"
                type="text"
                inputMode="email"
                autoComplete="email"
                placeholder="Email or number"
                value={contact}
                onChange={(event) => {
                  setContact(event.target.value)
                  setSubmitted(false)
                }}
                required
                className="h-14 min-w-0 flex-1 rounded-none border border-[#25231f]/25 bg-[#eee5d5] px-4 text-base outline-none placeholder:text-[#8b7d6b] focus:border-[#a8653c] focus:ring-2 focus:ring-[#a8653c]/20"
              />
              <button type="submit" className="inline-flex h-14 items-center justify-center gap-2 bg-[#25231f] px-6 text-sm font-semibold text-[#eee5d5] transition-colors hover:bg-[#a8653c]">
                {submitted ? 'You’re on the list' : 'Sign me up'}
                {submitted ? <Check className="size-4" aria-hidden="true" /> : <ArrowUpRight className="size-4" aria-hidden="true" />}
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-6 py-6 font-mono text-[10px] uppercase tracking-[0.15em] text-[#796d5d] sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-16">
        <span>Daily Tracker</span>
        <span>Wednesday September 30 · 3:00 pm · India</span>
      </footer>
    </main>
  )
}

