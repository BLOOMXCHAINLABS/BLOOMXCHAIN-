'use client'

import { useState, useEffect } from 'react'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    // Set target time to 36 hours from now
    const targetTime = new Date().getTime() + (36 * 60 * 60 * 1000)

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetTime - now

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        clearInterval(timer)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-gradient-to-br from-bloom-yellow via-bloom-orange to-bloom-blue rounded-lg p-4 md:p-6 min-w-[80px] md:min-w-[100px] bloom-glow">
        <div className="text-white text-2xl md:text-4xl font-bold font-mono">
          {value.toString().padStart(2, '0')}
        </div>
      </div>
      <div className="text-gray-300 text-sm md:text-base mt-2 font-medium">
        {label}
      </div>
    </div>
  )

  return (
    <div className="flex flex-col items-center space-y-6">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-200 text-center">
        Presale Launch Countdown
      </h2>
      <div className="flex space-x-4 md:space-x-6">
        <TimeUnit value={timeLeft.days} label="Days" />
        <div className="flex items-center">
          <div className="text-bloom-orange text-2xl md:text-3xl font-bold animate-pulse">:</div>
        </div>
        <TimeUnit value={timeLeft.hours} label="Hours" />
        <div className="flex items-center">
          <div className="text-bloom-cyan text-2xl md:text-3xl font-bold animate-pulse">:</div>
        </div>
        <TimeUnit value={timeLeft.minutes} label="Minutes" />
        <div className="flex items-center">
          <div className="text-bloom-blue text-2xl md:text-3xl font-bold animate-pulse">:</div>
        </div>
        <TimeUnit value={timeLeft.seconds} label="Seconds" />
      </div>
    </div>
  )
} 