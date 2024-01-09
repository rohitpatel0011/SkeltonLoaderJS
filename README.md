# SkeltonLoaderJS
Nextjs loading page skelton animation
# My Next.js Project

Welcome to my Next.js project! This repository includes a simple skeleton loader using styled-components.

## Usage

To use the skeleton loader, import the `Skeleton` component and include it in your components where loading content.

```jsx
import Skeleton from './components/Skeleton';

const MyComponent = () => {
  return (
    <div>
      <h2>Loading Content</h2>
      <Skeleton />
      {/* Your other components */}
    </div>
  );
};
```