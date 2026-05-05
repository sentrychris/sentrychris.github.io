/**
 * Tech-name → devicon SVG URL map.
 *
 * Only the icons we use are imported, so Vite copies just those SVGs
 * into the build (smaller ones get inlined as data URIs, larger ones
 * emit as separate cacheable files). Keys must match the exact strings
 * used in src/content/skills.ts and src/content/projects.ts.
 *
 * Tech with no devicon equivalent (REST, CI/CD, Tornado, Prettier)
 * is omitted — DevIcon falls back to rendering nothing and the item
 * stays text-only.
 */

// Frontend
import typescript from 'devicon/icons/typescript/typescript-original.svg'
import react from 'devicon/icons/react/react-original.svg'
import nextjs from 'devicon/icons/nextjs/nextjs-original.svg'
import vue from 'devicon/icons/vuejs/vuejs-original.svg'
import vite from 'devicon/icons/vitejs/vitejs-original.svg'
import sass from 'devicon/icons/sass/sass-original.svg'
import tailwind from 'devicon/icons/tailwindcss/tailwindcss-original.svg'
import bootstrap from 'devicon/icons/bootstrap/bootstrap-original.svg'
import d3 from 'devicon/icons/d3js/d3js-original.svg'
import redux from 'devicon/icons/redux/redux-original.svg'

// Backend
import nodejs from 'devicon/icons/nodejs/nodejs-original.svg'
import python from 'devicon/icons/python/python-original.svg'
import go from 'devicon/icons/go/go-original-wordmark.svg'
import php from 'devicon/icons/php/php-original.svg'
import laravel from 'devicon/icons/laravel/laravel-original.svg'
import express from 'devicon/icons/express/express-original.svg'
import fastapi from 'devicon/icons/fastapi/fastapi-original.svg'
import socketio from 'devicon/icons/socketio/socketio-original.svg'
import graphql from 'devicon/icons/graphql/graphql-plain.svg'

// Data
import postgresql from 'devicon/icons/postgresql/postgresql-original.svg'
import mysql from 'devicon/icons/mysql/mysql-original.svg'
import redis from 'devicon/icons/redis/redis-original.svg'
import sqlite from 'devicon/icons/sqlite/sqlite-original.svg'
import mongodb from 'devicon/icons/mongodb/mongodb-original.svg'
import elasticsearch from 'devicon/icons/elasticsearch/elasticsearch-original.svg'

// Infra & Ops
import docker from 'devicon/icons/docker/docker-original.svg'
import aws from 'devicon/icons/amazonwebservices/amazonwebservices-line-wordmark.svg'
import cloudflare from 'devicon/icons/cloudflare/cloudflare-original.svg'
import linux from 'devicon/icons/linux/linux-original.svg'
import nginx from 'devicon/icons/nginx/nginx-original.svg'
import githubactions from 'devicon/icons/githubactions/githubactions-original.svg'
import terraform from 'devicon/icons/terraform/terraform-original.svg'

// Tooling
import git from 'devicon/icons/git/git-original.svg'
import jest from 'devicon/icons/jest/jest-plain.svg'
import vitest from 'devicon/icons/vitest/vitest-original.svg'
import playwright from 'devicon/icons/playwright/playwright-original.svg'
import eslint from 'devicon/icons/eslint/eslint-original.svg'
import pnpm from 'devicon/icons/pnpm/pnpm-original.svg'

// Used by Projects (no entry in Skills, kept here for the same map).
import electron from 'devicon/icons/electron/electron-original.svg'
import webpack from 'devicon/icons/webpack/webpack-original.svg'
import vscode from 'devicon/icons/vscode/vscode-original.svg'

export const TECH_ICONS: Readonly<Record<string, string>> = {
  // Frontend
  TypeScript: typescript,
  React: react,
  'Next.js': nextjs,
  'Vue 3': vue,
  Vite: vite,
  Sass: sass,
  Tailwind: tailwind,
  Bootstrap: bootstrap,
  D3: d3,
  Redux: redux,

  // Backend
  'Node.js': nodejs,
  Python: python,
  Go: go,
  PHP: php,
  Laravel: laravel,
  Express: express,
  FastAPI: fastapi,
  WebSockets: socketio,
  WebSocket: socketio, // singular alias
  GraphQL: graphql,

  // Data
  PostgreSQL: postgresql,
  MySQL: mysql,
  Redis: redis,
  SQLite: sqlite,
  MongoDB: mongodb,
  Elasticsearch: elasticsearch,

  // Infra & Ops
  Docker: docker,
  AWS: aws,
  Cloudflare: cloudflare,
  Linux: linux,
  Nginx: nginx,
  'GitHub Actions': githubactions,
  Terraform: terraform,

  // Tooling
  Git: git,
  Jest: jest,
  Vitest: vitest,
  Playwright: playwright,
  ESLint: eslint,
  pnpm: pnpm,

  // Projects extras
  Electron: electron,
  Webpack: webpack,
  // Monaco doesn't have its own devicon — use VS Code's, since
  // Monaco is the editor that powers VS Code.
  'Monaco (VS Code)': vscode,
}
