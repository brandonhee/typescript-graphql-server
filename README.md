# graphql boilerplate

A graphql boilerplate that is very opinionated.

# Language

Uses TypeScript

# Server

Uses the full implementation of Apollo Server. There is no need to import express, http, cors, etc. separately.

CORS is enabled by default to allow cross-origin requests

# Linting and Formatting

Use eslint for linting.
Uses the prettier library. It's highly recommend you install the prettier plugin with VSCode and enable auto-format on save.
Uses `eslint-config-prettier` to avoid conflicts

# Testing

Uses Jest

# Pre-commit Hooks

Uses Husky to run linting and testing prior to commits.

# Layout

The folder structure and file layouts is such that typeDef and resolvers can be logically grouped and then later combined before being passed to the Apollo Server.

# Environments

It is recommended to develop inside the same containerized environment as will be deployed to production. For example,
