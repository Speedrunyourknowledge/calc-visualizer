# git guide

1. In an empty folder, open the terminal and clone the github repo 
```
git clone [repo url]
```
<br/>

2. Change directory (cd) to the repo folder
```
cd [repo name]
```
<br/>

3. Get all updates from the remote repository
```
git fetch
```
<br/>

4. Create a local branch that tracks an existing remote branch
```
git checkout [branch name]
```
<br/>

5. Now you are ready to contribute!


## Utility commands

See which branch you’re currently on 
```
git branch
```
<br/>

Switch to another branch 
```
git switch [branch name]
```
<br/>

See if you have anything in the staging area and check if your current branch is up to date with the remote branch 
```
git status  
```
**Always** run `git fetch` first in case the remote branch was updated recently
<br/><br/>

Track an existing remote branch
```
git branch -u origin/[branch name]
```
<br/>

Fetch updates from remote **and** merge updates into the current branch 
```
git pull
```
If git tells you your branch can be "fast forwarded" when you git pull, then no merge commit will be created on your local branch. 
If your branch cannot be fast forwarded, that means the remote branch was updated since the last time you made a commit on your local branch. Without fast forwarding, a merge commit will be created with all the changes from the remote branch. 
<br/><br/>

Fetch updates from remote **and** rebase updates into the current branch 
```
git pull --rebase
```
Rebasing takes your local branch and moves it ahead of updates from the remote branch, making it appear as if the commits 
in the remote branch happened first. This is useful when "git pull" cannot be fast forwarded, and you want to avoid unnecessary merge commits in your branch history. 
<br/>
**Don't** rebase a remote branch because it alters the remote branch history. Only rebase local branches.
<br/><br/>

Just merge the current branch with the one you declare 
```
git merge [branch name]
```
<br/>

Just rebase the current branch with the one you declare 
```
git rebase [branch name]
```
<br/>

View the commit history of the current branch
```
git log --oneline
```


## Edit Commands

Create a local branch (when a remote branch doesn’t exist for it yet) 
```
git checkout -b [branch name]
```
<br/>

Add files that have been edited to the staging area 
```
git add -A (all files) git add [filename] (a specific file) 
```
<br/>

Commit changes that are in the staging area to the current branch 
```
git commit -m “[your commit message]”
```
<br/>

Push commits made to the current branch to an existing remote branch 
```
git push
```
<br/>

Push a local branch to the remote repo and create a corresponding remote branch 
```
git push -u origin [branch name] 
```


## Undo Commands

Remove files from the staging area
```
git reset
```
<br/>

Remove files from the staging area **and** revert uncommitted changes to those files
```
git reset --hard
```
<br/>

Reset the branch to the given commit **and** revert changed files
```
git reset --hard [commit id]
```
<br/>

Undo the last commit **and** revert changed files
```
git reset --hard HEAD^
```
<br/>

Reset the branch to the given commit **and** place changed files in the staging area
```
git reset --soft [commit id]
```
<br/>

Undo the last commit **and** place changed files in the staging area
```
git reset --soft HEAD^
```
<br/>

Completely replace the current branch with the latest version of the remote branch
```
git reset --hard origin/[branch name]
```


## Commit Commands

Add files to your previous commit or simply change your previous commit message
```
git commit --amend -m "[New commit message]"
```
<br/>

Add files to your previous commit without changing your previous commit message
```
git commit --amend --no-edit
```
**Don't** alter commits that have already been pushed to the remote. This alters the remote branch history.


## Stash Commands

Save all file changes to a stash that you can access later
```
git stash
```
This is useful when you want to switch to another branch, but you have uncommitted changes you don't want to lose
<br/><br/>

Save the stash with a name
```
git stash push -m "[name]"
```
<br/>

View your stashes
```
git stash list
```
<br/>

Apply file changes from a specific stash
```
git stash pop [stash index]
```
<br/>

Delete a specific stash
```
git stash drop [stash index]
```
<br/>

Delete all your stashes
```
git stash clear
```


## Pull Requests

The easiest way to make a PR is on github. “A pull request is a proposal to merge a set of changes from one branch into another” (github docs). Make sure the correct branch is being merged into the other one. You can see the two merging branches in the top left corner.

