import {CONTAINER_INSPECT_SUCCESS} from "../constants/Containers";

const initialState = {
    model: {
        AppArmorProfile: '',
        Args: [''],
        Created: '',
        Driver: '',
        HostnamePath: '',
        HostsPath: '',
        LogPath: '',
        Id: '',
        Image: '',
        MountLabel: '',
        Name: '',
        Path: '',
        ProcessLabel: '',
        ResolveConfPath: '',
        RestartCount: '',
        NetworkSettings: {
            Bridge: '',
            SandboxID: '',
            HairpinMode: '',
            LinkLocalIPv6Address: '',
            LinkLocalIPv6PrefixLen: '',
            SandboxKey: '',
            EndpointID: '',
            Gateway: '',
            GlobalIPv6Address: '',
            GlobalIPv6PrefixLen: '',
            IPAddress: '',
            IPPrefixLen: '',
            IPv6Gateway: '',
            MacAddress: ''
        },
        Config: {
            AttachStderr: '',
            AttachStdin: '',
            AttachStdout: '',
            Cmd: [''],
            Domainname: '',
            Env: [''],
            Hostname: '',
            Image: '',
            OpenStdin: '',
            StdinOnce: '',
            Tty: '',
            User: '',
            WorkingDir: ''
        },
        State: {
            Error: '',
            ExitCode: '',
            FinishedAt: '',
            OOMKilled: '',
            Dead: '',
            Paused: '',
            Pid: '',
            Restarting: '',
            Running: '',
            StartedAt: '',
            Status: ''
        },
        Mounts: [{
            Name: '',
            Source: '',
            Destination: '',
            Driver: '',
            Mode: '',
            RW: '',
            Propagation: ''
        }]
    },
    top: {
        Processes: [['', '', '', '']]
    }
};

export default function containerInspect(state = initialState, action) {
    switch (action.type) {
        case CONTAINER_INSPECT_SUCCESS:
            return {...state, ...action.payload};
        default:
            return state;
    }
}