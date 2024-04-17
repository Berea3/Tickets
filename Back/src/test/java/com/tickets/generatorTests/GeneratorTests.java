package com.tickets.generatorTests;

import com.tickets.entities.generator.Generator;
import org.junit.jupiter.api.Test;

public class GeneratorTests {

    @Test
    void testGeneratorId()
    {
        System.out.println(Generator.generateId());
    }
}
