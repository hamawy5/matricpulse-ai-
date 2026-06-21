import { Flame, CalendarClock, BookOpen, TrendingUp, Sparkles } from 'lucide-react'

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white pb-12">
      <div className="max-w-md mx-auto px-5 pt-8">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-2xl flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <h1 className="text-3xl font-bold tracking-tight">MatricPulse</h1>
            </div>
            <p className="text-zinc-400 text-sm mt-1">AI Study Companion • Ethiopia</p>
          </div>
        </div>

        {/* Streak Card */}
        <div className="bg-zinc-900 rounded-3xl p-6 mb-6 border border-zinc-800">
          <div className="flex justify-between items-start">
            <div>
              <p className="uppercase text-xs tracking-widest text-zinc-500">Current Streak</p>
              <div className="flex items-baseline gap-2 mt-3">
                <span className="text-6xl font-black text-orange-400">7</span>
                <span className="text-2xl text-zinc-400">days</span>
              </div>
            </div>
            <Flame className="w-14 h-14 text-orange-500" />
          </div>
          <p className="text-zinc-400 text-sm mt-4">30 minutes studied today • Keep it going!</p>
        </div>

        {/* Countdown */}
        <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-3xl p-6 mb-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center">
              <CalendarClock className="w-7 h-7 text-blue-400" />
            </div>
            <div>
              <p className="text-sm text-zinc-400">National Exam Countdown</p>
              <p className="text-4xl font-bold mt-1">87 <span className="text-xl text-zinc-400">days left</span></p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-4">
          <div className="bg-zinc-900 rounded-3xl p-6 flex items-center gap-4">
            <BookOpen className="w-10 h-10 text-violet-400" />
            <div>
              <p className="font-semibold text-lg">Resume Grade 12</p>
              <p className="text-zinc-400">Mathematics • Unit 3</p>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-6 flex items-center gap-4">
            <TrendingUp className="w-10 h-10 text-emerald-400" />
            <div>
              <p className="font-semibold text-lg">Weak Topics</p>
              <p className="text-zinc-400">3 topics need review</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-zinc-500 text-sm">
          Made with ❤️ for Ethiopian Students
        </div>
      </div>
    </div>
  )
}
