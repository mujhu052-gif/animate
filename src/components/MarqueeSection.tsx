import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Volume2, VolumeX, Play, Pause, Film } from 'lucide-react';

/**
 * ============================================================================
 * METIC MEDIA - HERO SHOWREEL MP4 VIDEOS
 * ============================================================================
 * You can easily replace or update any of these MP4 video files!
 *
 * Option 1: Put your .mp4 files into the "public/videos/" folder in your project:
 *           - /videos/reel_sample_1.mp4
 *           - /videos/reel_sample_2.mp4
 *           - /videos/reel_sample_3.mp4
 *           - /videos/reel_sample_4.mp4
 *
 * Option 2: Put direct online MP4 video URLs in the lists below:
 *           - 'https://example.com/video.mp4'
 * ============================================================================
 */
export const ROW_1_VIDEOS: { src: string; title: string; category: string }[] = [
  { src: '/videos/reel_sample_1.mp4', title: 'Viral Reel Hook', category: 'Short-Form Reel' },
  { src: '/videos/reel_sample_2.mp4', title: 'Brand Story Visual', category: 'Commercial Edit' },
  { src: '/videos/reel_sample_3.mp4', title: 'Kinetic Motion Showcase', category: 'Motion Design' },
  { src: '/videos/reel_sample_4.mp4', title: 'High-Retention Short', category: 'TikTok / Reel' },
  { src: '/videos/reel_sample_1.mp4', title: 'Creative Cut', category: 'Social Media' },
  { src: '/videos/reel_sample_2.mp4', title: 'Dynamic Transition', category: 'Short-Form' },
];

export const ROW_2_VIDEOS: { src: string; title: string; category: string }[] = [
  { src: '/videos/reel_sample_3.mp4', title: 'Cinematic Atmosphere', category: 'Color Grade & Sound' },
  { src: '/videos/reel_sample_4.mp4', title: 'Product Showcase Reel', category: 'Brand Promotion' },
  { src: '/videos/reel_sample_1.mp4', title: 'Pacing & Narrative', category: 'Storytelling' },
  { src: '/videos/reel_sample_2.mp4', title: 'Sound Design & Beats', category: 'Audio Sync' },
  { src: '/videos/reel_sample_3.mp4', title: 'Fast-Cut Retention', category: 'Viral Content' },
  { src: '/videos/reel_sample_4.mp4', title: 'Agency Highlight', category: 'Portfolio' },
];

interface VideoTileProps {
  item: { src: string; title: string; category: string };
  index: number;
}

const VideoTile: React.FC<VideoTileProps> = ({ item, index }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const isMp4 = item.src.toLowerCase().includes('.mp4') || item.src.toLowerCase().includes('.webm');

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isMp4) return;

    // Strict browser autoplay policy requirements
    video.defaultMuted = true;
    video.muted = true;
    video.playsInline = true;
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');

    const tryPlay = () => {
      const promise = video.play();
      if (promise !== undefined) {
        promise
          .then(() => {
            setIsPlaying(true);
            setIsLoaded(true);
          })
          .catch(() => {
            video.muted = true;
            video.play().catch(() => {
              setIsPlaying(false);
            });
          });
      }
    };

    if (video.readyState >= 2) {
      tryPlay();
    } else {
      video.addEventListener('loadeddata', tryPlay, { once: true });
      video.addEventListener('canplay', tryPlay, { once: true });
    }

    return () => {
      video.removeEventListener('loadeddata', tryPlay);
      video.removeEventListener('canplay', tryPlay);
    };
  }, [item.src, isMp4]);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    const nextMuted = !video.muted;
    video.muted = nextMuted;
    setIsMuted(nextMuted);

    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  return (
    <div
      onClick={togglePlay}
      className="w-[260px] xs:w-[300px] sm:w-[420px] h-[170px] xs:h-[190px] sm:h-[260px] min-w-[260px] xs:min-w-[300px] sm:min-w-[420px] rounded-2xl overflow-hidden bg-[#161616] border border-white/10 relative shrink-0 shadow-2xl group cursor-pointer transition-all duration-300 hover:border-purple-500/50 hover:shadow-purple-900/20"
    >
      {isMp4 && !hasError ? (
        <video
          ref={videoRef}
          src={item.src}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onError={() => setHasError(true)}
          onLoadedData={() => setIsLoaded(true)}
          className="w-full h-full object-cover select-none group-hover:scale-105 transition-transform duration-500"
        />
      ) : (
        /* Fallback graphic if video format is unavailable */
        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#1A0B2E] via-[#0D0D14] to-[#1F0E1F] p-6 text-center">
          <Film className="w-10 h-10 text-purple-400 mb-2 opacity-80" />
          <p className="text-sm font-semibold text-white uppercase tracking-wider">{item.title}</p>
          <span className="text-xs text-purple-300/70 mt-1">{item.category}</span>
        </div>
      )}

      {/* Clean minimalist controls overlay (No text blocking the video) */}
      <div className="absolute top-3 right-3 flex items-center gap-2 z-10">
        {/* Audio Toggle Button */}
        {isMp4 && (
          <button
            type="button"
            onClick={toggleSound}
            title={isMuted ? 'Click to Unmute' : 'Click to Mute'}
            className="pointer-events-auto p-2 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md border border-white/20 text-white transition-all hover:scale-110 active:scale-95 shadow-lg"
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5 text-white/80" /> : <Volume2 className="w-3.5 h-3.5 text-emerald-400" />}
          </button>
        )}
      </div>

      {/* Play/Pause state icon badge on bottom right (no text) */}
      <div className="absolute bottom-3 right-3 p-2 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white/90 group-hover:scale-110 transition-transform shadow-lg pointer-events-none">
        {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-white" />}
      </div>
    </div>
  );
};

export const MarqueeSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  // Link movement directly to scroll progress across the section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Row 1 moves horizontally on scroll (leftwards)
  const xRow1 = useTransform(scrollYProgress, [0, 1], ['0%', '-25%']);

  // Row 2 moves horizontally on scroll (rightwards)
  const xRow2 = useTransform(scrollYProgress, [0, 1], ['-25%', '0%']);

  // Repeat items to fill wide viewports
  const row1Items = [...ROW_1_VIDEOS, ...ROW_1_VIDEOS];
  const row2Items = [...ROW_2_VIDEOS, ...ROW_2_VIDEOS];

  return (
    <section
      ref={containerRef}
      id="marquee"
      className="bg-[#0C0C0C] py-10 sm:py-14 md:py-16 overflow-hidden relative select-none"
    >
      <div className="flex flex-col gap-4 sm:gap-5">
        {/* Track 1 - moves on page scroll (no infinite time loop) */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-4 sm:gap-5 will-change-transform"
            style={{
              x: xRow1,
              width: 'max-content',
            }}
          >
            {row1Items.map((item, index) => (
              <VideoTile key={`row1-${index}`} item={item} index={index} />
            ))}
          </motion.div>
        </div>

        {/* Track 2 - moves opposite on page scroll (no infinite time loop) */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-4 sm:gap-5 will-change-transform"
            style={{
              x: xRow2,
              width: 'max-content',
            }}
          >
            {row2Items.map((item, index) => (
              <VideoTile key={`row2-${index}`} item={item} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
