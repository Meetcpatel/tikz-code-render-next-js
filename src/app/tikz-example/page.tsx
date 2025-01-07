import TikZRenderer from '@/components/TikZRenderer';

export default function TikZExample() {
    const tikzCode = `
    \begin{tikzpicture}
    % Draw the triangle directly with coordinates
    \draw (0,0) -- (4,0) -- (2,3) -- cycle;
\end{tikzpicture}

  `;

    return (
        <div className="p-8">
            <h1>TikZ Example</h1>
            <div className="my-4">
                <TikZRenderer code={tikzCode} />
            </div>
        </div>
    );
} 