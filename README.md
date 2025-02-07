# Tho's Cocktails

This is a hobby project. On this application you can search through all cocktails that are in Tho's skills to make.

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Static generated

This application is staticly generated. Meaning that when deployed a static website is build.
Therefore the application is quick to respond and does not have to await api calls.

## Deployed on Vercel

This application is hosted on Vercel.

## Contentful

This application uses Contentful as its Content Management System (CMS).  
It connects to Vercel through a deploy hook.  
Everytime content is updated and published a new deployment is triggerd showing the latest updates within a few minutes live.
