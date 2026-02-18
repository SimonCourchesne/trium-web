import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    containerClassName?: string;
    className?: string;
    children: React.ReactNode;
}

export function Section({
    className,
    containerClassName,
    children,
    ...props
}: SectionProps) {
    return (
        <section className={cn("py-16 md:py-24", className)} {...props}>
            <Container className={containerClassName}>{children}</Container>
        </section>
    );
}
