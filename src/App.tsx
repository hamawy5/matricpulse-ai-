import { Flame, CalendarClock, BookOpen, TrendingUp, Sparkles, LogIn } from 'lucide-react'

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white pb-12">
      <div className="max-w-md mx-auto px-5 pt-8">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-violet-600 to-fuchsia-500 rounded-2xl flex items-center justify-center shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-3xl font-black tracking-tighter">MatricPulse</h1>
              <p className="text-xs text-zinc-500 -mt-1">AI • Ethiopia</p>
            </div>
          </div>
          <button className="flex items-center gap-2 bg-zinc-900 px-4 py-2 rounded-full text-sm">
            <LogIn className="w-4 h-4" /> Login
          </button>
        </div>

        {/* Streak */}
        <div className="bg-zinc-900/80 border border-zinc-700 rounded-3xl p-6 mb-6">
          <p className="uppercase text-xs tracking-widest text-zinc-400">Study Streak</p>
          <div className="flex items-end gap-3 mt-4">
            <span className="text-7xl font-black text-orange-400">7</span>
            <span className="text-2xl text-zinc-400 mb-2">days</span>
            <Flame className="w-12 h-12 text-orange-500 mb-1" />
          </div>
          <p className="text-sm text-zinc-400 mt-2">30 min studied today • Keep the fire burning</p>
        </div>

        {/* Countdown */}
        <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-700 rounded-3xl p-6 mb-8">
          <div className="flex items-center gap-4">
            <CalendarClock className="w-9 h-9 text-sky-400" />
            <div>
              <p className="text-sm text-zinc-400">National Exam</p>
              <p className="text-4xl font-bold">87 <span className="text-xl font-normal text-zinc-400">days left</span></p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-zinc-900 border border-zinc-700 rounded-3xl p-6">
            <BookOpen className="w-8 h-8 text-violet-400 mb-4" />
            <p className="font-semibold">Resume Grade 12</p>
            <p className="text-sm text-zinc-400 mt-1">Functions • Unit 3</p>
          </div>

          <div className="bg-zinc-900 border border-zinc-700 rounded-3xl p-6">
            <TrendingUp className="w-8 h-8 text-emerald-400 mb-4" />
            <p className="font-semibold">Weak Topics</p>
            <p className="text-sm text-zinc-400 mt-1">3 to review</p>
          </div>
        </div>

        <div className="mt-12 text-center text-zinc-500 text-xs">
          Built for Ethiopian Matric Students 🇪🇹
        </div>
      </div>
    </div>
  )
}            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-zinc-500 text-sm">
          Made with ❤️ for Ethiopian Students
        </div>
      </div>
    </div>
  )
}
