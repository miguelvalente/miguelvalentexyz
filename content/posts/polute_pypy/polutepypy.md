---
title: "☢ ️️Polluting Pypy - Like a Boss ☢️"
date: 2023-04-13T16:59:15+02:00
draft: false
---

Welcome to yet another shitty garbanzo tutorial on the internet, that literally no one asked for. This one _teaches_ you how to pollute Pypy with a shitty and useless package. It's important that your package is extra shitty and useless otherwise you will be adding value to something. No. Not allowed. You're tool must be shitty. The focus of this post is not on utility.

Here we're learning how to get your stuff to move fast. You're dialing in the motions of getting from point A to point B as fast as possible, proverbial parkour shit.

But just because we're moving fast it does not mean you can't:
- [ ] properly manage your dependencies
- [ ] prime yourself to write thoughtful commits
- [ ] automate testing
- [ ] above all, make it look nice

# properly manage your dependencies

I use Poetry and it's been treating me right. It handles all the annoying dependency management for you. Best part? It uses `pyproject.toml` instead of the headache-inducing `requirements.txt`. I can't exactly pinpoint why, but that file never sat right with me. Anyway, since I hopped on the Poetry bandwagon, my headaches have practically vanished. PEP 518 actually defined pyproject.toml as the container of build system requirements, which is a pretty sweet bonus. You can even use it to describe, let's say, which modules to ignore with mypy.

Enough about Poetry, let's start a brand enw project for your shitty package:

```bash
poetry new shitty_project
```

Enter the new directory and open your editor of choice. If you run `tree` you should be looking at something like this.
```bash
.
├── pyproject.toml
├── README.md
├── shitty_package
│   └── __init__.py
└── tests
    └── __init__.py

3 directories, 4 files
```

Man Poetry is just too nice. It even includes a `tests` folder, it's like its trying to remind you to be a good. Will come back to this folder later.

And now, to continue our journey of producing the most irritatingly useless Python package:

# write thoughtful commits

Welcome to Conventional Commits, your new best bud. This cool cat helps you craft thoughtful commits, and it even adds emojis with predefined meanings. Check out https://gitmoji.dev/ and the commit history of this mini-shitty project for a taste. You might roll your eyes at another dev tool for a "non-existing problem." But hey, it's about letting the tool guide your thoughts, man.

I use the Conventional Commits extension for VSCode. When you call up the extension for a new commit, it throws options at you. Are we refactoring, adding a feature, tweaking docs, fixing bugs, writing tests, or messing with CI? Then, pick an emoji for a single action (https://gitmoji.dev/). Only after that, you write your commit title and maybe a longer description.

As you groove through the process, you'll notice there's no "all of the above" option. It pushes you to break down your changes into commitable chunks, compartmentalizing your actions in the project. Forcing you to think in isolated bits. The options laid out in front of you not only prompt introspection about the changes you've made but also remind you of potential tasks you haven't tackled yet, like writing tests or setting up CI. Maybe I'm hyping it up for my narrative, but it's still an awesome tool that makes you feel like you're using modern hieroglyphs and keeps you on your toes.

Initialize youre repo, after that, assuming you're using VSCode, do Ctrl+Shift+P, and type Conven.. and it should pop up. Select chores. Select No scope, choose :tada:. And write something along the lines of `start shitty project`. From now on have fun exploring all the options and don't worry about getting it all at once, it will take some time.

# shouldn't automate testing

Who needs automated tests? Your package isn't doing anything useful anyway. But since we're on this rollercoaster of annoyance, let's set up some basic testing to keep up appearances.

```bash
touch tests/test_shitty_package.py
```

Write a test that does absolutely nothing but pass:

```python
def test_shitty_function():
    assert True
```

To make it even more useless, let's set up a GitHub Actions workflow that runs the tests every time you push:

```bash
mkdir -p .github/workflows
touch .github/workflows/test.yml
```

Now, pour this YAML nonsense into test.yml:


```yaml

name: Test

on: [push]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Set up Python
        uses: actions/setup-python@v2
        with:
          python-version: 3.9
      - name: Install Poetry
        run: |
          curl -sSL https://install.python-poetry.org | python3 -
      - name: Install dependencies
        run: poetry install
      - name: Run tests
        run: poetry run pytest
```

# make it look nice

Your package is garbage, but that doesn't mean it can't look nice. Here's what you need:

    README.md: The first thing people see when they stumble upon your trash heap. Make it count.
    .gitignore: Keeps your repo clean by ignoring useless files (like your package).
    LICENSE: Because even garbage has rights.

Finally, to unleash your useless Python package upon the world, just run:

bash

poetry publish --build

And there you have it – a complete guide on how to publish a Python package that adds absolutely no value to the world. Congratulations, you've achieved peak annoyance.
