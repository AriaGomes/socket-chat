import { DetailedHTMLProps, ImgHTMLAttributes } from 'react';

declare module '*.svg' {
    const content: DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
    export default content;
  }