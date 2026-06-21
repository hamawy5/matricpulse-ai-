import { Flame, CalendarClock, BookOpen, TrendingUp, Sparkles } from 'lucide-react'

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white pb-20">
      <div className="max-w-md mx-auto px-5 pt-8">
        
        <div className="flex justify-between items-start mb-8">
          <div>
            <p className="text-sm text-zinc-400 tracking-widest">WELCOME BACK</p>
            <h1 className="text-4xl font-bold mt-1">Hey, <span className="text-violet-400">Scholar</span></h1>
            <p className="text-violet-400 text-sm mt-1 font-medium">NATURAL SCIENCE STREAM</p>
          </div>
          <div className="flex gap-2">
            <div className="w-10 h-10 bg-yellow-500/10 rounded-full flex items-center justify-center text-xl">🏆</div>
            <div className="w-10 h-10 bg-sky-500/10 rounded-full flex items-center justify-center text-xl">✨</div>
          </div>
        </div>

        <button className="w-full border border-dashed border-zinc-700 rounded-2xl py-3 text-sm text-zinc-400 hover:text-white transition mb-8">
          → [Simulate Fresh Login]
        </button>

        <div className="bg-zinc-900 rounded-3xl p-6 mb-6">
          <p className="uppercase text-xs tracking-widest text-zinc-400 mb-4">STUDY STREAK</p>
          <div className="flex items-end justify-between">
            <div>
              <span className="text-6xl font-black">7</span>
              <span className="text-2xl text-zinc-400 ml-2">Days</span>
            </div>
            <Flame className="w-12 h-12 text-orange-500" />
          </div>
          <p className="text-sm text-zinc-400 mt-4">Keep the fire burning — 30 min today.</p>
        </div>

        <div className="bg-zinc-900 rounded-3xl p-6 mb-8">
          <div className="flex items-center gap-4">
            <CalendarClock className="w-9 h-9 text-teal-400" />
            <div>
              <p className="text-sm text-zinc-400">NATIONAL EXAM COUNTDOWN</p>
              <p className="text-5xl font-bold mt-1">135 <span className="text-2xl text-zinc-400">days left</span></p>
            </div>
          </div>
        </div>

        <p className="text-zinc-400 text-sm mb-4">Continue</p>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-zinc-900 rounded-3xl p-6">
            <BookOpen className="w-8 h-8 text-violet-400 mb-4" />
            <p className="font-semibold">Resume Grade 12</p>
            <p className="text-sm text-zinc-400 mt-1">Functions · Unit 3</p>
          </div>
          <div className="bg-zinc-900 rounded-3xl p-6">
            <TrendingUp className="w-8 h-8 text-emerald-400 mb-4" />
            <p className="font-semibold">Weak Topics</p>
            <p className="text-sm text-zinc-400 mt-1">3 to review</p>
          </div>
        </div>
      </div>
    </div>
  )
}          <div className="flex items-center gap-4">
            <CalendarClock className="w-9 h-9 text-teal-400" />
            <div>
              <p className="text-sm text-zinc-400">NATIONAL EXAM COUNTDOWN</p>
              <p className="text-5xl font-bold mt-1">135 <span className="text-2xl text-zinc-400">days left</span></p>
            </div>
          </div>
        </div>

        <p className="text-zinc-400 text-sm mb-4">Continue</p>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-zinc-900 rounded-3xl p-6">
            <BookOpen className="w-8 h-8 text-violet-400 mb-4" />
            <p className="font-semibold">Resume Grade 12</p>
            <p className="text-sm text-zinc-400 mt-1">Functions · Unit 3</p>
          </div>
          <div className="bg-zinc-900 rounded-3xl p-6">
            <TrendingUp className="w-8 h-8 text-emerald-400 mb-4" />
            <p className="font-semibold">Weak Topics</p>
            <p className="text-sm text-zinc-400 mt-1">3 to review</p>
          </div>
        </div>
      </div>
    </div>
  )
}        {/* Countdown */}
        <div className="bg-zinc-900 rounded-3xl p-6 mb-8">
          <div className="flex items-center gap-4">
            <CalendarClock className="w-9 h-9 text-teal-400" />
            <div>
              <p className="text-sm text-zinc-400">NATIONAL EXAM COUNTDOWN</p>
              <p className="text-5xl font-bold mt-1">135 <span className="text-2xl text-zinc-400">days left</span></p>
            </div>
          </div>
        </div>

        {/* Continue */}
        <p className="text-zinc-400 text-sm mb-4">Continue</p>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-zinc-900 rounded-3xl p-6">
            <BookOpen className="w-8 h-8 text-violet-400 mb-4" />
            <p className="font-semibold">Resume Grade 12</p>
            <p className="text-sm text-zinc-400 mt-1">Functions · Unit 3</p>
          </div>
          <div className="bg-zinc-900 rounded-3xl p-6">
            <TrendingUp className="w-8 h-8 text-emerald-400 mb-4" />
            <p className="font-semibold">Weak Topics</p>
            <p className="text-sm text-zinc-400 mt-1">3 to review</p>
          </div>
        </div>
      </div>
    </div>
  )
}        {/* Continue */}
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

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-zinc-900 border-t border-zinc-800">
        <div className="max-w-md mx-auto flex justify-around py-3">
          <div className="flex flex-col items-center text-violet-400">
            <Home className="w-6 h-6" />
            <span className="text-xs mt-1">Home</span>
          </div>
          <div className="flex flex-col items-center text-zinc-400">
            <Book className="w-6 h-6" />
            <span className="text-xs mt-1">Study</span>
          </div>
          <div className="flex flex-col items-center text-zinc-400">
            <ClipboardList className="w-6 h-6" />
            <span className="text-xs mt-1">Exam</span>
          </div>
          <div className="flex flex-col items-center text-zinc-400">
            <Star className="w-6 h-6" />
            <span className="text-xs mt-1">AI</span>
          </div>
        </div>
      </div>
    </div>
  )
}      </div>
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
