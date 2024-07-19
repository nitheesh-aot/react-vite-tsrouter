import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/newpage')({
  component: () => <div>Hello /newpage!</div>
})