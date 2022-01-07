import './mylabel.css'

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

export const MyLabel = ({
    label = 'No Label',
    size = 'normal',
    allCaps = false,
    color = 'primary',
    fontColor
}: Props) => {
    return (
        <span style={{ color: fontColor }}
         className={`label ${size} text-${color}`}>
            { allCaps ? label.toUpperCase() : label }
        </span>
    )
}
