import { Blog } from "@/config";


const Lists = ({ title, items }) => (
    <section>
        <h3>{title}</h3>
        <ul>
            {items.map(({ name, href }) => (
                <li key={name}>
                    <a
                        aria-label={name}
                        variant="link"
                        className="no-underline text-md text-zinc-500 hover:text-zinc-800 text-primary underline-offset-4 hover:underline"
                        href={href}
                    >
                        {name}
                    </a>
                </li>
            ))}
        </ul>
    </section>
);

export default function Page() {
    return (
        <>
            <Lists title="Blog" items={Blog} />
        </>
    );
}
