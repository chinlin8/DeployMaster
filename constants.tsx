
import { Platform } from './types';

export const PLATFORMS: Platform[] = [
  {
    id: 'vercel',
    name: 'Vercel',
    icon: 'fa-solid fa-v',
    color: 'bg-black text-white',
    pros: ['Seamless GitHub integration', 'Zero-config for React', 'Excellent Global Edge Network'],
    steps: [
      { title: 'Push to GitHub', description: 'Create a new repository on GitHub and push your local code there.' },
      { title: 'Connect to Vercel', description: 'Sign in to Vercel.com with GitHub and click "Add New Project".' },
      { title: 'Import Repository', description: 'Select the repository you just created.' },
      { title: 'Set Environment Variables', description: 'In the project settings, add API_KEY as an environment variable with your Gemini API key value.' },
      { title: 'Deploy', description: 'Click "Deploy" and Vercel will build and host your app automatically.' }
    ]
  },
  {
    id: 'netlify',
    name: 'Netlify',
    icon: 'fa-solid fa-n',
    color: 'bg-teal-500 text-white',
    pros: ['Drag & Drop deployment', 'Powerful CI/CD pipelines', 'Forms and Functions support'],
    steps: [
      { title: 'Push to GitHub', description: 'Host your source code on GitHub, GitLab, or Bitbucket.' },
      { title: 'Create Netlify Site', description: 'Sign in to Netlify and choose "Import from Git".' },
      { title: 'Configure Build', description: 'Set build command to "npm run build" and directory to "dist" or "build".' },
      { title: 'Add API Keys', description: 'Go to Site Settings > Environment variables to add your API_KEY.' },
      { title: 'Deploy Site', description: 'Save and deploy. Netlify will provide a public .netlify.app URL.' }
    ]
  },
  {
    id: 'github-pages',
    name: 'GitHub Pages',
    icon: 'fa-brands fa-github',
    color: 'bg-slate-800 text-white',
    pros: ['Completely free', 'Right next to your code', 'Custom domain support'],
    steps: [
      { title: 'Install gh-pages', description: 'Add the package to your project.', command: 'npm install gh-pages --save-dev' },
      { title: 'Update package.json', description: 'Add "homepage" URL and "predeploy"/"deploy" scripts.' },
      { title: 'Deploy Command', description: 'Run the deploy script to push the build to the gh-pages branch.', command: 'npm run deploy' },
      { title: 'Configure Repo', description: 'In GitHub Repo Settings > Pages, ensure the source is set to the gh-pages branch.' }
    ]
  }
];
