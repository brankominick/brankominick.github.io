import { ReactNode } from "react";

interface ContainerProps {
    id: string;
    title?: string;
    body?: string;
    color:  string;
    children?: ReactNode
}

export default function Container({ id, title, body, color, children}: ContainerProps) {
    return (
        <section id={id} className = "flex flex-col items-center justify-center text-center py-2">
            <div className={`w-[95%] block ${color} p-6 rounded-lg shadow-md`}>
            {title && <h2 className="text-4xl font-bold mb-2">{title}</h2>}
            {body && <p className="text-gray-700">{body}</p>}
            {children && <div className="mt-2">{children}</div>}
            </div>
        </section>
    );
}


