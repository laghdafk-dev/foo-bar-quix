package com.kata.foobarquix.controllers

import org.hamcrest.Matchers.containsString
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get
import org.springframework.test.web.servlet.result.MockMvcResultMatchers.content
import com.kata.foobarquix.services.FooBarQuixService
import org.junit.jupiter.api.Test
import org.mockito.Mock
import org.mockito.Mockito
import org.springframework.boot.test.context.SpringBootTest
import org.assertj.core.api.Assertions.assertThat
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.result.MockMvcResultMatchers.status

@SpringBootTest
@AutoConfigureMockMvc
class FooBarQuixControllerTest {

    lateinit var fooBarQuixController: FooBarQuixController

    @Mock
    lateinit var fooBarQuixService: FooBarQuixService

    @Autowired
    lateinit var mockMvc: MockMvc

    @Test
    fun convertNumberTest() {
        // Given
        fooBarQuixController = FooBarQuixController(fooBarQuixService)
        Mockito.`when`(fooBarQuixService.convertNumber(3)).thenReturn("FooFoo")

        // When
        val resultDto = fooBarQuixController.convertNumber(3)
        val result = this.mockMvc.perform(get("http://localhost:8080/foo-bar-quix/3"))

        // Then
        assertThat(resultDto.result).isEqualTo("FooFoo")
        result.andExpect(status().isOk()).andExpect(content().string(containsString("FooFoo")))
    }
}