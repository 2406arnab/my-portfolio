import React, { useEffect, useRef, useState } from 'react';
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute, FaVolumeDown } from "react-icons/fa";

const musicSrc = "/bg-music.mp3";
const VOLUME_KEY = "site-music-volume";

export default function MusicPlayer() {
    const audioRef = useRef(null);
    const [playing, setPlaying] = useState(false);
    const [showSlider, setShowSlider] = useState(false);

    const [volume, setVolume] = useState(() => {
        const saved = typeof window !== 'undefined'
            ? localStorage.getItem(VOLUME_KEY)
            : null;
        return saved !== null ? parseFloat(saved) : 0.4;
    });

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

    const VolumeIcon =
        volume === 0 ? FaVolumeMute : volume < 0.5 ? FaVolumeDown : FaVolumeUp;

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
                    boxShadow: playing
                        ? '0 0 25px rgba(28,216,210,0.6), 0 0 60px rgba(28,216,210,0.25)'
                        : '0 8px 24px rgba(0,0,0,0.45)',
                    transition: 'box-shadow 0.3s ease',
                }}
            >
                {/* PLAY BUTTON */}
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

                {/* CENTER WAVE */}
                {playing && (
                    <div className="music-wave">
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                    </div>
                )}

                {/* VOLUME BUTTON */}
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

                {/* SLIDER */}
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

            {/* STYLES */}
            <style>{`
                @keyframes musicPulse {
                    0% { transform: scale(1); opacity: 0.6; }
                    100% { transform: scale(1.5); opacity: 0; }
                }

                .music-wave {
                    display: flex;
                    align-items: flex-end;
                    gap: 3px;
                    height: 18px;
                    margin: 0 10px;
                }

                .music-wave span {
                    width: 3px;
                    background: #1cd8d2;
                    border-radius: 3px;
                    animation: waveAnim 1s infinite ease-in-out;
                }

                .music-wave span:nth-child(1) { height: 6px; animation-delay: 0s; }
                .music-wave span:nth-child(2) { height: 12px; animation-delay: 0.1s; }
                .music-wave span:nth-child(3) { height: 8px; animation-delay: 0.2s; }
                .music-wave span:nth-child(4) { height: 14px; animation-delay: 0.3s; }
                .music-wave span:nth-child(5) { height: 9px; animation-delay: 0.4s; }

                @keyframes waveAnim {
                    0%, 100% {
                        transform: scaleY(0.4);
                        opacity: 0.5;
                    }
                    50% {
                        transform: scaleY(1);
                        opacity: 1;
                    }
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