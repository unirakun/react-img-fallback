import * as React from 'react';

interface ImgFallbackComponentProps {
  style?: {};
  className?: string;
  src: string;
  alt?: string;
  fallback: JSX.Element | string;
  onClick?: () => void;
}

export default class ImgFallback extends React.Component<ImgFallbackComponentProps> {}