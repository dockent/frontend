import {DASHBOARD_REQUEST_SUCCESS} from "../constants/Dashboard";

const initialState = {
    Containers: 0,
    Images: 0,
    ServerVersion: 0,
    ContainersRunning: 0,
    ContainersPaused: 0,
    ContainersStopper: 0,
    KernelVersion: 0,
    OperatingSystem: 0,
    OSType: 0,
    Architecture: 0,
    NCPU: 0,
    MemTotal: 0
};

export default function dashboard(state = initialState, action) {
    switch (action.type) {
        case DASHBOARD_REQUEST_SUCCESS:
            return {...state, ...action.payload};
        default:
            return state;
    }
}