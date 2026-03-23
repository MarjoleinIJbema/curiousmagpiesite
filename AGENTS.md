## File Organization

When creating markdown files that should not be public or committed to the repository (such as client notes, local plans, or sensitive documentation), write them to the `local_plans/` directory. This directory is ignored by git and will not be committed.

## Site Domain

This site runs on `curiousmagpie.nl`.

## Image Format Rule

For website photos, always place the source image in `images/` and generate a `-resized.webp` version for use in the HTML. Keep the optimized WebP at `1200x1200` for square product images so existing card layouts remain consistent.

## Optional Feature Guides

When users request features beyond the base template, check for available recipes in `.kilocode/recipes/`.

### Available Recipes

| Recipe       | File                                | When to Use                                           |
| ------------ | ----------------------------------- | ----------------------------------------------------- |
| Add Database | `.kilocode/recipes/add-database.md` | When user needs data persistence (users, posts, etc.) |

### How to Use Recipes

1. Read the recipe file when the user requests the feature
2. Follow the step-by-step instructions
3. Update the memory bank after implementing the feature

## Commit & Push

Always commit and push after making changes. Do not wait for the user to ask — every completed change should be committed and pushed immediately.

```bash
git add -A && git commit -m "descriptive message" && git push --no-verify
```

## Memory Bank Maintenance

After completing the user's request, update the relevant memory bank files:

- `.kilocode/rules/memory-bank/context.md` - Current state and recent changes
- Other memory bank files as needed when architecture, tech stack, or project goals change
