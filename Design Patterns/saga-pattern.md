SAGA pattern:

1. Microservices design pattern which ensures consistency by executing compensating transactions incase there is a failure.

2. There are two types
    1. Orchestrated
    2. Choreographed

2.1 Orchestrated SAGA
    1. Central orchestrator controls the services and individual services respond to the orchestrator.

    2. If there is a failure individual services try retrying and if it is un-recoverable then responds with failure to the orchestrator

    3. Orchestrator runs compensating transactions in other services which might have ran before the failure. resulting in consistent behaviour.

    4. Individual services are simple and the orchestrator is responsible for the whole flow


2.2 Choreographed SAGA
    1. There is no central orchestrator, each service is autonomous and knows what to do.

    2. If there is a failure the same service may try to recover and respond as failure to other services making the compensating transactions in other services.

    3. Increased complexity since each service should know to trigger compensating logic in other part of the system.
    
    4. Harder to manage and trace flows.

