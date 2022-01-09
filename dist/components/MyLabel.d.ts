/// <reference types="react" />
import './mylabel.css';
export interface Props {
    /**
     * This is a message for the label
     */
    label: string;
    /**
     * Default size for label
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Label capitalizate
     */
    allCaps?: boolean;
    /**
     * Color for label
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * Color personalized
     */
    fontColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, fontColor }: Props) => JSX.Element;
