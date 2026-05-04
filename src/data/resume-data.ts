import type { ResumeData } from '@/lib/types';

export const RESUME_DATA: ResumeData = {
  name: 'Henry Sachs',
  initials: 'HS',
  location: 'Erfurt, Germany, CET',
  locationLink: 'https://www.google.com/maps/place/Erfurt',
  about: 'Platform Engineer building developer platforms and supply chain security tooling.',
  summary:
    'Platform Engineer with 10+ years of experience at Deutsche Bahn. Evolved through Web (React, Angular), Mobile (Android, iOS), Operations (Kubernetes) to DevOps/Platform Engineering with Crossplane and Backstage. Passionate about supply chain security and SLSA.',
  avatarUrl: 'https://avatars.githubusercontent.com/u/17173951?v=4',
  personalWebsiteUrl: 'https://me.hachs.dev',
  contact: {
    email: 'henrysachs@gmail.com',
    tel: '',
    social: [
      {
        name: 'GitHub',
        url: 'https://github.com/henrysachs',
        icon: 'github'
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/henry-sachs/',
        icon: 'linkedin'
      },
      {
        name: 'X',
        url: 'https://x.com/Henry_Astro',
        icon: 'x'
      }
    ]
  },
  education: [
    {
      school: 'Duale Hochschule Gera Eisenach',
      degree: "Bachelor's Degree in Computer Science (Dual Studies)",
      start: '2014',
      end: '2017'
    }
  ],
  work: [
    {
      company: 'DB Systel GmbH',
      link: 'https://www.dbsystel.de',
      badges: ['Crossplane', 'Backstage', 'Kubernetes', 'Golang', 'TypeScript'],
      title: 'Platform Engineer',
      start: '2023',
      end: null,
      description:
        'Building internal developer platforms enabling product teams to self-service infrastructure and deployments.',
      highlights: [
        'Contributed to open source projects such as gitlab, crossplane and syft',
        'Designing and operating Crossplane-based infrastructure platform',
        'Building developer portal with Backstage for service catalog and golden paths',
        'Driving supply chain security adoption with SLSA and Sigstore',
        'Shaping platform engineering best practices and standards across the organization',
        'Helping Developers write more secure code and build more secure software supply chains'
      ]
    },
    {
      company: 'DB Systel GmbH',
      link: 'https://www.dbsystel.de',
      badges: ['Kubernetes', 'AWS CDK', 'CI/CD', 'Docker', 'ansible'],
      title: 'DevOps Engineer',
      start: '2020',
      end: '2023',
      description: 'Operated Kubernetes clusters and built CI/CD pipelines for development teams.',
      highlights: [
        'Managed multi-cluster Kubernetes environments',
        'Implemented GitOps workflows and infrastructure as code',
        'Containerized legacy applications and migrated workloads to Kubernetes'
      ]
    },
    {
      company: 'DB Systel GmbH',
      link: 'https://www.dbsystel.de',
      badges: ['React', 'Angular', 'TypeScript', 'Android', 'iOS', 'Flutter'],
      title: 'Software Developer',
      start: '2017',
      end: '2020',
      description: 'Full-stack and mobile development across multiple Deutsche Bahn products.',
      highlights: [
        'Built web and mobile apps with React, Angular, Flutter, Android and iOS',
        'Contributed to internal open source initiatives'
      ]
    },
    {
      company: 'DB Systel GmbH',
      link: 'https://www.dbsystel.de',
      badges: ['Dual Studies', 'Linux'],
      title: 'Dual Student - Software Development',
      start: '2014',
      end: '2017',
      description:
        'Combined academic studies at Duale Hochschule Gera Eisenach with practical software development at DB Systel.'
    }
  ],
  skills: [
    'Crossplane',
    'Backstage',
    'Kubernetes',
    'Golang',
    'TypeScript',
    'React',
    'Supply Chain Security',
    'Terraform',
    'Docker',
    'GitLab CI',
    'ansible',
    'AWS CDK',
    'FluxCD',
    'Flutter',
    'Angular'
  ],
  projects: [
    {
      title: 'Financensor',
      techStack: ['TypeScript', 'Go', 'Docker'],
      description: 'Shared expense tracker for groups and trips. Split costs, track payments, settle up.',
      link: {
        label: 'GitHub',
        href: 'https://github.com/henrysachs/financensor'
      }
    }
  ]
} as const;
