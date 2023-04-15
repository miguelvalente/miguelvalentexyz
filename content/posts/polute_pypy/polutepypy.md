---
title: "️️Python Package Publishing Speedrun - [100% BEST PRACTICES]️"
date: 2023-04-13T16:59:15+02:00
draft: true
---

Welcome to yet another shitty garbanzo tutorial on the internet, that literally no one asked for. This one _teaches_ you how to pollute Pypy with a shitty and useless package as fast as possible. We're not producing value here, this is a speedrun, son. Here we're learning how to get your stuff to move fast. You're dialing in the motions of getting from point A to point B as fast as possible, proverbial parkour shit.

There's only four achievements needed to complete this category:
- [ ] version your dependencies
- [ ] all commits are thoughtful
- [ ] automate testing
- [ ] README.md with a custom logo


# version your dependencies

I use Poetry and it's been treating me right. It handles all the annoying dependency management for you. Best part? It uses `pyproject.toml` instead of the headache-inducing `requirements.txt`. I can't exactly pinpoint why, but that file never sat right with me. Anyway, since I hopped on the Poetry bandwagon, my headaches have practically vanished. PEP 518 actually defined pyproject.toml as the container of build system requirements, which is a pretty sweet bonus. You can even use it to describe, let's say, which modules to ignore with mypy. Poetry also makes it trivial to build and publish your package to Pypi 🤌.

Enough about Poetry, let's start a brand new project for your shitty package:

```bash
poetry new shitty_project_1797
```
> Note: Make sure you check Pypy and see if your project's name isn't already in use and __abstain__ from actually using useful names, add some random digits.

Enter the new project and open your editor of choice. If you run `tree` you should be looking at something like this.
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

Man Poetry is just too nice. It even includes a `tests` folder, it's like its trying to remind you to be a good. Will come back to this folder later. And this notion of tools being nice.


# all commits are thoughtful

Welcome to Conventional Commits, your new best bud. This cool cat helps you craft thoughtful commits, and it even adds emojis with predefined meanings. Check out https://gitmoji.dev/ and the commit history of this mini-shitty project for a taste. You might roll your eyes at another dev tool for a "non-existing problem." But hey, it's about letting the tool guide your thoughts, man.

I use the Conventional Commits extension for VSCode. When you call up the extension for a new commit, it throws options at you. Are we refactoring, adding a feature, tweaking docs, fixing bugs, writing tests, or messing with CI? Then, pick an emoji for a single action (https://gitmoji.dev/). Only after that, you write your commit title and maybe a longer description.

As you groove through the process, you'll notice there's no "all of the above" option. It pushes you to break down your changes into commitable chunks, compartmentalizing your actions in the project. Forcing you to think in isolated bits. The options laid out in front of you not only prompt introspection about the changes you've made but also remind you of potential tasks you haven't tackled yet, like writing tests or setting up CI. Maybe I'm hyping it up for my narrative, but it's still an awesome tool that makes you feel like you're using modern hieroglyphs and keeps you on your toes.

Initialize youre repo, after that, assuming you're using VSCode, do Ctrl+Shift+P, and type Conven.. and it should pop up. Select chores. Select No scope, choose :tada:. And write something along the lines of `start shitty project`. From now on have fun exploring all the options and don't worry about getting it all at once, it will take some time.

# automate testing

Automated testing is a must-have for any package, shitty or not. Trust me, it's worth the investment. Thankfully, Python has a fantastic testing framework called `pytest`. Let's get it set up for your project.

First, add `pytest` and any other testing packages you might need as development dependencies:
```bash
poetry add --dev pytest
```

Now, create a file called `test_shitty_package.py` inside your tests folder. We'll use this file to write our test cases. For example:

```python
def test_shitty_function():
    assert True
```

Let's incorporate CI for testing your code everytime you push to GitHub:

```bash
mkdir -p .github/workflows
touch .github/workflows/ci_pytest.yml
```

Now, pour this YAML nonsense into test.yml:


```yaml

name: Test

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest
    strategy:
      matrix:
        python-version: ["3.9", "3.10","3.11"]
    steps:
        - name: Checkout Code
          uses: actions/checkout@v3

        - name: Setup Python ${{ matrix.python-version }}
          uses: actions/setup-python@v4
          with:
            python-version: ${{ matrix.python-version }}

        - name: Install Poetry
          uses: snok/install-poetry@v1
          with:
            version: 1.3.2
            virtualenvs-create: false
            virtualenvs-in-project: false
            installer-parallel: true

        - name: Install dependencies
          run: poetry install --with dev

        - name: Run tests and coverage
          run: pytest --cov=imagemangler --cov-fail-under=80

        - name: Generate coverage report
          run: coverage report
        - name: Check Formatting with Black
          run: black --check .

        - name: Check Imports with isort
          run: isort --check .

        - name: Type Check with Mypy
          run: mypy .

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
