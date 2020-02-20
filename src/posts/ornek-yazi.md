- Git : distributed version control system for tracking changes in source code during software development .
- It’s designed for coordinating work among programmers , but it can be used to track changes in any set of files .
- Free and open source
- GitHub, GitLab, etc.

## SETUP
- git config — global user.name “firstname lastname”
- git config — global user.email “valid-email”
- git config — global color.ui auto
- pwd : print working directory
- cd : change directory
- ls : lists
- cd .. : to move one directory upwards
- clear : clean the terminal or ( CTRL + l )

## SETUP & INIT
- git init : initialize an existing directory as a Git repository
- git clone [url]: retrieve an entire repository from a hosted location via URL
- ls -a : show git files

**Output:**
./
../
.git/

- git add . : add all file as it looks now to your next commit (stage)
- git commit -m “ Message “ : commit your staged content as a new commit snapshot
- git log : show all commits in the current branch’s history
- git status : The git status command displays the state of the working directory and the staging area . /// very important

## SHARE & UPDATE :
1. git remote add origin[URL] : add a git URL as an origin
2. git push -u origin master : Transmit local branch commits to the remote repository branch
3. git pull : fetch and merge any commits from the tracking remote branch
4. git merge branch_name : merge a remote branch into your current branch to bring it up to date

-Gitignore : Specifies intentionally untracked files to ignore
- cat >> .gitignore
- cat .gitignore
- FileName/*
- !FileName / Dosya1.html