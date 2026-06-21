import React from 'react'
import { Flame, CalendarClock, BookOpen, TrendingUp, Sparkles } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-md mx-auto p-5 pt-10">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-11 h-11 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-2xl flex items-center justify-center">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">MatricPulse</h1>
            <p className="text-zinc-400 text-sm">AI Study Companion</p>
          </div>
        </div>

        <div className="bg-zinc-900 rounded-3xl p-6 mb-6">
          <p className="text-xs uppercase tracking-widest text-zinc-400">Study Streak</p>
          <div className="flex items-center gap-4 mt-4">
            <span className="text-6xl font-black text-orange-400">7</span>
            <div>
              <p className="text-2xl">Days</p>
              <p className="text-sm text-zinc-400">Keep the fire burning</p>
            </div>
            <Flame className="w-12 h-12 text-orange-500 ml-auto" />
          </div>
        </div>

        <div className="bg-zinc-900 rounded-3xl p-6 mb-8">
          <div className="flex items-center gap-4">
            <CalendarClock className="w-8 h-8 text-sky-400" />
            <div>
              <p className="text-sm text-zinc-400">National Exam</p>
              <p className="text-4xl font-bold">135 days left</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-zinc-900 rounded-3xl p-6">
            <BookOpen className="w-8 h-8 text-violet-400 mb-3" />
            <p className="font-medium">Resume Grade 12</p>
            <p className="text-xs text-zinc-400">Functions • Unit 3</p>
          </div>
          <div className="bg-zinc-900 rounded-3xl p-6">
            <TrendingUp className="w-8 h-8 text-emerald-400 mb-3" />
            <p className="font-medium">Weak Topics</p>
            <p className="text-xs text-zinc-400">3 to review</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
