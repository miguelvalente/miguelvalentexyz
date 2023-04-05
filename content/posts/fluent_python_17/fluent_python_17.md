---
title: "Fluent Python -- Chapters 17"
date: 2023-04-05T15:02:50+02:00
draft: true
---

# Chapter 1 -- Iterators, Generators and Classic Coroutines


This chapter discusses implementing and using the `__iter()__` built-in function and its relation to generators. The connection is dissected by using a __Sentence__ class that iterates over the words of a given text as input as an example. Starting by marking the difference between an iterable and an iterator, `python obtains iterators from iterables` and iterables have an `__iter__` method that instantiates a new iterator every time. Iterators implement a `__next__` method that returns its items and an `__iter__` method that returns `self`.

Generators are then applied to the __Sentence__ class to simplify it, which in this case, is about removing the need for a __SentenceIterator__ class, by using `yield` in the `__iter__` method and by that turning it into a generator function which returns a generator object when called that has the __Iterator__ interface implemented, removing the need of a separate __SentenceIterator__ 





{{< details "__Quirks, Notes & Whatever Else__" >}}
- 😈 don't implement `__next__` in addition to `__iter__` aka making a class ab iterables and iterator over itself, it's a common antipattern. 
{{< /details>}}

