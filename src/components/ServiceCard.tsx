import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    features: string[];
    delay?: number;
}

export function ServiceCard({ title, description, icon: Icon, features, delay = 0 }: ServiceCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5 }}
            className="flex flex-col h-full p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-colors shadow-sm hover:shadow-lg hover:shadow-primary/5"
        >
            <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">{title}</h3>
            </div>
            <p className="text-muted-foreground mb-6 min-h-[3.75rem]">{description}</p>
            <ul className="space-y-2">
                {features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {feature}
                    </li>
                ))}
            </ul>
        </motion.div>
    );
}
