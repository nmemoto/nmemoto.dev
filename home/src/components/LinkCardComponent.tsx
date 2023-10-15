type Props = {
    name: string;
    href: string;
};

export default function LinkCardComponent({name, href}: Props) {
    return (
        <a href={href} target="_blank">{name}</a>
    )
}