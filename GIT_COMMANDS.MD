# git guide

1. In an empty folder, open the terminal and clone the github repo 
```
git clone [repo url]
```

2. Change directory (cd) to the repo folder

3. Get all updates from the remote repository 
```
git fetch
```

4. Create a local branch that tracks an existing remote branch 
```
git branch —track [branch name] origin/[branch name]
```

5. Now you are ready to contribute!

## Utility commands

- See what branch you’re currently on 
```
git branch
```

- Switch to another branch 
```
git switch [branch name]
```

- See if you have anything in the staging area *Also checks if your current branch is up to date with the remote branch 
```
git status  
```
Always run ‘git fetch’ first because the branch may have been updated recently

- Fetch updates from remote AND merge updates into the current branch 
```
git pull
```

- Fetch updates from remote AND rebase updates into the current branch 
```
git pull --rebase
```

Rebasing takes your local branch and stacks it on top of updates from the remote. 
This is useful when you only care about keeping your local branch up to date, so you don’t want to clutter your branch history with merge commits that would result from git pull. 
Each git pull creates a merge commit on your local branch. DON’T rebase on github because it alters the remote branch history. Only rebase local branches.

- Just merge the current branch with the one you declare 
```
git merge [branch name]
```

- Just rebase the current branch with the one you declare 
```
git rebase [branch name]
```

## Editing commands

- Create a local branch (when a remote branch doesn’t exist for it yet) 
```
git checkout -b [branch name]
```

- Add files that have been edited to the staging area 
```
git add -A (all files) git add [filename] (a specific file) 
```

- Commit changes that are in the staging area to the current branch 
```
git commit -m “[your commit message]”
```

- Push commits made to the current branch to an existing remote branch 
```
git push
```

- Push a local branch to the remote repo and create a corresponding remote branch 
```
git push -u origin [branch name] 
```

## Pull Requests

- The easiest way to make a PR is on github. “A pull request is a proposal to merge a set of changes from one branch into another” (github docs). Make sure the correct branch is being merged into the other one. You can see the two merging branches in the top left corner.



