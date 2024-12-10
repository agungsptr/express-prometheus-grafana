# Example Monitoring Stack Using Prometheus and Grafana with Express Implementation

## Tool Explanation
- **Prometheus**: For collect and store metrics in any service including hardware and container.
- **Grafana**: For visulization of metrics from prometheus, with this can build a dashbaord monitoring.
- **Node Exporter**: Metrics exporter for hardware, prometheus will collect data hardware from this exporter.
- cAdvisor: Metrics exporter for container, prometheus will collect data container from this exporter.
- **Express.js + Bun**: Example Rest API with implemented middleware as exporter for Pometheus collect the metrics

will update doc soon...