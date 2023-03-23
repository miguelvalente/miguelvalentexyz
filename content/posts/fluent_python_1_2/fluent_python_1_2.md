---
title: "Fluent Python -- Chapters 1 & 2"
date: 2023-03-21T11:21:25+01:00
draft: false
---

{{< img_square src="/posts/fluent_python_1_2/book.webp" >}}

Looking at this massive paper brick in front of me and saying that I’m going to read it from front to cover not only seems impossible, but it also seems idiotic and forces me to ask if “I should study Python or practice Python?”.

In truth, I already went through the first two chapters, so I know the answer. Do both 🫥. While reading, I learned new stuff that seems unlikely to be found if you stick to just writing code. __The value of these findings is another discussion in itself__. So from now on, I'll sit my ass down for some hours and have dedicated study time. I'll also be making new post as I read the book so that I:
 1. have some sort of summary of the book on demand
 2. force myself to at least summarize the chapter in a sentence or two
 3. hold myself accountable by risking public shame that, most likely, none will see
 4. virtue signal

 ------------------


# Chapter 1 -- The Python Data Model

This chapter introduces you to Python's Data Model, which translates to how the implementation of python's special methods,  `__*__`, on your custom objects enables you to use them as if they were built-in Python types.

{{< details "__Quirks, Notes & Whatever Else__" >}}
-  if a collection has no `__contains__` method the `in` operator does a sequential check. [p.13]
- if you have to choose between implementing `__str__` and `__repr__` implement `__repr__`. If `__str__` is not implemented `__repr__` is called
- some refer to Python's "Data Model" as the "Object Model"
- some refer to Python's "special methods" as "magic methods"
{{< /details>}}


# Chapter 2 -- An Array of Sequences
This chapter discusses sequence types and how you can operate on them, barring some quirks due to their im/mutability. It also covers destructing, or how to break apart an object into its components. It also covers slicing, which you mostly pick up while coding. Also good to keep in mind augmented assignments a.k.a. ```+=```, ```/=```, etc are not atomic operations.

{{< details "__Quirks, Notes & Whatever Else__" >}}

- taxonomy of sequences:
	- container sequences (__list__, __tuple__) vs flat sequences (__str__, __bytes__)
	- mutable sequences (__list__) vs immutable sequences (__tuple__, __str__)
- even immutable objects can have their value changed if they contain mutable sequences or user-defined objects. To check if a tuple is fixed use `hash(t)` and a __Type Error__ is raised if it contains mutable types
- remember __frozenset__, and tuples as keys
- destructuring:
	- unpacking with `*`
	- pattern matching with __match/case__
- slicing and ellipsis
- brief coverage of __collections.deqeue__ deque
- to keep a sorted array while adding items use __bisect.insort__
{{< /details>}}
