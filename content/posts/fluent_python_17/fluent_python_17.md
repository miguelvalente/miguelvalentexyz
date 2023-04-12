---
title: "Fluent Python -- Chapter 17"
date: 2023-04-05T15:02:50+02:00
draft: false 
---

{{< img_square src="/posts/fluent_python_17/book_50.webp" >}}
# Chapter 17 -- Iterators, Generators and Classic Coroutines

This chapter extensively discusses iterators, generators, and briefly covers classic coroutines in Python programming. The main concepts to take away are: iterator, iterable, generator function, and generator expression. The chapter explains how to implement these concepts using `__iter__` and `__next__`, and how they relate to each other.


## Iterators and Iterables
__Iterators__ are objects that traverse an __iterable__, returning its values one at a time using the `__next__` method. An iterable is any object that can be looped over. To be an iterable, an object must have an `__iter__` method that returns an iterator. The `__iter__` method can either return a new iterator object or return self if the object is already an iterator. _Note: Caution about the antipattern mention in Quirks as it violates the Iterator pattern_

## Generator Functions and Generator Expressions
__Generator functions__ are a type of function that uses the `yield` keyword instead of return to generate a sequence of values. When a generator function is called, it returns a generator object, which is an iterator that generates values on-the-fly. __Generator expressions__, on the other hand, are similar to list comprehensions but return a generator object instead of a list. They use parentheses instead of brackets and do not require the yield keyword. They should replace simple generator functions that don't span more than a couple of lines.

## Groups of Generator Functions of the Standard Library

Standard library functions can be split into the following groups:
- filtering, e.g: _compress()_
- mapping, e.g: _enumerate()_
- merge of multiple iterables, e.g. _zip()_
- expansion of input items into multiple outputs, e.g: _pairwise()_
- rearranging, e.g: _reversed()__
- reducing, e.g: _all()__

## Classic Coroutines & Native Coroutines
__Classic coroutines__, are similar to __native coroutines__, the former being introduced in Python 2.5 while the latter was introduced more recently in python 3.5. Both are functions that can suspend execution and resume from where they left off at a later time. Classic coroutines are implemented using the `yield` keyword. Native coroutines make use of `async def` and `await` inside their bodies. Native coroutines are going to be covered in the next chapter read of Fluent Python.


{{< details "__Quirks, Notes & Whatever Else__" >}}
- One common anti-pattern(😈) to avoid is implementing `__next__` in addition to `__iter__`. Doing so makes an object  an iterable that iterates over itself.
{{< /details>}}
