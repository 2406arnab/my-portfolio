import React, { useEffect, useRef, useState } from 'react';
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute, FaVolumeDown } from "react-icons/fa";

// Drop your audio file in the `public` folder (e.g. public/bg-music.mp3)
// and point this at it with a root-relative path — same pattern you're
// already using for the resume PDF.
const musicSrc = "/bg-music.mp3";

const VOLUME_KEY = "site-music-volume";

export default function MusicPlayer() {
    const audioRef = useRef(null);
    const [playing, setPlaying] = useState(false);
    const [showSlider, setShowSlider] = useState(false);
    const [volume, setVolume] = useState(() => {
        const saved = typeof window !== 'undefined' ? localStorage.getItem(VOLUME_KEY) : null;
        return saved !== null ? parseFloat(saved) : 0.4;
    });

    // Keep the <audio> element's volume in sync, and remember the user's choice
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume;
        }
        localStorage.setItem(VOLUME_KEY, String(volume));
    }, [volume]);

    const togglePlay = () => {
        const audio = audioRef.current;
        if (!audio) return;

        if (playing) {
            audio.pause();
            setPlaying(false);
        } else {
            audio.play()
                .then(() => setPlaying(true))
                .catch((err) => console.error("Couldn't play audio:", err));
        }
    };

    const VolumeIcon = volume === 0 ? FaVolumeMute : volume < 0.5 ? FaVolumeDown : FaVolumeUp;

    return (
        <>
            <audio ref={audioRef} src={musicSrc} loop preload="auto" />

            <div
                style={{
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                    zIndex: 9999,
                    display: 'flex',
                    alignItems: 'center',
                    background: 'rgba(10,10,10,0.85)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    borderRadius: '999px',
                    padding: '6px',
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.45)',
                }}
            >
                {/* Play / Pause — the actual trigger */}
                <button
                    onClick={togglePlay}
                    aria-label={playing ? "Pause music" : "Play music"}
                    style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        background: playing
                            ? 'linear-gradient(135deg, #1cd8d2 0%, #00bf8f 100%)'
                            : 'rgba(255,255,255,0.06)',
                        border: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: playing ? '#000' : '#1cd8d2',
                        cursor: 'pointer',
                        flexShrink: 0,
                        position: 'relative',
                    }}
                >
                    {playing && (
                        <span
                            style={{
                                position: 'absolute',
                                inset: '-4px',
                                borderRadius: '50%',
                                border: '1px solid rgba(28,216,210,0.5)',
                                animation: 'musicPulse 2s ease-out infinite',
                            }}
                        />
                    )}
                    {playing ? <FaPause size={14} /> : <FaPlay size={13} style={{ marginLeft: '2px' }} />}
                </button>

                {/* Volume icon — tap to reveal the slider */}
                <button
                    onClick={() => setShowSlider((v) => !v)}
                    aria-label="Volume"
                    style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        background: 'transparent',
                        border: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'rgba(255,255,255,0.6)',
                        cursor: 'pointer',
                        flexShrink: 0,
                    }}
                >
                    <VolumeIcon size={15} />
                </button>

                {/* Volume slider — collapses to 0 width when closed */}
                <div
                    style={{
                        width: showSlider ? '90px' : '0px',
                        opacity: showSlider ? 1 : 0,
                        overflow: 'hidden',
                        transition: 'width 0.25s ease, opacity 0.25s ease',
                        display: 'flex',
                        alignItems: 'center',
                        paddingRight: showSlider ? '10px' : '0px',
                    }}
                >
                    <input
                        type="range"
                        min={0}
                        max={1}
                        step={0.01}
                        value={volume}
                        onChange={(e) => setVolume(parseFloat(e.target.value))}
                        style={{ width: '80px', accentColor: '#1cd8d2', cursor: 'pointer' }}
                    />
                </div>
            </div>

            <style>{`
                @keyframes musicPulse {
                    0% { transform: scale(1); opacity: 0.6; }
                    100% { transform: scale(1.5); opacity: 0; }
                }
                input[type="range"] {
                    -webkit-appearance: none;
                    height: 3px;
                    background: rgba(255,255,255,0.15);
                    border-radius: 999px;
                }
                input[type="range"]::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    width: 11px;
                    height: 11px;
                    border-radius: 50%;
                    background: #1cd8d2;
                    cursor: pointer;
                    box-shadow: 0 0 6px rgba(28,216,210,0.6);
                }
                input[type="range"]::-moz-range-thumb {
                    width: 11px;
                    height: 11px;
                    border: none;
                    border-radius: 50%;
                    background: #1cd8d2;
                    cursor: pointer;
                }
            `}</style>
        </>
    );
}