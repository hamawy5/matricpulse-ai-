import React from 'react'
import { Flame, CalendarClock, BookOpen, TrendingUp, Sparkles, Home, Book, ClipboardList, Star } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pb-24">
      <div className="max-w-md mx-auto">
        
        {/* Header */}
        <div className="px-6 pt-10 pb-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs tracking-[2px] text-zinc-500">WELCOME BACK</p>
              <h1 className="text-4xl font-bold mt-1">Hey, <span className="text-violet-400">Scholar</span></h1>
              <p className="text-violet-400 text-sm mt-1">NATURAL SCIENCE STREAM</p>
            </div>
            <div className="flex gap-3">
              <div className="w-10 h-10 bg-amber-400/10 rounded-2xl flex items-center justify-center text-2xl">🏆</div>
              <div className="w-10 h-10 bg-sky-400/10 rounded-2xl flex items-center justify-center text-2xl">✨</div>
            </div>
          </div>
        </div>

        {/* Simulate Login */}
        <div className="px-6 mb-8">
          <button className="w-full border border-dashed border-zinc-700 hover:border-violet-500 transition-colors rounded-2xl py-3 text-sm text-zinc-400">
            → [Simulate Fresh Login]
          </button>
        </div>

        {/* Study Streak */}
        <div className="mx-6 bg-zinc-900 rounded-3xl p-6 mb-6 border border-zinc-800">
          <p className="uppercase text-xs tracking-widest text-zinc-400">STUDY STREAK</p>
          <div className="flex items-end gap-6 mt-4">
            <div>
              <span className="text-7xl font-black text-orange-400">7</span>
              <span className="text-3xl text-zinc-400 ml-3">Days</span>
            </div>
            <Flame className="w-14 h-14 text-orange-500" />
          </div>
          <p className="text-sm text-zinc-400 mt-6">Keep the fire burning — 30 min today.</p>
        </div>

        {/* Countdown */}
        <div className="mx-6 bg-zinc-900 rounded-3xl p-6 mb-8 border border-zinc-800">
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
        <div className="px-6">
          <p className="text-zinc-400 text-sm mb-4">Continue</p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800">
              <BookOpen className="w-9 h-9 text-violet-400 mb-4" />
              <p className="font-semibold">Resume Grade 12</p>
              <p className="text-sm text-zinc-400 mt-1">Functions · Unit 3</p>
            </div>
            <div className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800">
              <TrendingUp className="w-9 h-9 text-emerald-400 mb-4" />
              <p className="font-semibold">Weak Topics</p>
              <p className="text-sm text-zinc-400 mt-1">3 to review</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-zinc-900 border-t border-zinc-800 max-w-md mx-auto">
        <div className="flex justify-around py-4">
          <div className="flex flex-col items-center text-violet-400">
            <Home className="w-6 h-6" />
            <span className="text-[10px] mt-1">Home</span>
          </div>
          <div className="flex flex-col items-center text-zinc-400">
            <Book className="w-6 h-6" />
            <span className="text-[10px] mt-1">Study</span>
          </div>
          <div className="flex flex-col items-center text-zinc-400">
            <ClipboardList className="w-6 h-6" />
            <span className="text-[10px] mt-1">Exam</span>
          </div>
          <div className="flex flex-col items-center text-zinc-400">
            <Star className="w-6 h-6" />
            <span className="text-[10px] mt-1">AI</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
