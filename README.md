# Best For Dev

## How to get this started

1. Make sure you have node.js installed
2. Clone this repo
3. Go inside the root folder
4. `npm install`
5. `npm start`

## Workflow and contribution
If you want to contribute to this repository follow the instructions below.

What you will need is your own copy of the project in your local environment. Then set the remote upstream to the original repository. 
This allow you to create branches in your repo to develop new features or fix some issues. Then, before opening a `pull request` you will be able to rebase your repo with the original repo to stay up to date of changes made on that repository. At this point you can open the `pull request` on Github.

* Fork this repository
* Clone your new repo in your local environment. `git clone https://github.com/[your user]/BestForDev-Backend.git` 
* Add the original project as a remote. `git remote add upstream https://github.com/bestfordev/BestForDev-Backend.git`

### Developing
To start modifying or adding code you need to create a new branch named `feature/my-new-feature` or `fix/my_fix`. You can do that with `git checkout -d feature/my-new-feature`

Commit your changes to your new branch. When finished, create a pull request from your branch.

### Before opening a pull request or staying up to date to the original repo
While you are adding code to your repo is quite possible that the original repo has changes by other developers. Before opening a `pull request` or if you just want to stay up to date, follow the commands below.

```
$ git checkout develop
$ git pull upstream develop
$ git checkout feature/my-new-feature
$ git rebase develop
```

Now, you can push your code to your repo and open the `pull request`.

### Pull Requests
In order to merge a PR, it will first go through a review process. Once it is approved, we will merge to the develop branch using the Squash button in github.

When using squash, all the commits will be squashed into one. The idea is to merge features/fixes as oppose of merging each individual commit. This helps when looking back in time for changes in the code base, and if the PR has a great comment, it's easier to know why that code was introduced.

Note: This workflow is based on the workflow used in [Coding coach community](https://github.com/Coding-Coach/coding-coach)

