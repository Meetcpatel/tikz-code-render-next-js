# TikZ Code Renderer for Next.js

A Next.js component for rendering TikZ/LaTeX diagrams directly in the browser using TikZJax.

## Features

- Server-side rendering compatible
- Easy-to-use React component
- Supports all TikZ commands and features
- Dark mode support
- Responsive design

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/tikz-code-render-next-js.git
```

2. Install dependencies:
```bash
yarn install
```

3. Run the development server:
```bash
yarn dev
```

## Usage

1. Import the TikZRenderer component:
```typescript
import TikZRenderer from '@/components/TikZRenderer';
```

2. Use it in your component:
```typescript
export default function YourComponent() {
  const tikzCode = `
    \\begin{tikzpicture}
      \\draw (0,0) -- (4,0) -- (2,3) -- cycle;
    \\end{tikzpicture}
  `;

  return (
    <TikZRenderer code={tikzCode} />
  );
}
```

## Component Props

| Prop | Type | Description |
|------|------|-------------|
| code | string | The TikZ/LaTeX code to render |
| className | string? | Optional CSS class name |

## Important Notes

- Make sure to escape backslashes in your TikZ code when using template literals (use `\\` instead of `\`)
- The TikZJax script is loaded in the root layout for optimal performance
- The component automatically processes the TikZ code when mounted and when the code changes

## Examples

### Basic Triangle
```typescript
const triangleCode = `
  \\begin{tikzpicture}
    \\draw (0,0) -- (4,0) -- (2,3) -- cycle;
  \\end{tikzpicture}
`;
```

### Circle with Text
```typescript
const circleCode = `
  \\begin{tikzpicture}
    \\draw (0,0) circle (2);
    \\node at (0,0) {Hello};
  \\end{tikzpicture}
`;
```

## Project Structure

```
/src
  /components
    /TikZRenderer.tsx    # Main component for rendering TikZ code
  /app
    /layout.tsx         # Root layout with TikZJax script integration
    /globals.css        # Global styles including TikZJax-specific styles
```

## Dependencies

```json
{
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "next": "15.1.3"
  }
}
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Credits

- [TikZJax](https://tikzjax.com/) - For the TikZ rendering engine
- [Next.js](https://nextjs.org/) - The React framework used

## Support

For support, please open an issue in the GitHub repository.****