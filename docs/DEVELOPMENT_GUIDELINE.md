# Development Guidelines

A comprehensive set of rules and best practices for building scalable, maintainable, and clean code in Next.js and Node.js projects.

---

## Comments & Documentation

- **Never over-comment code** — only add comments when absolutely necessary
- **No comments inside functions** — the code should be self-explanatory through clear naming and structure
- **Use JSDoc for functions** — document the goal, parameters, return type, and examples when relevant

```typescript
/**
 * Calculates the total price including taxes and discounts.
 * @param basePrice - The original price before modifications
 * @param taxRate - Tax rate as a decimal (e.g., 0.2 for 20%)
 * @param discount - Optional discount amount to subtract
 * @returns The final calculated price
 */
const calculateTotalPrice = (
  basePrice: number,
  taxRate: number,
  discount?: number
): number => {
  // ...
};
```

---

## No Hardcoding

- **Never hardcode strings, numbers, or configuration values** directly in components or pages
- **Use `next-intl`** for all user-facing text with dedicated `.json` translation files
- **Centralize AI prompts, instructions, and templates** in separate files (e.g., `prompts/`, `templates/`)
- **Use environment variables** for configuration that changes between environments
- **Extract magic numbers** into named constants with clear meaning

```typescript
// ❌ Bad
if (users.length > 50) { ... }

// ✅ Good
const MAX_USERS_PER_PAGE = 50;
if (users.length > MAX_USERS_PER_PAGE) { ... }
```

---

## Internationalization (i18n)

This project uses **next-intl** for internationalization. All user-facing text must use translation keys.

### File Structure

```text
messages/
└── fr.json           # French translations (only language for now)
src/
├── i18n/
│   ├── config.ts     # Locales configuration
│   ├── request.ts    # Server-side request handler
│   └── index.ts      # Barrel export
```

### Translation File Structure

Organize translations by feature/page with nested namespaces:

```json
{
  "metadata": {
    "title": "Page title",
    "description": "Page description"
  },
  "common": {
    "actions": {
      "save": "Save",
      "cancel": "Cancel"
    }
  },
  "home": {
    "hero": {
      "title": "Welcome",
      "description": "Description text"
    }
  }
}
```

### Usage in Components

**Server Components** (default):

```tsx
import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations('home');
  return <h1>{t('hero.title')}</h1>;
}
```

**Client Components** (`"use client"`):

```tsx
'use client';
import { useTranslations } from 'next-intl';

export default function Counter() {
  const t = useTranslations('counter');
  return <button>{t('increment')}</button>;
}
```

**Metadata** (layout/page):

```tsx
import { getTranslations } from 'next-intl/server';

export async function generateMetadata() {
  const t = await getTranslations('metadata');
  return { title: t('title') };
}
```

### Rich Text & Interpolation

```tsx
// messages/fr.json
{
  "welcome": "Bonjour {name}!",
  "terms": "Acceptez nos <link>conditions</link>"
}

// Component
t('welcome', { name: 'John' });
t.rich('terms', {
  link: (chunks) => <a href="/terms">{chunks}</a>
});
```

### Best Practices

- **Use namespaces** — group translations by feature (`home.hero.title` not `homeHeroTitle`)
- **Keep keys semantic** — use `actions.save` not `button1`
- **French only (for now)** — only create/modify `messages/fr.json`, do NOT create other language files until explicitly requested
- **Type safety** — the `IntlMessages` global type provides autocompletion

---

## Function Design

- **One function = One purpose** — each function should do exactly one thing well
- **Keep functions short** — if a function exceeds ~30 lines, consider splitting it
- **Keep files focused** — split large files into smaller, focused modules
- **Decompose complex logic** into multiple clear steps
- **Use early returns** (guard clauses) to avoid deep nesting

```typescript
// ❌ Bad
const processUser = (user: User | null) => {
  if (user) {
    if (user.isActive) {
      if (user.hasPermission) {
        // actual logic buried deep
      }
    }
  }
};

// ✅ Good
const processUser = (user: User | null) => {
  if (!user) return;
  if (!user.isActive) return;
  if (!user.hasPermission) return;

  // actual logic at the top level
};
```

---

## Code Organization

- **Leverage utils, helpers, hooks, and services** — extract reusable logic into appropriate modules
- **Use `index.ts` barrel files** to centralize and simplify imports

```typescript
// utils/index.ts
export * from './formatters';
export * from './validators';
export * from './helpers';

// Usage
import { formatDate, validateEmail, capitalize } from '@/utils';
```

- **Feature-based folder structure** for scalable projects over type-based organization

```bash
src/
├── features/
│   ├── auth/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── types/
│   │   └── index.ts
│   └── dashboard/
├── shared/
│   ├── components/
│   ├── hooks/
│   └── utils/
```

- **Colocation** — keep related files close together (component + hook + types + styles)

---

## Control Flow

- **Avoid switch statements** — prefer object maps or `.map()` for cleaner, more maintainable code

