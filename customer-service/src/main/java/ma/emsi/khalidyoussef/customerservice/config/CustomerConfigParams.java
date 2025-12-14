package ma.emsi.khalidyoussef.customerservice.config;

import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(prefix = "customer.params") // il faut ajouter @EnableConfigurationProperties(CustomerConfigParams.class) in main app
public record CustomerConfigParams(int x, int y) {
}
