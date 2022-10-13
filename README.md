# Shipwright Tokens
 
## Contents
- [Configure: Filter Actions](#configure-filter-actions)
 
## Configure: Filter Actions
Shipwright Tokens is a powerful tool, but you probably don't want it to run for every PR made in your repo. Instead, you likely only want it to run when you've made changes to your design tokens in Figma. This section will show you how to configure your action to run Shipwright Tokens only when you want it.
 
Add one of the below snippets to your `.yml` file that uses Shipwright Tokens.
 
### Filter by Branch Name
This method triggers the Shipwright Tokens action to run whenever a PR is opened from a branch name beginning with `tokens/`. If you want another naming convention in your project, simply replace `tokens` with your preferred name. Using this method, you will need to ensure that you are making commits to a branch beginning with `tokens/`, or your prefered naming convention, from within the Figma Tokens Plug-in.
```
on:
 push:
   branches:
     - 'tokens/**'
```
 
### Filter by Directory/Files Changed
This method triggers the Shipwright Tokens action when a PR is opened that contains changes to any file in the `tokens` directory. If you are saving your tokens in a different directory, replace `tokens` with the path to/name of your directory.
```
on:
 pull_request:
   paths:
     - 'tokens/**'
```
You can further specify which branch the PR is made against if you'd like to. The below example will trigger the Shipwright Token action when a PR is made against `main` while also containing changes to files in the `tokens` directory.
```
on:
 pull_request:
   paths:
     - 'tokens/**'
   branches:
     - 'main'
```
### Default Behavior
Using the provided template, without configuring the filter actions, will cause the Shipwright Tokens action to run on any PR opened against `main`.
