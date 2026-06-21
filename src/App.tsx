import React from 'react'
import { Flame, CalendarClock, BookOpen, TrendingUp, Sparkles, Home, Book, ClipboardList, Star } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="px-5 pt-8 pb-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs tracking-[2px] text-zinc-500">WELCOME BACK</p>
              <h1 className="text-4xl font-bold mt-1">Hey, <span className="text-violet-400">Scholar</span></h1>
              <p className="text-violet-400 mt-1">NATURAL SCIENCE STREAM</p>
            </div>
            <div className="flex gap-3">
              <div className="w-9 h-9 bg-yellow-400/10 rounded-2xl flex items-center justify-center">🏆</div>
              <div className="w-9 h-9 bg-sky-400/10 rounded-2xl flex items-center justify-center">✨</div>
            </div>
          </div>
        </div>

        {/* Simulate Login */}
        <div className="px-5 mb-6">
          <button className="w-full border border-dashed border-zinc-700 rounded-2xl py-3 text-sm text-zinc-400 hover:border-zinc-500 transition">
            → [Simulate Fresh Login]
          </button>
        </div>

        {/* Study Streak */}
        <div className="mx-5 bg-zinc-900 rounded-3xl p-6 mb-6">
          <p className="uppercase text-xs tracking-widest text-zinc-400">STUDY STREAK</p>
          <div className="flex items-end gap-4 mt-4">
            <span className="text-7xl font-black text-orange-400">7</span>
            <span className="text-3xl text-zinc-400 mb-2">Days</span>
            <Flame className="ml-auto w-14 h-14 text-orange-500" />
          </div>
          <p className="text-sm text-zinc-400 mt-4">Keep the fire burning — 30 min today.</p>
        </div>

        {/* Countdown */}
        <div className="mx-5 bg-zinc-900 rounded-3xl p-6 mb-8">
          <div className="flex items-center gap-5">
            <div className="w-12 h-12 bg-teal-500/10 rounded-2xl flex items-center justify-center">
              <CalendarClock className="w-7 h-7 text-teal-400" />
            </div>
            <div>
              <p className="text-sm text-zinc-400">NATIONAL EXAM COUNTDOWN</p>
              <p className="text-5xl font-bold mt-1">135 <span className="text-2xl text-zinc-400">days left</span></p>
            </div>
          </div>
        </div>

        {/* Continue */}
        <div className="px-5">
          <p className="text-zinc-400 text-sm mb-4">Continue</p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-zinc-900 rounded-3xl p-6">
              <BookOpen className="w-8 h-8 text-violet-400 mb-4" />
              <p className="font-semibold">Resume Grade 12</p>
              <p className="text-sm text-zinc-400">Functions · Unit 3</p>
            </div>
            <div className="bg-zinc-900 rounded-3xl p-6">
              <TrendingUp className="w-8 h-8 text-emerald-400 mb-4" />
              <p className="font-semibold">Weak Topics</p>
              <p className="text-sm text-zinc-400">3 to review</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-zinc-900 border-t border-zinc-800 max-w-md mx-auto">
        <div className="flex justify-around py-3">
          <div className="text-center text-violet-400">
            <Home className="mx-auto w-6 h-6" />
            <p className="text-[10px] mt-1">Home</p>
          </div>
          <div className="text-center text-zinc-400">
            <Book className="mx-auto w-6 h-6" />
            <p className="text-[10px] mt-1">Study</p>
          </div>
          <div className="text-center text-zinc-400">
            <ClipboardList className="mx-auto w-6 h-6" />
            <p className="text-[10px] mt-1">Exam</p>
          </div>
          <div className="text-center text-zinc-400">
            <Star className="mx-auto w-6 h-6" />
            <p className="text-[10px] mt-1">AI</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
