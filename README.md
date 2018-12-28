# Netlify CMS - _Customized for the [RailroadPM Project](https://github.com/railroadpm/site)_

[![](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/netlify/netlifycms)

A CMS for static site generators. Give non-technical users a simple way to edit
and add content to any site built with a static site generator.

## RailroadPM Project Notes

This section of the README is specific to the custom build of Netlify CMS for the [RailroadPM Project](https://github.com/railroadpm/site). The remainder of the README (starting with the **How it Works** section below) is unchanged from the base Netlify CMS repo (as of version 2.2.x).

<details><summary>Details</summary>

### How to Build and Publish

After making any further customizations to this copy of the Netlify CMS code, here are the steps for building and publishing a new release.

From a command prompt, change your current working directory to the root of this repo and:

1. Make sure you are working on the `master` branch:

   ```
   git checkout master
   ```

1. Run the NPM script to login to the @rrpm org account on the https://www.npmjs.com/ package manager site:

   ```
   yarn publish:login
   ```

1. You'll be prompted for credentials. You may use the global RailroadPM 2.x administrator account and password. Hint: the Username is the portion of the email address before the @ symbol.

1. Then run the script to prepare the build:

   ```
   yarn publish:prep
   ```

1. Commit and push the freshly-built code to GitHub:

   ```
   git add --all
   git commit -am "Prep for publish"
   git push
   ```

1. Finally, run the script to publish to NPM:

   ```
   yarn publish:all
   ```

### How to Pull in Bug Fixes from Netlify CMS

The upstream Netlify CMS code will continue to receive bug fixes and enhancements that you may wish to pull in to this codebase. To do so, follow these steps.

From a command prompt, change your current working directory to the root of this repo and:

1. First, if you haven't done so already you'll need to create a link from your local copy of this repo (residing on your machine) to the _upstream_ Netlify CMS repo by running this command:

   ```
   git remote add upstream "https://github.com/netlify/netlify-cms.git"
   ```

1. Make sure that you are working with the `master` branch of this repo:

   ```
   git checkout master
   ```

1. Fetch the latest upstream changes:

   ```
   git fetch upstream
   ```

1. Identify the individual commit (check-in) for the fix that you wish to pull in to this repo from the upstream repo.

   - Open a browser here: https://github.com/netlify/netlify-cms/commits/master

   - Click the "copy-to-clipboard" button for the commit hash that you need. Commit hashes look like this: `44fb2fb00dbc471cd3bb6c4026dc8ebc3288d04e`, but are abbreviated in the commit history list

1. With the desired commit hash in your clipboard tell git to cherry-pick the commit into your local repo with a command like this, replacing `<paste-commit-hash>` with the contents of your clipboard:

   ```
   git cherry-pick <paste-commit-hash>
   ```

1. If there are any merge conflicts with the cherry-picked commit you'll have to resolve them. See [here](https://github.com/slathrop/git-scripts-win#additional-nice-to-have-setup-for-git-on-windows) and [here](https://github.com/slathrop/git-scripts-win#git-merge) for more info on the example command below.

   ```
   git mergetool --tool=winmerge
   ```

1. Finally, follow the instructions in the **How to Build and Publish** section above to publish the bug fixes for use by the RailroadPM Project.

</details>

## How it Works

Netlify CMS is a single-page app that you pull into the `/admin` part of your site.

It presents a clean UI for editing content stored in a Git repository.

You setup a YAML config to describe the content model of your site, and typically
tweak the main layout of the CMS a bit to fit your own site.

When a user navigates to `/admin/` they'll be prompted to login, and once authenticated
they'll be able to create new content or edit existing content.

Read more about Netlify CMS [Core Concepts](https://www.netlifycms.org/docs/intro/).

# Installation and Configuration

The Netlify CMS can be used in two different ways.

- A Quick and easy install, that just requires you to create a single HTML file and a configuration file. All the CMS Javascript and CSS are loaded from a CDN.
  To learn more about this installation method, refer to the [Quick Start Guide](https://www.netlifycms.org/docs/quick-start/)
- A complete, more complex install, that gives you more flexibility but requires that you use a static site builder with a build system that supports npm packages.

# Community

Netlify CMS has a [Gitter community](https://gitter.im/netlify/netlifycms) where members of the community hang out and share things about the project, as well as give and receive support.

# Contributing

New contributors are always welcome! Check out [CONTRIBUTING.md](https://github.com/netlify/netlify-cms/blob/master/CONTRIBUTING.md) to get involved.

# Change Log

This project adheres to [Semantic Versioning](http://semver.org/).
Every release is documented on the Github [Releases](https://github.com/netlify/netlify-cms/releases) page.

# License

Netlify CMS is released under the [MIT License](LICENSE).
Please make sure you understand its [implications and guarantees](https://writing.kemitchell.com/2016/09/21/MIT-License-Line-by-Line.html).

# Thanks

## Services

These services support Netlify CMS development by providing free infrastructure.

<p>
  <a href="https://www.travis-ci.org">
    <img src="https://raw.githubusercontent.com/netlify/netlify-cms/master/img/travis.png" height="38"/>
  </a>
  <img src="https://spacergif.org/spacer.gif" width="20"/>
  <a href="https://www.browserstack.com">
    <img src="https://raw.githubusercontent.com/netlify/netlify-cms/master/img/browserstack.png" height="38"/>
  </a>
</p>
