import React from 'react';
import { Calendar } from 'lucide-react';

interface TimelineItemProps {
    date: string;
    title: string;
    description?: string;
    last?: boolean;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({ date, title, description, last }) => {
    return (
        <div className={`timeline-item ${last ? '' : ''}`}>
            <div className="circle-dot"></div>
            <h3 className="timeline-date flex items-center gap-2">
                <Calendar size={14} /> {date}
            </h3>
            <h4 className="timeline-title">{title}</h4>
            {description && <p className="timeline-text">{description}</p>}
        </div>
    );
};

interface TimelineProps {
    title: string;
    items: {
        date: string;
        title: string;
        description?: string;
    }[];
}

const Timeline: React.FC<TimelineProps> = ({ title, items }) => {
    return (
        <div className="w-full">
            <h3 className="text-xl font-bold text-text-primary mb-6">{title}</h3>
            <div className="timeline shadow-sm">
                {items.map((item, idx) => (
                    <TimelineItem
                        key={idx}
                        date={item.date}
                        title={item.title}
                        description={item.description}
                        last={idx === items.length - 1}
                    />
                ))}
            </div>
        </div>
    );
};

export default Timeline;
