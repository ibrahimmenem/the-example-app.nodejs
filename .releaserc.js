module.exports = {
  branches: ['main', 'next'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    ['@semantic-release/changelog', {
      'changelogFile': 'CHANGELOG.md',
      'changelogTitle': 'Maps API v2.0'
    }],
    ['@semantic-release/git', {
      'assets': ['CHANGELOG.md', 'package.json', 'package-lock.json' ],
      "message": "chore(release): ${nextRelease.version}\n\n${nextRelease.notes}"
    }],
  ],
  preset: 'conventionalcommits'
}
