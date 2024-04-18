const { Octokit } = require("@octokit/action");

module.exports = async ({ context, pull_number, auth_token }) => {
  const octokit = new Octokit({
    auth: auth_token,
  });

  return await octokit.request(`PUT /repos/${context.repo.owner}/${context.repo.repo}/pulls/${pull_number}/merge`, {
    owner: context.repo.owner,
    repo: context.repo.repo,
    pull_number: pull_number,
    commit_title: 'Merge dev-bump into dev',
    commit_message: 'Add a new value to the merge_method enum',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });
};
