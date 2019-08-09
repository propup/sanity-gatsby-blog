export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5d4cbaf3a5199b0189a2bca4',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-t5i547ys',
                  apiId: '4bd5d3d4-9df3-4760-b52b-6a1b9c665ea6'
                },
                {
                  buildHookId: '5d4cbaf381d0a3017d94773d',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-hstemtig',
                  apiId: '11858e2a-c8ae-4e00-b3a1-e0f350b27829'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/propup/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-hstemtig.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
