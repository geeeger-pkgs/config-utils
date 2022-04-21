export default {
    bpmn: {
        Event: 'bpmn:Event',
        StartEvent: 'bpmn:StartEvent',
        MessageEventDefinition: 'bpmn:MessageEventDefinition',
        TimerEventDefinition: 'bpmn:TimerEventDefinition',
        EscalationEventDefinition: 'bpmn:EscalationEventDefinition',
        ConditionalEventDefinition: 'bpmn:ConditionalEventDefinition',
        LinkEventDefinition: 'bpmn:LinkEventDefinition',
        ErrorEventDefinition: 'bpmn:ErrorEventDefinition',
        CancelEventDefinition: 'bpmn:CancelEventDefinition',
        CompensateEventDefinition: 'bpmn:CompensateEventDefinition',
        SignalEventDefinition: 'bpmn:SignalEventDefinition',
        MultipleEventDefinition: 'bpmn:MultipleEventDefinition',
        ParallelMultipleEventDefinition: 'bpmn:ParallelMultipleEventDefinition',
        EndEvent: 'bpmn:EndEvent',
        TerminateEventDefinition: 'bpmn:TerminateEventDefinition',
        IntermediateEvent: 'bpmn:IntermediateEvent',
        IntermediateCatchEvent: 'bpmn:IntermediateCatchEvent',
        IntermediateThrowEvent: 'bpmn:IntermediateThrowEvent',
        Activity: 'bpmn:Activity',
        Task: 'bpmn:Task',
        ServiceTask: 'bpmn:ServiceTask',
        UserTask: 'bpmn:UserTask',
        ManualTask: 'bpmn:ManualTask',
        SendTask: 'bpmn:SendTask',
        ReceiveTask: 'bpmn:ReceiveTask',
        ScriptTask: 'bpmn:ScriptTask',
        BusinessRuleTask: 'bpmn:BusinessRuleTask',
        SubProcess: 'bpmn:SubProcess',
        AdHocSubProcess: 'bpmn:AdHocSubProcess',
        Transaction: 'bpmn:Transaction',
        CallActivity: 'bpmn:CallActivity',
        Participant: 'bpmn:Participant',
        Lane: 'bpmn:Lane',
        InclusiveGateway: 'bpmn:InclusiveGateway',
        ExclusiveGateway: 'bpmn:ExclusiveGateway',
        ComplexGateway: 'bpmn:ComplexGateway',
        ParallelGateway: 'bpmn:ParallelGateway',
        EventBasedGateway: 'bpmn:EventBasedGateway',
        Gateway: 'bpmn:Gateway',
        SequenceFlow: 'bpmn:SequenceFlow',
        Association: 'bpmn:Association',
        DataInputAssociation: 'bpmn:DataInputAssociation',
        DataOutputAssociation: 'bpmn:DataOutputAssociation',
        MessageFlow: 'bpmn:MessageFlow',
        DataObject: 'bpmn:DataObject',
        DataObjectReference: 'bpmn:DataObjectReference',
        DataInput: 'bpmn:DataInput',
        DataOutput: 'bpmn:DataOutput',
        DataStoreReference: 'bpmn:DataStoreReference',
        BoundaryEvent: 'bpmn:BoundaryEvent',
        Group: 'bpmn:Group',
        TextAnnotation: 'bpmn:TextAnnotation',
        MultiInstanceLoopCharacteristics: 'bpmn:MultiInstanceLoopCharacteristics',
        FlowNode: 'bpmn:FlowNode',
    },
    camunda: {
        InputOutput: 'camunda:InputOutput',
        Connector: 'camunda:Connector',
        Field: 'camunda:Field',
        In: 'camunda:In',
        ServiceTaskLike: 'camunda:ServiceTaskLike',
    },
    activiti: {
        FailedJobRetryTimeCycle: 'activiti:FailedJobRetryTimeCycle',
        Connector: 'activiti:Connector',
        Field: 'activiti:Field',
    },
    flowable: {
        FailedJobRetryTimeCycle: 'flowable:FailedJobRetryTimeCycle',
        Connector: 'flowable:Connector',
        Field: 'flowable:Field',
    },
    label: 'label',
    ParticipantMultiplicityMarker: 'ParticipantMultiplicityMarker',
    SubProcessMarker: 'SubProcessMarker',
    ParallelMarker: 'ParallelMarker',
    SequentialMarker: 'SequentialMarker',
    CompensationMarker: 'CompensationMarker',
    LoopMarker: 'LoopMarker',
    AdhocMarker: 'AdhocMarker',
}