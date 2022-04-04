package com.kata.foobarquix

import com.kata.foobarquix.controllers.FooBarQuixController
import com.kata.foobarquix.services.FooBarQuixService
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest

@SpringBootTest
class FooBarQuixApplicationTests {

	@Autowired
	lateinit var fooBarQuixController: FooBarQuixController

	@Autowired
	lateinit var fooBarQuixService: FooBarQuixService

	@Test
	fun contextLoads() {
		assertThat(fooBarQuixController).isNotNull
		assertThat(fooBarQuixService).isNotNull
	}

}
