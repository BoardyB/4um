package com.github.boardyb.forum.logging;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class LoggingAutoConfiguration {

    @Bean
    public ControllerLoggingAspect controllerLoggingAspect() {
        return new ControllerLoggingAspect();
    }

}
