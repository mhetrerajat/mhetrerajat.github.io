---
title: "Default Arguments in Python"
date: 2017-01-11
draft: false
tags: ["python"]
showToc: true
TocOpen: true
hidemeta: false
comments: false
disableHLJS: true # to disable highlightjs
disableShare: false
disableHLJS: false
hideSummary: false
searchHidden: true
ShowReadingTime: true
ShowBreadCrumbs: true
ShowPostNavLinks: true
---

Python’s handling of default argument values is one of the few things that tends to create mistakes unknowingly (only once though).

This horror story is from my personal experience. It took me an hour to debug my silly mistake of using mutable value as default argument in function. Its really difficult to find this type bugs in thousands of lines of code.

## Using Mutable Value as function argument

```python
def foo(numbers=[]):
    numbers.append(5)
    return numbers
```

### Calling foo with argument

```python
>>> foo()
[5]
>>> foo(numbers=[4,9])
[4, 9, 5] # Oh Shit!
>>> foo(numbers=[1,2])
[1, 2, 4, 9, 5]
```

### Calling foo without passing argument

```python
>>> foo()
[5]
>>> foo()
[5, 5]
>>> foo()
[5, 5, 5] # WHAT IS THIS BLACK MAGIC?
```

## Why does this happen?

Reason is simple, if you look at the list identity, you will see that function keeps returning the same object:

```python
>>> id(foo())
4513595144
>>> id(foo())
4513595144
>>> id(foo())
4513595144
```

Default argument values are always evaluated only when the “def” statement they belong to is executed. In Python, default arguments evaluated at definition time. This behaviour exists because of performance benefits. It’s too expensive to evaluate a function as an initialiser every time the function is called.

## Right way to do this

```python
def foo(numbers=None):
    numbers = numbers if numbers else []
    numbers.append(5)
    return numbers
```

## Some other cases

In other cases, the default argument work as expected.

```python
def foo(count=0):
    count += 1
    return count

>>> foo()
1
>>> foo(count=2)
3
>>> foo(count=4)
5
```

The reason for this is not default value assignment, but in the value itself. An integer is an immutable type. Incrementing its value by doing `count += 1` does not change the original value of `count`.
