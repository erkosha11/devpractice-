export interface VideoDetail {
  title: string;
  duration: string;
}
export interface Module {
  id: string;
  name: string;
  videos: VideoDetail[];
  list: string[];
  description: string;
}
