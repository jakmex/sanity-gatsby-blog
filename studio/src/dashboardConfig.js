export default {
  widgets: [
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
                  buildHookId: '5eecf4139650799aed706bd7',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-rjr4qcgd',
                  apiId: '0fe09f9e-73f8-4e9a-b0e4-5305a616ce5e'
                },
                {
                  buildHookId: '5eecf4139650799aed706bd8',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-sv4k4x8c',
                  apiId: '4845857e-9e6f-4b35-82d6-19a1e21ba681'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jakmex/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-sv4k4x8c.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
