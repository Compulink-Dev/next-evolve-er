'use client'

import React, { useState, useEffect } from 'react'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetDate = new Date('2026-06-11T00:00:00').getTime()

    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="w-full max-w-4xl mx-auto py-12">
      <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white">
        Countdown Until the Event
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        <TimeBox value={timeLeft.days} label="Days" />
        <TimeBox value={timeLeft.hours} label="Hours" />
        <TimeBox value={timeLeft.minutes} label="Minutes" />
        <TimeBox value={timeLeft.seconds} label="Seconds" />
      </div>
    </div>
  )
}

function TimeBox({ value, label }: { value: number; label: string }) {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
      <div className="text-4xl md:text-6xl font-bold text-purple-400 mb-2">
        {value.toString().padStart(2, '0')}
      </div>
      <div className="text-sm md:text-base text-white uppercase tracking-wider">{label}</div>
    </div>
  )
}
