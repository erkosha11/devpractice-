import React, { useRef, useEffect } from "react";

interface VideoPlayerProps {
  src: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const canPlayType = video.canPlayType("video/mp4");
    if (!canPlayType) {
      console.error("Формат видео не поддерживается.");
      return;
    }

    video
      .play()
      .then(() => {})
      .catch((err) => {
        console.error("Ошибка воспроизведения видео:", err);
      });

    video.addEventListener("error", (e) => {
      console.error("Ошибка в элементе видео:", e);
    });
  }, [src]);

  return (
    <video ref={videoRef} src={src} muted controls playsInline>
      Ваш браузер не поддерживает элемент видео.
    </video>
  );
};

export default VideoPlayer;
