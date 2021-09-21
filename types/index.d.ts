import { Component, FC } from 'react';

export default class extends Component<{
	className?: string;
	alt?: string;
	small: string;
	smallSrcSet?: string;
	medium?: string;
	large?: string;
	hideDownload?: boolean;
	hideZoom?: boolean;
	showRotate?: boolean;
	imageBackgroundColor?: string;
}> {}

export const Lightbox: FC<{
	className?: string;
	alt?: string;
	small: string;
	smallSrcSet?: string;
	medium?: string;
	large?: string;
	hideDownload?: boolean;
	hideZoom?: boolean;
	showRotate?: boolean;
	imageBackgroundColor?: string;
	onClose?: () => void;
}>;
