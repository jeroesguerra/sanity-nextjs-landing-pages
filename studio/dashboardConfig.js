export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6341d7eef42c3102e9b73229',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-orsozgj9',
                  apiId: '947ea7da-473d-4627-8b9a-4c9bc7d76dcf'
                },
                {
                  buildHookId: '6341d7ee0602f67e14a36e20',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-fkxrs97q',
                  apiId: 'c1b92d23-0c54-4ba1-bfb4-59b3dfa83552'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jeroesguerra/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-fkxrs97q.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
