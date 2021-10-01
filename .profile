# ENVIRONMENT VARIABLES

# NODE_OPTIONS - Register TypeScript path aliases
if [ -f "$PWD/node_modules/tsconfig-paths/register.js" ]; then
  export NODE_OPTIONS="$NODE_OPTIONS -r tsconfig-paths/register"
fi
