let ContainerState = {
    RUNNING: 'running',
    CREATED: 'created',
    RESTARTING: 'restarting',
    REMOVING: 'removing',
    PAUSED: 'paused',
    EXITED: 'exited',
    DEAD: 'dead'
};

let Labels = {};
Labels[ContainerState.RUNNING] = 'Running';
Labels[ContainerState.CREATED] = 'Created';
Labels[ContainerState.RESTARTING] = 'Restarting';
Labels[ContainerState.REMOVING] = 'Removing';
Labels[ContainerState.PAUSED] = 'Paused';
Labels[ContainerState.EXITED] = 'Exited';
Labels[ContainerState.DEAD] = 'Dead';

export {ContainerState, Labels};