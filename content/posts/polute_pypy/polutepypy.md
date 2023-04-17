---
title: "️️Python Package Publishing Speedrun - [100% BEST PRACTICES]️"
date: 2023-04-13T16:59:15+02:00
draft: false
---

Welcome to yet another garbanzo tutorial on the internet, that literally no one asked for. This one _teaches_ you how to pollute Pypy with a shitty and useless package as fast as possible. We're moving fast. Agility. We're dialing in the motions of getting from point A to point B. Parkour shit. __Warning__: This package will literally do nothing.

This speedrun category has five achievements needed to be completed:
-  all dependencies are versioned
-  all commits are thoughtful and atomic
-  write a test  and pass it
-  automate the testing
-  write a README.md

Each achievement contains a  backstory/motivation/intro/fetishization as to why I picked them. The hardcore speedrunner can safely ignore them and follow along the instructions but for the trivia nerds out there feel free to check em.

------

# Version your dependencies
{{< details "backstory" >}}
I use Poetry and it's been treating me right. It handles all the annoying dependency management for you. Best part? It uses `pyproject.toml` instead of the headache-inducing `requirements.txt`. I can't exactly pinpoint why, but that file never sat right with me. Anyway, since I hopped on the Poetry bandwagon, my dependencie-headaches have practically vanished and PEP 518 actually defined `pyproject.toml` as the container of build system requirements. You can even use it to describe, let's say, which modules to ignore with mypy. Poetry also makes it trivial to build and publish your package to Pypi 🤌.

Enough about Poetry, let's start a brand new project for your shitty useless package package:
{{< /details>}}

Step 1:
```bash
poetry new shitty_project_1797
```
> Note: Make sure you check Pypy and see if your project's name isn't already in use and __abstain__ from actually using meaningful names, add some random digits.

Step 2: Enter the new project and open your editor of choice. If you run `tree` you should be looking at something like this.
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


{{< details "more poetry fetishization/fanboyism" >}}
Man Poetry is just too nice. It even includes a _tests_ folder, it's like its trying to remind you to be a good. We will come back to this folder later. And the notion of tools guiding you to be a better programmer.
{{< /details >}}


# All commits are thoughtful


{{< details "backstory on Conventional Commits" >}}
Welcome to Conventional Commits, your new best bud. This cool cat helps you craft thoughtful commits, and it even adds emojis with predefined meanings. Check out https://gitmoji.dev/ and the commit history of this mini-shitty project for a taste. You might roll your eyes at another dev tool for a "non-existing problem." But hey, it's about letting the tool guide your thoughts, man.

I use the Conventional Commits extension for VSCode. When you call up the extension for a new commit, it throws options at you. Are we refactoring, adding a feature, tweaking docs, fixing bugs, writing tests, or messing with CI? Then, pick an emoji for a single action (https://gitmoji.dev/). Only after that, you write your commit title and maybe a longer description.

As you groove through the process, you'll notice there's no "all of the above" option. It pushes you to break down your changes into commitable chunks, compartmentalizing your actions in the project. Forcing you to think in isolated bits. The options laid out in front of you not only prompt introspection about the changes you've made but also remind you of potential tasks you haven't tackled yet, like writing tests or setting up CI. Maybe I'm hyping it up for my narrative, but it's still an awesome tool that makes you feel like you're using modern hieroglyphs and keeps you on your toes.
{{< /details >}}

Initialize your repo, after that, assuming you're using VSCode, install Coventional Commits, do Ctrl+Shift+P, and select Conventional Commits. Select `chores`. Select `No scope`. Phew, phew. Search and select for ,`tada`🎉, _which means start of a new project_, and write `start of speedrun`. Every single commit will have to follow this general guideline. Not following this convention will disqualify your run.


# Write a test and pass it
{{< details "backstory on writing tests" >}}
Writing tests is an essential part of software development, and it's no different when creating a Python package. A well-crafted test suite ensures that your code works as expected and helps you catch bugs or issues early in the development process. Additionally, having tests in place makes it easier for you and other contributors to make changes to the codebase with confidence, knowing that any breaking changes will be caught by the tests.

In this speedrun, we'll be writing a simple test for our shitty package and making sure it passes. Although the package itself is useless, the process of writing and running tests is invaluable and will serve you well in your future development endeavors.
{{< /details >}}

Step 1: Write a simple test for your package. In the tests directory, create a new file named test_shitty_package.py. Inside this file, write a basic test function. Since our package is useless, the test can be as simple as checking if truthy:

```python
def test_shitty_package():
    assert True, "Run, now"
```

Step 2: Install pytest, the testing framework we'll be using. In your project's root directory, run:

```bash
poetry add --dev pytest
```

This will install pytest as a development dependency and update your pyproject.toml file accordingly.

Step 3: Run the test using pytest. In your terminal, navigate to your project's root directory and run:

```bash
poetry run pytest
```

If everything is set up correctly, you should see output similar to the following:

```bash
============================= test session starts ==============================
platform linux -- Python 3.9.7, pytest-6.2.5, py-1.10.0, pluggy-1.0.0
rootdir: /path/to/shitty_project_1797
collected 1 item

tests/test_shitty_package.py .                                          [100%]

============================== 1 passed in 0.01s ===============================
```


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

# Automate the testing
{{< details "backstory on test automation" >}}
Automating your tests is a crucial part of the development process. It ensures that your tests are executed regularly and consistently, helping you catch any issues or regressions early on. By incorporating test automation into your workflow, you save time and reduce the chances of human error. Additionally, it makes it easy for you to integrate your tests with continuous integration (CI) systems, further improving the quality and reliability of your code.
{{< /details >}}

To automate the testing of your Python package, we'll use a simple GitHub Actions workflow:

Step 1: In your project's root directory, create a new directory named .github, and inside it, create another directory named workflows. Your project structure should now look like this:

```bash
.
├── .github
│   └── workflows
├── pyproject.toml
├── README.md
├── shitty_package
│   └── __init__.py
└── tests
    └── __init__.py
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
          run: pytest
```


# make it look nice

Your package is garbage, but that doesn't mean it can't look nice. Here's what you need:

    README.md: The first thing people see when they stumble upon your trash heap. Make it count.
    .gitignore: Keeps your repo clean by ignoring useless files (like your package).
    LICENSE: Because even garbage has rights.


# last step

The last step involves commiting all the changes we've made so far. Let's go trhough it. First let's commit the added dependencies.



- [x] version your dependencies
- [x] all commits are thoughtful
- [x] automate testing
- [x] README.md



Finally, to unleash your useless Python package upon the world, just run:

bash

poetry publish --build

And there you have it – a complete guide on how to publish a Python package that adds absolutely no value to the world. Congratulations, you've achieved peak annoyance.
