package com.kata.foobarquix.services

import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import java.util.stream.Collectors

@SpringBootTest
class FooBarQuixServiceTest {

    @Autowired
    lateinit var fooBarQuixService: FooBarQuixService

    @Test
    fun replaceOccurrencesTest() {
        // Given
        var inputNumbers = HashMap<Int, String>()
        inputNumbers.put(1, "")
        inputNumbers.put(3, "Foo")
        inputNumbers.put(5, "Bar")
        inputNumbers.put(7, "Quix")
        inputNumbers.put(9, "")
        inputNumbers.put(51, "Bar")
        inputNumbers.put(53, "BarFoo")
        inputNumbers.put(33, "FooFoo")
        inputNumbers.put(27, "Quix")
        inputNumbers.put(15, "Bar")

        // When
        val result = inputNumbers.keys.stream()
                .map { k -> fooBarQuixService.replaceOccurrences(k.toString()) }
                .collect(Collectors.toList())

        // Then
        assertThat(result).isNotEmpty()
        assertThat(result.size).isEqualTo(inputNumbers.size)
        assertThat(result).isEqualTo(inputNumbers.values.stream().collect(Collectors.toList()))
    }

    @Test
    fun convertNumberTest() {
        // Given
        var inputNumbers = HashMap<Int, String>()
        inputNumbers.put(1, "1")
        inputNumbers.put(3, "FooFoo")
        inputNumbers.put(5, "BarBar")
        inputNumbers.put(7, "Quix")
        inputNumbers.put(9, "Foo")
        inputNumbers.put(51, "FooBar")
        inputNumbers.put(53, "BarFoo")
        inputNumbers.put(33, "FooFooFoo")
        inputNumbers.put(27, "FooQuix")
        inputNumbers.put(15, "FooBarBar")

        // When
        val result = inputNumbers.keys.stream()
                .map { k -> fooBarQuixService.convertNumber(k) }
                .collect(Collectors.toList())

        // Then
        assertThat(result).isNotEmpty()
        assertThat(result.size).isEqualTo(inputNumbers.size)
        assertThat(result).isEqualTo(inputNumbers.values.stream().collect(Collectors.toList()))
    }
}