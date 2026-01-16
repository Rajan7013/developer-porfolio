"use client";

import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

interface SkillCategory {
    category: string;
    items: string[];
}

interface SkillListProps {
    skills: SkillCategory[];
}

const SkillList: React.FC<SkillListProps> = ({ skills }) => {
    // Allow multiple or single open? Reference implies individual toggles.
    const [openIndices, setOpenIndices] = useState<number[]>([]);

    const toggleSkill = (index: number) => {
        setOpenIndices((prev) =>
            prev.includes(index)
                ? prev.filter((i) => i !== index)
                : [...prev, index]
        );
    };

    return (
        <div className="collapsible-list w-full">
            <h3 className="text-xl font-bold text-text-primary mb-6">My Skills</h3>
            <ul className="space-y-2">
                {skills.map((skill, idx) => {
                    const isOpen = openIndices.includes(idx);
                    return (
                        <li key={idx}>
                            <div
                                className={`list-item ${isOpen ? 'active' : ''}`}
                                onClick={() => toggleSkill(idx)}
                            >
                                <span className="arrow transform transition-transform duration-300">
                                    <ChevronRight size={16} className={isOpen ? "rotate-90" : ""} />
                                </span>
                                {skill.category}
                            </div>
                            <ul className={`sublist ${isOpen ? 'open' : ''}`}>
                                {skill.items.map((item, i) => (
                                    <li key={i}>• {item}</li>
                                ))}
                            </ul>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default SkillList;
