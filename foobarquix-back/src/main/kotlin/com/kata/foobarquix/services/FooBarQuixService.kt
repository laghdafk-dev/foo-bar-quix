package com.kata.foobarquix.services

import org.springframework.stereotype.Component

private const val FOO = "Foo"
private const val BAR = "Bar"
private const val QUIX = "Quix"

@Component
class FooBarQuixService {

    fun convertNumber(inputNumber: Int): String {
        var sb = StringBuilder("")
        if (inputNumber % 3 == 0) {
            sb = StringBuilder(sb).append(FOO);
        }
        if (inputNumber % 5 == 0) {
            sb = StringBuilder(sb).append(BAR);
        }
        sb.append(replaceOccurrences(inputNumber.toString()))
        if (sb.isEmpty()) {
            return inputNumber.toString()
        }
        return sb.toString()
    }

    fun replaceOccurrences(s: String): String {
        var sb = StringBuilder("")
        for (c in s) {
            if ('3'.equals(c)) {
                sb = sb.append(FOO)
            } else if ('5'.equals(c)) {
                sb = sb.append(BAR)
            } else if ('7'.equals(c)) {
                sb = sb.append(QUIX)
            }
        }
        return sb.toString()
    }

}