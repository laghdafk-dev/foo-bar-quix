package com.kata.foobarquix.controllers

import com.kata.foobarquix.services.FooBarQuixService
import org.springframework.http.MediaType
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/foo-bar-quix")
class FooBarQuixController(private val  fooBarQuixService: FooBarQuixService) {

    @GetMapping( "/{inputNumber}", produces = [MediaType.APPLICATION_JSON_VALUE])
    @CrossOrigin(origins = ["http://localhost:8080", "http://localhost:4200" ])
    fun convertNumber(@PathVariable(name = "inputNumber") inputNumber : Int) : ResultDto{
        return ResultDto(fooBarQuixService.convertNumber(inputNumber))
    }

    data class ResultDto(val result : String)

}