# Rotunda

## Error alarm

We assume the function logError has some single source, if not, it should be added to our source code via some file that works as such single source of truth adding it's monitor
The solution proposed is to override the function with a similar one that executes in a controlled closure, where we monitor it's execution rate
Every execution of the function it records it's timestamp. When we find that the last 10 executions were in the last minute and last email was sent more than a minute ago, we should send it

There is a POC implementation of the solution proposed using logging to console where we should replace with actual system functions

## Url parser

For this exercise we need to process a normal URL without it's host. Applying a divide & conquer strategy, we divide each part of the url and then process them individually. In the basepath, the strategy is to merge it with the provided url format string, to find and extract it's variables. For the query params then each one of them is parsed and added to the returned hash

## Zoo

This is a simple hierarchy exercise. Every animal in the zoo complies to one general behaviour, they all implement the speak method. So, we need to define a base class (abstract as there is no such thing as a generic animal) that defines this common behaviour and then make every specific animal extend it
