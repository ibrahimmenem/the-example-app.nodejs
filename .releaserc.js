module.exports = {
  branches: ['main', { 'name': 'next', 'prerelease': true }],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    ['@semantic-release/changelog', {
      'changelogFile': 'CHANGELOG.md',
      'changelogTitle': 'Main API'
    }],
    ['@semantic-release/npm', {
      'npmPublish': false,
      'tarballDir': 'dist',
    }],
    ['@semantic-release/git', {
      'assets': ['CHANGELOG.md', 'package.json', 'package-lock.json' ],
      'message': 'chore(release): ${nextRelease.version}[skip ci]\n\n${nextRelease.notes}'
    }],
  ],
  preset: 'conventionalcommits'
}
