import { Flame, CalendarClock, BookOpen, TrendingUp } from 'lucide-react'

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white p-6">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">MatricPulse</h1>
            <p className="text-zinc-400">AI Study Companion</p>
          </div>
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
            🔥
          </div>
        </div>

        {/* Streak */}
        <div className="bg-zinc-900 rounded-3xl p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-zinc-400">Study Streak</p>
              <p className="text-5xl font-bold mt-2">7 <span className="text-xl font-normal text-zinc-400">days</span></p>
            </div>
            <Flame className="w-12 h-12 text-orange-500" />
          </div>
        </div>

        {/* Countdown */}
        <div className="bg-zinc-900 rounded-3xl p-6 mb-6">
          <div className="flex items-center gap-3">
            <CalendarClock className="w-8 h-8 text-blue-400" />
            <div>
              <p className="text-sm text-zinc-400">National Exam</p>
              <p className="text-4xl font-bold">87 <span className="text-xl">days left</span></p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-zinc-900 rounded-3xl p-6">
            <BookOpen className="w-8 h-8 text-purple-400 mb-4" />
            <p className="font-semibold">Resume Grade 12</p>
            <p className="text-sm text-zinc-400">Functions • Unit 3</p>
          </div>
          <div className="bg-zinc-900 rounded-3xl p-6">
            <TrendingUp className="w-8 h-8 text-green-400 mb-4" />
            <p className="font-semibold">Weak Topics</p>
            <p className="text-sm text-zinc-400">3 to review</p>
          </div>
        </div>
      </div>
    </div>
  )
}
