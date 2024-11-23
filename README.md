# Templates

This is where my newer website templates are. I will be adding more as I go along.

## Quick Start

This is a bash alias to quickly spin up a new project 🎉:<br>

**Usage:** `get <template-name> <target-folder>`. <br>
**Example:** `get nuxt-bun my-app`.<br>

```bash
function get() {
    if [ -z "$1" ] || [ -z "$2" ]; then
        echo "Error: Both arguments are required"
        echo "Usage: get <template-name> <target-folder>"
        return 1
    fi

    npx giget@latest "gh:web-dev-sam/templates/$1" "$2"

    # Check if folder is completely empty
    if [ -z "$(ls -A "$2" 2>/dev/null)" ]; then
        rm -rf "$2"
        echo "Error: Template '$1' doesn't exist in gh:web-dev-sam/templates/"
        return 1
    fi
}
```
