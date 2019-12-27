set -e
npm run build
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# git push -f https://github.com/<username>/Athenablog.git master:gh-pages
git push -f https://github.com/Siricee/Athenablog.git master:gh-pages

cd -