```typescript
// ❌ Bad
const getStatusLabel = (status: Status): string => {
  switch (status) {
    case 'pending':
      return 'En attente';
    case 'approved':
      return 'Approuvé';
    case 'rejected':
      return 'Rejeté';
    default:
      return 'Inconnu';
  }
};

// ✅ Good
const STATUS_LABELS: Record<Status, string> = {
  pending: 'En attente',
  approved: 'Approuvé',
  rejected: 'Rejeté',
} as const;

const getStatusLabel = (status: Status): string => {
  return STATUS_LABELS[status] ?? 'Inconnu';
};
```

---

## TypeScript Best Practices

- **Enable strict mode** — never compromise on type safety
- **Avoid `any` at all costs** — use `unknown` if the type is truly uncertain
- **Define types in dedicated files** — use `types/` folder or colocated `.types.ts` files
- **Prefer `interface` for objects**, `type` for unions and intersections
- **Use `as const`** for literal types and readonly objects

```typescript
// ❌ Bad
const config: any = { ... };

// ✅ Good
interface Config {
  apiUrl: string;
  timeout: number;
}
const config: Config = { ... };
```

---

## Naming Conventions

| Element               | Convention                               | Example                                      |
| --------------------- | ---------------------------------------- | -------------------------------------------- |
| Components            | `PascalCase`                             | `UserProfile`, `DashboardCard`               |
| Types & Interfaces    | `PascalCase`                             | `UserData`, `ApiResponse`                    |
| Functions & Variables | `camelCase`                              | `getUserById`, `totalCount`                  |
| Custom Hooks          | `camelCase` with `use` prefix            | `useAuth`, `useFetchData`                    |
| Constants             | `SCREAMING_SNAKE_CASE`                   | `MAX_RETRY_COUNT`, `API_BASE_URL`            |
| Environment Variables | `SCREAMING_SNAKE_CASE`                   | `DATABASE_URL`, `NEXT_PUBLIC_API_KEY`        |
| Booleans              | Prefix with `is`, `has`, `should`, `can` | `isLoading`, `hasPermission`, `shouldRender` |
| Event Handlers        | Prefix with `handle` or `on`             | `handleClick`, `onSubmit`                    |

---

## Code Style

- **`const` by default** — use `let` only when mutation is absolutely required, never use `var`
- **Async/await over `.then()` chains** for better readability
- **Use destructuring** for cleaner, more readable code
- **Nullish coalescing (`??`)** over `||` for default values
- **Optional chaining (`?.`)** over manual null checks

```typescript
// ❌ Bad
const name = (user && user.profile && user.profile.name) || 'Anonymous';

// ✅ Good
const name = user?.profile?.name ?? 'Anonymous';
```

---

## React & Next.js Specific

- **Server Components by default** — only add `"use client"` when client-side interactivity is required
- **Custom hooks must start with `use`** — this is required by React's rules of hooks
- **Prefer composition over prop drilling** — use Context, compound components, or state management
- **Memoization only when necessary** — don't use `useMemo`, `useCallback`, or `React.memo` by default

```typescript
// ❌ Bad - premature optimization
const MyComponent = () => {
  const value = useMemo(() => 'static string', []);
  const handleClick = useCallback(() => console.log('click'), []);
  // ...
};

// ✅ Good - memoize only when there's a proven performance issue
const MyComponent = () => {
  const value = 'static string';
  const handleClick = () => console.log('click');
  // ...
};
```

---

## Error Handling

- **Always handle errors explicitly** — never use empty catch blocks
- **Create custom error classes** for business logic errors
- **Centralize error handling** with consistent patterns
- **Log errors with context** for easier debugging

```typescript
// ❌ Bad
try {
  await fetchData();
} catch (e) {
  // silent fail
}

// ✅ Good
try {
  await fetchData();
} catch (error) {
  logger.error('Failed to fetch data', { error, context: { userId } });
  throw new DataFetchError('Unable to retrieve data', { cause: error });
}
```

---

## Validation & Security

- **Validate all user inputs** with Zod or similar validation libraries
- **Validate environment variables** at startup with a Zod schema
- **Never expose sensitive data** in client-side code
- **Sanitize data** before rendering or storing

```typescript
// Environment validation example
import { z } from 'zod';

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  API_SECRET: z.string().min(32),
  NODE_ENV: z.enum(['development', 'production', 'test']),
});

export const env = envSchema.parse(process.env);
```

---

## Git & Version Control

- **Never commit directly to `main`** — always use feature branches
- **Use conventional commits** for clear history: `feat:`, `fix:`, `refactor:`, `docs:`, `chore:`
- **Keep commits atomic** — one logical change per commit
- **Write meaningful commit messages** that explain the "why"

```bash
# ❌ Bad
git commit -m "fix"
git commit -m "update"

# ✅ Good
git commit -m "fix(auth): resolve token refresh race condition"
git commit -m "feat(dashboard): add export to CSV functionality"
```

---

## Summary

> **Clean Code is not about following rules blindly — it's about writing code that your future self and teammates will thank you for.**

Key principles to remember:

1. **Readability over cleverness** — code is read more often than written
2. **Consistency is key** — follow the same patterns throughout the codebase
3. **Simplicity wins** — the best code is often the simplest solution
4. **Think before abstracting** — don't over-engineer, abstract when patterns emerge
5. **Test what matters** — critical paths deserve test coverage
