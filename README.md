# Campus event

A small Git workshop project: `index.html` holds the content and `styles.css` controls its appearance.

Open `index.html` in your browser, or use the presenter's preview server for automatic reloads. There are no packages to install.

Run the checks with Node 24 or newer:

```sh
node tools/check.mjs
```

GitHub Actions runs the same check on pushes and pull requests. It checks the heading, the linked stylesheet and leftover conflict markers; it does not prove the entire page is correct.

The prepared branches are independent teaching examples. `main` is the starting page. Only push the branch you are demonstrating. The workshop runbook lives outside this repository.
