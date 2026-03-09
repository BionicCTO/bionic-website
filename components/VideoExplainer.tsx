'use client'

import { useState, useRef } from 'react'

interface VideoExplainerProps {
  videoUrl: string
  title: string
}

export default function VideoExplainer({ videoUrl, title }: VideoExplainerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className="my-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <div className="w-8 h-8 bg-text-primary rounded-full flex items-center justify-center flex-shrink-0">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-bg">
            <path d="M8 5v14l11-7z" fill="currentColor" />
          </svg>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.12em] text-text-muted">
            Watch the explainer <span className="inline-block text-[0.6rem] font-semibold uppercase tracking-[0.1em] text-text-muted border border-[#d1cdca] rounded px-1.5 py-0.5 ml-1.5 align-middle">AI-generated</span>
          </div>
          <div className="font-editorial text-sm font-semibold leading-tight text-text-primary truncate">
            {title}
          </div>
        </div>
      </div>

      {/* Video player */}
      <div className="relative rounded-lg overflow-hidden border border-[#d1cdca]">
        <video
          ref={videoRef}
          src={videoUrl}
          className="w-full aspect-video bg-black"
          controls
          controlsList="nodownload"
          playsInline
          preload="metadata"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={() => setIsPlaying(false)}
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}
