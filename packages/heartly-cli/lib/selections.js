// exports.features = [
//   {
//     message: 'The Code of Conduct provides information about how to contribute to a repository',
//     name: 'code-of-conduct',
//     options: ['default'],
//   },
//   {
//     message: 'Codeowner files (`CODEOWNERS`) provide an easier way to assign code reviews',
//     name: 'codeowners',
//     options: ['default'],
//   },
//   {
//     message: 'Script are commands that can be run via npm to do something, like lint or test',
//     name: 'npm-scripts',
//     options: ['default'],
//   },
//   {
//     message: 'Github Templates are use to communicate to developers what is expected for code reviews and issues',
//     name: 'github-templates',
//     options: ['default'],
//   },
//   {
//     message: 'Readmes provide information developers about what a repository is and what it does',
//     name: 'readme',
//     options: ['default'],
//   },
//   {
//     message: 'Continuous integration helps developers test code',
//     name: 'continuous-integration',
//     options: ['default'],
//   },
// ]

exports.path = './files/'

exports.configFiles = [
  {
    name: 'codeowners',
    file: `${path}CODEOWNERS`,
  },
  {
    name: 'readme',
    file: `${path}README.md`,
  },
]

exports.packages = [
  {
    capability: 'markdown-linting',
    package: 'markdownlint-cli',
  },
  {
    capability: 'markdown-spelling',
    package: 'markdown-spellcheck',
  },
  {
    capability: 'git-hooks',
    package: 'husky',
  },
  {
    capability: 'grammar',
    package: 'write-good',
  },
  {
    capability: 'changelog',
    package: 'conventional-changelog-cli',
  },
]

exports.scripts = [

]
