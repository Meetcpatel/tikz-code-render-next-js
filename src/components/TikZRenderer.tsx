/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useEffect } from 'react';

interface TikZRendererProps {
    code: string;
    className?: string;
}

export default function TikZRenderer({ code, className = '' }: TikZRendererProps) {
    useEffect(() => {
        if (typeof window !== 'undefined' && (window as any).tikzjax) {
            (window as any).tikzjax.process();
        }
    }, [code]);

    return (
        <script
            type="text/tikz"
            className={className}
            dangerouslySetInnerHTML={{ __html: code }}
        />
    );
} 